import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rute Travel Palembang ke Bengkulu Lewat Mana? Jalur Tercepat & Aman',
  description:
    'Panduan lengkap rute perjalanan travel Palembang–Bengkulu: jalur yang dilalui, estimasi waktu tiap segmen, titik rawan yang perlu diwaspadai, dan tips memilih jadwal terbaik.',
  keywords: [
    'rute travel palembang bengkulu',
    'jalur travel palembang bengkulu',
    'travel palembang bengkulu lewat mana',
    'jalan travel palembang bengkulu',
    'rute palembang lubuklinggau curup bengkulu',
    'estimasi waktu travel palembang bengkulu',
    'jalur lintas sumatera palembang bengkulu',
    'travel palembang bengkulu tercepat',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/rute-travel-palembang-bengkulu' },
  openGraph: {
    title: 'Rute Travel Palembang ke Bengkulu Lewat Mana? Jalur Tercepat & Aman',
    description:
      'Panduan rute travel Palembang–Bengkulu: jalur lintas Sumatera via Lubuklinggau dan Curup, estimasi waktu, dan titik yang perlu diwaspadai.',
    url: 'https://rpmtravel.co.id/rute-travel-palembang-bengkulu',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20cek%20jadwal%20travel%20Palembang%E2%80%93Bengkulu';

const segments = [
  {
    from: 'Palembang',
    to: 'Lubuklinggau',
    duration: '±6–7 jam',
    icon: '🛣️',
    note: 'Melewati jalur lintas Sumatera, jalan relatif mulus dan lebar.',
  },
  {
    from: 'Lubuklinggau',
    to: 'Curup',
    duration: '±2–3 jam',
    icon: '🌄',
    note: 'Mulai masuk medan perbukitan, pemandangan indah khas Bengkulu.',
  },
  {
    from: 'Curup',
    to: 'Bengkulu',
    duration: '±2–3 jam',
    icon: '🏙️',
    note: 'Turun dari dataran tinggi menuju kota Bengkulu di pesisir barat.',
  },
];

const waypoints = [
  { name: 'Palembang', icon: '🏁' },
  { name: 'Sekayu / Musi Banyuasin', icon: '🛣️' },
  { name: 'Lubuklinggau', icon: '⛽' },
  { name: 'Curup', icon: '⛰️' },
  { name: 'Bengkulu', icon: '🏁' },
];

const warnings = [
  {
    title: 'Tanjakan Curup',
    desc: 'Segmen antara Curup dan Bengkulu melewati tanjakan panjang. Pengemudi berpengalaman sangat diperlukan di titik ini.',
    icon: '⛰️',
  },
  {
    title: 'Jalan Sempit di Beberapa Titik',
    desc: 'Ada beberapa segmen dengan lebar jalan terbatas, terutama di sekitar hutan lindung. Kendaraan besar perlu ekstra hati-hati.',
    icon: '🚧',
  },
  {
    title: 'Cuaca di Dataran Tinggi',
    desc: 'Daerah Curup dan sekitarnya dikenal sering berkabut dan hujan, terutama sore hingga malam hari. Perjalanan malam perlu kewaspadaan ekstra.',
    icon: '🌫️',
  },
];

const faqs = [
  {
    q: 'Apakah semua travel Palembang–Bengkulu melewati jalur yang sama?',
    a: 'Umumnya ya. Jalur via Lubuklinggau–Curup adalah rute yang paling sering digunakan karena kondisi jalan relatif baik dan sudah sangat dikenal para pengemudi. Variasi kecil bisa terjadi di segmen dalam kota, namun jalur utamanya tetap sama.',
  },
  {
    q: 'Apakah ada jalur alternatif selain lewat Curup?',
    a: 'Ada jalur alternatif, namun jarang digunakan karena kondisi jalan yang kurang ideal atau memutar lebih jauh. Sebagian besar armada travel resmi memilih jalur via Curup karena lebih aman dan terprediksi waktu tempuhnya.',
  },
  {
    q: 'Berapa total jarak tempuh Palembang ke Bengkulu?',
    a: 'Jarak dari Palembang ke Bengkulu sekitar 400–450 km tergantung jalur yang dilalui. Dengan estimasi waktu 10–14 jam termasuk pemberhentian istirahat di perjalanan.',
  },
  {
    q: 'Apakah ada titik istirahat di tengah perjalanan?',
    a: 'Ya. Biasanya ada pemberhentian di sekitar Lubuklinggau atau Curup untuk istirahat makan dan toilet. Pengemudi kami sudah memiliki titik istirahat langganan yang aman dan bersih.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export default function RuteTravelPalembangBengkuluPage() {
  return (
    <>
      <style>{`
        @keyframes shimmer-slide {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%);
          animation: shimmer-slide 2.4s ease-in-out infinite;
        }
        .btn-shimmer:hover::after { animation-duration: 1.2s; }
      `}</style>

      {/* HERO */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative pb-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/travel-palembang-bengkulu" className="hover:text-gold-300 transition-colors">Travel Palembang – Bengkulu</Link>
            <span>/</span>
            <span className="text-gray-400">Rute & Jalur</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🛣️ Panduan Rute · Jalur Lintas Sumatera
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Rute Travel Palembang ke Bengkulu<br />
            <span className="text-gold-400">Lewat Mana? Jalur Tercepat & Aman</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Sebelum memesan tiket, ada baiknya kamu tahu jalur mana yang akan dilalui. Memahami rute bukan sekadar soal jarak — ini juga tentang kondisi jalan, waktu tempuh di setiap segmen, dan titik-titik yang perlu diantisipasi selama perjalanan panjang Palembang–Bengkulu.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
            >
              📲 Cek Jadwal via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Bengkulu' },
            { label: 'Jalur Utama', value: 'Via Lubuklinggau–Curup' },
            { label: 'Total Estimasi', value: '10–14 Jam' },
            { label: 'Jarak Tempuh', value: '±400–450 km' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAYPOINTS */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jalur Rute yang Dilalui</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Travel Palembang–Bengkulu melewati jalur lintas Sumatera yang merupakan jalan utama penghubung kota-kota besar di Pulau Sumatera. Jalur ini dipilih karena kondisinya yang paling stabil dan sudah sangat familiar bagi para pengemudi profesional.
          </p>

          <div className="flex flex-col gap-0 mb-8">
            {waypoints.map((wp, idx) => (
              <div key={wp.name} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-xl shadow">{wp.icon}</div>
                  {idx < waypoints.length - 1 && <div className="w-0.5 h-8 bg-gold-400" />}
                </div>
                <div className="pb-2">
                  <p className="font-display font-bold text-primary-900 text-base">{wp.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gold-50 border border-gold-200 rounded-xl px-4 py-3 text-xs text-gray-600">
            👉 Jalur via Lubuklinggau–Curup ini dipilih karena relatif paling stabil kondisinya dan paling sering digunakan oleh armada travel antar kota di Sumatera Selatan dan Bengkulu.
          </div>
        </div>
      </section>

      {/* SEGMEN WAKTU */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Estimasi Waktu per Segmen</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Perjalanan dari Palembang ke Bengkulu tidak terasa berat jika kamu tahu kira-kira waktu yang dibutuhkan di setiap tahap. Berikut estimasi durasi masing-masing segmen dalam kondisi normal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {segments.map((s) => (
              <div key={s.from + s.to} className="bg-primary-900 rounded-2xl p-6">
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  {s.from} → {s.to}
                </p>
                <p className="text-white font-display font-bold text-2xl mb-2">{s.duration}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Total estimasi perjalanan 10–14 jam sudah termasuk waktu istirahat. Durasi dapat berubah tergantung kondisi lalu lintas, cuaca, dan kondisi jalan saat itu.
          </p>
        </div>
      </section>

      {/* TITIK RAWAN + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">

            {/* TITIK RAWAN */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Titik yang Perlu Diwaspadai</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Meskipun jalur ini sudah sangat familiar bagi pengemudi travel berpengalaman, ada beberapa titik yang tetap perlu diperhatikan — terutama bagi penumpang yang baru pertama kali melakukan perjalanan ini.
              </p>
              <div className="space-y-4">
                {warnings.map((w) => (
                  <div key={w.title} className="border border-gray-100 rounded-xl p-4 bg-cream-50 flex gap-4">
                    <span className="text-3xl flex-shrink-0">{w.icon}</span>
                    <div>
                      <p className="font-semibold text-primary-900 text-sm mb-1">{w.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-primary-900/5 border border-primary-900/10 rounded-xl px-4 py-3 text-xs text-gray-600">
                👉 Pengemudi RPM Travel sudah sangat hafal titik-titik rawan ini. Setiap pengemudi dipilih berdasarkan rekam jejak dan pengalaman panjang di rute yang sama.
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan Umum</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RUTE TERKAIT */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Travel Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-palembang-bengkulu', label: '🚐 Travel Palembang – Bengkulu', desc: 'Hiace & Innova, berangkat tiap hari' },
                  { href: '/travel-bengkulu-palembang', label: '↩ Travel Bengkulu – Palembang', desc: 'Rute balik dari Bengkulu ke Palembang' },
                  { href: '/travel-palembang-curup', label: '🗺️ Travel Palembang – Curup', desc: 'Langsung ke Curup tanpa transit' },
                  { href: '/tips-naik-travel-jarak-jauh', label: '💡 Tips Naik Travel Jarak Jauh', desc: 'Agar perjalanan tetap nyaman' },
                ].map((l) => (
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
              <h3 className="font-display font-bold text-white text-lg mb-1">Pesan Tiket Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Rute Palembang langsung ke Bengkulu</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Pengemudi berpengalaman di rute ini</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke tujuan</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
              >
                📲 Booking via WhatsApp
              </a>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    </>
  );
}
