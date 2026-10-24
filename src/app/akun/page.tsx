import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabase/server';
import { listOrdersByUser } from '@/lib/redis';
import { rowToProfile } from '@/lib/profile';
import type { Order } from '@/lib/types';
import AkunClient from './AkunClient';

export const metadata: Metadata = {
  title: 'Akun Saya | RPM Travel Curup',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default async function AkunPage() {
  const sb = await getSupabaseServer();
  if (!sb) redirect('/login');
  const { data } = await sb.auth.getUser();
  const user = data.user;
  if (!user) redirect('/login?next=/akun');

  let orders: Order[] = [];
  try {
    orders = await listOrdersByUser(user.id);
  } catch (e) {
    console.error('Gagal memuat pesanan akun:', e);
  }

  // Profil tersimpan (tabel `profiles`); jika tabel belum dibuat, tampilkan form kosong
  let profileRow: Record<string, unknown> | null = null;
  try {
    const res = await sb.from('profiles').select('nama,hp,email,alamat').eq('id', user.id).maybeSingle();
    profileRow = res.data;
  } catch {
    profileRow = null;
  }

  const meta = (user.user_metadata ?? {}) as Record<string, string | undefined>;
  return (
    <AkunClient
      user={{
        id: user.id,
        email: user.email ?? '',
        nama: meta.full_name || meta.name || (user.email ?? '').split('@')[0] || 'Pengguna',
        foto: meta.avatar_url || meta.picture || null,
      }}
      orders={orders}
      profile={rowToProfile(profileRow)}
    />
  );
}
