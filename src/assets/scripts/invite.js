import { downloadUrl } from './content.js';

const params = new URLSearchParams(window.location.search);
const code = params.get('code')?.trim() || 'Code non détecté';

document.querySelectorAll('[data-invite-code]').forEach((node) => {
  node.textContent = code;
});

document.querySelectorAll('[data-download-link]').forEach((node) => {
  node.setAttribute('href', downloadUrl);
  node.setAttribute('target', '_blank');
  node.setAttribute('rel', 'noreferrer');
});

const copyButton = document.querySelector('[data-copy-code]');
copyButton?.addEventListener('click', async () => {
  if (!params.get('code')) {
    return;
  }

  await navigator.clipboard.writeText(code);
  copyButton.textContent = 'Code copié';
});
