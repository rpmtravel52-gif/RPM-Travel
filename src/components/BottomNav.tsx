'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth, type AuthUser } from './AuthProvider';
import Avatar from './Avatar';
import { buildWaHref } from '@/lib/waChat';

type Item = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  /** true = link WhatsApp yang isinya dibuat dinamis sesuai halaman aktif */
  waDynamic?: boolean;
  /** kelas warna khusus untuk ikon (mis. hijau untuk Chat) */
  iconTone?: string;
  match?: (p: string) => boolean;
};

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const accountIcon = (
  <svg viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20c.8-3.6 3.6-5.4 7.5-5.4s6.7 1.8 7.5 5.4" /></svg>
);

const staticItems: Item[] = [
  {
    href: '/pesan', label: 'Pesan',
    match: (p) => p.startsWith('/pesan'),
    icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v1.5a1.5 1.5 0 000 3V15a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.5a1.5 1.5 0 000-3V9z" /><path d="M14 7v10" strokeDasharray="2 2.5" /></svg>,
  },
  {
    href: '/', label: 'Beranda',
    match: (p) => p === '/',
    icon: <Image src="/android-chrome-192x192.png" alt="" width={40} height={40} className="rounded-full" />,
  },
  {
    href: '/#armada', label: 'Armada',
    match: (p) => p.startsWith('/sewa-'),
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="12" rx="2.5" /><path d="M3 11h18M7 17v2M17 17v2" /><circle cx="7.5" cy="14" r=".6" /><circle cx="16.5" cy="14" r=".6" /></svg>,
  },
  {
    href: '/', label: 'Chat', external: true, waDynamic: true,
    iconTone: 'text-green-600',
    icon: <svg viewBox="0 0 24 24" {...stroke} fill="rgba(22,163,74,0.15)"><path d="M21 12a8.5 8.5 0 01-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1121 12z" /></svg>,
  },
];

/** Item pertama: tombol Masuk (belum login) atau Akun + foto (sudah login). */
function buildItems(user: AuthUser | null): Item[] {
  const first: Item = user
    ? {
        href: '/akun', label: 'Akun',
        match: (p) => p.startsWith('/akun') || p.startsWith('/login'),
        icon: <Avatar user={user} className="w-full h-full" />,
      }
    : {
        href: '/login', label: 'Masuk',
        match: (p) => p.startsWith('/login') || p.startsWith('/akun'),
        icon: accountIcon,
      };
  return [first, ...staticItems];
}

/** Roda mobil: ban + velg emas + jari-jari. Hanya bagian ini yang berputar. */
function Wheel({ rot }: { rot: number }) {
  const spokes = [0, 72, 144, 216, 288];
  return (
    <svg
      viewBox="0 0 68 68"
      className="absolute inset-0 w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.3,1.1,0.4,1)]"
      style={{ transform: `rotate(${rot}deg)` }}
      aria-hidden
    >
      <circle cx="34" cy="34" r="34" className="fill-primary-900" />
      <circle cx="34" cy="34" r="30.5" fill="none" strokeWidth="3.2" strokeDasharray="3.4 3" className="stroke-white/25" />
      <circle cx="34" cy="34" r="27" className="fill-gold-300 stroke-gold-600" strokeWidth="1.2" />
      {spokes.map((a) => (
        <line key={a} x1="34" y1="34" x2="34" y2="8" strokeWidth="4.2" strokeLinecap="round"
          className="stroke-gold-500" transform={`rotate(${a} 34 34)`} />
      ))}
      {spokes.map((a) => (
        <circle key={`n${a}`} cx="34" cy="13" r="1.5" className="fill-primary-900" transform={`rotate(${a + 36} 34 34)`} />
      ))}
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname() ?? '/';
  const { user } = useAuth();
  const items = buildItems(user);

  const pathIdx = items.findIndex((it) => it.match?.(pathname));
  // sel = tab yang baru diketuk (roda langsung pindah), direset saat halaman berganti
  const [st, setSt] = useState<{ path: string; sel: number | null; idx: number; rot: number }>({
    path: pathname, sel: null, idx: pathIdx, rot: 0,
  });

  let cur = st;
  if (cur.path !== pathname) cur = { ...cur, path: pathname, sel: null };
  const active = cur.sel ?? pathIdx;
  if (cur.idx !== active) {
    const roll = cur.idx >= 0 && active >= 0 ? (active - cur.idx) * 230 : 0;
    cur = { ...cur, idx: active, rot: cur.rot + roll };
  }
  if (cur !== st) setSt(cur);

  if (pathname.startsWith('/admin')) return null;

  const nx = active >= 0 ? `${active * 20 + 10}%` : '-30%';

  return (
    <nav
      aria-label="Navigasi utama"
      className="bn md:hidden fixed bottom-0 inset-x-0 z-50 drop-shadow-[0_-6px_14px_rgba(15,42,74,0.14)]"
      style={{ '--nx': nx } as React.CSSProperties}
    >
      {/* Roda aktif (muncul di atas bar, mengikuti tab aktif) */}
      <div
        className="bn-wheel pointer-events-none absolute -top-9 w-[68px] h-[68px] -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: active >= 0 ? 1 : 0 }}
        aria-hidden
      >
        <Wheel rot={cur.rot} />
        <div className="absolute inset-[17px] rounded-full bg-white ring-2 ring-gold-500 text-primary-900 flex items-center justify-center [&>svg]:w-[18px] [&>svg]:h-[18px] [&>img]:w-full [&>img]:h-full shadow-inner overflow-hidden">
          {active >= 0 && items[active].icon}
        </div>
      </div>

      <ul className="bn-bar grid grid-cols-5 bg-white rounded-t-[1.25rem] pb-[env(safe-area-inset-bottom)]">
        {items.map((it, i) => {
          const isActive = i === active;
          const body = (
            <>
              <span className={`block w-[22px] h-[22px] mt-3.5 transition-opacity duration-200 [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full ${it.iconTone ?? ''} ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                {it.icon}
              </span>
              <span className={`mt-[3px] mb-2 text-[0.68rem] leading-[0.9rem] ${isActive ? 'font-bold text-primary-900' : 'font-medium text-gray-500'}`}>
                {it.label}
              </span>
            </>
          );
          const cls = `flex flex-col items-center ${isActive ? '' : 'text-gray-500 active:scale-95'} transition-transform`;
          return (
            <li key={it.label}>
              {it.external ? (
                <a
                  href={it.waDynamic ? buildWaHref(pathname) : it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                  onClick={it.waDynamic ? (e) => {
                    // Baca query terbaru (mis. ?paket=...) saat diklik agar pesan akurat
                    e.preventDefault();
                    window.open(buildWaHref(pathname, window.location.search), '_blank', 'noopener,noreferrer');
                  } : undefined}
                >{body}</a>
              ) : (
                <Link
                  href={it.href}
                  className={cls}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    setSt((s) => ({ ...s, sel: i }));
                    if (it.href === '/' && pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
