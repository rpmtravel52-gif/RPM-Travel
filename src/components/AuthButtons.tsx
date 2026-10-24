'use client';

import Link from 'next/link';
import { useAuth } from './AuthProvider';
import Avatar from './Avatar';

const firstName = (nama: string) => nama.trim().split(/\s+/)[0] || 'Akun';

const UserIcon = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="8" r="3.6" /><path d="M4.5 20c.8-3.6 3.6-5.4 7.5-5.4s6.7 1.8 7.5 5.4" />
  </svg>
);

/** Posisi di pojok kanan atas Hero: tombol Masuk, atau foto + nama jika sudah login. */
export function HeroAuth() {
  const { user, loading } = useAuth();

  if (loading) return <div className="absolute top-5 right-4 md:top-6 md:right-6 z-10 h-9 w-24" aria-hidden />;

  return (
    <div className="absolute top-5 right-4 md:top-6 md:right-6 z-10">
      {user ? (
        <Link
          href="/akun"
          aria-label={`Akun ${user.nama}`}
          className="flex items-center gap-2 max-w-[11rem] bg-white/12 backdrop-blur-sm border border-white/25 text-white rounded-full pl-1 pr-3.5 py-1 active:scale-95 transition-transform hover:bg-white/20"
        >
          <Avatar user={user} className="w-7 h-7 shrink-0 ring-2 ring-gold-400/70" />
          <span className="text-sm font-semibold truncate">{firstName(user.nama)}</span>
        </Link>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm border border-gold-400/60 text-gold-300 hover:bg-gold-400 hover:text-primary-900 rounded-full px-4 py-2 text-sm font-semibold active:scale-95 transition-all"
        >
          {UserIcon}
          Masuk
        </Link>
      )}
    </div>
  );
}

/** Item di navbar desktop (sisi kanan). */
export function NavAuth() {
  const { user, loading } = useAuth();
  if (loading) return <div className="ml-2 h-9 w-20" aria-hidden />;

  return user ? (
    <Link
      href="/akun"
      className="ml-2 flex items-center gap-2 rounded-full pl-1 pr-3 py-1 border border-amber-200 hover:bg-amber-50 transition-colors"
    >
      <Avatar user={user} className="w-7 h-7" />
      <span className="rpm-nav-font text-[0.8rem] font-medium text-gray-700 max-w-[8rem] truncate">{firstName(user.nama)}</span>
    </Link>
  ) : (
    <Link
      href="/login"
      className="rpm-nav-font ml-2 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.8rem] font-semibold bg-primary-900 text-white hover:bg-primary-800 transition-colors"
    >
      {UserIcon}
      Masuk
    </Link>
  );
}
