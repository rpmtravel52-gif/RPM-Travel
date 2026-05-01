import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rpmtravel.co.id';
  const now  = new Date().toISOString();

  return [
    // ── Halaman Utama
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // ── Bengkulu ↔ Palembang
    { url: `${base}/travel-bengkulu-palembang`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/berapa-jam-palembang-bengkulu`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    
    { url: `${base}/travel-palembang-bengkulu`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },

    // ── Curup ↔ Palembang
    { url: `${base}/travel-curup-palembang`,    lastModified: now, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${base}/travel-palembang-curup`,    lastModified: now, changeFrequency: 'weekly', priority: 0.93 },

    // ── Curup ↔ Lebong
    { url: `${base}/travel-curup-lebong`,       lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${base}/travel-lebong-curup`,       lastModified: now, changeFrequency: 'weekly', priority: 0.90 },

    // ── Lebong ↔ Palembang
    { url: `${base}/travel-lebong-palembang`,   lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${base}/travel-palembang-lebong`,   lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: `${base}/berapa-jam-palembang-lebong`,   lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${base}/harga-travel-palembang-lebong`,   lastModified: now, changeFrequency: 'weekly', priority: 0.80 },

    // ── Sewa
    { url: `${base}/sewa-hiace-curup`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.88 },
    { url: `${base}/sewa-bus-wisata`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },

    // ── Layanan Khusus
    { url: `${base}/transportasi-perjalanan-dinas`, lastModified: now, changeFrequency: 'monthly', priority: 0.80 },

    // ── Pemesanan
    { url: `${base}/pesan`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ];
}
