'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = { value: string; label: string };

function parse(v: string) {
  const m = v.match(/^(\d+)(\+?)$/);
  return m ? { n: parseInt(m[1], 10), suffix: m[2] } : null;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setProgress(1); return; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-4 bg-primary-900 rounded-3xl py-4 md:py-6 shadow-lift">
      {stats.map((s) => {
        const p = parse(s.value);
        const shown = p ? `${Math.round(p.n * progress)}${progress >= 1 ? p.suffix : ''}` : s.value;
        return (
          <div key={s.label} className="text-center px-1">
            <p className="text-gold-400 font-bold text-lg md:text-3xl tabular-nums">{shown}</p>
            <p className="text-gray-400 text-[0.6rem] md:text-xs leading-tight">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}
