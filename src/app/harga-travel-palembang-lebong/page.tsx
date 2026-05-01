import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Harga Travel Palembang ke Lebong 2026 | Ongkos & Jadwal Terbaru',
  description:
    'Harga travel Palembang ke Lebong mulai Rp 300.000 per orang. Cek ongkos terbaru, jadwal keberangkatan, dan pilihan rute via Curup. RPM Travel – door to door ke Kabupaten Lebong, Bengkulu.',
  keywords: [
    'harga travel palembang ke lebong',
    'ongkos travel palembang lebong',
    'biaya travel palembang lebong',
    'tarif travel palembang lebong 2026',
    'harga tiket travel palembang lebong',
    'ongkos palembang lebong berapa',
    'travel palembang lebong murah',
    'harga travel palembang curup lebong',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/harga-travel-palembang-ke-lebong' },
  openGraph: {
    title: 'Harga Travel Palembang ke Lebong 2025 | RPM Travel',
    description: 'Ongkos travel Palembang–Lebong Rp 300.000. Cek juga harga via Curup dan jadwal keberangkatan harian.',
    url: 'https://rpmtravel.co.id/harga-travel-palembang-ke-lebong',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20tanya%20harga%20travel%20Palembang%E2%80%93Lebong';

const hargaList = [
  {
    rute: 'Palembang → Lebong',
    harga: 'Rp 300.000',
    estimasi: '10–12 Jam',
    keterangan: 'Langsung ke Kabupaten Lebong, door to door',
    icon: '🚐',
    highlight: true,
  },
  {
    rute: 'Palembang → Curup',
    harga: 'Rp 250.000',
    estimasi: '8–10 Jam',
    keterangan: 'Turun di Kota Curup, Rejang Lebong',
    icon: '🚗',
    highlight: false,
  },
  {
    rute: 'Curup → Lebong',
    harga: 'Rp 60.000',
    estimasi: '1–2 Jam',
    keterangan: 'Rute lokal sambungan dari Curup ke Lebong',
    icon: '🛺',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Berapa harga travel Palembang ke Lebong?',
    a: 'Ongkos travel Palembang ke Lebong adalah Rp 300.000 per orang. Harga ini sudah termasuk layanan door to door langsung ke tujuan Anda di wilayah Kabupaten Lebong, Bengkulu. Harga dapat berubah sewaktu-waktu, disarankan konfirmasi ke kami sebelum keberangkatan.',
  },
  {
    q: 'Apakah ada pilihan turun di Curup saja?',
    a: 'Ya, bagi penumpang yang tujuannya hanya sampai Kota Curup, ongkosnya lebih ringan, yaitu Rp 250.000 per orang. Curup adalah ibu kota Kabupaten Rejang Lebong yang dilalui dalam perjalanan menuju Lebong.',
  },
  {
    q: 'Bagaimana cara meneruskan perjalanan dari Curup ke Lebong?',
    a: 'Dari Curup, penumpang bisa melanjutkan perjalanan ke Lebong secara terpisah dengan ongkos sekitar Rp 60.000. Namun, jika Anda memesan travel langsung ke Lebong dari Palembang bersama RPM Travel, kami mengurus keseluruhan perjalanan tanpa perlu transit atau berganti kendaraan.',
  },
  {
    q: 'Apakah harga sudah termasuk penjemputan di Palembang?',
    a: 'Ya, layanan kami bersifat door to door. Kami akan menjemput Anda di titik yang disepakati di Palembang dan mengantarkan langsung ke alamat tujuan di Lebong. Tidak ada biaya tambahan untuk layanan penjemputan dalam kota Palembang.',
  },
  {
    q: 'Apakah ada perbedaan harga antara jadwal pagi dan malam?',
    a: 'Tidak ada perbedaan harga antara keberangkatan pukul 07.00 WIB dan pukul 19.00 WIB. Kedua jadwal dikenakan tarif yang sama, yaitu Rp 300.000 per orang untuk rute Palembang ke Lebong.',
  },
  {
    q: 'Bagaimana cara memesan dan membayar?',
    a: 'Pemesanan dapat dilakukan melalui WhatsApp ke nomor 0852-8282-8005 atau melalui formulir pemesanan online di website kami. Pembayaran dapat dilakukan di muka saat konfirmasi atau saat keberangkatan sesuai kesepakatan.',
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
    { '@type': 'ListItem', position: 3, name: 'Harga Travel Palembang ke Lebong', item: 'https://rpmtravel.co.id/harga-travel-palembang-ke-lebong' },
  ],
});

export default function HargaTravelPalembangLebongPage() {
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
            <span className="text-gray-400">Harga Travel Palembang ke Lebong</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            💰 Info Harga & Tarif Terbaru 2025
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Harga Travel Palembang ke Lebong<br />
            <span className="text-gold-400">Ongkos Resmi RPM Travel</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Ingin tahu berapa ongkos travel dari Palembang ke Lebong? Halaman ini merangkum tarif resmi RPM Travel untuk rute Palembang–Lebong beserta rute pendukung via Curup, sehingga Anda bisa merencanakan perjalanan dengan lebih mudah.
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
              Konfirmasi Harga via WhatsApp
            </a>
            <Link
              href="/travel-palembang-lebong"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}
            >
              🚐 Lihat Info Lengkap Rute
            </Link>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Harga ke Lebong', value: 'Rp 300.000' },
            { label: 'Harga ke Curup', value: 'Rp 250.000' },
            { label: 'Curup → Lebong', value: 'Rp 60.000' },
            { label: 'Layanan', value: 'Door to Door' },
          ].map(item => (
            <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABEL HARGA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Daftar Harga Travel Palembang – Lebong</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Berikut adalah tarif perjalanan yang berlaku untuk rute Palembang ke Lebong dan rute pendukungnya. Harga ditetapkan per orang dan sudah mencakup layanan door to door untuk rute utama Palembang–Lebong.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {hargaList.map(item => (
              <div
                key={item.rute}
                className={`rounded-2xl p-6 border transition-all ${
                  item.highlight
                    ? 'bg-primary-900 border-gold-500/40 shadow-lg'
                    : 'bg-white border-gray-200 hover:border-gold-400 hover:shadow-md'
                }`}
              >
                {item.highlight && (
                  <span className="inline-block bg-gold-500/20 text-gold-300 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                    ⭐ Rute Utama
                  </span>
                )}
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className={`font-display text-lg font-bold mb-1 ${item.highlight ? 'text-white' : 'text-primary-900'}`}>
                  {item.rute}
                </h3>
                <p className={`text-3xl font-display font-bold mb-2 ${item.highlight ? 'text-gold-400' : 'text-gold-600'}`}>
                  {item.harga}
                </p>
                <p className={`text-xs mb-3 ${item.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  ⏱ Estimasi {item.estimasi}
                </p>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.keterangan}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Harga dapat berubah sewaktu-waktu mengikuti kondisi operasional. Selalu konfirmasi tarif terbaru sebelum keberangkatan via WhatsApp atau telepon.
          </p>
        </div>
      </section>

      {/* PENJELASAN RUTE & KONTEN ARTIKEL */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Mengapa Harga Travel Palembang–Lebong Berbeda dengan Rute Lain?</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
            <p>
              Rute Palembang ke Lebong adalah salah satu perjalanan darat terpanjang dan paling menantang di wilayah Sumatera bagian selatan. Jarak yang harus ditempuh mencapai ratusan kilometer, melewati jalur lintas Sumatera yang padat, dilanjutkan dengan medan pegunungan di kawasan Kabupaten Rejang Lebong sebelum akhirnya tiba di Kabupaten Lebong yang berada di ketinggian lebih tinggi.
            </p>
            <p>
              Kondisi jalan yang bervariasi — mulai dari tol dan jalan nasional hingga jalan perbukitan yang berkelok — membuat tarif perjalanan ini mempertimbangkan lebih dari sekadar jarak. Konsumsi bahan bakar lebih tinggi, tingkat keausan kendaraan lebih besar, dan durasi kerja pengemudi yang lebih panjang turut memengaruhi penetapan ongkos travel Palembang ke Lebong sebesar Rp 300.000 per orang.
            </p>
            <p>
              Dibandingkan dengan rute Palembang ke Curup yang lebih pendek dengan tarif Rp 250.000, perbedaan harga sebesar Rp 50.000 tersebut mencerminkan tambahan jarak dan waktu tempuh dari Curup menuju Lebong yang masih membutuhkan sekitar satu hingga dua jam perjalanan lagi melewati jalur pegunungan.
            </p>
          </div>

          <h2 className="font-display text-xl font-bold text-primary-900 mt-10 mb-4">Perbandingan: Langsung ke Lebong vs Transit Curup</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <p className="font-display font-bold text-primary-900 text-base mb-3">✅ Langsung ke Lebong</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Satu kali bayar Rp 300.000</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Tidak perlu ganti kendaraan</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Door to door ke tujuan</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Lebih praktis untuk barang bawaan</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <p className="font-display font-bold text-primary-900 text-base mb-3">🔄 Via Curup (Transit)</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gray-400">–</span>Bayar Rp 250.000 + Rp 60.000 = Rp 310.000</li>
                <li className="flex gap-2"><span className="text-gray-400">–</span>Perlu menunggu kendaraan lanjutan di Curup</li>
                <li className="flex gap-2"><span className="text-gray-400">–</span>Total waktu bisa lebih lama</li>
                <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span>Bisa singgah lebih lama di Curup</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Secara total biaya, memilih langsung ke Lebong justru lebih hemat Rp 10.000 dibandingkan transit via Curup, sekaligus lebih nyaman karena tidak perlu berpindah kendaraan.
          </p>
        </div>
      </section>

      {/* FAQ + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan Umum Seputar Harga</h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Tips Memesan Travel Palembang ke Lebong</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Perjalanan Palembang ke Lebong membutuhkan perencanaan yang matang, terutama untuk musim liburan dan hari raya. Berikut beberapa hal yang perlu diperhatikan agar perjalanan Anda berjalan lancar:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="list-disc">Pesan minimal satu hari sebelum keberangkatan, terutama untuk jadwal malam hari yang cukup diminati.</li>
                  <li className="list-disc">Konfirmasi harga terbaru saat memesan, karena tarif dapat disesuaikan mengikuti kondisi bahan bakar dan operasional.</li>
                  <li className="list-disc">Siapkan titik jemput yang jelas dan mudah dijangkau pengemudi di area Palembang.</li>
                  <li className="list-disc">Informasikan alamat tujuan di Lebong secara spesifik agar rute door to door dapat dipersiapkan.</li>
                  <li className="list-disc">Bagi yang membawa barang banyak, pilih armada Hiace yang memiliki kapasitas bagasi lebih besar.</li>
                </ul>
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
                    desc: 'Info lengkap jadwal, armada, dan pemesanan',
                  },
                  {
                    href: '/travel-lebong-palembang',
                    label: '↔ Travel Lebong – Palembang',
                    desc: 'Rute balik dari Lebong ke Palembang',
                  },
                  {
                    href: '/travel-palembang-curup',
                    label: '📍 Travel Palembang – Curup',
                    desc: 'Rute ke ibu kota Rejang Lebong',
                  },
                  {
                    href: '/travel-palembang-bengkulu',
                    label: '🚐 Travel Palembang – Bengkulu',
                    desc: 'Hiace Executive & Regular ke Bengkulu',
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
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Palembang → Lebong Rp 300.000</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Berangkat 07.00 & 19.00 WIB</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke tujuan</div>
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
