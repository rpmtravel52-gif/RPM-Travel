import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Palembang Curup Hiace & Innova | ongkos sama 2026',
  description:
    'Layanan travel Palembang ke Curup menggunakan armada Toyota Hiace dan Innova. Jadwal berangkat pukul 10.00 pagi dan 19.00 malam setiap hari. Antar jemput langsung kerumah, Rejang Lebong. Hubungi RPM Travel 085282828005.',
  keywords: [
    'travel palembang curup',
    'travel palembang curup hiace',
    'travel palembang curup innova',
    'jadwal travel palembang curup',
    'travel palembang rejang lebong',
    'travel palembang curup door to door',
    'agen travel palembang curup murah',
    'travel palembang curup terpercaya',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/travel-palembang-curup' },
  openGraph: {
    title: 'Travel Palembang Curup Hiace & Innova | RPM Travel',
    description: 'Travel Palembang–Curup berangkat 10.00 & 19.00 WIB. Armada Hiace dan Innova, door to door ke Curup Rejang Lebong.',
    url: 'https://rpmtravel.co.id/travel-palembang-curup',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Curup';

const schedules = [
  { jam: '10.00 WIB', label: 'Keberangkatan Pagi', icon: '🌅', note: 'Tiba di Curup estimasi sore hari' },
  { jam: '19.00 WIB', label: 'Keberangkatan Malam', icon: '🌙', note: 'Tiba di Curup estimasi dini hari' },
];

const armada = [
  {
    nama: 'Toyota Hiace',
    kapasitas: '14 Penumpang',
    icon: '🚐',
    fitur: ['Kabin tinggi & lega', 'AC double blower', 'Bagasi ekstra luas', 'Cocok rombongan keluarga'],
    badge: 'Kapasitas Besar',
  },
  {
    nama: 'Toyota Innova',
    kapasitas: '7 Penumpang',
    icon: '🚗',
    fitur: ['Suspensi halus & nyaman', 'AC dingin optimal', 'Interior rapi', 'Cocok perjalanan keluarga kecil'],
    badge: 'Populer',
  },
];

const faqs = [
  {
    q: 'Berapa lama perjalanan dari Palembang ke Curup?',
    a: 'Perjalanan Palembang–Curup membutuhkan waktu sekitar 8–10 jam, melewati jalur lintas Sumatera via Muara Enim dan Lahat. Kondisi jalan secara umum baik dan nyaman untuk perjalanan jauh.',
  },
  {
    q: 'Di mana titik penjemputan di Palembang?',
    a: 'Kami melayani penjemputan di berbagai titik di kota Palembang sesuai alamat yang Anda berikan. Layanan anatar jemput tanpa perlu ke pool travel tertentu selama dalam batas wilayah.',
  },
  {
    q: 'Apakah Hiace atau Innova lebih direkomendasikan untuk perjalanan ini?',
    a: 'Keduanya sangat baik untuk rute ini. Hiace lebih cocok jika Anda bepergian dengan rombongan besar atau membawa banyak barang. Innova lebih ideal untuk keluarga kecil dengan 4–6 orang yang menginginkan kenyamanan lebih personal.',
  },
  {
    q: 'Apakah tersedia layanan antar ke alamat di Curup?',
    a: 'Ya, kami mengantarkan penumpang langsung ke alamat tujuan di Curup dan sekitar Rejang Lebong tanpa biaya tambahan.',
  },
  {
    q: 'Berapa harga tiket travel Palembang ke Curup?',
    a: 'Harga tiket bervariasi tergantung jenis armada dan periode perjalanan. Hubungi kami via WhatsApp untuk mendapatkan informasi harga terkini dan promo yang tersedia.',
  },
];

export default function TravelPalembangCurupPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Palembang – Curup</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🚐 Hiace & Innova · Berangkat 2x Sehari
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Palembang – Curup<br />
            <span className="text-gold-400">Langsung ke Rejang Lebong</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Perjalanan dari Palembang menuju Curup kini lebih mudah dan menyenangkan. Pilih armada Toyota Hiace untuk kapasitas besar atau Innova untuk kenyamanan perjalanan keluarga kecil. Dua jadwal tersedia setiap harinya — pagi dan malam.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/pesan?paket=palembang-curup"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
              🎫 Pesan Tiket Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Curup' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Estimasi', value: '8–10 Jam' },
            { label: 'Jadwal', value: '10.00 & 19.00 WIB' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JADWAL ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan dari Palembang</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {schedules.map(s => (
              <div key={s.jam} className="bg-primary-900 rounded-2xl p-6 flex items-start gap-4">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">{s.label}</p>
                  <p className="text-white font-display font-bold text-3xl">{s.jam}</p>
                  <p className="text-gray-400 text-xs mt-1.5">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Jadwal keberangkatan bisa berubah pada kondisi tertentu. Selalu konfirmasi via WhatsApp sebelum hari keberangkatan.
          </p>
        </div>
      </section>

      {/* ── PILIHAN ARMADA ── */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {armada.map(a => (
              <div key={a.nama} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gold-400 hover:shadow-md transition-all relative">
                <span className="absolute top-4 right-4 bg-gold-500/20 text-gold-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  {a.badge}
                </span>
                <div className="text-5xl mb-3">{a.icon}</div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-1">{a.nama}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-4">👥 {a.kapasitas}</p>
                <ul className="space-y-2 mb-5">
                  {a.fitur.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold-500 font-bold">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={`${WA}%20dengan%20${encodeURIComponent(a.nama)}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all">
                  Pesan dengan {a.nama}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTIKEL SEO ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                Menuju Curup dari Palembang dengan Nyaman
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Curup sebagai ibu kota Kabupaten Rejang Lebong menjadi tujuan perjalanan yang semakin ramai dikunjungi, baik untuk urusan keluarga, bisnis, maupun wisata alam Bengkulu. RPM Travel hadir sebagai solusi transportasi andal dari Palembang langsung ke jantung kota Curup.
                </p>
                <p>
                  Berbeda dengan transportasi umum yang seringkali membutuhkan transit di beberapa titik, layanan kami mengantar Anda langsung dari Palembang ke alamat tujuan di Curup dalam satu perjalanan yang nyaman. Tidak ada ganti kendaraan, tidak ada kerumitan.
                </p>
                <p>
                  Tersedia dua pilihan armada yang bisa disesuaikan dengan kebutuhan. Toyota Hiace 14 kursi ideal untuk rombongan keluarga atau rekan kerja yang bepergian bersama. Sementara Toyota Innova 7 kursi menjadi pilihan favorit untuk perjalanan keluarga kecil yang menginginkan suasana lebih intim dan personal.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-curup-palembang', label: '↔ Travel Curup – Palembang', desc: 'Rute balik dari Curup ke Palembang' },
                  { href: '/travel-bengkulu-palembang', label: '🚐 Travel Bengkulu – Palembang', desc: 'Hiace 14 kursi, 2 jadwal harian' },
                  { href: '/sewa-hiace-curup', label: '🔑 Sewa Hiace Curup', desc: 'Rp 1.800.000/hari all-in' },
                  { href: '/travel-curup-lebong', label: '🗺️ Travel Curup – Lebong', desc: 'Rute lokal harian Curup–Lebong' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group">
                    <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">{l.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Pesan Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door Palembang–Curup</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) atau Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Berangkat 10.00 & 19.00 WIB</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Sopir berpengalaman</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm mb-2 transition-all">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=palembang-curup"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm transition-all"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
                🎫 Pesan Tiket Online
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
    </>
  );
}
