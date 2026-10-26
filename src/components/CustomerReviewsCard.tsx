import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from '@/lib/supabase/config';
import { ReviewAvatar, Stars } from './ReviewParts';

interface PublicReview {
  id: string;
  rating: number;
  comment: string;
  is_anonymous: boolean;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

const LIMIT = 6;

// Membaca view publik `reviews_public` lewat REST biasa (tanpa cookie) dan di-cache 5 menit,
// sehingga beranda tetap statis/ISR — tidak menjadi halaman dinamis.
async function fetchReviews(): Promise<PublicReview[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews_public?select=id,rating,comment,is_anonymous,display_name,avatar_url,created_at&order=created_at.desc&limit=${LIMIT}`,
      {
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as PublicReview[];
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta',
  });

export default async function CustomerReviewsCard() {
  const reviews = await fetchReviews();
  if (reviews.length === 0) return null; // belum ada ulasan → section tidak tampil sama sekali

  return (
    <section id="ulasan" className="pt-10 scroll-mt-20">
      <div data-rv="up" className="max-w-6xl mx-auto px-4 mb-4">
        <p className="section-label !mb-1">Ulasan Pelanggan</p>
        <h2 className="font-display font-bold text-primary-900 text-xl md:text-4xl">Kata Mereka yang Sudah Berangkat</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {reviews.map((r, i) => {
          const name = r.is_anonymous ? 'Pelanggan Travel' : (r.display_name || 'Pelanggan Travel');
          return (
            <div
              key={r.id}
              data-rv="up"
              style={{ '--rv-d': `${(i % 3) * 120}ms` } as React.CSSProperties}
            >
              <article className="glow reveal lift h-full flex flex-col gap-3 bg-white rounded-2xl border border-primary-900/5 shadow-soft p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <ReviewAvatar name={name} url={r.avatar_url} anonymous={r.is_anonymous} />
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-primary-900 text-sm md:text-base truncate">{name}</h3>
                    <time dateTime={r.created_at} className="block text-gray-600 text-xs">{fmtDate(r.created_at)}</time>
                  </div>
                </div>
                <Stars value={r.rating} />
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed whitespace-pre-line break-words">{r.comment}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
