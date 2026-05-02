import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Berapa Jam Palembang ke Curup? Estimasi Waktu & Rute 2026',
  description:
    'Perjalanan Palembang ke Curup memakan waktu 8–10 jam via jalur Muara Enim–Lahat. Simak estimasi waktu, perbandingan travel vs bus, dan tips agar perjalanan lebih nyaman bersama RPM Travel.',
  keywords: [
    'berapa jam palembang ke curup',
    'curup ke palembang berapa jam',
    'lama perjalanan palembang curup',
    'travel palembang curup waktu tempuh',
    'rute palembang curup',
    'jarak palembang curup berapa jam',
    'estimasi perjalanan palembang curup',
    'travel palembang curup door to door',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/berapa-jam-palembang-curup' },
  openGraph: {
    title: 'Berapa Jam Palembang ke Curup? Estimasi Waktu & Rute 2026',
    description:
      'Estimasi perjalanan Palembang–Curup 8–10 jam via Muara Enim dan Lahat. Pilih travel door to door untuk kenyamanan terbaik.',
    url: 'https://rpmtravel.co.id/berapa-jam-palembang-curup',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Curup';

const routeStages = [
  {
    from: 'Palembang',
    to: 'Muara Enim',
    desc: 'Jalan relatif mulus dan lebar, lalu lintas sedang',
    icon: '🟢',
  },
  {
    from: 'Muara Enim',
    to: 'Lahat',
    desc: 'Masuk jalur lintas Sumatera, mulai sedikit berbukit',
    icon: '🟡',
  },
  {
    from: 'Lahat',
    to: 'Curup',
    desc: 'Jalur berkelok dan naik-turun pegunungan, butuh ekstra hati-hati',
    icon: '🔴',
  },
];

const jadwalComparison = [
  {
    waktu: 'Berangkat Pagi',
    icon: '🌅',
    jam: '±10.00 WIB',
    estimasiTiba: 'Sore hari',
    keunggulan: ['Lebih aman & terang', 'Cocok keluarga dengan anak', 'Pemandangan jalur indah terlihat'],
  },
  {
    waktu: 'Berangkat Malam',
    icon: '🌙',
    jam: '±19.00 WIB',
    estimasiTiba: 'Dini hari',
    keunggulan: ['Jalan lebih sepi', 'Bisa lebih cepat jika lancar', 'Hemat waktu siang hari'],
  },
];

const faqs = [
  {
    q: 'Berapa jam perjalanan dari Palembang ke Curup?',
    a: 'Secara umum, perjalanan Palembang ke Curup memakan waktu 8 hingga 10 jam. Durasi ini bisa lebih singkat jika kondisi jalan sangat lancar dan tidak banyak berhenti.',
  },
  {
    q: 'Curup ke Palembang berapa jam?',
    a: 'Rute sebaliknya, dari Curup ke Palembang, membutuhkan waktu yang kurang lebih sama, yakni sekitar 8–10 jam tergantung kondisi lalu lintas dan cuaca.',
  },
  {
    q: 'Apakah perjalanan malam lebih cepat?',
    a: 'Umumnya iya, karena lalu lintas lebih sepi di malam hari. Namun, sopir tetap harus berhati-hati di jalur pegunungan Lahat–Curup yang berkelok.',
  },
  {
    q: 'Apakah bisa kurang dari 8 jam?',
    a: 'Bisa, jika kondisi jalan sangat lancar, minim berhenti, dan tidak ada hambatan di jalur Lahat–Curup. Namun hal ini jarang terjadi, sehingga estimasi 8–10 jam adalah yang paling realistis.',
  },
  {
    q: 'Apakah perjalanan ini aman?',
    a: 'Ya, selama menggunakan layanan travel profesional dengan sopir berpengalaman yang hafal jalur Palembang–Curup. RPM Travel mengoperasikan armada terawat dan sopir terlatih untuk rute ini.',
  },
  {
    q: 'Apakah travel tersedia setiap hari?',
    a: 'Ya, RPM Travel melayani rute Palembang–Curup setiap hari dengan dua jadwal keberangkatan: pagi dan malam. Pemesanan bisa dilakukan via WhatsApp.',
  },
];

export default function BerapaJamPalembangCurupPage() {
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
            <span className="text-gray-400">Berapa Jam Palembang ke Curup</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            ⏱️ Panduan Waktu Tempuh · Palembang – Curup
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Berapa Jam Palembang ke Curup?{' '}
            <span className="text-gold-400">Estimasi Waktu &amp; Rutenya</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Perjalanan dari Palembang ke Curup menjadi salah satu rute darat yang
            cukup ramai di Sumatera. Temukan estimasi waktu tempuh, rute yang
            dilalui, dan tips agar perjalanan lebih nyaman.
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
              <span className="relative z-10">🚐 Pesan Travel Sekarang</span>
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
            { label: 'Estimasi Waktu', value: '8–10 Jam' },
            { label: 'Via', value: 'Muara Enim – Lahat' },
            { label: 'Layanan', value: 'Door to Door' },
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

      {/* ── ESTIMASI WAKTU ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-2 text-center">
            ⏱️ Estimasi Waktu Palembang ke Curup
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Berdasarkan kondisi normal tanpa hambatan besar
          </p>

          <div className="bg-primary-900 rounded-2xl p-8 text-center mb-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(201,168,76,0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-2 relative z-10">
              Rata-rata Waktu Tempuh
            </p>
            <p className="font-display text-6xl font-bold text-white mb-2 relative z-10">
              8–10
              <span className="text-gold-400 text-3xl ml-2">Jam</span>
            </p>
            <p className="text-gray-400 text-sm relative z-10">
              Tergantung kondisi jalan, cuaca, dan waktu keberangkatan
            </p>
          </div>

          {/* ── RUTE ── */}
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">
            🛣️ Rute Perjalanan Palembang – Curup
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Jalur utama yang dilalui travel dari Palembang menuju Curup (Rejang Lebong):
          </p>
          <div className="space-y-4 mb-10">
            {routeStages.map((stage, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-cream-50 border border-gray-100 rounded-xl p-4 hover:border-gold-300 transition-all"
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{stage.icon}</div>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">
                    {stage.from}{' '}
                    <span className="text-gold-500 mx-1">→</span> {stage.to}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            💡 <strong>Perhatian:</strong> Jalur Lahat–Curup melewati area pegunungan dengan
            tikungan curam. Waktu tempuh bisa bertambah saat hujan lebat atau malam hari.
            Pastikan Anda menggunakan jasa sopir berpengalaman yang hafal rute ini.
          </div>
        </div>
      </section>

      {/* ── PAGI VS MALAM ── */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-2 text-center">
            🌙 Berangkat Pagi vs Malam
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Pilih jadwal yang paling sesuai dengan kebutuhan perjalanan Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jadwalComparison.map((item) => (
              <div
                key={item.waktu}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gold-400 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-1">
                  {item.waktu}
                </h3>
                <p className="text-gold-600 text-sm font-semibold mb-1">
                  Jadwal: {item.jam}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Estimasi tiba: {item.estimasiTiba}
                </p>
                <ul className="space-y-2">
                  {item.keunggulan.map((k) => (
                    <li key={k} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold-500 font-bold">✓</span>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAKTOR & TRAVEL VS BUS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">

            {/* Faktor */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                🚧 Faktor yang Mempengaruhi Lama Perjalanan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '🌧️', label: 'Cuaca', desc: 'Hujan lebat memperlambat laju kendaraan di jalur pegunungan' },
                  { icon: '🛣️', label: 'Kondisi Jalan', desc: 'Terutama di segmen Lahat–Curup yang berkelok' },
                  { icon: '🚗', label: 'Lalu Lintas', desc: 'Padatnya kendaraan, terutama di hari libur nasional' },
                  { icon: '🚐', label: 'Jenis Kendaraan', desc: 'Armada yang tepat dan terawat berpengaruh pada kecepatan' },
                  { icon: '📍', label: 'Titik Jemput', desc: 'Semakin banyak titik jemput, semakin lama waktu tempuh' },
                  { icon: '🔧', label: 'Kondisi Armada', desc: 'Kendaraan prima menjaga waktu tempuh tetap stabil' },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex gap-3 bg-cream-50 border border-gray-100 rounded-xl p-4"
                  >
                    <span className="text-2xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <p className="font-semibold text-primary-900 text-sm">{f.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel vs Bus */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                🚌 Travel vs Bus: Mana Lebih Cepat?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-primary-900 rounded-2xl p-5 text-white">
                  <p className="text-gold-400 font-bold text-sm mb-3">✅ Travel (Door to Door)</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex gap-2"><span className="text-gold-400">•</span>Estimasi 8–10 jam</li>
                    <li className="flex gap-2"><span className="text-gold-400">•</span>Tidak perlu transit</li>
                    <li className="flex gap-2"><span className="text-gold-400">•</span>Langsung ke alamat tujuan</li>
                    <li className="flex gap-2"><span className="text-gold-400">•</span>Lebih nyaman & efisien</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <p className="text-gray-700 font-bold text-sm mb-3">🚌 Bus Umum</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex gap-2"><span>•</span>Estimasi 10–12 jam</li>
                    <li className="flex gap-2"><span>•</span>Harus turun di terminal</li>
                    <li className="flex gap-2"><span>•</span>Perlu transportasi tambahan</li>
                    <li className="flex gap-2"><span>•</span>Banyak berhenti di jalan</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Karena itu, banyak penumpang memilih layanan travel untuk kenyamanan
                dan efisiensi waktu — terutama untuk perjalanan bersama keluarga.
              </p>
            </div>

            {/* Tips */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                📍 Tips Agar Perjalanan Lebih Cepat &amp; Nyaman
              </h2>
              <ul className="space-y-3">
                {[
                  'Pilih jadwal yang tidak padat — hindari keberangkatan di hari libur panjang',
                  'Gunakan layanan travel terpercaya dengan sopir berpengalaman rute Palembang–Curup',
                  'Pastikan kondisi tubuh fit sebelum perjalanan panjang 8–10 jam',
                  'Bawa perlengkapan pribadi: air minum, jaket, obat-obatan, dan camilan',
                  'Pesan tiket lebih awal agar mendapat kursi di jadwal yang Anda inginkan',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gold-500/20 text-gold-700 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                ❓ FAQ Seputar Perjalanan Palembang – Curup
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
                    desc: 'Layanan door to door, Hiace & Innova',
                  },
                  {
                    href: '/travel-curup-palembang',
                    label: '↔ Travel Curup – Palembang',
                    desc: 'Rute balik dari Curup ke Palembang',
                  },
                  {
                    href: '/travel-bengkulu-palembang',
                    label: '🗺️ Travel Bengkulu – Palembang',
                    desc: 'Rute lintas provinsi tersedia setiap hari',
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
                Pesan Travel Sekarang
              </h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Door to door Palembang–Curup
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Hiace (14 kursi) &amp; Innova (7 kursi)
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-400">✓</span>Berangkat pagi &amp; malam setiap hari
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

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-wide mb-3">
                  Armada Tersedia
                </p>
                {[
                  { nama: 'Toyota Hiace', kapasitas: '14 Penumpang', icon: '🚐' },
                  { nama: 'Toyota Innova', kapasitas: '7 Penumpang', icon: '🚗' },
                ].map((a) => (
                  <div
                    key={a.nama}
                    className="flex items-center gap-3 mb-2 bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="text-xl">{a.icon}</span>
                    <div>
                      <p className="text-white text-xs font-semibold">{a.nama}</p>
                      <p className="text-gray-400 text-xs">{a.kapasitas}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Siap Berangkat ke Curup?
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
            Dengan layanan travel door to door RPM Travel, Anda tidak perlu repot ke
            terminal. Kami jemput dari alamat Anda di Palembang dan antar langsung ke
            tujuan di Curup, Rejang Lebong.
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
              🚐 Lihat Layanan Travel
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Berapa Jam Palembang ke Curup',
                item: 'https://rpmtravel.co.id/berapa-jam-palembang-curup',
              },
            ],
          }),
        }}
      />
    </>
  );
}
