import {
  downloadUrl,
  faqItems,
  featureCards,
  navigation,
  proofCards,
  steps,
  testimonials,
  valueCards
} from './content.js';

const renderInto = (selector, items, template) => {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  target.innerHTML = items.map(template).join('');
};

const initialsFromName = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

renderInto('[data-nav-links]', navigation, ({ href, label }) => `<a class="nav-link" href="${href}">${label}</a>`);
renderInto('[data-footer-links]', navigation, ({ href, label }) => `<a class="footer-link" href="${href}">${label}</a>`);
renderInto('[data-proof-grid]', proofCards, ({ value, title, text }) => `
  <article class="proof-card surface-card" data-reveal>
    <span class="card-kicker">${value}</span>
    <h3 class="card-title">${title}</h3>
    <p class="card-copy">${text}</p>
  </article>
`);
renderInto('[data-feature-grid]', featureCards, ({ tag, title, text }) => `
  <article class="feature-card surface-card" data-reveal>
    <span class="card-tag">${tag}</span>
    <h3 class="card-title">${title}</h3>
    <p class="card-copy">${text}</p>
  </article>
`);
renderInto('[data-steps-grid]', steps, ({ index, title, text }) => `
  <article class="step-card surface-card" data-reveal>
    <span class="step-index">${index}</span>
    <h3 class="card-title">${title}</h3>
    <p class="card-copy">${text}</p>
  </article>
`);
renderInto('[data-value-grid]', valueCards, ({ title, text }) => `
  <article class="value-card surface-card" data-reveal>
    <h3 class="card-title">${title}</h3>
    <p class="card-copy">${text}</p>
  </article>
`);
renderInto('[data-testimonials-grid]', testimonials, ({ name, quote, role }) => `
  <article class="testimonial-card surface-card" data-reveal>
    <p class="quote">"${quote}"</p>
    <div class="testimonial-meta">
      <span class="quote-avatar">${initialsFromName(name)}</span>
      <div>
        <strong>${name}</strong>
        <span>${role}</span>
      </div>
    </div>
  </article>
`);
renderInto('[data-faq-grid]', faqItems, ({ question, answer }) => `
  <details class="faq-item surface-card" data-reveal>
    <summary>${question}</summary>
    <p>${answer}</p>
  </details>
`);

document.querySelectorAll('[data-download-link]').forEach((node) => {
  node.setAttribute('href', downloadUrl);
  node.setAttribute('target', '_blank');
  node.setAttribute('rel', 'noreferrer');
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector('[data-menu-button]');
const nav = document.getElementById('site-nav');
const closeMenu = () => {
  nav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Ouvrir le menu');
  menuButton?.classList.remove('is-active');
};

menuButton?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuButton.classList.toggle('is-active', Boolean(isOpen));
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.matches('a')) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 920) {
    closeMenu();
  }
});

const revealNodes = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
}
