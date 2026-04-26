import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Lebong Curup Setiap Jam | Hiace & Innova RPM Travel',
  description:
    'Travel Lebong ke Curup dengan Toyota Hiace dan Innova. Berangkat setiap jam dari pagi hingga sore hari. Rute tercepat Lebong–Curup, antar jemput door to door. Hubungi RPM Travel 085282828005.',
  keywords: [
    'travel lebong curup',
    'travel lebong curup setiap jam',
    'travel lebong ke curup',
    'angkutan lebong curup',
    'travel lebong curup murah',
    'travel lebong curup terpercaya',
    'travel lebong rejang lebong',
    'jasa travel lebong curup hiace innova',
  ],
  alternates: { canonical: '/travel-lebong-curup' },
  openGraph: {
    title: 'Travel Lebong Curup Setiap Jam | RPM Travel',
    description: 'Travel Lebong–Curup berangkat setiap jam. Armada Hiace dan Innova, harga terjangkau, door to door.',
    url: 'https://rpmtravel.co.id/travel-lebong-curup',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Lebong%E2%80%93Curup';

const jamBerangkat = [
  '06.00', '07.00', '08.00', '09.00', '10.00',
  '11.00', '12.00', '13.00', '14.00', '15.00',
  '16.00', '17.00',
];

const armada = [
  {
    nama: 'Toyota Hiace',
    kapasitas: '14 Penumpang',
    icon: '🚐',
    fitur: ['Kapasitas besar untuk rombongan', 'Kabin lega & nyaman', 'AC sejuk sepanjang perjalanan', 'Bagasi cukup untuk barang banyak'],
    badge: 'Rombongan',
  },
  {
    nama: 'Toyota Innova',
    kapasitas: '7 Penumpang',
    icon: '🚗',
    fitur: ['Nyaman di medan pegunungan', 'Suspensi halus & responsif', 'AC dingin optimal', 'Favorit perjalanan harian'],
    badge: 'Harian',
  },
];

const keunggulan = [
  { icon: '🕐', title: 'Berangkat Setiap Jam', desc: 'Tidak perlu menunggu lama. Tersedia keberangkatan hampir setiap jam dari pagi hingga sore.' },
  { icon: '💰', title: 'Tarif Terjangkau', desc: 'Harga bersahabat untuk perjalanan harian Lebong–Curup tanpa mengorbankan kenyamanan.' },
  { icon: '🏠', title: 'Door to Door', desc: 'Dijemput dan diantarkan langsung ke alamat tujuan tanpa perlu ke pool travel.' },
  { icon: '👨‍✈️', title: 'Sopir Lokal Berpengalaman', desc: 'Pengemudi sangat hafal jalan Lebong–Curup, termasuk jalur alternatif saat kondisi tertentu.' },
];

const faqs = [
  {
    q: 'Berapa lama perjalanan dari Lebong ke Curup?',
    a: 'Perjalanan Lebong–Curup membutuhkan waktu sekitar 1,5 hingga 2,5 jam tergantung kondisi jalan dan lalu lintas. Rute melewati jalan pegunungan yang cukup berkelok namun pemandangannya sangat indah.',
  },
  {
    q: 'Apakah benar-benar tersedia setiap jam?',
    a: 'Ya, kami beroperasi hampir setiap jam dari pukul 06.00 hingga 17.00 WIB. Namun ketersediaan armada tiap jam bergantung pada kondisi hari. Konfirmasi terlebih dahulu via WhatsApp untuk jadwal yang paling sesuai.',
  },
  {
    q: 'Apakah bisa pesan mendadak di hari yang sama?',
    a: 'Ya, pemesanan mendadak bisa dilakukan selama masih ada kursi tersedia. Hubungi kami via WhatsApp dan kami akan mengecek ketersediaan segera.',
  },
  {
    q: 'Bagaimana jika penumpang hanya satu orang?',
    a: 'Tidak masalah. Kami melayani penumpang tunggal dengan sistem berbagi kursi bersama penumpang lain dalam satu armada yang berangkat bersamaan.',
  },
  {
    q: 'Apakah ada layanan antar ke Curup Kota maupun desa sekitarnya?',
    a: 'Ya, kami mengantarkan ke berbagai titik di Curup dan area Rejang Lebong sesuai tujuan penumpang. Informasikan alamat lengkap tujuan Anda saat memesan.',
  },
];

export default function TravelLebongCurupPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Lebong – Curup</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🕐 Berangkat Setiap Jam · Hiace & Innova
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Lebong – Curup<br />
            <span className="text-gold-400">Berangkat Setiap Jam, Harga Hemat</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Perlu ke Curup dari Lebong? Tidak perlu menunggu lama. RPM Travel melayani rute Lebong–Curup dengan armada Toyota Hiace dan Innova yang siap berangkat hampir setiap jam dari pagi hingga sore hari. Harga terjangkau, nyaman, dan langsung ke tujuan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/pesan?paket=lebong-curup"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
              🎫 Pesan Tiket Online
            </Link>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Lebong → Curup' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Estimasi', value: '1,5–2,5 Jam' },
            { label: 'Frekuensi', value: 'Setiap Jam' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JADWAL GRID */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan dari Lebong</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-500 text-sm mb-5">Armada berangkat hampir setiap jam dari pagi hingga sore. Pilih waktu yang paling sesuai dengan kebutuhan Anda.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-5">
            {jamBerangkat.map(jam => (
              <div key={jam}
                className="text-center bg-primary-900 hover:bg-primary-800 rounded-xl py-3 px-2 transition-all cursor-default">
                <p className="text-gold-400 font-display font-bold text-lg">{jam}</p>
                <p className="text-gray-500 text-xs">WIB</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Ketersediaan armada setiap jam dapat berubah. Konfirmasi via WhatsApp untuk jadwal terkini dan ketersediaan kursi.
          </p>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Keunggulan Layanan Lebong–Curup</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keunggulan.map(k => (
              <div key={k.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gold-400 hover:shadow-md transition-all flex gap-4">
                <span className="text-3xl flex-shrink-0">{k.icon}</span>
                <div>
                  <h3 className="font-bold text-primary-900 text-base mb-1">{k.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARMADA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {armada.map(a => (
              <div key={a.nama} className="border border-gray-200 rounded-2xl p-6 hover:border-gold-400 hover:shadow-md transition-all relative">
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
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan Umum</h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-white">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Rute Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-curup-lebong', label: '↔ Travel Curup – Lebong', desc: 'Rute balik dari Curup ke Lebong' },
                  { href: '/travel-lebong-palembang', label: '🚐 Travel Lebong – Palembang', desc: 'Jam 10.00 & 16.00 WIB' },
                  { href: '/travel-palembang-lebong', label: '🔄 Travel Palembang – Lebong', desc: 'Jam 07.00 & 19.00 WIB' },
                  { href: '/sewa-hiace-curup', label: '🔑 Sewa Hiace Curup', desc: 'Rp 1.800.000/hari all-in' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 bg-white rounded-xl p-3 transition-all group">
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
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Berangkat setiap jam</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke Curup</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Harga terjangkau</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm mb-2 transition-all">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=lebong-curup"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
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
