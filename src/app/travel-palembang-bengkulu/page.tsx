import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Palembang ke Bengkulu – Hiace Executive & Regular Harian | RPM Travel',
  description:
    'Pilih kenyamanan perjalanan Palembang–Bengkulu: Hiace Executive 8 kursi kelas premium atau Hiace Regular 14 kursi harga hemat. Dua jadwal tetap tiap hari pukul 10.00 & 16.00 WIB. Jemput lokasi. Info & booking: 085282828005.',
  keywords: [
    'travel palembang bengkulu',
    'travel palembang bengkulu hiace',
    'travel palembang curup',
    'travel palembang bengkulu executive',
    'jadwal travel palembang bengkulu',
    'travel palembang bengkulu door to door',
  ],
  alternates: { canonical:'https://rpmtravel.co.id/travel-palembang-bengkulu' },
  openGraph: {
    title: 'Travel Palembang ke Bengkulu Langsung | Hiace Executive & Regular – RPM Travel',
    description: 'Dua kelas armada Hiace siap tiap hari dari Palembang ke Bengkulu. Executive 8 kursi atau Regular 14 kursi, berangkat 10.00 & 16.00 WIB.',
    url: 'https://rpmtravel.co.id/travel-palembang-bengkulu',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Palembang%E2%80%93Bengkulu';

const armadaList = [
  {
    tipe: 'Hiace Executive',
    kapasitas: '8 Penumpang',
    icon: '⭐',
    color: 'border-gold-400',
    badge: 'Premium',
    badgeColor: 'bg-gold-500 text-primary-900',
    highlights: ['Hanya 8 penumpang, ruang tidak berdesak', 'Jarak antar kursi jauh lebih lega', 'Pendingin udara bekerja prima sepanjang rute', 'Pilihan utama perjalanan dinas & profesional'],
    interiorImg: '/images/hiace/interior.jpg',
    interiorAlt: 'Interior kabin Hiace Executive RPM Travel — kursi lega hanya 8 penumpang',
    interiorCaption: 'Kabin Hiace Executive — hanya 8 kursi, ruang kaki lega, cocok untuk perjalanan dinas maupun profesional.',
  },
  {
    tipe: 'Hiace Regular',
    kapasitas: '14 Penumpang',
    icon: '🚐',
    color: 'border-sky-400',
    badge: 'Ekonomis',
    badgeColor: 'bg-sky-600 text-white',
    highlights: ['Muat hingga 14 penumpang sekali jalan', 'Ruang bagasi bawah yang luas untuk koper besar', 'AC kabin terawat, perjalanan tetap segar', 'Tarif kompetitif untuk rombongan atau keluarga besar'],
    interiorImg: null,
    interiorAlt: null,
    interiorCaption: null,
  },
];

const schedules = [
  { jam: '10.00 WIB', keterangan: 'Keberangkatan Pagi', icon: '🌅' },
  { jam: '16.00 WIB', keterangan: 'Keberangkatan Sore', icon: '🌇' },
];

const faqs = [
  {
    q: 'Apa perbedaan Hiace Executive dan Hiace Regular?',
    a: 'Perbedaan utamanya ada di kapasitas dan kelas kenyamanan. Hiace Executive hanya diisi 8 penumpang sehingga tiap kursi mendapat ruang kaki yang jauh lebih lapang — cocok untuk perjalanan dinas, pasangan, atau siapa pun yang tidak ingin berdesakan. Hiace Regular berkapasitas 14 penumpang dengan tarif yang lebih hemat, ideal untuk rombongan atau keluarga besar yang bepergian bersama.',
  },
  {
    q: 'Berapa lama perjalanan Palembang ke Bengkulu?',
    a: 'Waktu tempuh rata-rata antara 8 hingga 10 jam, mengikuti kondisi lalu lintas di jalur lintas Sumatera dan cuaca saat itu. Sopir kami yang berpengalaman di rute ini akan memilih jalur paling efisien sekaligus mengutamakan keselamatan selama perjalanan.',
  },
  {
    q: 'Apakah ada layanan jemput di Palembang?',
    a: 'Ya, kami melayani penjemputan di titik-titik dalam kota Palembang dan wilayah sekitarnya. Saat menghubungi kami, cukup sebutkan alamat lengkap atau patokan lokasi penjemputan, dan tim kami akan mengatur waktu kedatangan yang sesuai.',
  },
  {
    q: 'Apakah perlu memesan jauh-jauh hari?',
    a: 'Kami menyarankan pemesanan minimal sehari sebelum keberangkatan. Untuk kelas Hiace Executive, pemesanan lebih awal sangat dianjurkan karena hanya tersedia 8 kursi per keberangkatan dan sering penuh — terutama di akhir pekan dan musim liburan.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export default function TravelPalembangBengkuluPage() {
  return (
    <>
      {/* FIX LCP: Hero section sekarang berisi gambar di dalamnya, tampil di mobile & desktop */}
      <section className="bg-primary-900 pt-10 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Palembang – Bengkulu</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10">
            {/* Teks hero — desktop kiri, mobile bawah */}
            <div className="order-last lg:order-first">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                🚐 Executive & Regular · 2 Jadwal Harian
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Travel Palembang – Bengkulu<br />
                <span className="text-gold-400">Hiace Executive & Regular</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Tidak semua penumpang punya kebutuhan yang sama. Itu mengapa RPM Travel menyiapkan dua kelas armada untuk rute Palembang–Bengkulu: Hiace Executive bagi Anda yang mengutamakan ruang dan ketenangan, serta Hiace Regular bagi rombongan yang ingin perjalanan efisien. Dua jadwal tersedia setiap hari, termasuk akhir pekan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/pesan?paket=palembang-bengkulu"
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
                  src="/images/hiace-executive/exterior.jpg"
                  alt="Armada Toyota Hiace Executive RPM Travel untuk rute Palembang–Bengkulu"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                Armada Toyota Hiace Executive RPM Travel — tersedia dua jadwal harian untuk rute Palembang–Bengkulu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Palembang → Bengkulu' },
            { label: 'Armada', value: 'Executive & Regular' },
            { label: 'Kapasitas', value: '8 atau 14 Kursi' },
            { label: 'Estimasi', value: '8–10 Jam' },
          ].map(item => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilihan Armada */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Armada</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {armadaList.map(armada => (
              <div key={armada.tipe} className={`border-2 ${armada.color} rounded-2xl p-6 relative`}>
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${armada.badgeColor}`}>{armada.badge}</span>
                <div className="text-4xl mb-3">{armada.icon}</div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-1">{armada.tipe}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-4">👥 {armada.kapasitas}</p>
                <ul className="space-y-2">
                  {armada.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold-500 font-bold">✓</span> {h}
                    </li>
                  ))}
                </ul>
                {armada.interiorImg && (
                  <div className="mt-5">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <Image src={armada.interiorImg} alt={armada.interiorAlt!} width={600} height={340} className="w-full object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">{armada.interiorCaption}</p>
                  </div>
                )}
                <Link href={`/pesan?paket=palembang-bengkulu&armada=${encodeURIComponent(armada.tipe)}`}
                  className="mt-5 flex items-center justify-center w-full font-bold py-2.5 rounded-xl text-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628', boxShadow: '0 2px 12px rgba(201,168,76,0.35)' }}>
                  <span className="relative z-10">Pesan Sekarang</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" style={{ animationName: 'shimmer', animationDuration: '2.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animation: 'shimmer 2.5s infinite ease-in-out' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {schedules.map(s => (
              <div key={s.jam} className="flex items-center gap-4 bg-primary-900 rounded-2xl p-5">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">{s.keterangan}</p>
                  <p className="text-white font-display font-bold text-2xl">{s.jam}</p>
                  <p className="text-gray-400 text-xs mt-1">Beroperasi setiap hari, Senin hingga Minggu</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
            ⚠️ Pastikan ketersediaan kursi dikonfirmasi lebih dulu via WhatsApp, terutama untuk kelas Executive yang kapasitasnya terbatas.
          </p>
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
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Executive 8 kursi atau Regular 14 kursi</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Jadwal pagi & sore, 7 hari seminggu</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Layanan jemput lokasi kota Palembang</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-sm mb-2">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=palembang-bengkulu"
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-sm relative overflow-hidden"
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
