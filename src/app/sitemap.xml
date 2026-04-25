import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rpmtravel.co.id';
  const now  = new Date().toISOString();

  return [
    // ── Halaman Utama ──────────────────────────────────────────
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Halaman Layanan Utama ──────────────────────────────────
    {
      url: `${base}/travel-bengkulu-palembang`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/travel-palembang-bengkulu`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/travel-curup-palembang`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/travel-curup-lebong`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Halaman Sewa & Layanan ─────────────────────────────────
    {
      url: `${base}/sewa-hiace-curup`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/sewa-bus-wisata`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/transportasi-perjalanan-dinas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Halaman Pemesanan ──────────────────────────────────────
    {
      url: `${base}/pesan`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];
}
