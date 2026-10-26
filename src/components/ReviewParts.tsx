/* eslint-disable @next/next/no-img-element */
// Potongan tampilan kecil (tanpa state) yang dipakai bersama oleh form ulasan dan kartu ulasan.

const STAR_PATH =
  'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z';

/** Bintang SVG (bukan teks, supaya aman untuk cek kontras aksesibilitas). */
export function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <span role="img" aria-label={`Rating ${value} dari 5`} className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={n <= value ? 'text-gold-500' : 'text-gray-300'}
          fill="currentColor"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}

/** Foto profil, atau inisial nama, atau siluet netral untuk ulasan anonim. */
export function ReviewAvatar({
  name,
  url,
  anonymous = false,
  size = 40,
}: {
  name?: string | null;
  url?: string | null;
  anonymous?: boolean;
  size?: number;
}) {
  const box = { width: size, height: size } as const;
  if (!anonymous && url) {
    return (
      <img
        src={url}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        style={box}
        className="rounded-full object-cover bg-primary-100 shrink-0"
      />
    );
  }
  const initial = !anonymous && name ? (name.trim()[0] ?? '').toUpperCase() : '';
  return (
    <span
      aria-hidden="true"
      style={box}
      className="rounded-full bg-gold-100 text-primary-900 font-bold flex items-center justify-center shrink-0 text-sm"
    >
      {initial || (
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
        </svg>
      )}
    </span>
  );
}
