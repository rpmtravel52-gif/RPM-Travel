import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jadwal Travel Palembang Curup Terbaru 2026 | Berangkat Setiap Hari',
  description:
    'Jadwal travel Palembang ke Curup berangkat setiap hari pukul 10.00 WIB (pagi) dan 19.00 WIB (malam). Layanan door to door, armada Hiace & Innova. Hubungi RPM Travel 085282828005.',
  keywords: [
    'jadwal travel palembang curup',
    'jam travel palembang curup',
    'travel palembang curup berangkat jam berapa',
    'jadwal keberangkatan travel palembang curup',
    'travel palembang curup setiap hari',
    'travel palembang curup pagi malam',
    'jadwal travel palembang rejang lebong',
    'travel palembang curup door to door',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/jadwal-travel-palembang-curup' },
  openGraph: {
    title: 'Jadwal Travel Palembang Curup Terbaru 2026 | Berangkat Setiap Hari',
    description:
      'Travel Palembang–Curup berangkat setiap hari pukul 10.00 & 19.00 WIB. Door to door, armada Hiace & Innova. Pesan via WhatsApp RPM Travel.',
    url: 'https://rpmtravel.co.id/jadwal-travel-palembang-curup',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20cek%20jadwal%20dan%20pesan%20travel%20Palembang%E2%80%93Curup';

const jadwal = [
  {
    sesi: 'Keberangkatan Pagi',
    jam: '10.00 WIB',
    tiba: '±18.00 – 20.00 WIB',
    icon: '🌅',
    badge: 'Rekomendasi Keluarga',
    dark: false,
    keunggulan: [
      'Perjalanan lebih terang dan aman',
      'Cocok untuk keluarga dan lansia',
      'Menikmati pemandangan alam Sumatera',
      'Tiba sore — langsung beristirahat',
    ],
  },
  {
    sesi: 'Keberangkatan Malam',
    jam: '19.00 WIB',
    tiba: '±03.00 – 05.00 WIB',
    icon: '🌙',
    badge: 'Lebih Cepat Sampai',
    dark: true,
    keunggulan: [
      'Jalan lebih sepi, minim macet',
      'Cocok untuk yang ingin istirahat di perjalanan',
      'Tiba dini hari, siap aktivitas pagi',
      'Hemat waktu siang hari Anda',
    ],
  },
];

const faqs = [
  {
    q: 'Apakah travel Palembang Curup berangkat setiap hari?',
    a: 'Ya, RPM Travel melayani rute Palembang–Curup setiap hari termasuk akhir pekan dan hari libur nasional, dengan dua pilihan jadwal: pagi (10.00 WIB) dan malam (19.00 WIB).',
  },
  {
    q: 'Travel Palembang Curup berangkat jam berapa?',
    a: 'Tersedia dua jadwal tetap: keberangkatan pagi pukul 10.00 WIB dan keberangkatan malam pukul 19.00 WIB. Kedua jadwal tersedia setiap harinya.',
  },
  {
    q: 'Apakah bisa memilih jam keberangkatan lain?',
    a: 'Umumnya jadwal tetap hanya pagi dan malam. Jika membutuhkan waktu keberangkatan khusus, tersedia opsi charter kendaraan. Hubungi kami untuk informasi lebih lanjut.',
  },
  {
    q: 'Apakah bisa request titik penjemputan?',
    a: 'Bisa. Layanan kami bersifat door to door — kami menjemput langsung di alamat Anda di Palembang selama masih dalam area layanan, tanpa biaya tambahan.',
  },
  {
    q: 'Berapa lama perjalanan Palembang ke Curup?',
    a: 'Rata-rata 8–10 jam perjalanan, tergantung kondisi jalan dan cuaca. Jadwal malam umumnya sedikit lebih cepat karena lalu lintas lebih sepi.',
  },
  {
    q: 'Apakah jadwal bisa berubah?',
    a: 'Jadwal dapat berubah pada kondisi tertentu seperti cuaca buruk atau force majeure. Disarankan konfirmasi ulang sehari sebelum keberangkatan melalui WhatsApp.',
  },
];

export default function JadwalTravelPalembangCurupPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative pb-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4"
          >
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/travel-palembang-curup" className="hover:text-gold-300 transition-colors">
              Travel Palembang – Curup
            </Link>
            <span>/</span>
            <span className="text-gray-400">Jadwal</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🕒 Jadwal Terbaru 2026 · Berangkat Setiap Hari
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Jadwal Travel Palembang Curup{' '}
            <span className="text-gold-400">Terbaru 2026</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Tersedia dua jadwal keberangkatan setiap harinya — pagi dan malam.
            Pilih waktu yang paling sesuai dengan rencana perjalanan Anda ke
            Curup, Rejang Lebong.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,#c9a84c,#e2c46e)',
                color: '#0a1628',
                boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
              }}
            >
              <span className="relative z-10">💬 Cek Jadwal & Booking</span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                style={{ animation: 'shimmer 2.5s infinite ease-in-out' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Curup' },
            { label: 'Jadwal Pagi', value: '10.00 WIB' },
            { label: 'Jadwal Malam', value: '19.00 WIB' },
            { label: 'Sistem', value: 'Door to Door' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="font-display font-bold text-primary-900 text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JADWAL CARDS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-2 text-center">
            🕒 Jadwal Travel Palembang ke Curup
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Dua pilihan jadwal tersedia setiap hari — sesuaikan dengan kebutuhan Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {jadwal.map((item) => (
              <div
                key={item.sesi}
                className="rounded-2xl p-6 relative border"
                style={
                  item.dark
                    ? { background: '#0a1628', borderColor: 'rgba(255,255,255,0.08)' }
                    : { background: '#fdf9f0', borderColor: '#fde68a' }
                }
              >
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={
                    item.dark
                      ? { background: 'rgba(201,168,76,0.2)', color: '#e2c46e' }
                      : { background: '#fef3c7', color: '#92400e' }
                  }
                >
                  {item.badge}
                </span>

                <div className="text-5xl mb-4">{item.icon}</div>
                <h3
                  className="font-display text-xl font-bold mb-4"
                  style={{ color: item.dark ? '#fff' : '#0a1628' }}
                >
                  {item.sesi}
                </h3>

                <div className="mb-4">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: item.dark ? '#c9a84c' : '#b45309' }}
                  >
                    Jam Berangkat
                  </p>
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: item.dark ? '#e2c46e' : '#0a1628' }}
                  >
                    {item.jam}
                  </p>
                </div>

                <div
                  className="rounded-lg px-3 py-2 mb-5 text-sm"
                  style={
                    item.dark
                      ? { background: 'rgba(255,255,255,0.08)', color: '#d1d5db' }
                      : { background: '#fff', border: '1px solid #e5e7eb', color: '#4b5563' }
                  }
                >
                  <span
                    className="font-semibold"
                    style={{ color: item.dark ? '#e2c46e' : '#b45309' }}
                  >
                    Estimasi tiba:{' '}
                  </span>
                  {item.tiba}
                </div>

                <ul className="space-y-2 mb-5">
                  {item.keunggulan.map((k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: item.dark ? '#d1d5db' : '#4b5563' }}
                    >
                      <span className="font-bold mt-0.5" style={{ color: '#c9a84c' }}>✓</span>
                      {k}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full font-bold py-2.5 rounded-xl text-sm transition-all"
                  style={
                    item.dark
                      ? {
                          background: 'linear-gradient(135deg,#c9a84c,#e2c46e)',
                          color: '#0a1628',
                        }
                      : { background: '#0a1628', color: '#fff' }
                  }
                >
                  Pesan Jadwal {item.icon}
                </a>
              </div>
            ))}
          </div>

          {/* Estimasi waktu banner */}
          <div className="bg-cream-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-5xl">⏱️</div>
            <div className="flex-1">
              <p className="font-display text-xl font-bold text-primary-900 mb-1">
                Durasi Perjalanan: 8–10 Jam
              </p>
              <p className="text-gray-500 text-sm">
                Waktu tempuh rata-rata dari Palembang ke Curup melewati jalur Muara Enim–Lahat.
                Durasi dapat berubah tergantung kondisi jalan dan cuaca.
              </p>
            </div>
            <Link
              href="/berapa-jam-palembang-curup"
              className="flex-shrink-0 text-gold-600 hover:text-gold-700 font-semibold text-sm border border-gold-400 hover:border-gold-600 rounded-xl px-4 py-2 transition-all whitespace-nowrap"
            >
              Selengkapnya →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SISTEM & TIPS ── */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          {/* Sistem penjemputan */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-primary-900 mb-4">
              📍 Sistem Penjemputan
            </h2>
            <div className="flex items-start gap-3 mb-5">
              <span className="text-4xl">🚐</span>
              <div>
                <p className="font-bold text-primary-900 text-sm mb-1">Door to Door</p>
                <p className="text-gray-500 text-sm">
                  Dijemput langsung dari alamat Anda di Palembang dan diantar sampai
                  tujuan di Curup tanpa perlu ke pool atau terminal.
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                'Dijemput langsung di alamat Anda',
                'Tidak perlu datang ke pool travel',
                'Diantar sampai tujuan di Curup',
                'Cocok untuk keluarga dengan banyak barang',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gold-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Yang perlu diperhatikan */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-primary-900 mb-4">
              ⚠️ Yang Perlu Diperhatikan
            </h2>
            <ul className="space-y-3">
              {[
                { icon: '🔔', text: 'Konfirmasi keberangkatan sehari sebelumnya' },
                { icon: '⏰', text: 'Siap dijemput 30–60 menit sebelum jadwal' },
                { icon: '📅', text: 'Jadwal bisa berubah pada kondisi tertentu' },
                { icon: '🌧️', text: 'Cuaca buruk dapat mempengaruhi waktu tempuh' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips jadwal */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:col-span-2">
            <h2 className="font-display text-xl font-bold text-primary-900 mb-4">
              💡 Tips Memilih Jadwal Terbaik
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '🌅',
                  title: 'Pilih jadwal pagi jika...',
                  tips: ['Bepergian bersama keluarga', 'Ada anak kecil atau lansia', 'Ingin menikmati pemandangan'],
                },
                {
                  icon: '🌙',
                  title: 'Pilih jadwal malam jika...',
                  tips: ['Ingin lebih cepat sampai', 'Tidak masalah tiba dini hari', 'Mau istirahat di perjalanan'],
                },
                {
                  icon: '📅',
                  title: 'Hindari musim ini...',
                  tips: ['Libur Lebaran & Nataru', 'Long weekend nasional', 'Pekan ujian sekolah'],
                },
              ].map((col) => (
                <div key={col.title} className="bg-cream-50 rounded-xl p-4">
                  <p className="text-2xl mb-2">{col.icon}</p>
                  <p className="font-semibold text-primary-900 text-sm mb-3">{col.title}</p>
                  <ul className="space-y-1.5">
                    {col.tips.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="text-gold-500">•</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIKEL + SIDEBAR ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                ❓ FAQ Seputar Jadwal Travel Palembang Curup
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-100 rounded-xl p-4 bg-cream-50"
                  >
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">
                Layanan Terkait
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/travel-palembang-curup',
                    label: '🚐 Travel Palembang – Curup',
                    desc: 'Info lengkap layanan, armada, dan harga',
                  },
                  {
                    href: '/berapa-jam-palembang-curup',
                    label: '⏱️ Berapa Jam Palembang ke Curup?',
                    desc: 'Estimasi waktu tempuh & rute perjalanan',
                  },
                  {
                    href: '/travel-curup-palembang',
                    label: '↔ Travel Curup – Palembang',
                    desc: 'Rute balik dari Curup ke Palembang',
                  },
                  {
                    href: '/sewa-hiace-curup',
                    label: '🔑 Sewa Hiace Curup',
                    desc: 'Armada Hiace untuk perjalanan rombongan',
                  },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group"
                  >
                    <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">
                      {l.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">
                Booking Sekarang
              </h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />

              <div className="space-y-3 mb-5">
                {[
                  { icon: '🌅', label: 'Pagi', jam: '10.00 WIB' },
                  { icon: '🌙', label: 'Malam', jam: '19.00 WIB' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2"
                  >
                    <span className="text-white text-sm font-medium">
                      {s.icon} Jadwal {s.label}
                    </span>
                    <span className="text-gold-400 font-bold text-sm">{s.jam}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Tersedia setiap hari
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Door to door Palembang–Curup
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Hiace (14 kursi) &amp; Innova (7 kursi)
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Sopir berpengalaman rute ini
                </div>
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg,#c9a84c,#e2c46e)',
                  color: '#0a1628',
                  boxShadow: '0 4px 16px rgba(201,168,76,0.4)',
                }}
              >
                <span className="relative z-10">💬 Chat WhatsApp</span>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                  style={{ animation: 'shimmer 2.5s infinite ease-in-out' }}
                />
              </a>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Jadwal Sudah Cocok? Langsung Booking!
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
            Pastikan kursi Anda tersedia dengan memesan lebih awal. Hubungi RPM Travel
            via WhatsApp untuk konfirmasi jadwal hari ini dan proses booking yang cepat.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,#c9a84c,#e2c46e)',
                color: '#0a1628',
                boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
              }}
            >
              <span className="relative z-10">💬 Hubungi via WhatsApp</span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                style={{ animation: 'shimmer 2.5s infinite ease-in-out' }}
              />
            </a>
            <Link
              href="/travel-palembang-curup"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white transition-all"
            >
              🚐 Lihat Detail Layanan
            </Link>
          </div>
        </div>
      </section>

      <style>{`@keyframes shimmer{0%{transform:translateX(-100%) skewX(-20deg)}100%{transform:translateX(300%) skewX(-20deg)}}`}</style>

      {/* ── JSON-LD FAQ ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── JSON-LD BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://rpmtravel.co.id' },
              { '@type': 'ListItem', position: 2, name: 'Travel Palembang – Curup', item: 'https://rpmtravel.co.id/travel-palembang-curup' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Jadwal Travel Palembang Curup',
                item: 'https://rpmtravel.co.id/jadwal-travel-palembang-curup',
              },
            ],
          }),
        }}
      />

      {/* ── JSON-LD Service ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Travel Palembang Curup – RPM Travel',
            provider: {
              '@type': 'LocalBusiness',
              name: 'RPM Travel',
              telephone: '+6285282828005',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Curup',
                addressRegion: 'Bengkulu',
                addressCountry: 'ID',
              },
            },
            areaServed: ['Palembang', 'Curup', 'Rejang Lebong'],
            description:
              'Layanan travel door to door Palembang ke Curup dengan jadwal pagi (10.00 WIB) dan malam (19.00 WIB) setiap hari. Armada Toyota Hiace dan Innova.',
          }),
        }}
      />
    </>
  );
}
