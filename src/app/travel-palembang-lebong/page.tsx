import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Palembang Lebong Hiace & Innova | RPM Travel Curup',
  description:
    'Layanan travel Palembang ke Lebong menggunakan Toyota Hiace dan Innova. Berangkat pukul 07.00 pagi dan 19.00 malam setiap hari. Door to door langsung ke tujuan di Kabupaten Lebong, Bengkulu. Hubungi 085282828005.',
  keywords: [
    'travel palembang lebong',
    'travel palembang ke lebong',
    'travel palembang lebong hiace',
    'jadwal travel palembang lebong',
    'travel palembang kabupaten lebong',
    'travel palembang lebong bengkulu',
    'agen travel palembang lebong terpercaya',
    'travel palembang lebong door to door',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/travel-palembang-lebong' },
  openGraph: {
    title: 'Travel Palembang Lebong Hiace & Innova | RPM Travel',
    description: 'Travel Palembang–Lebong berangkat 07.00 & 19.00 WIB. Hiace dan Innova, door to door ke Kabupaten Lebong.',
    url: 'https://rpmtravel.co.id/travel-palembang-lebong',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Lebong';

const schedules = [
  { jam: '07.00 WIB', label: 'Keberangkatan Subuh', icon: '🌄', note: 'Tiba di Lebong estimasi sore hari' },
  { jam: '19.00 WIB', label: 'Keberangkatan Malam', icon: '🌙', note: 'Tiba di Lebong estimasi pagi hari' },
];

const armada = [
  {
    nama: 'Toyota Hiace', kapasitas: '14 Penumpang', icon: '🚐',
    fitur: ['Kabin tinggi & lapang', 'Bagasi besar untuk koper', 'AC double blower', 'Cocok rombongan'],
    badge: 'Kapasitas Besar',
  },
  {
    nama: 'Toyota Innova', kapasitas: '7 Penumpang', icon: '🚗',
    fitur: ['Suspensi nyaman di medan pegunungan', 'Kabin bersih & terawat', 'AC sejuk optimal', 'Pilihan keluarga kecil'],
    badge: 'Nyaman & Andal',
  },
];

const faqs = [
  { q: 'Berapa lama perjalanan Palembang ke Lebong?', a: 'Estimasi perjalanan dari Palembang ke Lebong sekitar 10–12 jam. Perjalanan melewati jalur lintas Sumatera kemudian masuk ke jalan pegunungan menuju Lebong yang membutuhkan kehati-hatian ekstra dari sopir.' },
  { q: 'Mengapa ada jadwal keberangkatan pukul 07.00 pagi?', a: 'Jadwal pagi pukul 07.00 memungkinkan penumpang tiba di Lebong menjelang sore hari, sehingga masih ada waktu untuk beristirahat atau langsung menuju tujuan akhir. Ini sangat cocok untuk perjalanan yang perlu tiba di Lebong di siang atau sore hari.' },
  { q: 'Apakah bisa diantarkan ke kecamatan tertentu di Lebong?', a: 'Ya, kami berusaha mengantarkan penumpang sedekat mungkin ke tujuan akhir di wilayah Kabupaten Lebong. Informasikan tujuan spesifik Anda saat memesan agar kami bisa mempersiapkan rute terbaik.' },
  { q: 'Apakah perlu bayar lebih untuk perjalanan subuh?', a: 'Harga tiket sama untuk semua jadwal keberangkatan. Hubungi kami untuk informasi harga terkini dan ketersediaan kursi di jadwal yang Anda inginkan.' },
  { q: 'Apakah keberangkatan malam aman melewati pegunungan Lebong?', a: 'Sopir kami sangat berpengalaman dan hafal setiap jalur, termasuk jalan malam hari menuju Lebong. Armada kami juga dilengkapi lampu yang memadai dan selalu dalam kondisi prima.' },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export default function TravelPalembangLebongPage() {
  return (
    <>
      {/* Shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer-slide {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 100%
          );
          animation: shimmer-slide 2.4s ease-in-out infinite;
        }
        .btn-shimmer:hover::after {
          animation-duration: 1.2s;
        }
      `}</style>

      {/* FIX LCP: Gambar masuk ke dalam hero section, tampil di atas teks di mobile */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Palembang – Lebong</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10">
            <div className="order-last lg:order-first">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                🚐 Hiace & Innova · Subuh & Malam
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Travel Palembang – Lebong<br />
                <span className="text-gold-400">Sampai ke Lebong Bengkulu</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Perjalanan dari Palembang menuju Kabupaten Lebong kini bisa dilakukan dengan lebih nyaman dan terpercaya bersama RPM Travel. Dua jadwal keberangkatan tersedia — pukul 07.00 subuh untuk yang ingin tiba sore hari, dan pukul 19.00 malam untuk yang ingin tiba keesokan paginya.
              </p>

              {/* CTA tunggal: Pesan Sekarang dengan efek shimmer */}
              <div className="flex items-center gap-4">
                <Link
                  href="/pesan?paket=palembang-lebong"
                  className="btn-shimmer inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
                >
                  🎫 Pesan Sekarang
                </Link>
                <p className="text-gray-400 text-xs leading-snug max-w-[140px]">
                  Isi form reservasi<br />agar kami siapkan kursi Anda
                </p>
              </div>
            </div>

            {/* Gambar hero — mobile tampil duluan */}
            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/images/hiace/exterior.jpg"
                  alt="Armada Toyota Hiace RPM Travel rute Palembang–Lebong"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Lebong' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Estimasi', value: '10–12 Jam' },
            { label: 'Jadwal', value: '07.00 & 19.00 WIB' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JADWAL */}
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
            ⚠️ Konfirmasi ketersediaan via WhatsApp. Pemesanan minimal H-1 disarankan.
          </p>
        </div>
      </section>

      {/* ARMADA */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {armada.map(a => (
              <div key={a.nama} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gold-400 hover:shadow-md transition-all relative">
                <span className="absolute top-4 right-4 bg-gold-500/20 text-gold-700 text-xs font-bold px-2.5 py-1 rounded-full">{a.badge}</span>
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
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all">
                  Pesan dengan {a.nama}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Mengapa Pilih RPM Travel untuk Rute Ini?</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Rute Palembang–Lebong tergolong perjalanan jarak jauh yang membutuhkan armada andal dan sopir berpengalaman. Medan yang dilalui mencakup jalur lintas Sumatera yang panjang dilanjutkan dengan jalan pegunungan menuju Lebong yang menuntut penguasaan jalan yang baik.</p>
                <p>RPM Travel memiliki rekam jejak melayani rute-rute panjang di Sumatera dengan penuh tanggung jawab. Setiap sopir kami telah melewati seleksi ketat dan memiliki pengalaman bertahun-tahun di jalur yang sama.</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan Umum</h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Rute Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-lebong-palembang', label: '↔ Travel Lebong – Palembang', desc: 'Rute balik dari Lebong ke Palembang' },
                  { href: '/travel-lebong-curup', label: '🗺️ Travel Lebong – Curup', desc: 'Rute lokal setiap jam' },
                  { href: '/travel-curup-lebong', label: '🔄 Travel Curup – Lebong', desc: 'Rute Curup ke Lebong harian' },
                  { href: '/travel-palembang-bengkulu', label: '🚐 Travel Palembang – Bengkulu', desc: 'Hiace Executive & Regular' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group">
                    <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">{l.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Pesan Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Palembang langsung ke Lebong</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Berangkat 07.00 & 19.00 WIB</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke Lebong</div>
              </div>
              {/* Sidebar: satu tombol saja, dengan shimmer */}
              <Link
                href="/pesan?paket=palembang-lebong"
                className="btn-shimmer flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
              >
                🎫 Pesan Tiket Online
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    </>
  );
}
