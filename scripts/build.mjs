import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const npmBin = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const run = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: true
  });

  child.on('close', (code) => {
    if (code === 0) {
      resolve();
      return;
    }
    reject(new Error(`Build failed with exit code ${code ?? 'unknown'}.`));
  });
});

await run(npmBin, ['exec', 'astro', 'build']);
