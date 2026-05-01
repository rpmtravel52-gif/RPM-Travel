import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Berapa Jam Travel Palembang ke Bengkulu? Estimasi Real Perjalanan | RPM Travel',
  description:
    'Waktu tempuh travel Palembang ke Bengkulu berkisar 10–14 jam tergantung kondisi jalan, cuaca, dan jadwal keberangkatan. Pelajari estimasi real dan tips perjalanan nyaman bersama RPM Travel.',
  keywords: [
    'berapa jam palembang ke bengkulu',
    'waktu tempuh palembang bengkulu',
    'estimasi perjalanan palembang bengkulu',
    'lama perjalanan travel palembang bengkulu',
    'travel palembang bengkulu berapa jam',
    'jam tempuh palembang bengkulu',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/berapa-jam-palembang-bengkulu' },
  openGraph: {
    title: 'Berapa Jam Travel Palembang ke Bengkulu? Estimasi Real Perjalanan | RPM Travel',
    description:
      'Waktu tempuh travel Palembang ke Bengkulu berkisar 10–14 jam. Pelajari faktor yang mempengaruhi lama perjalanan dan tips agar tetap nyaman.',
    url: 'https://rpmtravel.co.id/berapa-jam-palembang-bengkulu',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Bengkulu';

const estimasiList = [
  { kondisi: 'Kondisi Lancar', durasi: '10–11 Jam', icon: '🚗', color: 'border-green-400', badgeColor: 'bg-green-100 text-green-800' },
  { kondisi: 'Kondisi Normal', durasi: '11–13 Jam', icon: '🚙', color: 'border-gold-400', badgeColor: 'bg-yellow-100 text-yellow-800' },
  { kondisi: 'Padat / Cuaca Buruk', durasi: '13–14 Jam', icon: '🚧', color: 'border-red-400', badgeColor: 'bg-red-100 text-red-800' },
];

const faktorList = [
  {
    judul: 'Kondisi Jalan',
    icon: '🛣️',
    deskripsi:
      'Rute Palembang–Bengkulu melewati jalur lintas provinsi dengan tikungan, tanjakan, dan beberapa titik jalan sempit. Kondisi ini membuat kecepatan kendaraan tidak bisa selalu maksimal sepanjang perjalanan.',
  },
  {
    judul: 'Cuaca',
    icon: '🌧️',
    deskripsi:
      'Hujan deras dapat memperlambat perjalanan karena jalan licin, kabut di daerah pegunungan, dan jarak pandang terbatas. Faktor ini terutama berpengaruh di musim hujan.',
  },
  {
    judul: 'Sistem Door to Door',
    icon: '🏠',
    deskripsi:
      'Layanan travel menggunakan sistem jemput antar sehingga mobil akan menjemput beberapa penumpang di titik berbeda. Proses ini bisa menambah waktu sekitar 1–2 jam sebelum perjalanan utama dimulai.',
  },
  {
    judul: 'Waktu Istirahat',
    icon: '☕',
    deskripsi:
      'Driver profesional biasanya berhenti 1–2 kali untuk makan dan 1–2 kali istirahat singkat. Ini penting untuk menjaga keselamatan dan kenyamanan selama perjalanan jarak jauh.',
  },
];

const jadwalList = [
  { sesi: 'Pagi', jam: '07.00 – 09.00 WIB', icon: '🌅', catatan: 'Cocok untuk yang ingin tiba sore hari' },
  { sesi: 'Malam', jam: '19.00 – 21.00 WIB', icon: '🌙', catatan: 'Lalu lintas lebih sepi, perjalanan cenderung lebih cepat' },
];

const perbandinganSesi = [
  {
    sesi: 'Berangkat Pagi',
    icon: '🌅',
    color: 'border-yellow-400',
    kelebihan: ['Bisa menikmati pemandangan sepanjang rute', 'Suasana perjalanan lebih santai'],
    kekurangan: ['Lebih rawan kemacetan di jam sibuk'],
  },
  {
    sesi: 'Berangkat Malam',
    icon: '🌙',
    color: 'border-blue-400',
    kelebihan: ['Lalu lintas lebih sepi, perjalanan cenderung lebih cepat', 'Tiba di tujuan pada pagi hari'],
    kekurangan: ['Tidak semua orang nyaman tidur di dalam mobil'],
  },
];

const tipsList = [
  'Gunakan pakaian santai agar tidak mudah pegal',
  'Bawa bantal leher untuk menopang kepala saat istirahat',
  'Siapkan cemilan ringan untuk perjalanan',
  'Hindari makan terlalu berat sebelum berangkat',
  'Pastikan kondisi tubuh fit sebelum perjalanan dimulai',
];

const faqs = [
  {
    q: 'Apakah travel Palembang–Bengkulu berangkat setiap hari?',
    a: 'Ya, RPM Travel melayani keberangkatan setiap hari termasuk akhir pekan, dengan jadwal pagi dan malam. Konfirmasi ketersediaan kursi dapat dilakukan langsung via WhatsApp.',
  },
  {
    q: 'Apakah bisa dijemput langsung di rumah?',
    a: 'Bisa. Layanan travel RPM Travel menggunakan sistem door to door, sehingga penumpang dapat dijemput di lokasi yang disepakati tanpa perlu ke terminal.',
  },
  {
    q: 'Apakah perjalanan ini aman untuk jarak jauh?',
    a: 'Aman, selama menggunakan jasa travel terpercaya. RPM Travel mengoperasikan armada terawat dengan driver berpengalaman di rute lintas Sumatera ini.',
  },
  {
    q: 'Apakah bisa sekaligus kirim paket?',
    a: 'Umumnya bisa, tergantung ketersediaan ruang bagasi dan kebijakan saat itu. Silakan konfirmasi terlebih dahulu via WhatsApp sebelum keberangkatan.',
  },
  {
    q: 'Lebih cepat travel atau bus umum?',
    a: 'Travel cenderung lebih cepat karena tidak sering berhenti di luar jadwal, rute lebih langsung, dan driver sudah sangat hafal jalur Palembang–Bengkulu.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const articleSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Berapa Jam Travel Palembang ke Bengkulu? Ini Estimasi Real Perjalanan',
  description:
    'Waktu tempuh travel Palembang ke Bengkulu berkisar 10–14 jam tergantung kondisi jalan, cuaca, dan jadwal keberangkatan.',
  publisher: {
    '@type': 'Organization',
    name: 'RPM Travel',
    url: 'https://rpmtravel.co.id',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://rpmtravel.co.id/berapa-jam-palembang-bengkulu',
  },
});

export default function BeramaJamPalembangBengkuluPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 pt-10 pb-10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/travel-palembang-bengkulu" className="hover:text-gold-300 transition-colors">Travel Palembang – Bengkulu</Link>
            <span>/</span>
            <span className="text-gray-400">Berapa Jam Palembang ke Bengkulu</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            ⏱️ Panduan Estimasi Waktu Perjalanan
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Berapa Jam Travel Palembang ke Bengkulu?<br />
            <span className="text-gold-400">Ini Estimasi Real Perjalanan</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Banyak calon penumpang ingin tahu pasti: berapa jam perjalanan travel Palembang–Bengkulu? Pertanyaan ini penting untuk mengatur jadwal keberangkatan, istirahat, dan kebutuhan lainnya. Secara umum, waktu tempuh berkisar antara <strong className="text-gold-300">10 hingga 14 jam</strong>, tergantung kondisi di lapangan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}
            >
              <span className="relative z-10">📲 Pesan via WhatsApp</span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                style={{ animation: 'shimmer 2.5s infinite ease-in-out' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Bengkulu' },
            { label: 'Estimasi Minimum', value: '10 Jam' },
            { label: 'Estimasi Maksimum', value: '14 Jam' },
            { label: 'Jadwal', value: 'Pagi & Malam' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estimasi Waktu */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Estimasi Waktu Perjalanan Palembang – Bengkulu</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-4" />
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Berikut gambaran realistis waktu tempuh berdasarkan kondisi perjalanan yang umum terjadi di lapangan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {estimasiList.map(item => (
              <div key={item.kondisi} className={`border-2 ${item.color} rounded-2xl p-6 text-center`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>{item.kondisi}</span>
                <p className="font-display font-bold text-primary-900 text-2xl mt-4">{item.durasi}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mt-6">
            ⚠️ Angka di atas bukan patokan mutlak. Beberapa faktor bisa membuat perjalanan lebih cepat atau lebih lama dari estimasi.
          </p>
        </div>
      </section>

      {/* Jadwal Keberangkatan */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {jadwalList.map(s => (
              <div key={s.sesi} className="flex items-center gap-4 bg-primary-900 rounded-2xl p-5">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">Keberangkatan {s.sesi}</p>
                  <p className="text-white font-display font-bold text-xl">{s.jam}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.catatan}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Konfirmasi ketersediaan kursi via WhatsApp sebelum keberangkatan, terutama untuk jadwal malam yang sering penuh lebih cepat.
          </p>
        </div>
      </section>

      {/* Faktor yang Mempengaruhi */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Faktor yang Mempengaruhi Lama Perjalanan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faktorList.map(f => (
              <div key={f.judul} className="border border-gray-100 rounded-2xl p-6 bg-cream-50">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display text-lg font-bold text-primary-900 mb-2">{f.judul}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagi vs Malam */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilih Berangkat Pagi atau Malam?</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perbandinganSesi.map(s => (
              <div key={s.sesi} className={`border-2 ${s.color} rounded-2xl p-6`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-display text-lg font-bold text-primary-900 mb-4">{s.sesi}</h3>
                <div className="mb-3">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Kelebihan</p>
                  <ul className="space-y-1">
                    {s.kelebihan.map(k => (
                      <li key={k} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold mt-0.5">✓</span> {k}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Kekurangan</p>
                  <ul className="space-y-1">
                    {s.kekurangan.map(k => (
                      <li key={k} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 font-bold mt-0.5">✗</span> {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Perjalanan */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Tips agar Perjalanan 10–14 Jam Tetap Nyaman</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tipsList.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-gold-500 font-bold mt-0.5">💡</span>
                <p className="text-sm text-gray-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Link */}
      <section className="py-10 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Travel Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/travel-palembang-bengkulu"
              className="flex items-center gap-3 border border-gold-300 bg-white rounded-xl px-5 py-4 hover:border-gold-500 transition-colors"
            >
              <span className="text-2xl">🚐</span>
              <div>
                <p className="font-semibold text-primary-900 text-sm">Travel Palembang – Bengkulu</p>
                <p className="text-gray-400 text-xs">Lihat armada, jadwal & cara pesan</p>
              </div>
            </Link>
            <Link
              href="/travel-bengkulu-palembang"
              className="flex items-center gap-3 border border-gold-300 bg-white rounded-xl px-5 py-4 hover:border-gold-500 transition-colors"
            >
              <span className="text-2xl">🔁</span>
              <div>
                <p className="font-semibold text-primary-900 text-sm">Travel Bengkulu – Palembang</p>
                <p className="text-gray-400 text-xs">Rute sebaliknya, estimasi waktu sama</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + Sidebar */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pertanyaan Umum</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
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
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Pesan Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Jemput depan rumah (door to door)</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Armada Hiace terawat & nyaman</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Driver berpengalaman di rute ini</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-sm mb-2"
              >
                Chat WhatsApp
              </a>
              <Link
                href="/travel-palembang-bengkulu"
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 16px rgba(201,168,76,0.4)' }}
              >
                <span className="relative z-10">🎫 Lihat Detail Layanan</span>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                  style={{ animation: 'shimmer 2.5s infinite ease-in-out' }}
                />
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes shimmer{0%{transform:translateX(-100%) skewX(-20deg)}100%{transform:translateX(300%) skewX(-20deg)}}`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />
    </>
  );
}
