'use client';

import { useEffect } from 'react';

/**
 * Menandai card `.glow` yang sedang berada di area tengah layar dengan
 * data-glow="on". Saat di-scroll keluar dari area itu → "off" (bayangan hilang).
 * Murni IntersectionObserver: tanpa listener scroll, tanpa re-render React.
 */
export default function GlowObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.glow');
    if (!els.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          (e.target as HTMLElement).dataset.glow = e.isIntersecting ? 'on' : 'off';
        }
      },
      // Hanya 40% bagian tengah layar yang dianggap "fokus"
      { rootMargin: '-30% 0px -30% 0px', threshold: 0 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
