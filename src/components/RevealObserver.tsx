'use client';

import { useEffect } from 'react';

/**
 * Animasi muncul saat scroll untuk tampilan PC (>= 768px).
 * Elemen bertanda [data-rv] disembunyikan lewat CSS hanya setelah class
 * "rv-ready" dipasang di <html> (jadi tanpa JS konten tetap tampil).
 */
export default function RevealObserver() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    if (!mq.matches || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;
    const els = document.querySelectorAll<HTMLElement>('[data-rv]');
    root.classList.add('rv-ready');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = '1';
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove('rv-ready');
      els.forEach((el) => delete el.dataset.in);
    };
  }, []);

  return null;
}
