'use client';

import { useEffect, useRef } from 'react';

/**
 * Carousel horizontal yang berjalan "putus-putus" (tab demi tab).
 * - Hanya berjalan saat bagian ini terlihat di layar (IntersectionObserver).
 * - Berhenti sementara saat disentuh/di-scroll manual, lanjut lagi setelah jeda.
 * - Otomatis tidak aktif jika semua card muat di layar (desktop) atau reduced-motion.
 */
export default function AutoCarousel({
  children,
  className = '',
  interval = 2800,
}: {
  children: React.ReactNode;
  className?: string;
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let visible = false;
    let paused = false;
    let timer: number | undefined;
    let resume: number | undefined;

    const step = () => {
      if (!visible || paused || document.hidden) return;
      if (el.scrollWidth <= el.clientWidth + 4) return;
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: first.offsetWidth + gap, behavior: 'smooth' });
    };

    const start = () => { if (timer === undefined) timer = window.setInterval(step, interval); };
    const stop = () => { if (timer !== undefined) { window.clearInterval(timer); timer = undefined; } };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start(); else stop();
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    const hold = () => { paused = true; window.clearTimeout(resume); };
    const release = () => { window.clearTimeout(resume); resume = window.setTimeout(() => { paused = false; }, 4500); };
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('pointerdown', hold, { passive: true });
    el.addEventListener('touchend', release, { passive: true });
    el.addEventListener('pointerup', release, { passive: true });
    el.addEventListener('pointercancel', release, { passive: true });

    return () => {
      io.disconnect();
      stop();
      window.clearTimeout(resume);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('pointerdown', hold);
      el.removeEventListener('touchend', release);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', release);
    };
  }, [interval]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
