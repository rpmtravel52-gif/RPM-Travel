import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel Antar Jemput & Sewa Bus Wisata Bengkulu',
  description:
    'RPM Travel Curup melayani rute door to door Curup–Palembang & Curup–Lebong setiap hari. Armada Hiace & Innova terawat, pengemudi berlisensi. Sewa bus wisata 31 kursi all-in. Hubungi 085282828005.',
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
  { value: '3+',   label: 'Tahun Beroperasi' },
  { value: '500+', label: 'Penumpang Puas' },
  { value: '4',    label: 'Pilihan Armada' },
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
    name: 'Toyota Innova',
    type: 'MPV Premium · 7 Penumpang',
    desc: 'Pilihan premium untuk semua rute. Suspensi halus terasa nyaman di jalan berliku Bengkulu, kursi ergonomis, dan kabin kedap suara untuk perjalanan yang lebih tenang.',
    img: '/images/innova/exterior.jpg',
    specs: ['7 Penumpang', 'Suspensi Premium', 'Kabin Lega'],
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
    img: '/images/bus/exterior.jpg',
    specs: ['31 Penumpang', 'All-In BBM', 'Sopir Profesional'],
    featured: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-400/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Siap Melayani 24 Jam · Curup, Bengkulu
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Travel <br />
              <span className="text-gold-400">Andal &</span><br />
              Terjangkau
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              RPM Travel Curup melayani rute{' '}
              <strong className="text-white">door to door antarkota</strong> dengan armada yang terawat dan pengemudi berlisensi.
              Pilihan utama warga Curup untuk rute Palembang, Lebong, dan sewa bus wisata rombongan.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-wa text-base px-7 py-3.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan via WhatsApp
              </a>
              <Link href="#layanan"
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all inline-flex items-center gap-2">
                Lihat Layanan
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
                <div className="w-60 h-60 bg-gold-500/15 rounded-full flex items-center justify-center border border-gold-500/30">
                  <div className="text-center">
                    <div className="text-8xl mb-2 leading-none">🚐</div>
                    <p className="text-gold-300 font-semibold text-sm">Armada Kami</p>
                    <p className="text-white text-xs mt-1">Hiace · Innova · Avanza · Bus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-gold-400 font-bold text-xl">{s.value}</p>
                <p className="text-gray-400 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAYANAN ── */}
      <section id="layanan" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">Pilihan Layanan Kami</p>
            <h2 className="section-title">Layanan RPM Travel Curup</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Dari perjalanan pribadi antarkota hingga sewa bus untuk rombongan besar, RPM Travel Curup siap melayani kebutuhan transportasi Anda setiap hari.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ARMADA ── */}
      <section id="armada" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">Kendaraan Kami</p>
            <h2 className="section-title">Armada RPM Travel</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Setiap kendaraan menjalani perawatan berkala dan pengecekan sebelum keberangkatan, sehingga perjalanan Anda aman dan nyaman dari awal hingga tujuan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <div
                key={car.name}
                className={`card overflow-hidden relative group ${car.featured ? 'ring-2 ring-gold-500' : ''}`}
              >
                {car.featured && (
                  <span className="absolute top-3 left-3 z-10 bg-gold-500 text-primary-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    ⭐ Unggulan
                  </span>
                )}
                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-primary-900">
                  {car.img ? (
                    <Image
                      src={car.img}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 flex-wrap">
                    {car.specs.map((sp) => (
                      <span key={sp} className="bg-white/90 text-primary-900 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-primary-900 text-lg mb-0.5">{car.name}</h3>
                  <p className="text-gold-600 text-xs font-semibold mb-2">{car.type}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KENAPA KAMI ── */}
      <section id="kenapa-kami" className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Mengapa Pilih Kami</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Keunggulan RPM Travel Curup
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mx-auto mt-3 mb-4" />
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Lebih dari sekadar jasa antar-jemput — kami hadir untuk memastikan setiap perjalanan Anda terasa mudah, aman, dan tepat waktu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-white/10 rounded-2xl p-6 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-500/20 transition-colors">
                  {w.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Mau Berangkat? Hubungi Kami Sekarang
          </h2>
          <p className="text-primary-800 mb-8 text-sm">
            Tanyakan jadwal, cek ketersediaan kursi, atau langsung pesan tiket via WhatsApp — kami siap membantu kapan saja.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
            <Link href="/pesan"
              className="bg-primary-900 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-primary-800 transition-colors inline-flex items-center gap-2">
              🎫 Pesan Tiket Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── MAPS ── */}
      <section className="py-20 bg-cream-50" id="kontak-peta">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-label">Lokasi Kami</p>
            <h2 className="section-title">Kantor RPM Travel Curup</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-gray-500 text-sm mt-1">Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu 39119</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.8!2d102.5167!3d-3.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e37c3b2b1111111%3A0x1!2sTalang+Benih%2C+Curup!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor RPM Travel Curup"
            />
          </div>
          <div className="text-center mt-5">
            <a
              href="https://share.google/nhQgSmsBuE5taP7H1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-900 hover:text-gold-600 font-semibold text-sm transition-colors"
            >
              📍 Buka di Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
