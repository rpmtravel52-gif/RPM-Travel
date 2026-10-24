/* eslint-disable @next/next/no-img-element */
import type { AuthUser } from './AuthProvider';

/** Foto profil (mis. dari Google) atau inisial nama sebagai cadangan. */
export default function Avatar({ user, className = 'w-8 h-8' }: { user: AuthUser; className?: string }) {
  if (user.foto) {
    return (
      <img
        src={user.foto}
        alt=""
        referrerPolicy="no-referrer"
        className={`${className} rounded-full object-cover bg-primary-100`}
      />
    );
  }
  const initial = (user.nama.trim()[0] ?? '?').toUpperCase();
  return (
    <span
      aria-hidden
      className={`${className} rounded-full bg-gold-500 text-primary-900 font-bold flex items-center justify-center text-sm`}
    >
      {initial}
    </span>
  );
}
