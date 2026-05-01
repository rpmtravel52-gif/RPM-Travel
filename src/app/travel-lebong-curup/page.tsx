import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Lebong ke Curup Berangkat Tiap Jam | Hiace & Innova – RPM Travel',
  description:
    'Cari travel Lebong–Curup yang fleksibel? RPM Travel berangkat hampir tiap jam, pukul 06.00–17.00 WIB. Armada Toyota Hiace 14 kursi dan Innova, antar jemput door to door. Hubungi 085282828005.',
  keywords: ['travel lebong curup','travel lebong curup setiap jam','travel lebong ke curup','angkutan lebong curup','travel lebong curup murah','travel lebong curup terpercaya','travel lebong rejang lebong','jasa travel lebong curup hiace innova'],
  alternates: { canonical: 'https://rpmtravel.co.id/travel-lebong-curup' },
  openGraph: {
    title: 'Travel Lebong–Curup Berangkat Tiap Jam | RPM Travel',
    description: 'RPM Travel melayani rute Lebong–Curup hampir setiap jam. Hiace 14 kursi & Innova, door to door, harga bersaing.',
    url: 'https://rpmtravel.co.id/travel-lebong-curup',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Lebong%E2%80%93Curup';

const jamBerangkat = ['06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00'];

const armada = [
  {
    nama: 'Toyota Hiace', kapasitas: '14 Penumpang', icon: '🚐', badge: 'Rombongan',
    fitur: ['Ideal untuk rombongan keluarga atau grup kerja','Kabin lega dengan ruang kaki yang leluasa','AC double blower – dingin merata hingga baris belakang','Bagasi ekstra besar untuk barang bawaan lebih banyak'],
  },
  {
    nama: 'Toyota Innova', kapasitas: '7 Penumpang', icon: '🚗', badge: 'Harian',
    fitur: ['Nyaman ditempuh di jalur pegunungan Lebong–Curup','Suspensi tangguh, minim guncangan di jalan berkelok','AC dingin maksimal sepanjang perjalanan','Pilihan utama penumpang harian rute ini'],
  },
];

const keunggulan = [
  { icon: '🕐', title: 'Jadwal Fleksibel Tiap Jam', desc: 'Tidak perlu terikat satu waktu keberangkatan. Pilih jam yang paling pas, dari subuh hingga sore hari.' },
  { icon: '💰', title: 'Harga Wajar, Tidak Ada Kejutan', desc: 'Tarif transparan dan tetap untuk rute Lebong–Curup. Tidak ada biaya tambahan yang tiba-tiba muncul di tengah perjalanan.' },
  { icon: '🏠', title: 'Jemput Langsung di Pintu Rumah', desc: 'Kami datang ke lokasi Anda di Lebong dan mengantar hingga ke alamat tujuan di Curup — tanpa harus ke pool travel.' },
  { icon: '👨‍✈️', title: 'Pengemudi Hafal Medan Lokal', desc: 'Sopir kami adalah warga yang sudah bertahun-tahun melewati jalan Lebong–Curup, termasuk jalur alternatif saat jalan utama padat.' },
];

const faqs = [
  { q: 'Berapa lama perjalanan dari Lebong ke Curup?', a: 'Rata-rata sekitar 1,5 hingga 2,5 jam. Durasi dipengaruhi kondisi jalan di hari keberangkatan. Rute ini melewati jalur pegunungan yang berkelok dengan pemandangan alam khas Bengkulu yang memukau.' },
  { q: 'Apakah armada benar-benar tersedia setiap jam?', a: 'Kami beroperasi hampir setiap jam dari pukul 06.00 hingga 17.00 WIB. Ketersediaan kursi per jam bergantung pada kondisi hari dan pemesanan yang sudah masuk, jadi sebaiknya konfirmasi dulu via WhatsApp sebelum datang.' },
  { q: 'Bisa pesan di hari yang sama, mendadak?', a: 'Bisa, selama kursi masih tersedia. Hubungi kami via WhatsApp dan tim kami akan mengecek ketersediaan armada saat itu juga. Untuk hari sibuk dan akhir pekan, pesan lebih awal sangat disarankan.' },
  { q: 'Bagaimana kalau saya berangkat sendiri, satu penumpang?', a: 'Tidak ada masalah. Kami menerapkan sistem sharing — Anda berbagi armada dengan penumpang lain yang menuju arah yang sama. Tarif tetap per orang, tidak dikenakan biaya sewa penuh.' },
  { q: 'Apakah bisa diantar ke area di luar Curup Kota?', a: 'Ya. Kami melayani pengantaran ke berbagai titik di Curup dan sekitar wilayah Rejang Lebong. Informasikan alamat lengkap tujuan Anda saat memesan agar kami bisa siapkan rute penjemputan yang optimal.' },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export default function TravelLebongCurupPage() {
  return (
    <>
      {/* FIX LCP: Hero section dengan gambar di dalamnya */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Lebong – Curup</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10">
            {/* Teks hero */}
            <div className="order-last lg:order-first">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                🕐 Tiap Jam 06.00–17.00 · Hiace & Innova
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Travel Lebong – Curup<br />
                <span className="text-gold-400">Tiap Jam, Langsung ke Tujuan</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Tidak perlu khawatir ketinggalan jadwal. RPM Travel menyediakan armada Toyota Hiace dan Innova yang siap berangkat hampir setiap jam dari Lebong menuju Curup — dengan layanan antar jemput langsung ke pintu rumah Anda dan harga yang tidak menguras kantong.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pesan?paket=lebong-curup"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}>
                  <span className="relative z-10">🎫 Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 2.5s infinite ease-in-out' }} />
                </Link>
              </div>
            </div>

            {/* Gambar hero — mobile tampil duluan */}
            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/images/innova/allarmada.jpg"
                  alt="Armada Innova RPM Travel rute Lebong–Curup"
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
            { label: 'Rute', value: 'Lebong → Curup' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Estimasi', value: '1,5–2,5 jam' },
            { label: 'Jadwal', value: 'Tiap jam 06–17' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JADWAL */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan dari Lebong</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-5" />
          <p className="text-gray-500 text-sm mb-5">Dua belas slot keberangkatan tersedia setiap harinya — dari pagi buta hingga sore menjelang malam. Pilih jam yang paling nyaman untuk Anda.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-5">
            {jamBerangkat.map(jam => (
              <div key={jam} className="text-center bg-primary-900 hover:bg-primary-800 rounded-xl py-3 px-2 transition-all cursor-default">
                <p className="text-gold-400 font-display font-bold text-lg">{jam}</p>
                <p className="text-gray-500 text-xs">WIB</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Ketersediaan kursi per jam bisa berbeda setiap harinya. Konfirmasi via WhatsApp terlebih dahulu untuk memastikan armada tersedia di jam pilihan Anda.
          </p>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Mengapa Pilih RPM Travel untuk Rute Lebong–Curup?</h2>
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

      {/* ARMADA + GAMBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada Rute Ini</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <Link href={`/pesan?paket=lebong-curup&armada=${encodeURIComponent(a.nama)}`}
                  className="flex items-center justify-center w-full font-bold py-2.5 rounded-xl text-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 2px 12px rgba(201,168,76,0.35)' }}>
                  <span className="relative z-10">Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 2.5s infinite ease-in-out' }} />
                </Link>
              </div>
            ))}
          </div>

          {/* Gambar armada lazy load */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/innova/allarmada.jpg"
              alt="Semua armada Innova & Hiace RPM Travel rute Lebong–Curup"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Armada Innova & Hiace RPM Travel — siap antar jemput door to door rute Lebong–Curup setiap hari.
          </p>
        </div>
      </section>

      {/* FAQ + SIDEBAR */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-white">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Rute Lain yang Mungkin Anda Butuhkan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-curup-lebong', label: '↔ Travel Curup – Lebong', desc: 'Perjalanan balik dari Curup ke Lebong, berangkat 3x sehari' },
                  { href: '/travel-lebong-palembang', label: '🚐 Travel Lebong – Palembang', desc: 'Jadwal keberangkatan pukul 10.00 & 16.00 WIB' },
                  { href: '/travel-palembang-lebong', label: '🔄 Travel Palembang – Lebong', desc: 'Jadwal keberangkatan pukul 07.00 & 19.00 WIB' },
                  { href: '/sewa-hiace-curup', label: '🔑 Sewa Hiace Curup', desc: 'Sewa armada harian mulai Rp 1.800.000 all-in' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="block border border-gray-100 hover:border-gold-400 bg-white rounded-xl p-3 transition-all group">
                    <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">{l.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Mau Berangkat Sekarang?</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Armada tersedia tiap jam</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace (14 kursi) / Innova (7 kursi)</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Antar jemput pintu ke pintu</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Tarif transparan, tanpa biaya ekstra</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm mb-2 transition-all">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=lebong-curup"
                className="flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 16px rgba(201,168,76,0.4)' }}>
                <span className="relative z-10">🎫 Pesan Sekarang</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 2.5s infinite ease-in-out' }} />
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes shimmer{0%{transform:translateX(-100%) skewX(-20deg)}100%{transform:translateX(300%) skewX(-20deg)}}`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    </>
  );
}
