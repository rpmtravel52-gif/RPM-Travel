import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Bengkulu Palembang Naik Hiace | RPM Travel Curup',
  description:
    'Jasa travel Bengkulu–Palembang menggunakan armada Toyota Hiace berkapasitas 14 penumpang. Berangkat pukul 10.00 pagi dan 19.00 malam setiap hari. Antar jemput door to door dari Curup, Bengkulu. Hubungi 085282828005.',
  keywords: [
    'travel bengkulu palembang',
    'travel bengkulu palembang hiace',
    'travel curup palembang',
    'travel bengkulu palembang murah',
    'jadwal travel bengkulu palembang',
    'travel bengkulu palembang door to door',
    'travel bengkulu palembang RPM',
  ],
  alternates: { canonical: '/travel-bengkulu-palembang' },
  openGraph: {
    title: 'Travel Bengkulu Palembang Hiace | RPM Travel Curup',
    description: 'Layanan travel Bengkulu–Palembang dengan Toyota Hiace 14 kursi. Berangkat 10.00 & 19.00 WIB. Door to door.',
    url: 'https://rpmtravel.co.id/travel-bengkulu-palembang',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Bengkulu%E2%80%93Palembang';

const schedules = [
  { jam: '10.00 WIB', keterangan: 'Keberangkatan Pagi', icon: '🌅' },
  { jam: '19.00 WIB', keterangan: 'Keberangkatan Malam', icon: '🌙' },
];

const features = [
  { icon: '🚐', title: 'Armada Toyota Hiace', desc: 'Kapasitas 14 penumpang, kabin luas, nyaman untuk perjalanan jauh.' },
  { icon: '🏠', title: 'Door to Door', desc: 'Dijemput langsung dari alamat Anda di area Curup dan Bengkulu.' },
  { icon: '❄️', title: 'AC Berpendingin', desc: 'Sistem pendingin udara yang nyaman sepanjang perjalanan.' },
  { icon: '🧳', title: 'Bagasi Luas', desc: 'Ruang bagasi ekstra luas di bagian belakang kendaraan.' },
  { icon: '👨‍✈️', title: 'Sopir Profesional', desc: 'Pengemudi berpengalaman, hafal rute, dan ramah.' },
  { icon: '⏰', title: 'Tepat Waktu', desc: 'Komitmen berangkat sesuai jadwal yang telah ditentukan.' },
];

const faqs = [
  {
    q: 'Berapa lama perjalanan dari Bengkulu ke Palembang?',
    a: 'Estimasi perjalanan sekitar 8–10 jam tergantung kondisi lalu lintas dan cuaca. Rute melewati jalan lintas Sumatera yang sebagian besar sudah beraspal baik.',
  },
  {
    q: 'Apakah ada layanan jemput dari Curup?',
    a: 'Ya, kami melayani penjemputan dari Curup dan sekitar Bengkulu tanpa biaya tambahan. Informasikan alamat Anda saat pemesanan.',
  },
  {
    q: 'Berapa kapasitas penumpang Hiace yang digunakan?',
    a: 'Armada Hiace Regular kami berkapasitas 14 penumpang dengan tempat duduk yang tertata nyaman dan ruang kaki yang cukup.',
  },
  {
    q: 'Bagaimana cara memesan tiket?',
    a: 'Pemesanan bisa dilakukan via WhatsApp 085282828005 atau melalui halaman Pesan Tiket di website kami. Pemesanan minimal H-1 sebelum keberangkatan.',
  },
  {
    q: 'Apakah bisa cancel atau reschedule?',
    a: 'Pembatalan dan perubahan jadwal bisa dilakukan maksimal 12 jam sebelum keberangkatan. Hubungi admin kami via WhatsApp untuk informasi lebih lanjut.',
  },
];

export default function TravelBengkuluPalembangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-4xl mx-auto px-4 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Bengkulu – Palembang</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🚐 Hiace 14 Kursi · 2 Jadwal Harian
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Bengkulu – Palembang<br />
            <span className="text-gold-400">Naik Hiace, Nyaman & Tepat Waktu</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Perjalanan Bengkulu–Palembang kini lebih nyaman bersama RPM Travel. Armada Toyota Hiace berkapasitas 14 penumpang, kabin luas, AC dingin, dan sopir berpengalaman siap mengantarkan Anda dengan selamat.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/pesan?paket=bengkulu-palembang"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
              🎫 Pesan Tiket Online
            </Link>
          </div>
        </div>
      </section>

      {/* Foto Eksterior Hiace */}
      <section className="bg-primary-900 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hiace/exterior.jpg"
              alt="Armada Toyota Hiace RPM Travel untuk rute Bengkulu–Palembang"
              width={900}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Armada Toyota Hiace RPM Travel — siap antar jemput door to door rute Bengkulu–Palembang.
          </p>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Bengkulu → Palembang' },
            { label: 'Armada', value: 'Toyota Hiace' },
            { label: 'Kapasitas', value: '14 Penumpang' },
            { label: 'Estimasi', value: '8–10 Jam' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jadwal */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan Harian</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {schedules.map(s => (
              <div key={s.jam} className="flex items-center gap-4 bg-primary-900 rounded-2xl p-5">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">{s.keterangan}</p>
                  <p className="text-white font-display font-bold text-2xl">{s.jam}</p>
                  <p className="text-gray-400 text-xs mt-1">Setiap hari · Termasuk hari libur</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Jadwal dapat berubah pada hari-hari tertentu. Konfirmasi ketersediaan kursi via WhatsApp sebelum memesan.
          </p>
        </div>
      </section>

      {/* Fitur */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Keunggulan Layanan Kami</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gold-400 hover:shadow-md transition-all">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-primary-900 text-base mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konten SEO */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">

              {/* Artikel SEO */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">
                  Perjalanan Bengkulu ke Palembang yang Menyenangkan
                </h2>
                <div className="prose prose-sm text-gray-600 space-y-4">
                  <p>
                    Menempuh perjalanan dari Bengkulu menuju Palembang membutuhkan armada yang andal dan nyaman. RPM Travel hadir dengan solusi transportasi terbaik menggunakan Toyota Hiace berkapasitas 14 penumpang yang terawat dan bersih setiap harinya.
                  </p>
                  <p>
                    Dengan dua jadwal keberangkatan setiap hari — pukul 10.00 WIB untuk perjalanan siang dan pukul 19.00 WIB untuk perjalanan malam — kami memberikan fleksibilitas bagi penumpang untuk memilih waktu yang paling sesuai dengan kebutuhan mereka.
                  </p>
                  <p>
                    Layanan antar jemput door to door kami menjangkau seluruh wilayah Curup, Rejang Lebong, dan sekitar Bengkulu. Penumpang tidak perlu repot mencari titik kumpul — cukup informasikan alamat Anda, dan sopir kami akan datang tepat waktu.
                  </p>
                  <p>
                    Armada Hiace yang kami gunakan dilengkapi dengan sistem pendingin udara yang bekerja optimal, kursi yang ergonomis, dan ruang bagasi yang cukup untuk koper atau barang bawaan berukuran sedang. Kenyamanan Anda adalah prioritas utama kami dalam setiap perjalanan.
                  </p>
                </div>

                {/* Foto Interior Hiace */}
                <div className="mt-6">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/hiace/interior.jpg"
                      alt="Interior kabin Toyota Hiace RPM Travel — kursi ergonomis dan AC dingin untuk perjalanan Bengkulu–Palembang"
                      width={800}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">
                    Kabin Toyota Hiace RPM Travel — kursi ergonomis, AC dingin, dan bagasi luas untuk perjalanan jauh yang nyaman.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
                <div className="space-y-3">
                  {faqs.map(faq => (
                    <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                      <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rute terkait */}
              <div>
                <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Lain RPM Travel</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/travel-palembang-bengkulu', label: '← Travel Palembang – Bengkulu', desc: 'Hiace Executive & Regular' },
                    { href: '/sewa-hiace-curup', label: '🚐 Sewa Hiace Curup', desc: 'Rp 1.800.000/hari all-in' },
                    { href: '/transportasi-perjalanan-dinas', label: '💼 Transportasi Perjalanan Dinas', desc: 'Hiace Executive' },
                    { href: '/sewa-bus-wisata', label: '🚌 Sewa Bus Wisata', desc: '31 kursi · All-in' },
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
                  <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Door to door</div>
                  <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Hiace 14 kursi</div>
                  <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> 2 jadwal/hari</div>
                  <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Sopir berpengalaman</div>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-sm mb-2">
                  Chat WhatsApp
                </a>
                <Link href="/pesan?paket=bengkulu-palembang"
                  className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-sm transition-all"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
                  🎫 Pesan Tiket Online
                </Link>
                <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
