import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Lebong ke Palembang – Hiace & Innova Langsung | RPM Travel',
  description:
    'Naik travel dari Lebong ke Palembang tanpa transit, pakai armada Toyota Hiace 14 kursi atau Innova. Dua jadwal tiap hari: pukul 10.00 & 16.00 WIB, layanan jemput-antar door to door. Booking sekarang: 085282828005.',
  keywords: [
    'travel lebong palembang',
    'travel lebong palembang hiace',
    'travel lebong ke palembang',
    'jadwal travel lebong palembang',
    'travel lebong palembang murah',
    'agen travel lebong palembang',
    'travel kabupaten lebong palembang',
    'travel lebong palembang door to door',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/travel-lebong-palembang' },
  openGraph: {
    title: 'Travel Lebong ke Palembang Tanpa Transit | RPM Travel',
    description: 'Berangkat dari Kabupaten Lebong langsung ke Palembang. Jadwal 10.00 & 16.00 WIB, armada Hiace & Innova, jemput lokasi.',
    url: 'https://rpmtravel.co.id/travel-lebong-palembang',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Lebong%E2%80%93Palembang';

const schedules = [
  { jam: '10.00 WIB', label: 'Keberangkatan Pagi', icon: '🌅', note: 'Estimasi tiba Palembang sekitar pukul 22.00–24.00 WIB' },
  { jam: '16.00 WIB', label: 'Keberangkatan Sore', icon: '🌇', note: 'Estimasi tiba Palembang dini hari, cocok untuk perjalanan bisnis' },
];

const armada = [
  {
    nama: 'Toyota Hiace',
    kapasitas: '14 Penumpang',
    icon: '🚐',
    fitur: ['Kapasitas 14 penumpang', 'Kabin berdiri tegak, tidak sesak', 'Ruang bagasi ekstra untuk banyak barang', 'AC double blower terawat dingin'],
    badge: 'Kapasitas Besar',
  },
  {
    nama: 'Toyota Innova',
    kapasitas: '7 Penumpang',
    icon: '🚗',
    fitur: ['7 kursi dengan jarak kaki lega', 'Peredam kejut optimal di jalur pegunungan', 'AC kabin bekerja maksimal', 'Pilihan terbaik perjalanan keluarga kecil'],
    badge: 'Andalan Lebong',
  },
];

const faqs = [
  {
    q: 'Berapa lama perjalanan dari Lebong ke Palembang?',
    a: 'Durasi perjalanan Lebong–Palembang berkisar antara 10 hingga 12 jam tergantung kondisi lalu lintas di jalur lintas Sumatera. Rute ini melewati Curup dan beberapa segmen jalan pegunungan yang cukup berliku. Sopir kami yang berpengalaman di jalur ini akan mengutamakan keselamatan sambil tetap menjaga waktu tempuh seefisien mungkin.',
  },
  {
    q: 'Apakah ada penjemputan dari pelosok Kabupaten Lebong?',
    a: 'Kami melayani penjemputan di berbagai titik dalam wilayah Kabupaten Lebong, termasuk kecamatan-kecamatan yang jauh dari pusat kota. Saat memesan, cukup sampaikan alamat atau patokan lokasi Anda lewat WhatsApp agar tim kami dapat mengatur rute jemput dengan tepat.',
  },
  {
    q: 'Mengapa armada Innova cocok untuk rute Lebong–Palembang?',
    a: 'Toyota Innova dikenal memiliki ground clearance memadai dan sistem suspensi yang kuat untuk menahan guncangan di jalanan bergelombang dan pegunungan. Bodinya yang lebih ramping dibanding minibus besar juga membuatnya lebih lincah saat melewati tikungan tajam khas wilayah Lebong, tanpa mengorbankan kenyamanan kabin.',
  },
  {
    q: 'Apakah armada Hiace bisa melewati jalan di Lebong?',
    a: 'Ya, Toyota Hiace yang kami operasikan sudah terbukti kuat melewati rute Lebong–Palembang secara rutin. Kendaraan kami dirawat berkala dan dikemudikan oleh sopir khusus yang sangat memahami karakteristik medan pegunungan Lebong, sehingga perjalanan tetap aman meski menggunakan kendaraan berkapasitas besar.',
  },
  {
    q: 'Bagaimana cara pemesanan dari Lebong?',
    a: 'Pemesanan dilakukan via WhatsApp ke nomor 085282828005. Sampaikan lokasi penjemputan, jumlah penumpang, pilihan armada, dan jadwal keberangkatan yang diinginkan. Kami tersedia untuk konfirmasi kapan saja, dan disarankan memesan minimal satu hari sebelum keberangkatan agar kursi terjamin.',
  },
];

export default function TravelLebongPalembangPage() {
  return (
    <>
      {/* HERO */}
      {/* FIX LCP: Hero section sekarang berisi gambar di dalamnya, tampil di mobile & desktop */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Lebong – Palembang</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10">
            {/* Teks hero — desktop kiri, mobile bawah */}
            <div className="order-last lg:order-first">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                🚐 Hiace & Innova · Pagi & Sore
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Travel Lebong – Palembang<br />
                <span className="text-gold-400">Langsung, Tanpa Transit</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Bepergian dari Kabupaten Lebong ke Palembang kini tak perlu pusing soal sambungan angkutan. RPM Travel membuka rute khusus Lebong–Palembang dengan armada Hiace berkapasitas 14 kursi dan Innova 7 kursi — dua jadwal tetap tiap hari, langsung tiba di tujuan tanpa bongkar pindah penumpang di tengah jalan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pesan?paket=lebong-palembang"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-base relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}>
                  <span className="relative z-10">🎫 Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animationName: 'shimmer', animationDuration: '2.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }} />
                </Link>
              </div>
            </div>

            {/* Gambar hero — mobile tampil duluan */}
            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold-500/20">
                <Image
                  src="/images/hiace/innova-hiace.jpg"
                  alt="Armada Toyota Hiace dan Innova RPM Travel Lebong Palembang"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                Armada Toyota Hiace &amp; Innova RPM Travel — tersedia dua jadwal harian untuk rute Lebong–Palembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Lebong → Palembang' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Estimasi', value: '10–12 Jam' },
            { label: 'Jadwal', value: '10.00 & 16.00 WIB' },
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
            ⚠️ Pastikan konfirmasi ketersediaan kursi via WhatsApp sebelum hari keberangkatan agar perjalanan Anda tidak terganggu.
          </p>
        </div>
      </section>

      {/* ARMADA */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />

          {/* Gambar eksterior armada */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
            <Image
              src="/images/hiace/innova-hiace.jpg"
              alt="Eksterior Toyota Hiace dan Innova RPM Travel Lebong Palembang"
              width={896}
              height={420}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <p className="text-center text-xs text-gray-400 py-2">
              Armada Hiace &amp; Innova — Tangguh di Jalur Pegunungan Lebong
            </p>
          </div>

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
                <Link href={`/pesan?paket=lebong-palembang&armada=${encodeURIComponent(a.nama)}`}
                  className="flex items-center justify-center w-full font-bold py-2.5 rounded-xl text-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 2px 12px rgba(201,168,76,0.35)' }}>
                  <span className="relative z-10">Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 2.5s infinite ease-in-out' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTEN + FAQ + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                Solusi Perjalanan Warga Lebong Menuju Palembang
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Kabupaten Lebong berada di ketinggian pegunungan Bengkulu, menjadikannya daerah yang indah sekaligus menantang dari sisi transportasi. Banyak warga Lebong yang harus menggabungkan beberapa moda kendaraan hanya untuk mencapai Palembang. RPM Travel memutus rantai itu dengan rute langsung yang beroperasi setiap hari — cukup naik sekali, duduk, dan istirahat hingga tiba.
                </p>
                <p>
                  Jalur yang kami lalui melewati Curup lalu menyambung ke lintas Sumatera menuju Palembang. Tim sopir RPM Travel bukan sekadar hafal rute — mereka sudah ratusan kali melewati tikungan dan tanjakan khas Lebong, sehingga mampu menjaga laju kendaraan tetap stabil dan aman bahkan di kondisi jalan yang kurang ideal sekalipun.
                </p>

                {/* GAMBAR INTERIOR */}
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 my-2">
                  <Image
                    src="/images/hiace/innova-hiace.jpg"
                    alt="Interior kabin Toyota Hiace RPM Travel — nyaman untuk perjalanan Lebong Palembang"
                    width={600}
                    height={340}
                    className="w-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <p className="text-center text-xs text-gray-400 py-2">
                    Armada RPM Travel — Nyaman untuk Rute Panjang Lebong–Palembang
                  </p>
                </div>

                <p>
                  Dengan dua pilihan armada yang tersedia, penumpang dapat menyesuaikan kebutuhan. Hiace ideal untuk rombongan atau keluarga besar yang membawa banyak barang, sementara Innova menawarkan nuansa perjalanan lebih personal dengan kabinnya yang kompak dan nyaman untuk keluarga kecil.
                </p>
              </div>
            </div>

            {/* FAQ */}
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

            {/* Internal links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Rute Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-palembang-lebong', label: '↔ Travel Palembang – Lebong', desc: 'Rute balik dari Palembang ke Lebong' },
                  { href: '/travel-curup-lebong', label: '🗺️ Travel Curup – Lebong', desc: 'Rute harian Curup–Lebong setiap jam' },
                  { href: '/travel-lebong-curup', label: '🔄 Travel Lebong – Curup', desc: 'Rute lokal Lebong ke Curup' },
                  { href: '/travel-bengkulu-palembang', label: '🚐 Travel Bengkulu – Palembang', desc: 'Rute via Bengkulu kota' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group">
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
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Rute langsung Lebong–Palembang tanpa transit</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Hiace 14 kursi / Innova 7 kursi</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Jadwal tetap 10.00 & 16.00 WIB setiap hari</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Sopir terlatih rute pegunungan Lebong</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm mb-2 transition-all">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=lebong-palembang"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
    </>
  );
}
