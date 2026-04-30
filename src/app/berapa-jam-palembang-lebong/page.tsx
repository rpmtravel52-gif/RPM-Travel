import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Berapa Jam Perjalanan Palembang ke Lebong? Estimasi Waktu Tempuh',
  description:
    'Perjalanan Palembang ke Lebong membutuhkan waktu sekitar 10–12 jam. Cek estimasi tiap segmen rute, faktor yang mempengaruhi durasi, dan tips perjalanan bersama RPM Travel.',
  keywords: [
    'berapa jam palembang ke lebong',
    'lama perjalanan palembang lebong',
    'waktu tempuh palembang lebong',
    'jarak palembang lebong berapa jam',
    'durasi travel palembang lebong',
    'palembang ke lebong berapa lama',
    'estimasi waktu palembang lebong',
    'rute palembang lebong lewat mana',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/berapa-jam-palembang-ke-lebong' },
  openGraph: {
    title: 'Berapa Jam Perjalanan Palembang ke Lebong? | RPM Travel',
    description: 'Estimasi waktu tempuh Palembang–Lebong sekitar 10–12 jam. Cek rincian tiap segmen dan tips perjalanan.',
    url: 'https://rpmtravel.co.id/berapa-jam-palembang-ke-lebong',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Lebong';

const segmenRute = [
  {
    dari: 'Palembang',
    ke: 'Lubuklinggau',
    estimasi: '4–5 Jam',
    jenis: 'Jalan Nasional & Tol',
    icon: '🛣️',
    catatan: 'Jalur relatif lurus dan mulus, melewati beberapa kota besar Sumatera Selatan.',
  },
  {
    dari: 'Lubuklinggau',
    ke: 'Curup',
    estimasi: '1–1,5 Jam',
    jenis: 'Jalan Pegunungan',
    icon: '⛰️',
    catatan: 'Mulai memasuki medan berbukit. Jalan berkelok namun masih terbilang baik.',
  },
  {
    dari: 'Curup',
    ke: 'Lebong',
    estimasi: '1,5–2 Jam',
    jenis: 'Jalan Pegunungan Tinggi',
    icon: '🏔️',
    catatan: 'Segmen paling menantang. Tanjakan, tikungan tajam, dan elevasi lebih tinggi.',
  },
  {
    dari: 'Lebong (Muara Aman)',
    ke: 'Tujuan Akhir',
    estimasi: '0–30 Menit',
    jenis: 'Door to Door',
    icon: '🏠',
    catatan: 'Pengantar door to door ke alamat tujuan di wilayah Kabupaten Lebong.',
  },
];

const faqs = [
  {
    q: 'Berapa jam perjalanan dari Palembang ke Lebong?',
    a: 'Perjalanan dari Palembang ke Kabupaten Lebong membutuhkan waktu sekitar 10 hingga 12 jam. Durasi ini bisa lebih pendek atau lebih panjang tergantung kondisi lalu lintas, cuaca, dan titik tujuan akhir di dalam wilayah Lebong.',
  },
  {
    q: 'Rute mana yang dilalui travel Palembang ke Lebong?',
    a: 'Rute yang dilalui umumnya melewati jalur lintas Sumatera menuju Lubuklinggau, kemudian naik ke kawasan pegunungan melewati Curup (Rejang Lebong) sebelum melanjutkan ke Lebong. Ini adalah jalur paling umum dan paling terjangkau untuk rute ini.',
  },
  {
    q: 'Apakah waktu tempuh berbeda antara jadwal pagi dan malam?',
    a: 'Secara jarak tidak berbeda, namun jadwal malam (19.00 WIB) umumnya memiliki lalu lintas yang lebih lengang sehingga bisa sedikit lebih cepat terutama di segmen awal keluar kota Palembang. Untuk segmen pegunungan, kecepatan lebih dikurangi demi keselamatan di malam hari.',
  },
  {
    q: 'Kapan waktu perjalanan paling lama biasanya terjadi?',
    a: 'Waktu tempuh paling panjang biasanya terjadi saat mudik Lebaran, libur panjang nasional, atau saat cuaca buruk di jalur pegunungan Curup–Lebong. Pada kondisi normal, estimasi 10–12 jam cukup akurat.',
  },
  {
    q: 'Apakah ada pemberhentian istirahat selama perjalanan?',
    a: 'Ya, pengemudi kami biasanya berhenti di rest area atau rumah makan yang sudah dikenal di jalur lintas Sumatera, sekitar satu hingga dua kali tergantung kondisi dan kebutuhan penumpang. Pemberhentian singkat ini tidak dihitung sebagai keterlambatan karena sudah diperhitungkan dalam estimasi waktu.',
  },
  {
    q: 'Jika berangkat pukul 07.00, kira-kira tiba di Lebong jam berapa?',
    a: 'Dengan keberangkatan pukul 07.00 WIB dari Palembang, estimasi tiba di wilayah Lebong adalah sekitar pukul 17.00 hingga 19.00 WIB, bergantung kondisi perjalanan. Jadwal pagi ini cocok untuk yang ingin tiba sore hari dan masih bisa beristirahat di malam hari.',
  },
  {
    q: 'Jika berangkat pukul 19.00, kira-kira tiba di Lebong jam berapa?',
    a: 'Keberangkatan pukul 19.00 WIB dari Palembang diperkirakan tiba di Lebong sekitar pukul 05.00 hingga 07.00 WIB keesokan harinya. Jadwal malam ini populer di kalangan penumpang yang ingin menghemat biaya penginapan dan langsung beraktivitas di pagi hari.',
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

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://rpmtravel.co.id' },
    { '@type': 'ListItem', position: 2, name: 'Travel Palembang Lebong', item: 'https://rpmtravel.co.id/travel-palembang-lebong' },
    { '@type': 'ListItem', position: 3, name: 'Berapa Jam Palembang ke Lebong', item: 'https://rpmtravel.co.id/berapa-jam-palembang-ke-lebong' },
  ],
});

export default function BerapaJamPalembangLebongPage() {
  return (
    <>
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4 flex-wrap">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/travel-palembang-lebong" className="hover:text-gold-300 transition-colors">Travel Palembang – Lebong</Link>
            <span>/</span>
            <span className="text-gray-400">Berapa Jam Palembang ke Lebong</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            ⏱ Estimasi Waktu Tempuh Terbaru
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Berapa Jam Perjalanan<br />
            <span className="text-gold-400">Palembang ke Lebong?</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Salah satu pertanyaan yang paling sering diajukan sebelum memesan travel adalah soal durasi perjalanan. Rute Palembang ke Kabupaten Lebong memang bukan perjalanan singkat — melewati jalur lintas Sumatera hingga pegunungan Bengkulu, total waktu yang dibutuhkan berkisar antara 10 hingga 12 jam.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Tanya Jadwal via WhatsApp
            </a>
            <Link
              href="/travel-palembang-lebong"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}
            >
              🚐 Lihat Jadwal Keberangkatan
            </Link>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Waktu Tempuh', value: '10–12 Jam' },
            { label: 'Segmen Terpanjang', value: 'Palembang–Lubuklinggau' },
            { label: 'Segmen Terberat', value: 'Curup–Lebong' },
            { label: 'Jadwal Tersedia', value: '07.00 & 19.00 WIB' },
          ].map(item => (
            <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMEN RUTE */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Rincian Waktu per Segmen Perjalanan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Perjalanan Palembang ke Lebong terbagi dalam beberapa segmen dengan karakteristik jalan yang berbeda. Memahami setiap segmen membantu Anda memperkirakan waktu tiba dengan lebih akurat.
          </p>

          {/* Timeline vertikal */}
          <div className="relative">
            {/* Garis vertikal */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 to-gold-300 hidden sm:block" />

            <div className="space-y-6">
              {segmenRute.map((seg, idx) => (
                <div key={idx} className="relative sm:pl-16">
                  {/* Titik lingkaran di timeline */}
                  <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 bg-primary-900 border-2 border-gold-500 rounded-full items-center justify-center text-xl z-10">
                    {seg.icon}
                  </div>

                  <div className="bg-cream-50 border border-gray-200 rounded-2xl p-5 hover:border-gold-400 hover:shadow-sm transition-all">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-xs text-gold-600 font-semibold uppercase tracking-wide mb-1">{seg.jenis}</p>
                        <h3 className="font-display font-bold text-primary-900 text-base">
                          {seg.dari} <span className="text-gold-500 mx-1">→</span> {seg.ke}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{seg.catatan}</p>
                      </div>
                      <div className="shrink-0 bg-primary-900 rounded-xl px-4 py-2 text-center">
                        <p className="text-gold-400 font-display font-bold text-lg leading-none">{seg.estimasi}</p>
                        <p className="text-gray-500 text-xs mt-0.5">estimasi</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 bg-primary-900 rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">Total Estimasi Waktu Tempuh</p>
              <p className="text-white font-display font-bold text-3xl">10 – 12 Jam</p>
              <p className="text-gray-400 text-xs mt-1">Palembang (titik jemput) → Lebong (door to door)</p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Pesan Sekarang
            </a>
          </div>

          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mt-4">
            ⚠️ Estimasi waktu bersifat indikatif. Kondisi lalu lintas, cuaca, dan kondisi jalan dapat mempengaruhi durasi aktual perjalanan.
          </p>
        </div>
      </section>

      {/* ARTIKEL KONTEN */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Apa Saja yang Mempengaruhi Durasi Perjalanan?</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />

          <div className="space-y-5 text-gray-600 text-sm leading-relaxed mb-10">
            <p>
              Waktu tempuh Palembang ke Lebong tidak selalu sama setiap hari. Ada sejumlah faktor yang secara nyata dapat memperpanjang atau memperpendek durasi perjalanan, dan memahaminya bisa membantu Anda merencanakan kedatangan dengan lebih realistis.
            </p>
            <p>
              Faktor pertama adalah <strong className="text-primary-900">kondisi lalu lintas di Palembang</strong>. Kota Palembang memiliki kepadatan kendaraan yang cukup tinggi di jam-jam sibuk, terutama pagi hari antara pukul 07.00–09.00 WIB. Itulah sebabnya pengemudi RPM Travel terbiasa menyesuaikan rute keluar kota untuk menghindari titik kemacetan yang sudah dikenal.
            </p>
            <p>
              Faktor kedua adalah <strong className="text-primary-900">kondisi jalan di segmen pegunungan</strong>. Ruas Curup–Lebong adalah segmen yang paling tidak dapat diprediksi. Longsor musiman, perbaikan jalan, atau kabut tebal di ketinggian dapat membuat pengemudi perlu memperlambat laju kendaraan demi keselamatan seluruh penumpang.
            </p>
            <p>
              Faktor ketiga adalah <strong className="text-primary-900">jumlah titik penjemputan dan pengantaran</strong>. Karena layanan RPM Travel bersifat door to door, pengemudi akan mampir ke beberapa titik jemput berbeda di Palembang sebelum benar-benar meninggalkan kota. Semakin banyak titik jemput, semakin panjang waktu yang dibutuhkan sebelum perjalanan utama dimulai.
            </p>
          </div>

          <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Tips Memilih Jadwal yang Tepat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="text-3xl mb-3">🌄</div>
              <h3 className="font-display font-bold text-primary-900 text-base mb-2">Jadwal Pagi 07.00 WIB</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Tiba di Lebong sekitar pukul 17.00–19.00</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Seluruh perjalanan pegunungan di siang hari</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Cocok untuk yang membawa anak kecil</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Lebih mudah memantau sekitar perjalanan</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="font-display font-bold text-primary-900 text-base mb-2">Jadwal Malam 19.00 WIB</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Tiba di Lebong pagi hari, siap beraktivitas</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Jalur Palembang–Lubuklinggau lebih lengang</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Hemat satu malam penginapan</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Cocok untuk perjalanan bisnis atau urusan resmi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">

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

            {/* Internal Links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Halaman Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/travel-palembang-lebong',
                    label: '🚐 Travel Palembang – Lebong',
                    desc: 'Jadwal, armada, dan pemesanan tiket',
                  },
                  {
                    href: '/harga-travel-palembang-lebong',
                    label: '💰 Harga Travel Palembang – Lebong',
                    desc: 'Ongkos resmi Rp 300.000 per orang',
                  },
                  {
                    href: '/travel-lebong-palembang',
                    label: '↔ Travel Lebong – Palembang',
                    desc: 'Rute balik dari Lebong ke Palembang',
                  },
                  {
                    href: '/travel-palembang-bengkulu',
                    label: '🗺️ Travel Palembang – Bengkulu',
                    desc: 'Rute ke ibu kota Provinsi Bengkulu',
                  },
                ].map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group"
                  >
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
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Berangkat 07.00 & 19.00 WIB</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke Lebong</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Sopir berpengalaman rute pegunungan</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm mb-2 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </a>
              <Link
                href="/pesan?paket=palembang-lebong"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}
              >
                🎫 Pesan Tiket Online
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
    </>
  );
}
