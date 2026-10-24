export interface Profile {
  nama: string;
  hp: string;      // tanpa 0/+62, mis. 8123456789 (sama dengan format form pemesanan)
  email: string;
  alamat: string;  // alamat penjemputan utama
}

export const EMPTY_PROFILE: Profile = { nama: '', hp: '', email: '', alamat: '' };

/** "0812-3456-789" / "+62 812…" → "8123456789" */
export function normalizeHp(v: string): string {
  let d = v.replace(/\D/g, '');
  if (d.startsWith('62')) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  return d;
}

/** Baris tabel `profiles` Supabase → Profile (aman terhadap nilai null). */
export function rowToProfile(row: Record<string, unknown> | null | undefined): Profile {
  if (!row) return { ...EMPTY_PROFILE };
  const str = (k: string) => (typeof row[k] === 'string' ? (row[k] as string) : '');
  return { nama: str('nama'), hp: str('hp'), email: str('email'), alamat: str('alamat') };
}
