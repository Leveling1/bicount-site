import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requiredPaths = [
  'AGENTS.md',
  'README.md',
  'package.json',
  'src/index.html',
  'src/robots.txt',
  'src/sitemap.xml',
  'src/assets/images/logo-icon.png',
  'src/assets/styles/base.css',
  'src/assets/styles/navigation.css',
  'src/assets/styles/cards.css',
  'src/assets/styles/visuals.css',
  'src/assets/scripts/content.js',
  'src/assets/scripts/app.js',
  '.github/workflows/ci-cd.yml'
];
const scanRoots = ['src', 'scripts', '.github/workflows'];
const rootFiles = ['AGENTS.md', 'README.md', 'package.json', '.gitignore'];
const textExtensions = new Set(['.html', '.css', '.js', '.mjs', '.md', '.yml', '.json', '.txt', '.xml']);
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

const indexHtml = await readFile(resolveFromRoot('src/index.html'), 'utf8');
const assetMatches = [...indexHtml.matchAll(/(?:href|src)=["'](?!https?:|mailto:|tel:|#)([^"']+)["']/g)];

for (const [, assetPath] of assetMatches) {
  const normalized = assetPath.replace(/^\.\//, '').split('?')[0];
  const candidate = path.posix.join('src', normalized.replace(/\\/g, '/'));
  if (!(await fileExists(candidate))) {
    issues.push(`Broken local reference in src/index.html: ${assetPath}`);
  }
}

if (issues.length > 0) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`Checks passed for ${filesToCheck.length} files.`);
