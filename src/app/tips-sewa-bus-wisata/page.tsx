import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tips Sewa Bus Wisata Agar Tidak Rugi & Lebih Aman',
  description:
    'Panduan lengkap menyewa bus wisata 30 seat: cara memilih penyedia terpercaya, hal yang wajib dicek sebelum tanda tangan, dan tips aman agar perjalanan rombongan tidak bermasalah.',
  keywords: [
    'tips sewa bus wisata',
    'cara sewa bus wisata yang aman',
    'tips agar tidak rugi sewa bus',
    'checklist sewa bus rombongan',
    'memilih penyedia bus wisata terpercaya',
    'sewa bus wisata 30 seat palembang',
    'panduan charter bus rombongan',
    'tips booking bus wisata',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/tips-sewa-bus-wisata' },
  openGraph: {
    title: 'Tips Sewa Bus Wisata Agar Tidak Rugi & Lebih Aman',
    description:
      'Panduan memilih penyedia bus wisata terpercaya, hal yang wajib ditanyakan sebelum booking, dan tips aman agar perjalanan rombongan berjalan lancar.',
    url: 'https://rpmtravel.co.id/tips-sewa-bus-wisata',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20tanya%20soal%20sewa%20bus%20wisata%2030%20seat';

const tipsUtama = [
  {
    nomor: '01',
    icon: '🏢',
    title: 'Pilih Penyedia yang Sudah Punya Rekam Jejak',
    desc: 'Cari tahu sudah berapa lama penyedia beroperasi dan seperti apa reputasinya. Ulasan dari pengguna sebelumnya, testimoni di media sosial, atau rekomendasi dari kenalan yang pernah menggunakan layanannya bisa menjadi indikator yang sangat membantu.',
  },
  {
    nomor: '02',
    icon: '🔧',
    title: 'Pastikan Kondisi Bus dalam Keadaan Prima',
    desc: 'Jangan ragu untuk meminta foto atau video kondisi bus sebelum booking. Perhatikan kondisi eksterior, interior, AC, dan tempat duduk. Bus yang terawat adalah tanda bahwa penyedia layanan serius dalam menjaga kualitas armadanya.',
  },
  {
    nomor: '03',
    icon: '📋',
    title: 'Tanyakan Detail Fasilitas Secara Spesifik',
    desc: 'Jangan berasumsi. Tanyakan langsung: apakah AC berfungsi normal? Berapa kapasitas kursi yang tersedia? Apakah ada audio/speaker? Bagaimana kondisi bagasi? Semakin spesifik pertanyaanmu, semakin sedikit risiko surprise di hari keberangkatan.',
  },
  {
    nomor: '04',
    icon: '💵',
    title: 'Pastikan Harga Sudah All-In',
    desc: 'Sebelum menyetujui harga, pastikan sudah mencakup: pengemudi, bahan bakar, tol, parkir, dan tidak ada biaya tersembunyi lainnya. Minta rincian tertulis atau konfirmasi via pesan agar ada bukti kesepakatan yang jelas.',
  },
  {
    nomor: '05',
    icon: '📅',
    title: 'Booking Lebih Awal, Terutama Saat Musim Ramai',
    desc: 'Musim liburan sekolah, lebaran, natal, dan tahun baru adalah periode paling sibuk untuk penyewaan bus wisata. Booking minimal 1–2 minggu sebelum tanggal keberangkatan sangat disarankan agar armada pilihan masih tersedia.',
  },
  {
    nomor: '06',
    icon: '📝',
    title: 'Minta Konfirmasi Tertulis atau Kuitansi',
    desc: 'Setelah membayar DP atau melunasi, pastikan kamu menerima konfirmasi pemesanan yang jelas — bisa berupa nota, kuitansi, atau pesan tertulis yang mencantumkan tanggal, rute, armada, dan total biaya.',
  },
];

const checklistSebelumBerangkat = [
  { item: 'Konfirmasi ulang jadwal dan titik penjemputan H-1', penting: true },
  { item: 'Pastikan jumlah peserta sesuai kapasitas bus', penting: true },
  { item: 'Tanyakan nomor kontak pengemudi yang akan bertugas', penting: true },
  { item: 'Cek kondisi bus saat tiba di titik penjemputan', penting: true },
  { item: 'Siapkan daftar hadir atau koordinator rombongan', penting: false },
  { item: 'Diskusikan titik istirahat dan estimasi waktu perjalanan', penting: false },
  { item: 'Ingatkan peserta untuk tidak meninggalkan barang berharga di bus', penting: false },
];

const pertanyaanWajibDitanya = [
  'Apakah harga sudah termasuk bahan bakar dan tol?',
  'Berapa lama pengalaman pengemudi di rute ini?',
  'Apakah ada biaya tambahan jika perjalanan melebihi estimasi waktu?',
  'Bagaimana kebijakan pembatalan atau perubahan jadwal?',
  'Apakah ada nomor darurat yang bisa dihubungi saat perjalanan?',
  'Apakah bus memiliki asuransi penumpang?',
];

const faqs = [
  {
    q: 'Kapan waktu paling tepat untuk memesan bus wisata?',
    a: 'Idealnya minimal H-3 untuk hari biasa, dan minimal 1–2 minggu sebelumnya untuk musim liburan atau hari besar. Semakin awal booking, semakin besar peluang mendapatkan armada terbaik dan harga yang lebih fleksibel.',
  },
  {
    q: 'Apakah aman menyewa bus dari penyedia yang baru?',
    a: 'Tidak selalu berbahaya, tapi lebih berisiko. Jika terpaksa menggunakan penyedia baru, minta referensi dari klien sebelumnya, lakukan survei fisik bus jika memungkinkan, dan pastikan ada perjanjian tertulis yang jelas.',
  },
  {
    q: 'Apakah ada jaminan keamanan selama perjalanan menggunakan bus charter?',
    a: 'Keamanan sangat dipengaruhi oleh kualitas penyedia. Pilih penyedia yang memiliki pengemudi berlisensi resmi, armada yang rutin diservis, dan rekam jejak yang baik. Tanyakan juga apakah ada asuransi penumpang yang tercakup dalam biaya sewa.',
  },
  {
    q: 'Apa yang harus dilakukan jika bus mengalami masalah di tengah perjalanan?',
    a: 'Penyedia yang baik seharusnya memiliki prosedur darurat yang jelas — termasuk kendaraan pengganti atau mekanisme pengembalian biaya. Tanyakan hal ini sebelum booking agar kamu tahu apa yang bisa diharapkan jika terjadi situasi tak terduga.',
  },
  {
    q: 'Apakah bisa menambah titik pemberhentian di luar rute yang disepakati?',
    a: 'Bisa, namun sebaiknya didiskusikan sebelum berangkat dan ada kesepakatan soal biaya tambahan jika ada. Perubahan mendadak di perjalanan bisa mempersulit pengemudi dan mengganggu jadwal keseluruhan rombongan.',
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

export default function TipsSewaBusWisataPage() {
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
            <Link href="/sewa-bus-wisata-30-seat" className="hover:text-gold-300 transition-colors">Sewa Bus Wisata</Link>
            <span>/</span>
            <span className="text-gray-400">Tips Sewa Bus Agar Tidak Rugi</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            💡 Panduan Sewa Bus · Rombongan Aman
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tips Sewa Bus Wisata<br />
            <span className="text-gold-400">Agar Tidak Rugi & Lebih Aman</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Menyewa bus wisata bukan sekadar soal memilih yang termurah. Keputusan yang terburu-buru bisa berakhir dengan armada yang tidak layak, pengemudi yang tidak berpengalaman, atau biaya tersembunyi yang membengkak. Panduan ini membantu kamu menyewa dengan aman dan tepat.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
            >
              🚌 Amankan Tanggal via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Armada', value: 'Bus 30 Seat' },
            { label: 'Booking Minimal', value: 'H-3 (Hari Biasa)' },
            { label: 'Musim Ramai', value: 'H-14 Disarankan' },
            { label: 'Konsultasi', value: 'Via WhatsApp' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS UTAMA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">6 Tips Wajib Sebelum Menyewa Bus Wisata</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Tips ini disusun berdasarkan pengalaman nyata di lapangan. Terapkan semuanya dan risiko kekecewaan akan jauh berkurang.
          </p>
          <div className="space-y-4">
            {tipsUtama.map((t) => (
              <div key={t.nomor} className="border border-gray-100 rounded-2xl p-5 hover:border-gold-400 hover:shadow-sm transition-all flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-gold-400 font-display font-bold text-sm">
                  {t.nomor}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xl">{t.icon}</span>
                    <p className="font-display font-bold text-primary-900 text-base">{t.title}</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERTANYAAN WAJIB DITANYA */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pertanyaan yang Wajib Kamu Tanyakan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Sebelum menyetujui harga atau menandatangani perjanjian, pastikan kamu sudah mendapat jawaban yang memuaskan atas pertanyaan-pertanyaan berikut.
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {pertanyaanWajibDitanya.map((p, idx) => (
              <div
                key={p}
                className={`flex items-start gap-4 px-5 py-4 ${idx !== pertanyaanWajibDitanya.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-gold-500 font-bold text-base flex-shrink-0 mt-0.5">?</span>
                <p className="text-gray-700 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">

            {/* CHECKLIST */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Checklist H-1 Sebelum Berangkat</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Jangan tunggu hari H baru memastikan semuanya. Cek poin-poin berikut sehari sebelum keberangkatan agar tidak ada yang terlewat.
              </p>
              <div className="space-y-2">
                {checklistSebelumBerangkat.map((c) => (
                  <div
                    key={c.item}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 ${c.penting ? 'border-gold-300 bg-gold-50' : 'border-gray-100 bg-cream-50'}`}
                  >
                    <span className={`font-bold flex-shrink-0 ${c.penting ? 'text-gold-600' : 'text-gold-500'}`}>✓</span>
                    <p className="text-gray-700 text-sm">{c.item}</p>
                    {c.penting && (
                      <span className="ml-auto text-gold-600 text-xs font-bold flex-shrink-0">Penting</span>
                    )}
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
                  { href: '/sewa-bus-wisata-30-seat', label: '🚌 Sewa Bus Wisata 30 Seat', desc: 'Info armada dan harga charter' },
                  { href: '/sewa-bus-vs-travel-rombongan', label: '⚖️ Bus vs Travel Rombongan', desc: 'Perbandingan biaya & kenyamanan' },
                  { href: '/travel-palembang-bengkulu', label: '🚐 Travel Palembang – Bengkulu', desc: 'Hiace & Innova, berangkat tiap hari' },
                  { href: '/tips-naik-travel-jarak-jauh', label: '💡 Tips Naik Travel Jarak Jauh', desc: 'Panduan perjalanan nyaman' },
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
              <h3 className="font-display font-bold text-white text-lg mb-1">Amankan Tanggal Kamu</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Bus 30 seat terawat & ber-AC</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Pengemudi berlisensi & berpengalaman</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Harga transparan, no biaya tersembunyi</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Jadwal fleksibel sesuai kebutuhan</div>
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
