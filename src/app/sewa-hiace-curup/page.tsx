import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sewa Hiace Curup Rp 1.800.000/Hari All-In | RPM Travel',
  description:
    'Sewa Toyota Hiace di Curup Rp 1.800.000 per hari sudah termasuk bensin dan sopir. Hiace Regular 14 penumpang dan Executive 8 penumpang tersedia. Bebas ke mana saja. Hubungi RPM Travel 085282828005.',
  keywords: [
    'sewa hiace curup',
    'rental hiace curup',
    'sewa hiace bengkulu',
    'sewa hiace curup murah',
    'rental mobil hiace curup rejang lebong',
    'sewa hiace curup sudah sopir bensin',
    'sewa hiace executive curup',
  ],
  alternates: { canonical: '/sewa-hiace-curup' },
  openGraph: {
    title: 'Sewa Hiace Curup Rp 1.800.000/Hari All-In | RPM Travel',
    description: 'Sewa Hiace di Curup sudah termasuk bensin & sopir. Regular 14 kursi & Executive 8 kursi. Bebas ke mana saja.',
    url: 'https://rpmtravel.co.id/sewa-hiace-curup',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20sewa%20Hiace%20di%20Curup';

const includes = [
  { icon: '⛽', label: 'Bahan Bakar', desc: 'BBM full tank, tidak ada biaya tambahan' },
  { icon: '👨‍✈️', label: 'Sopir Profesional', desc: 'Berpengalaman & hafal rute Bengkulu' },
  { icon: '🚐', label: 'Armada Hiace', desc: 'Regular 14 kursi atau Executive 8 kursi' },
  { icon: '🗺️', label: 'Bebas Tujuan', desc: 'Ke mana saja dalam wilayah yang disepakati' },
];

const useCases = [
  { icon: '🏖️', label: 'Wisata Keluarga', desc: 'Pantai Panjang, Bukit Kaba, Danau Tes, dan destinasi wisata Bengkulu lainnya' },
  { icon: '🏢', label: 'Perjalanan Dinas', desc: 'Antar-jemput rombongan instansi pemerintah dan swasta' },
  { icon: '📚', label: 'Study Tour', desc: 'Kunjungan edukatif sekolah dan kampus' },
  { icon: '🎉', label: 'Acara Keluarga', desc: 'Pernikahan, reuni, arisan, dan acara keluarga besar' },
  { icon: '✈️', label: 'Antar Bandara', desc: 'Jemput dan antar ke Bandara Fatmawati Bengkulu' },
  { icon: '🙏', label: 'Perjalanan Religi', desc: 'Ziarah dan kegiatan keagamaan rombongan' },
];

const armadaOptions = [
  {
    tipe: 'Hiace Regular',
    kapasitas: '14 Penumpang',
    harga: 'Rp 1.800.000',
    icon: '🚐',
    fitur: ['14 kursi nyaman', 'Bagasi luas', 'AC berpendingin', 'Cocok rombongan besar'],
    badge: null,
  },
  {
    tipe: 'Hiace Executive',
    kapasitas: '8 Penumpang',
    harga: 'Rp 1.800.000',
    icon: '⭐',
    fitur: ['8 kursi premium', 'Leg room ekstra', 'Kenyamanan tinggi', 'Cocok perjalanan VIP'],
    badge: 'Premium',
  },
];

const faqs = [
  {
    q: 'Apakah harga Rp 1.800.000 sudah termasuk bensin dan sopir?',
    a: 'Ya, harga Rp 1.800.000 per hari sudah all-in termasuk bahan bakar penuh dan jasa sopir profesional. Tidak ada biaya tambahan tersembunyi.',
  },
  {
    q: 'Apakah bisa sewa lebih dari satu hari?',
    a: 'Tentu bisa. Untuk sewa multi-hari (lebih dari 1 hari), kami menyediakan harga khusus. Hubungi kami via WhatsApp untuk negosiasi paket.',
  },
  {
    q: 'Apakah bisa ke luar kota Curup?',
    a: 'Ya, armada kami bebas digunakan ke mana saja dalam satu hari termasuk ke luar Curup. Untuk perjalanan ke luar Bengkulu atau jarak sangat jauh, mungkin ada penyesuaian biaya.',
  },
  {
    q: 'Apakah tersedia untuk malam hari?',
    a: 'Ketersediaan malam hari tergantung jadwal armada. Konfirmasi terlebih dahulu via WhatsApp untuk memastikan ketersediaan pada waktu yang Anda inginkan.',
  },
  {
    q: 'Apa perbedaan Hiace Regular dan Executive?',
    a: 'Hiace Regular berkapasitas 14 penumpang cocok untuk rombongan besar. Hiace Executive berkapasitas 8 penumpang dengan tempat duduk lebih lega dan kenyamanan premium, cocok untuk perjalanan bisnis atau VIP.',
  },
];

export default function SewaHiaceCurupPage() {
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
            <span className="text-gray-400">Sewa Hiace Curup</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            ⛽ All-In BBM & Sopir · Bebas Ke Mana Saja
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sewa Hiace Curup<br />
            <span className="text-gold-400">Rp 1.800.000/Hari, Sudah All-In</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
            Butuh kendaraan Hiace untuk wisata, perjalanan dinas, atau acara keluarga di Curup dan sekitar Bengkulu? RPM Travel menyediakan sewa Hiace harian dengan harga transparan — sudah termasuk bensin penuh dan sopir profesional.
          </p>

          {/* Price highlight */}
          <div className="inline-flex items-baseline gap-2 bg-gold-500 text-primary-900 px-6 py-3 rounded-2xl mb-6">
            <span className="font-display text-3xl font-bold">Rp 1.800.000</span>
            <span className="text-sm font-semibold">/ hari · All-In</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Tanya Ketersediaan
            </a>
          </div>
        </div>
      </section>

      {/* Yang Sudah Termasuk */}
      <section className="py-12 bg-cream-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center font-display text-xl font-bold text-primary-900 mb-6">Sudah Termasuk dalam Harga</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {includes.map(item => (
              <div key={item.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-primary-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GALERI HIACE === */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Kondisi Armada Kami</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Interior */}
            <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/hiace/interior.jpg"
                  alt="Interior Hiace Executive RPM Travel — kabin lega dengan sandaran kaki dan kursi premium"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-cream-50">
                <p className="font-bold text-primary-900 text-sm mb-1">🛋️ Kabin Lega, Perjalanan Terasa Istirahat</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Kursi executive berjok tebal dengan sandaran kaki — duduk 3 jam pun tidak terasa. Kabin bersih, AC dingin merata, dan interior terawat rapi untuk kenyamanan perjalanan Anda dari menit pertama hingga tujuan.
                </p>
              </div>
            </div>

            {/* Eksterior */}
            <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/hiace/exterior.jpg"
                  alt="Eksterior Hiace RPM Travel — armada bersih dan siap jalan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-cream-50">
                <p className="font-bold text-primary-900 text-sm mb-1">🚐 Armada Prima, Siap Tempuh Segala Rute</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Eksterior bersih dan terawat mencerminkan kondisi mesin yang selalu dalam performa terbaik. Servis rutin & laik jalan — berangkat tenang, tiba selamat.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pilihan Armada */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pilihan Tipe Hiace</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {armadaOptions.map(a => (
              <div key={a.tipe} className="border border-gray-200 rounded-2xl p-6 hover:border-gold-400 hover:shadow-md transition-all relative">
                {a.badge && (
                  <span className="absolute top-4 right-4 bg-gold-500 text-primary-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    {a.badge}
                  </span>
                )}
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-display text-xl font-bold text-primary-900">{a.tipe}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-1">👥 {a.kapasitas}</p>
                <p className="text-primary-900 font-bold text-lg mb-4">{a.harga}<span className="text-gray-400 text-sm font-normal">/hari</span></p>
                <ul className="space-y-2 mb-5">
                  {a.fitur.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={`${WA}%20${encodeURIComponent(a.tipe)}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all">
                  Sewa {a.tipe}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Cocok untuk Berbagai Kebutuhan</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map(u => (
              <div key={u.label} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-gold-400 transition-all">
                <span className="text-3xl block mb-2">{u.icon}</span>
                <p className="font-bold text-primary-900 text-sm mb-1">{u.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Sidebar */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">

            {/* FAQ */}
            <div>
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

            {/* === INTERNAL LINK BLOCK === */}
            <div className="rounded-2xl bg-primary-900 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Layanan Lainnya</p>
                <h3 className="font-display text-xl font-bold text-white mb-3">Butuh Kapasitas Lebih Besar atau Layanan Khusus?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  RPM Travel juga menyediakan sewa bus wisata untuk rombongan besar, serta layanan transportasi khusus perjalanan dinas instansi dan perusahaan.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/sewa-bus-wisata"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    🚌 Sewa Bus Wisata
                  </Link>
                  <Link
                    href="/transportasi-perjalanan-dinas"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    💼 Transportasi Perjalanan Dinas
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Sewa Hiace Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="bg-gold-500/20 border border-gold-500/30 rounded-xl p-3 mb-4 text-center">
                <p className="text-gold-400 text-xs uppercase tracking-wide">Harga Sewa</p>
                <p className="text-white font-bold text-xl">Rp 1.800.000</p>
                <p className="text-gold-400 text-xs">per hari · all-in</p>
              </div>
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> BBM sudah termasuk</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Sopir profesional</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Bebas ke mana saja</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-sm">
                Chat WhatsApp
              </a>
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
