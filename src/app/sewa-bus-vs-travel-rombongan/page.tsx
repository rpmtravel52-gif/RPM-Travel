import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sewa Bus vs Travel Rombongan – Lebih Hemat & Nyaman Mana?',
  description:
    'Perbandingan lengkap antara sewa bus wisata 30 seat dan travel rombongan. Simulasi biaya, perbandingan fasilitas, dan panduan memilih yang paling sesuai kebutuhan grup kamu.',
  keywords: [
    'sewa bus vs travel rombongan',
    'perbandingan bus wisata dan travel',
    'lebih hemat sewa bus atau travel',
    'harga sewa bus wisata 30 seat',
    'travel rombongan palembang bengkulu',
    'sewa bus rombongan sumatera',
    'kalkulasi biaya bus vs travel',
    'tips sewa transportasi rombongan',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/sewa-bus-vs-travel-rombongan' },
  openGraph: {
    title: 'Sewa Bus vs Travel Rombongan – Lebih Hemat & Nyaman Mana?',
    description:
      'Perbandingan biaya dan kenyamanan antara sewa bus wisata 30 seat dan travel rombongan. Dilengkapi simulasi harga untuk membantu keputusan terbaik.',
    url: 'https://rpmtravel.co.id/sewa-bus-vs-travel-rombongan',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20info%20sewa%20bus%20wisata%20untuk%20rombongan';

const perbandingan = [
  { aspek: 'Kapasitas Ideal', travel: '4–10 Orang', bus: '20–30 Orang' },
  { aspek: 'Biaya per Orang (est.)', travel: 'Rp 200–300 ribu', bus: 'Rp 100–150 ribu*' },
  { aspek: 'Fleksibilitas Rute', travel: 'Door to door', bus: 'Sesuai kesepakatan' },
  { aspek: 'Kenyamanan Kabin', travel: 'Hiace / Innova', bus: 'Bus 30 seat ber-AC' },
  { aspek: 'Bagasi', travel: 'Terbatas', bus: 'Bagasi besar di bawah' },
  { aspek: 'Jadwal Berangkat', travel: 'Ikut jadwal travel', bus: 'Sesuai kebutuhan grup' },
  { aspek: 'Cocok untuk', travel: 'Keluarga kecil / perorangan', bus: 'Wisata, reuni, kantor' },
];

const simulasi = [
  {
    label: 'Grup 10 Orang',
    travel: { unit: '2 unit Innova × Rp 250.000', total: 'Rp 2.500.000' },
    bus: { note: 'Bus terlalu besar, tidak efisien', total: '–' },
    winner: 'travel',
  },
  {
    label: 'Grup 20 Orang',
    travel: { unit: '3 unit Hiace × Rp 250.000 × 7 kursi', total: 'Rp 5.250.000' },
    bus: { note: 'Bus 30 seat (estimasi charter)', total: 'Rp 3.000.000' },
    winner: 'bus',
  },
  {
    label: 'Grup 30 Orang',
    travel: { unit: '3 unit Hiace × 14 kursi × Rp 250.000', total: 'Rp 10.500.000' },
    bus: { note: 'Bus 30 seat (full)', total: 'Rp 3.500.000' },
    winner: 'bus',
  },
];

const keunggulanBus = [
  { icon: '💰', title: 'Jauh Lebih Hemat untuk Grup Besar', desc: 'Satu harga charter untuk seluruh rombongan. Semakin banyak peserta, semakin murah biaya per orang.' },
  { icon: '🪑', title: 'Kabin Lebih Lega', desc: 'Bus 30 seat memberikan ruang gerak yang lebih besar. Kaki bisa lebih bebas dan tidak terasa sesak meskipun perjalanan panjang.' },
  { icon: '🎉', title: 'Semua Rombongan Satu Kendaraan', desc: 'Tidak perlu khawatir ada peserta yang tertinggal atau terpisah. Seluruh grup berangkat dan tiba bersama.' },
  { icon: '🕐', title: 'Jadwal Fleksibel', desc: 'Waktu berangkat bisa disesuaikan sepenuhnya dengan kebutuhan rombongan, bukan tergantung jadwal baku travel.' },
];

const faqs = [
  {
    q: 'Kapan sebaiknya pilih sewa bus wisata dibanding travel?',
    a: 'Jika grup kamu terdiri dari 20 orang atau lebih, sewa bus hampir selalu lebih hemat dan praktis. Semua anggota bisa berangkat bersama tanpa perlu koordinasi beberapa kendaraan terpisah.',
  },
  {
    q: 'Apakah bus wisata 30 seat lebih nyaman dari Hiace?',
    a: 'Tergantung preferensi. Bus menawarkan lebih banyak ruang kaki dan headroom. Sementara Hiace lebih personal, lebih cepat, dan cocok untuk grup kecil yang ingin door to door. Keduanya memiliki AC dan kenyamanan yang baik.',
  },
  {
    q: 'Berapa minimal peserta untuk sewa bus wisata?',
    a: 'Secara ekonomis, sewa bus mulai terasa menguntungkan jika peserta minimal 15–20 orang. Di bawah itu, armada travel seperti Hiace biasanya lebih efisien secara biaya.',
  },
  {
    q: 'Apakah bus wisata bisa melayani rute antar kota seperti Palembang–Bengkulu?',
    a: 'Ya. Bus wisata charter bisa melayani berbagai rute antar kota. Hubungi kami untuk mendiskusikan rute, estimasi biaya, dan ketersediaan armada sesuai tanggal keberangkatan.',
  },
  {
    q: 'Apakah harga charter bus sudah termasuk pengemudi dan bahan bakar?',
    a: 'Umumnya ya. Harga charter bus biasanya sudah mencakup pengemudi, bahan bakar, dan tol. Namun detailnya bisa berbeda tergantung negosiasi. Pastikan kamu menanyakan apa saja yang sudah termasuk dalam harga sebelum booking.',
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

export default function SewaBusVsTravelRombonganPage() {
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
            <span className="text-gray-400">Sewa Bus vs Travel Rombongan</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🚌 Panduan Perbandingan · Bus vs Travel
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sewa Bus vs Travel Rombongan<br />
            <span className="text-gold-400">Lebih Hemat & Nyaman Mana?</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Saat merencanakan perjalanan grup, pertanyaan paling umum adalah: lebih baik naik travel beberapa unit, atau langsung sewa bus satu kendaraan? Jawabannya tergantung jumlah peserta dan kebutuhan kamu. Panduan ini akan membantu kamu membuat keputusan yang tepat.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
            >
              📲 Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Armada Travel', value: 'Hiace & Innova' },
            { label: 'Kapasitas Bus', value: '30 Seat' },
            { label: 'Ideal Grup Besar', value: '20–30 Orang' },
            { label: 'Booking', value: 'Via WhatsApp' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABEL PERBANDINGAN */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Perbandingan Langsung: Travel vs Bus</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Berikut perbandingan dari berbagai aspek antara menggunakan travel (Hiace/Innova) dengan menyewa bus wisata 30 seat.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Aspek</th>
                  <th className="text-center px-4 py-3 font-semibold">🚐 Travel</th>
                  <th className="text-center px-4 py-3 rounded-tr-xl font-semibold">🚌 Bus 30 Seat</th>
                </tr>
              </thead>
              <tbody>
                {perbandingan.map((row, idx) => (
                  <tr key={row.aspek} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream-50'}>
                    <td className="px-4 py-3 font-medium text-primary-900">{row.aspek}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.travel}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.bus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">*Estimasi biaya per orang dihitung dari harga charter bus dibagi jumlah peserta.</p>
        </div>
      </section>

      {/* SIMULASI BIAYA */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Simulasi Perbandingan Biaya</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Angka di bawah adalah ilustrasi perkiraan biaya berdasarkan harga umum. Harga aktual bisa berbeda tergantung rute, tanggal, dan negosiasi. Hubungi kami untuk penawaran terbaik sesuai kebutuhan rombongan kamu.
          </p>
          <div className="space-y-4">
            {simulasi.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display font-bold text-primary-900">{s.label}</p>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.winner === 'bus' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {s.winner === 'bus' ? '✓ Bus Lebih Hemat' : '✓ Travel Lebih Efisien'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cream-50 rounded-xl p-3">
                    <p className="text-gold-600 text-xs font-bold mb-1">🚐 Pakai Travel</p>
                    <p className="text-gray-500 text-xs mb-1">{s.travel.unit}</p>
                    <p className="font-display font-bold text-primary-900">{s.travel.total}</p>
                  </div>
                  <div className={`rounded-xl p-3 ${s.winner === 'bus' ? 'bg-green-50' : 'bg-cream-50'}`}>
                    <p className="text-gold-600 text-xs font-bold mb-1">🚌 Sewa Bus</p>
                    <p className="text-gray-500 text-xs mb-1">{s.bus.note}</p>
                    <p className="font-display font-bold text-primary-900">{s.bus.total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mt-4">
            ⚠️ Angka di atas adalah estimasi ilustratif. Hubungi kami untuk penawaran harga resmi sesuai rute dan tanggal keberangkatan kamu.
          </p>
        </div>
      </section>

      {/* KEUNGGULAN BUS + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">

            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Keunggulan Utama Sewa Bus Rombongan</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Bagi rombongan besar, sewa bus wisata bukan sekadar pilihan yang lebih murah — ini juga pilihan yang lebih praktis dan menyenangkan. Berikut beberapa keunggulan yang sering membuat rombongan lebih memilih bus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keunggulanBus.map((k) => (
                  <div key={k.title} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <span className="text-3xl block mb-2">{k.icon}</span>
                    <p className="font-semibold text-primary-900 text-sm mb-1">{k.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{k.desc}</p>
                  </div>
                ))}
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
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/sewa-bus-wisata-30-seat', label: '🚌 Sewa Bus Wisata 30 Seat', desc: 'Info lengkap dan harga charter bus' },
                  { href: '/travel-palembang-bengkulu', label: '🚐 Travel Palembang – Bengkulu', desc: 'Hiace & Innova, berangkat tiap hari' },
                  { href: '/tips-sewa-bus-wisata', label: '💡 Tips Sewa Bus agar Tidak Rugi', desc: 'Panduan memilih penyedia yang tepat' },
                  { href: '/tips-naik-travel-jarak-jauh', label: '✈️ Tips Naik Travel Jarak Jauh', desc: 'Agar perjalanan tetap nyaman' },
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
              <h3 className="font-display font-bold text-white text-lg mb-1">Butuh Bus Rombongan?</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Bus 30 seat ber-AC</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Pengemudi berpengalaman</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Jadwal fleksibel</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Harga bisa negosiasi</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
              >
                📲 Tanya Harga via WhatsApp
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
