import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MapSection from '@/components/MapSection';
import RouteSearchCard from '@/components/RouteSearchCard';
import GlowObserver from '@/components/GlowObserver';

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
    name: 'Toyota Hiace',
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

      {/* ── HERO (app-style) ── */}
      <section className="relative bg-primary-900 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[3.5rem]">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-linear-to-br from-primary-700 via-primary-800 to-primary-900" />
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-64 h-64 bg-primary-400/25 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-6 pb-16 md:pb-20 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Online 24 Jam · Curup, Bengkulu
            </div>
            <h1 className="font-display text-[2rem] md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-3">
              Perjalananmu <span className="text-gold-400">Dimulai</span> dari Depan Rumah
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
              Travel <strong className="text-white">door to door</strong> Curup · Bengkulu · Lebong · Palembang dan sewa bus wisata. Pesan tiket dalam hitungan detik.
            </p>
          </div>

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
      </section>

      {/* ── SEARCH CARD ── */}
      <div className="max-w-md md:max-w-xl mx-auto px-4">
        <RouteSearchCard />
      </div>

      {/* ── QUICK MENU ── */}
      <section className="max-w-3xl mx-auto px-4 pt-7">
        <ul className="grid grid-cols-4 gap-3">
          {quick.map((q) => (
            <li key={q.href}>
              <Link href={q.href} className="flex flex-col items-center gap-2 text-center active:scale-95 transition-transform">
                <span className={`w-14 h-14 ${q.bg} rounded-2xl flex items-center justify-center text-2xl shadow-soft`}>{q.icon}</span>
                <span className="text-[0.7rem] font-semibold text-primary-900 leading-tight">{q.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── RUTE POPULER (scroll horizontal di mobile) ── */}
      <section id="layanan" className="pt-9 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 flex items-end justify-between mb-3">
          <div>
            <p className="section-label !mb-1">Pilihan Layanan</p>
            <h2 className="font-display font-bold text-primary-900 text-xl md:text-3xl">Rute Populer</h2>
          </div>
          <Link href="/pesan" className="text-xs font-semibold text-gold-700">Pesan →</Link>
        </div>
        <div className="max-w-6xl mx-auto flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((s, i) => (
            <article key={s.href} className="glow snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto bg-white rounded-3xl shadow-soft border border-primary-900/5 overflow-hidden flex flex-col">
              <Link href={s.href} className="relative block h-40">
                <Image src={s.image} alt={s.title} fill priority={false} loading={i === 0 ? 'eager' : 'lazy'}
                  className="object-cover" sizes="(max-width: 768px) 72vw, 25vw" />
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
          ))}
        </div>
      </section>

      {/* ── ARMADA ── */}
      <section id="armada" className="pt-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 mb-3">
          <p className="section-label !mb-1">Kendaraan Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-3xl">Armada RPM Travel</h2>
        </div>
        <div className="max-w-6xl mx-auto flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cars.map((car, i) => (
            <div key={car.name + i} className={`glow snap-start shrink-0 w-[78%] sm:w-[48%] md:w-auto bg-white rounded-3xl shadow-soft overflow-hidden ${car.featured ? 'ring-2 ring-gold-500' : 'border border-primary-900/5'}`}>
              <div className="relative h-36 bg-primary-900">
                <Image src={car.img} alt={car.name} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 78vw, 25vw" />
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/70 to-transparent" />
                {car.featured && <span className="absolute top-3 left-3 bg-gold-500 text-primary-900 text-[0.65rem] font-bold px-2.5 py-1 rounded-full">⭐ Unggulan</span>}
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-primary-900 text-base">{car.name}</h3>
                <p className="text-gold-600 text-xs font-semibold mb-2">{car.type}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{car.desc}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {car.specs.map((sp) => (
                    <span key={sp} className="bg-cream-100 text-primary-900 text-[0.65rem] font-semibold px-2 py-1 rounded-full">{sp}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-3xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-4 bg-primary-900 rounded-3xl py-4 shadow-lift">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-1">
              <p className="text-gold-400 font-bold text-lg">{s.value}</p>
              <p className="text-gray-400 text-[0.6rem] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KENAPA KAMI ── */}
      <section id="kenapa-kami" className="pt-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 mb-4">
          <p className="section-label !mb-1">Mengapa Pilih Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-3xl">Keunggulan RPM Travel Curup</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyUs.map((w) => (
            <div key={w.title} className="glow reveal flex gap-4 bg-white rounded-2xl border border-primary-900/5 shadow-soft p-4">
              <div className="w-12 h-12 shrink-0 bg-gold-100 rounded-2xl flex items-center justify-center text-2xl">{w.icon}</div>
              <div>
                <h3 className="font-display font-bold text-primary-900 text-base mb-1">{w.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 pt-10">
        <div className="rounded-3xl bg-linear-to-br from-gold-500 to-gold-300 p-6 md:p-10 text-center shadow-gold">
          <h2 className="font-display text-xl md:text-3xl font-bold text-primary-900 mb-2">Mau Berangkat? Hubungi Kami Sekarang</h2>
          <p className="text-primary-800 mb-5 text-sm">Tanyakan jadwal, cek ketersediaan kursi, atau langsung pesan tiket — kami siap membantu kapan saja.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa">Chat WhatsApp</a>
            <Link href="/pesan" className="btn-primary">🎫 Pesan Tiket Online</Link>
          </div>
        </div>
      </section>

      {/* ── MAPS ── */}
      <section className="pt-10 pb-4" id="kontak-peta">
        <div className="max-w-4xl mx-auto px-4">
          <p className="section-label !mb-1">Lokasi Kami</p>
          <h2 className="font-display font-bold text-primary-900 text-xl md:text-3xl mb-1">Kantor RPM Travel Curup</h2>
          <p className="text-gray-500 text-xs mb-4">Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu 39119</p>
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
