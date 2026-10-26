import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MapSection from '@/components/MapSection';
import RouteSearchCard from '@/components/RouteSearchCard';
import AutoCarousel from '@/components/AutoCarousel';
import RevealObserver from '@/components/RevealObserver';
import StatsBar from '@/components/StatsBar';
import GlowObserver from '@/components/GlowObserver';
import { HeroAuth } from '@/components/AuthButtons';
import CustomerReviewsCard from '@/components/CustomerReviewsCard';

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel Antar Jemput & Sewa Bus Wisata Bengkulu',
  description:
    'RPM Travel Curup melayani rute door to door Curup–Palembang - Bengkulu & Curup–Lebong setiap hari. Armada Hiace & Innova terawat, pengemudi berlisensi. Sewa bus wisata 31 kursi all-in. Hubungi 085282828005.',
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel';

const services = [
  {
    title: 'Travel Curup – Palembang',
    description: 'Berangkat dari depan rumah Anda di Curup, tiba langsung di tujuan Palembang. Armada Hiace & Innova ber-AC, berangkat setiap hari.',
    href: '/travel-curup-palembang',
    pesanHref: '/pesan?paket=curup-palembang',
    badge: '🔥 Terlaris',
    price: 'Rp 250.000/pax',
    image: '/images/hiace/exterior.jpg',
    emoji: '🚐',
  },
  {
    title: 'Travel Palembang – Curup',
    description: 'Pulang ke Curup dari Palembang tanpa repot cari angkutan. Dijemput di titik Anda, diantar sampai ke tujuan di Curup dan sekitarnya.',
    href: '/travel-palembang-curup',
    pesanHref: '/pesan?paket=palembang-curup',
    price: 'Rp 250.000/pax',
    image: '/images/innova/exterior.jpg',
    emoji: '🚗',
  },
  {
    title: 'Travel Curup – Lebong',
    description: 'Rute harian Curup–Lebong yang praktis dan terjangkau. Armada Hiace & Innova siap mengantarkan Anda setiap hari tanpa perlu nunggu lama.',
    href: '/travel-curup-lebong',
    pesanHref: '/pesan?paket=curup-lebong',
    badge: '💸 Hemat',
    price: 'Rp 60.000/pax',
    image: '/images/innova/allarmada.jpg',
    emoji: '🚙',
  },
  {
    title: 'Sewa Bus Wisata',
    description: 'Bus 31 kursi khusus rombongan wisata, gathering kantor, dan study tour. Sudah all-in: BBM dan sopir berpengalaman, tanpa biaya tambahan.',
    href: '/sewa-bus-wisata',
    pesanHref: '/pesan?paket=sewa-bus-wisata',
    badge: '✨ All-In',
    price: 'Rp 3.000.000/hari',
    image: '/images/bus/exterior.jpg',
    emoji: '🚌',
  },
];

const stats = [
  { value: '9+',   label: 'Tahun Beroperasi' },
  { value: '5000+', label: 'Penumpang Puas' },
  { value: '4',    label: 'Jenis Armada' },
  { value: '24/7', label: 'Siap Dihubungi' },
];

const whyUs = [
  { icon: '🚗', title: 'Antar Jemput ke Rumah',  desc: 'Tidak perlu ke terminal. Kami jemput dari depan pintu Anda dan antar sampai ke tujuan yang Anda minta.' },
  { icon: '✅', title: 'Armada Prima & Bersih',   desc: 'Hiace, Innova, dan Bus kami menjalani servis rutin berkala. Kabin selalu bersih dan siap sebelum keberangkatan.' },
  { icon: '💰', title: 'Tarif Terbuka',           desc: 'Harga yang kami sebut adalah harga yang Anda bayar. Tidak ada biaya mendadak, tidak ada potongan komisi tersembunyi.' },
  { icon: '⏰', title: 'Disiplin Berangkat',      desc: 'Kami menghargai waktu Anda. Jadwal keberangkatan kami pegang teguh agar perjalanan Anda bisa direncanakan dengan pasti.' },
  { icon: '🛡️', title: 'Pengemudi Berlisensi',   desc: 'Setiap pengemudi kami berpengalaman di rutenya, memiliki SIM resmi, dan terbiasa melayani penumpang dengan sopan.' },
  { icon: '📞', title: 'Pemesanan Kapan Saja',    desc: 'Pesan tiket pagi, siang, malam — WhatsApp kami selalu aktif 24 jam untuk konfirmasi jadwal dan ketersediaan kursi.' },
];

const cars = [
  {
    name: 'Toyota Hiace',
    type: 'Van · 12–15 Penumpang',
    desc: 'Tulang punggung rute Curup–Palembang. Kabin tinggi memberi ruang kepala lebih lega, AC double blower menjangkau seluruh baris, dan bagasi ekstra luas untuk koper besar.',
    img: '/images/hiace/exterior.jpg',
    specs: ['12–15 Penumpang', 'AC Double Blower', 'Bagasi Ekstra'],
  },
  {
    name: 'Hiace Premium',
    type: 'MPV Premium · 8-11 Penumpang',
    desc: 'Pilihan premium untuk semua rute. Suspensi halus terasa nyaman di jalan berliku Bengkulu, kursi ergonomis, dan kabin kedap suara untuk perjalanan yang lebih tenang.',
    img: '/images/hiace/all-armada.jpg',
    specs: ['8-11 Penumpang', 'Suspensi Premium', 'Kabin Lega'],
    featured: true,
  },
  {
    name: 'Toyota Innova',
    type: 'MPV · 7 Penumpang',
    desc: 'Andalan rute Curup–Lebong yang hemat dan nyaman. Konsumsi BBM efisien, kabin cukup lapang untuk perjalanan harian, cocok bagi Anda yang rutin bolak-balik.',
    img: '/images/innova/allarmada.jpg',
    specs: ['7 Penumpang', 'Irit BBM', 'Harga Hemat'],
  },
  {
    name: 'Bus Pariwisata',
    type: 'Bus · 31 Penumpang',
    desc: 'Solusi transportasi rombongan terlengkap di Curup. Cocok untuk wisata keluarga besar, gathering perusahaan, dan study tour sekolah. BBM dan sopir sudah termasuk dalam paket.',
    img: '/images/bus/luarbus.jpg',
    specs: ['31 Penumpang', 'All-In BBM', 'Sopir Profesional'],
    featured: true,
  },
];

const quick = [
  { label: 'Curup–Palembang', href: '/travel-curup-palembang', icon: '🚐', bg: 'bg-primary-50' },
  { label: 'Bengkulu–Palembang', href: '/travel-bengkulu-palembang', icon: '🚌', bg: 'bg-gold-50' },
  { label: 'Curup–Lebong', href: '/travel-curup-lebong', icon: '🚗', bg: 'bg-green-50' },
  { label: 'Sewa Bus', href: '/sewa-bus-wisata', icon: '🎉', bg: 'bg-orange-50' },
];

export default function HomePage() {
  return (
    <>
      <GlowObserver />
      <RevealObserver />

      {/* ── HERO (app-style) ── */}
      <section className="relative bg-primary-900 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[3.5rem]">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-linear-to-br from-primary-700 via-primary-800 to-primary-900" />
          <div className="blob-drift absolute -top-24 -right-20 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-gold-500/20 rounded-full blur-3xl" />
          <div className="blob-drift absolute bottom-0 -left-16 w-64 h-64 md:w-96 md:h-96 bg-primary-400/25 rounded-full blur-3xl [animation-delay:-6s]" />
        </div>

        <HeroAuth />

        <div className="relative max-w-6xl mx-auto px-4 pt-6 pb-16 md:pt-16 md:pb-28 grid md:grid-cols-2 gap-6 md:gap-14 items-center">
          <div>
            {/* Nama brand (teks saja) — menggantikan header yang disembunyikan di mobile */}
            <p className="md:hidden flex items-baseline gap-1.5 mb-3 font-[family-name:var(--font-cormorant)]" aria-label="RPM Travel">
              <span className="text-[1.7rem] font-bold tracking-widest bg-linear-to-br from-gold-500 via-gold-300 to-gold-500 bg-clip-text text-transparent">RPM</span>
              <span className="text-[1.35rem] font-semibold tracking-[0.18em] text-white">TRAVEL</span>
            </p>
            <div className="hero-in [--d:100ms] inline-flex items-center gap-2 bg-white/10 border border-white/15 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Online 24 Jam · Curup, Bengkulu
            </div>
            <h1 className="hero-in [--d:250ms] font-display text-[2rem] md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-3 md:mb-5">
              Perjalananmu <span className="shimmer-text text-gold-400">Dimulai</span> dari Depan Rumah
            </h1>
            <p className="hero-in [--d:400ms] text-gray-300 text-sm md:text-lg leading-relaxed max-w-md md:max-w-lg">
              Travel <strong className="text-white">door to door</strong> Curup · Bengkulu · Lebong · Palembang dan sewa bus wisata. Pesan tiket dalam hitungan detik.
            </p>
            <div className="hero-in [--d:550ms] hidden md:flex gap-3 mt-8">
              <Link href="/pesan" className="btn-gold text-base px-8 py-3.5">🎫 Pesan Tiket</Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa text-base px-8 py-3.5">Chat WhatsApp</a>
            </div>
          </div>

          <div className="hero-float">
            <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden ring-1 ring-gold-500/30 shadow-2xl">
              <Image
                src="/images/hiace/exterior.jpg"
                alt="Armada Toyota Hiace RPM Travel Curup"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 768px) 92vw, 45vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2">
                <div>
                  <p className="text-white font-bold text-sm">Toyota Hiace</p>
                  <p className="text-gold-300 text-xs">Armada Unggulan</p>
                </div>
                <p className="text-gold-400 font-bold text-sm">12–15 Pax</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH CARD ── */}
      <div data-rv="up" className="max-w-md md:max-w-xl mx-auto px-4">
        <RouteSearchCard />
      </div>

      {/* ── QUICK MENU ── */}
      <section className="max-w-3xl mx-auto px-4 pt-7">
        <ul className="grid grid-cols-4 gap-3">
          {quick.map((q, i) => (
            <li key={q.href} data-rv="up" style={{ '--rv-d': `${i * 100}ms` } as React.CSSProperties}>
              <Link href={q.href} className="group flex flex-col items-center gap-2 text-center active:scale-95 transition-transform">
                <span className={`w-14 h-14 md:w-20 md:h-20 ${q.bg} rounded-2xl flex items-center justify-center text-2xl md:text-4xl shadow-soft transition-transform duration-500 md:group-hover:-translate-y-2 md:group-hover:rotate-6`}>{q.icon}</span>
                <span className="text-[0.7rem] md:text-sm font-semibold text-primary-900 leading-tight">{q.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── RUTE POPULER (jalan tab demi tab saat terlihat) ── */}
      <section id="layanan" className="pt-9 scroll-mt-20">
        <div data-rv="up" className="max-w-6xl mx-auto px-4 flex items-end justify-between mb-3">
          <div>
            <p className="section-label !mb-1">Pilihan Layanan</p>
            <h2 className="font-display font-bold text-primary-900 text-xl md:text-4xl">Rute Populer</h2>
          </div>
          <Link href="/pesan" className="text-xs md:text-sm font-semibold text-gold-700">Pesan →</Link>
        </div>
        <AutoCarousel className="max-w-6xl mx-auto flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((s, i) => (
            <div key={s.href} data-rv="up" style={{ '--rv-d': `${i * 120}ms` } as React.CSSProperties} className="snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto">
              <article className="glow lift h-full bg-white rounded-3xl shadow-soft border border-primary-900/5 overflow-hidden flex flex-col">
                <Link href={s.href} className="relative block h-40 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill loading={i === 0 ? 'eager' : 'lazy'}
                    className="object-cover" quality={60} sizes="(max-width: 768px) 72vw, 25vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary-900/75 via-transparent to-transparent" />
                  {s.badge && (
                    <span className="absolute top-3 left-3 bg-gold-500 text-primary-900 text-[0.65rem] font-bold px-2.5 py-1 rounded-full">{s.badge}</span>
                  )}
                  <span className="absolute bottom-3 left-3 right-3 text-white font-display font-bold text-base leading-snug">{s.title}</span>
                </Link>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">{s.description}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-primary-900 font-bold text-sm">{s.price}</span>
                    <Link href={s.pesanHref} className="btn-gold !px-4 !py-2 text-xs">Pesan</Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </AutoCarousel>
      </section>

      {/* ── ARMADA (gambar saja, nama di atas gambar) ── */}
      <section id="armada" className="pt-6 scroll-mt-20">
        <div data-rv="up" className="max-w-6xl mx-auto px-4 mb-3">
          <p className="section-label !mb-1">Kendaraan Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-4xl">Armada RPM Travel</h2>
        </div>
        <AutoCarousel interval={2400} className="max-w-6xl mx-auto flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cars.map((car, i) => (
            <div key={car.name + i} data-rv="zoom" style={{ '--rv-d': `${i * 120}ms` } as React.CSSProperties} className="snap-start shrink-0 w-[62%] sm:w-[40%] md:w-auto">
              <div className={`glow lift relative aspect-4/3 rounded-3xl overflow-hidden bg-primary-900 shadow-soft ${car.featured ? 'ring-2 ring-gold-500' : ''}`}>
                <Image src={car.img} alt={car.name} fill loading="lazy" quality={60} className="object-cover" sizes="(max-width: 768px) 62vw, 25vw" />
                <div className="absolute inset-0 bg-linear-to-b from-primary-900/80 via-primary-900/10 to-transparent" />
                <h3 className="absolute top-3 left-4 right-4 text-white font-display font-bold text-base md:text-lg drop-shadow">{car.name}</h3>
              </div>
            </div>
          ))}
        </AutoCarousel>
      </section>

      {/* ── STATS ── */}
      <section data-rv="zoom" className="max-w-3xl mx-auto px-4 pt-4">
        <StatsBar stats={stats} />
      </section>

      {/* ── KENAPA KAMI ── */}
      <section id="kenapa-kami" className="pt-10 scroll-mt-20">
        <div data-rv="up" className="max-w-6xl mx-auto px-4 mb-4">
          <p className="section-label !mb-1">Mengapa Pilih Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-4xl">Keunggulan RPM Travel Curup</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {whyUs.map((w, i) => (
            <div key={w.title} data-rv={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'} style={{ '--rv-d': `${(i % 3) * 120}ms` } as React.CSSProperties}>
              <div className="glow reveal lift h-full flex gap-4 bg-white rounded-2xl border border-primary-900/5 shadow-soft p-4 md:p-6">
                <div className="w-12 h-12 shrink-0 bg-gold-100 rounded-2xl flex items-center justify-center text-2xl">{w.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-primary-900 text-base mb-1">{w.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-rv="zoom" className="max-w-4xl mx-auto px-4 pt-10">
        <div className="cta-glow rounded-3xl bg-linear-to-br from-gold-500 via-gold-300 to-gold-500 p-6 md:p-12 text-center shadow-gold">
          <h2 className="font-display text-xl md:text-4xl font-bold text-primary-900 mb-2">Mau Berangkat? Hubungi Kami Sekarang</h2>
          <p className="text-primary-800 mb-5 text-sm md:text-base">Tanyakan jadwal, cek ketersediaan kursi, atau langsung pesan tiket — kami siap membantu kapan saja.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa">Chat WhatsApp</a>
            <Link href="/pesan" className="btn-primary">🎫 Pesan Tiket Online</Link>
          </div>
        </div>
      </section>

      {/* ── ULASAN PELANGGAN ── */}
      <CustomerReviewsCard />

      {/* ── MAPS ── */}
      <section className="pt-10 pb-4" id="kontak-peta">
        <div data-rv="up" className="max-w-4xl mx-auto px-4">
          <p className="section-label !mb-1">Lokasi Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-4xl mb-1">Kantor RPM Travel Curup</h2>
          <p className="text-gray-500 text-xs md:text-sm mb-4">Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu 39119</p>
          <div className="rounded-3xl overflow-hidden shadow-soft border border-primary-900/5">
            <MapSection />
          </div>
          <div className="text-center mt-4">
            <a href="https://share.google/nhQgSmsBuE5taP7H1" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-900 hover:text-gold-600 font-semibold text-sm transition-colors">
              📍 Buka di Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
