import { useEffect } from 'react';

const rootMargin = '0px 0px -36px 0px';

export default function ClientBehaviors() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const syncNav = () => nav?.classList.toggle('scrolled', window.scrollY > 20);

    syncNav();
    window.addEventListener('scroll', syncNav, { passive: true });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('.rv').forEach((item) => item.classList.add('in'));
      return () => window.removeEventListener('scroll', syncNav);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin });

    document.querySelectorAll<HTMLElement>('.rv').forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener('scroll', syncNav);
      observer.disconnect();
    };
  }, []);

  return null;
}
