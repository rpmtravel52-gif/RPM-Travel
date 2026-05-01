import type { Metadata } from 'next';
import Image from 'next/image';
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
      {/* FIX LCP: Hero section sekarang berisi gambar di dalamnya, tampil di mobile & desktop */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Palembang – Curup</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10">
            {/* Teks hero — desktop kiri, mobile bawah */}
            <div className="order-last lg:order-first">
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
                <Link
                  href="/pesan?paket=palembang-curup"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}>
                  <span className="relative z-10">🎫 Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animationName: 'shimmer', animationDuration: '2.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }} />
                </Link>
              </div>
            </div>

            {/* Gambar hero — mobile tampil duluan */}
            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/images/hiace/innova-hiace.jpg"
                  alt="Armada Toyota Hiace dan Innova RPM Travel Palembang Curup"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                Armada Toyota Hiace &amp; Innova RPM Travel — tersedia dua jadwal harian untuk rute Palembang–Curup.
              </p>
            </div>
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
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />

          {/* ── GAMBAR EXTERIOR — pakai width/height eksplisit, bukan fill ── */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
            <Image
              src="/images/hiace/exterior.jpg"
              alt="Eksterior Toyota Hiace RPM Travel Palembang Curup"
              width={896}
              height={420}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <p className="text-center text-xs text-gray-400 py-2">
              Eksterior Armada Hiace — Luas &amp; Bertenaga
            </p>
          </div>

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

                {/* ── GAMBAR INTERIOR — pakai width/height eksplisit, bukan fill ── */}
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 my-2">
                  <Image
                    src="/images/hiace/interior.jpg"
                    alt="Interior kabin Toyota Hiace RPM Travel — nyaman untuk perjalanan Palembang Curup"
                    width={600}
                    height={340}
                    className="w-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <p className="text-center text-xs text-gray-400 py-2">
                    Interior Kabin Hiace — Tinggi, Lega &amp; Ber-AC
                  </p>
                </div>

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
              <Link
                href="/pesan?paket=palembang-curup"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 16px rgba(201,168,76,0.4)' }}>
                <span className="relative z-10">🎫 Pesan Tiket Online</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 2.5s infinite ease-in-out' }} />
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes shimmer{0%{transform:translateX(-100%) skewX(-20deg)}100%{transform:translateX(300%) skewX(-20deg)}}`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
    </>
  );
}
