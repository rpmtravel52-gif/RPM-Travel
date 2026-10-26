import type { Metadata } from 'next';
import Link from 'next/link';
import { getOrder } from '@/lib/redis';
import { getOrderIdByToken, resolveReviewer } from '@/lib/reviews';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { getSupabaseServer } from '@/lib/supabase/server';
import ReviewForm from './ReviewForm';

// Halaman pribadi (tautan dari email) — jangan diindeks mesin pencari.
export const metadata: Metadata = {
  title: 'Tulis Ulasan | RPM Travel Curup',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

function Notice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="max-w-md mx-auto px-4 py-16 text-center">
      <h1 className="font-display font-bold text-primary-900 text-2xl mb-2">{title}</h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{children}</p>
      <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
    </main>
  );
}

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; rating?: string }>;
}) {
  const { token, rating } = await searchParams;

  const orderId = await getOrderIdByToken(token);
  const order = orderId ? await getOrder(orderId) : null;
  if (!token || !order || order.status !== 'PAID') {
    return (
      <Notice title="Tautan Tidak Valid">
        Tautan ulasan ini tidak valid atau sudah kedaluwarsa. Jika Anda merasa ini keliru, hubungi admin kami lewat WhatsApp.
      </Notice>
    );
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    return <Notice title="Segera Hadir">Fitur ulasan sedang disiapkan. Silakan coba lagi nanti.</Notice>;
  }

  // Sudah pernah mengulas?
  const { data: existing } = await admin.from('reviews').select('id').eq('booking_id', order.id).maybeSingle();
  if (existing) {
    return (
      <Notice title="Terima Kasih! 🙏">
        Ulasan untuk perjalanan ini sudah kami terima. Kami sangat menghargai waktu Anda.
      </Notice>
    );
  }

  // Pratinjau identitas yang akan tampil jika pelanggan memilih "tampilkan profil saya"
  let session = null;
  try {
    const sb = await getSupabaseServer();
    if (sb) session = (await sb.auth.getUser()).data.user;
  } catch { /* tamu */ }
  const reviewer = await resolveReviewer(order, admin, session);

  const initial = Number(rating);
  return (
    <main className="max-w-lg mx-auto px-4 py-10 md:py-16">
      <p className="section-label !mb-1">Ulasan Perjalanan</p>
      <h1 className="font-display font-bold text-primary-900 text-2xl md:text-3xl mb-1">
        Halo {order.nama.split(' ')[0]}, bagaimana perjalanan Anda?
      </h1>
      <p className="text-gray-600 text-sm mb-6">
        {order.paket} ·{' '}
        {new Date(order.tanggal).toLocaleDateString('id-ID', {
          day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta',
        })}
      </p>
      <ReviewForm
        token={token}
        initialRating={Number.isInteger(initial) && initial >= 1 && initial <= 5 ? initial : 0}
        previewName={reviewer.displayName}
        previewAvatar={reviewer.avatarUrl}
      />
    </main>
  );
}
