'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20bertanya';

type Item = { href: string; label: string; icon: React.ReactNode; external?: boolean; match?: (p: string) => boolean };

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const items: Item[] = [
  {
    href: '/', label: 'Beranda',
    match: (p) => p === '/',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" {...stroke}><path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" /></svg>,
  },
  {
    href: '/#layanan', label: 'Rute',
    match: (p) => p.startsWith('/travel-') || p.startsWith('/jadwal-') || p.startsWith('/rute-'),
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" {...stroke}><circle cx="6" cy="19" r="2.2" /><circle cx="18" cy="5" r="2.2" /><path d="M8 19h7a3 3 0 000-6H9a3 3 0 010-6h7" /></svg>,
  },
  {
    href: '/pesan', label: 'Pesan',
    match: (p) => p.startsWith('/pesan'),
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" {...stroke}><path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v1.5a1.5 1.5 0 000 3V15a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.5a1.5 1.5 0 000-3V9z" /><path d="M14 7v10" strokeDasharray="2 2.5" /></svg>,
  },
  {
    href: '/#armada', label: 'Armada',
    match: (p) => p.startsWith('/sewa-'),
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" {...stroke}><rect x="3" y="5" width="18" height="12" rx="2.5" /><path d="M3 11h18M7 17v2M17 17v2" /><circle cx="7.5" cy="14" r=".6" /><circle cx="16.5" cy="14" r=".6" /></svg>,
  },
  {
    href: WA, label: 'Chat', external: true,
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" {...stroke}><path d="M21 12a8.5 8.5 0 01-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1121 12z" /></svg>,
  },
];

export default function BottomNav() {
  const pathname = usePathname() ?? '/';
  if (pathname.startsWith('/admin')) return null;

  return (
    <nav
      aria-label="Navigasi utama"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 pointer-events-none"
    >
      <ul className="pointer-events-auto mx-auto max-w-md grid grid-cols-5 bg-white/95 backdrop-blur-md rounded-3xl border border-primary-900/8 shadow-lift px-1.5 py-1.5">
        {items.map((it) => {
          const active = it.match ? it.match(pathname) : false;
          const cls = `flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-2xl text-[0.65rem] font-semibold transition-all duration-300 ${
            active ? 'text-primary-900 bg-gold-100' : 'text-gray-500 active:scale-95'
          }`;
          return (
            <li key={it.label}>
              {it.external ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {it.icon}<span>{it.label}</span>
                </a>
              ) : (
                <Link href={it.href} className={cls} aria-current={active ? 'page' : undefined}>
                  {it.icon}<span>{it.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
