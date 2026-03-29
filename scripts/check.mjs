import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scanRoots = ['src', 'public', 'scripts', '.github/workflows'];
const rootFiles = [
  '.gitignore',
  'AGENTS.md',
  'README.md',
  'astro.config.mjs',
  'package.json',
  'tsconfig.json'
];
const requiredPaths = [
  ...rootFiles,
  '.github/workflows/ci-cd.yml',
  'public/.well-known/apple-app-site-association',
  'public/.well-known/assetlinks.json',
  'public/images/logo-icon.png',
  'public/og-image.svg',
  'public/robots.txt',
  'public/sitemap.xml',
  'src/components/react/ClientBehaviors.tsx',
  'src/components/react/InviteLanding.tsx',
  'src/components/common/ErrorShell.astro',
  'src/layouts/LegalLayout.astro',
  'src/layouts/BaseLayout.astro',
  'src/pages/403.astro',
  'src/pages/404.astro',
  'src/pages/500.astro',
  'src/pages/auth.astro',
  'src/pages/consumer-terms.astro',
  'src/pages/friend/invite.astro',
  'src/pages/index.astro',
  'src/pages/privacy-policy.astro',
  'src/pages/usage-policy.astro'
];
const textExtensions = new Set([
  '.astro',
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
  '.xml',
  '.yml'
]);
const issues = [];

const resolveFromRoot = (relativePath) => path.join(repoRoot, relativePath);
const fileExists = async (relativePath) => {
  try {
    await access(resolveFromRoot(relativePath));
    return true;
  } catch {
    return false;
  }
};

const collectFiles = async (relativeDir) => {
  if (!(await fileExists(relativeDir))) {
    return [];
  }

  const entries = await readdir(resolveFromRoot(relativeDir), { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const nextPath = path.join(relativeDir, entry.name);
    return entry.isDirectory() ? collectFiles(nextPath) : [nextPath];
  }));
  return nested.flat();
};

for (const relativePath of requiredPaths) {
  if (!(await fileExists(relativePath))) {
    issues.push(`Missing required file: ${relativePath}`);
  }
}

const collectedRoots = await Promise.all(scanRoots.map(collectFiles));
const filesToCheck = [...new Set([...rootFiles, ...collectedRoots.flat()])];

for (const relativePath of filesToCheck) {
  const extension = path.extname(relativePath);
  if (!textExtensions.has(extension)) {
    continue;
  }

  const content = await readFile(resolveFromRoot(relativePath), 'utf8');
  const lineCount = content.split(/\r?\n/).length;
  if (lineCount > 200) {
    issues.push(`Line limit exceeded (${lineCount}) in ${relativePath}`);
  }
}

const indexPage = await readFile(resolveFromRoot('src/pages/index.astro'), 'utf8');
if (!indexPage.includes('BaseLayout')) {
  issues.push('The landing page must use BaseLayout.');
}

const invitePage = await readFile(resolveFromRoot('src/pages/friend/invite.astro'), 'utf8');
if (!invitePage.includes('InviteLanding')) {
  issues.push('The invite page must render InviteLanding.');
}

if (issues.length > 0) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`Checks passed for ${filesToCheck.length} files.`);
