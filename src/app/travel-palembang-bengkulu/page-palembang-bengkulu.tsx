import type { Metadata } from 'next';
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
  alternates: { canonical: '/travel-palembang-bengkulu' },
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
  },
  {
    tipe: 'Hiace Regular',
    kapasitas: '14 Penumpang',
    icon: '🚐',
    color: 'border-sky-400',
    badge: 'Ekonomis',
    badgeColor: 'bg-sky-600 text-white',
    highlights: ['Muat hingga 14 penumpang sekali jalan', 'Ruang bagasi bawah yang luas untuk koper besar', 'AC kabin terawat, perjalanan tetap segar', 'Tarif kompetitif untuk rombongan atau keluarga besar'],
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

export default function TravelPalembangBengkuluPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Palembang – Bengkulu</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            🚐 Executive & Regular · 2 Jadwal Harian
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Palembang – Bengkulu<br />
            <span className="text-gold-400">Hiace Executive & Regular</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Tidak semua penumpang punya kebutuhan yang sama. Itu mengapa RPM Travel menyiapkan dua kelas armada untuk rute Palembang–Bengkulu: Hiace Executive bagi Anda yang mengutamakan ruang dan ketenangan, serta Hiace Regular bagi rombongan yang ingin perjalanan efisien tanpa harus sewa unit penuh. Dua jadwal tersedia setiap hari, termasuk akhir pekan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/pesan?paket=palembang-bengkulu"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-base"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
              🎫 Pesan Tiket Online
            </Link>
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
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${armada.badgeColor}`}>
                  {armada.badge}
                </span>
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
                <a href={`${WA}%20(${encodeURIComponent(armada.tipe)})`} target="_blank" rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all">
                  Pesan {armada.tipe}
                </a>
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

      {/* FAQ */}
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
          {/* Sidebar */}
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
                className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
                🎫 Pesan Tiket Online
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
    </>
  );
}
