import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Curup Palembang Hiace | Antar Jemput Rumah – RPM Travel',
  description:
    'Travel Curup–Palembang armada Hiace & Innova ber-AC. Antar jemput langsung ke pintu rumah, berangkat 2x sehari. Pesan sekarang: 085282828005 – RPM Travel.',
  alternates: { canonical: '/travel-curup-palembang' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Curup%E2%80%93Palembang';

const schedules = ['13.00 WIB', '20.00 WIB'];

const features = [
  { icon: '🏠', label: 'Penjemputan & pengantaran langsung ke alamat tujuan Anda' },
  { icon: '❄️', label: 'AC double blower dingin maksimal, kursi recline empuk sepanjang perjalanan' },
  { icon: '🧳', label: 'Bagasi lapang & terlindungi, cocok untuk koper besar maupun barang belanja' },
  { icon: '👨‍✈️', label: 'Driver berpengalaman, berlisensi resmi, dan hafal rute Curup–Palembang' },
  { icon: '⏰', label: 'Keberangkatan on-time sesuai jadwal yang sudah disepakati' },
];

const faqs = [
  {
    q: 'Berapa lama perjalanan dari Curup ke Palembang?',
    a: 'Estimasi perjalanan sekitar 6–7 jam dalam kondisi normal. Durasi bisa sedikit berbeda tergantung arus lalu lintas dan kondisi jalan saat itu.',
  },
  {
    q: 'Apakah ada layanan jemput ke rumah?',
    a: 'Ya, RPM Travel menyediakan layanan jemput langsung ke alamat Anda selama masih dalam cakupan wilayah Kota Curup dan sekitarnya.',
  },
  {
    q: 'Bagaimana cara memesan tiket travel Curup–Palembang?',
    a: 'Anda bisa menghubungi kami di 085282828005 melalui WhatsApp, atau klik tombol "Pesan Tiket Online" yang tersedia di halaman ini.',
  },
  {
    q: 'Apakah ada biaya tambahan untuk bagasi?',
    a: 'Tidak ada biaya bagasi tambahan untuk bawaan standar, seperti satu koper dan satu tas jinjing. Barang di luar ukuran standar harap dikonfirmasi terlebih dahulu.',
  },
  {
    q: 'Bisakah saya membayar menggunakan QRIS?',
    a: 'Bisa. Pilih metode pembayaran QRIS saat melakukan pemesanan melalui tombol pesan yang tersedia.',
  },
  {
    q: 'Apakah tersedia invoice atau kwitansi resmi?',
    a: 'Tersedia. Centang opsi "Saya minta kwitansi/invoice" saat proses pemesanan, lalu lanjutkan konfirmasi via WhatsApp ke nomor kami.',
  },
];

 {/* Internal links */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-palembang-curup', label: '↔ Travel Palembang – Curup', desc: 'Rute balik dari Palembang menuju Curup' },
                  { href: '/travel-bengkulu-palembang', label: '🚐 Travel Bengkulu – Palembang', desc: 'Hiace 14 kursi, 2 jadwal keberangkatan harian' },
                  { href: '/sewa-hiace-curup', label: '🔑 Sewa Hiace Curup', desc: 'Mulai Rp 1.800.000/hari, sudah all-in' },
                  { href: '/travel-curup-lebong', label: '🗺️ Travel Curup – Lebong', desc: 'Rute harian lokal Curup–Lebong' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group">
                    <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">{l.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
         
export default function TravelCurupPalembangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Curup – Palembang</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            🔥 Rute Terlaris
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Curup – Palembang<br />
            <span className="text-gold-400">Antar Jemput Rumah, Armada Hiace & Innova</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            RPM Travel melayani rute Curup–Palembang setiap hari dengan armada Hiace dan Innova ber-AC.
            Dijemput dari rumah, diantar sampai tujuan — perjalanan nyaman tanpa repot.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa px-7 py-3.5 text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
            <Link href="/pesan?paket=curup-palembang" className="btn-gold px-7 py-3.5 text-base">🎫 Pesan Tiket Online</Link>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-10 bg-cream-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Curup → Palembang' },
            { label: 'KM', value: '± 350 km' },
            { label: 'Waktu', value: '6–7 jam' },
            { label: 'Mobil', value: 'Hiace & Innova' },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-500 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Features + FAQ */}
          <div className="md:col-span-2 space-y-10">
            {/* Features */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Fasilitas & Keunggulan</h2>
              <div className="gold-bar" />
              <ul className="space-y-3 mt-4">
                {features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-lg flex-shrink-0">{f.icon}</span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan</h2>
              <div className="gold-bar" />
              <div className="flex flex-wrap gap-3 mt-4">
                {schedules.map((s) => (
                  <span key={s} className="bg-primary-900 text-gold-400 text-sm font-bold px-4 py-2 rounded-xl">
                    🕐 {s}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">*Jadwal sewaktu-waktu dapat disesuaikan. Hubungi WhatsApp kami untuk konfirmasi jadwal terbaru.</p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pertanyaan Umum</h2>
              <div className="gold-bar" />
              <div className="space-y-4 mt-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Order box */}
          <div className="space-y-4">
            <div className="card p-6 border-2 border-gold-500 sticky top-20">
              <h3 className="font-display font-bold text-primary-900 text-lg mb-1">Pesan Sekarang</h3>
              <div className="gold-bar" />
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Hubungi kami via WhatsApp untuk pemesanan tiket dan informasi tarif terkini.
              </p>
              <div className="space-y-2 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span>✓</span> Diantar langsung ke alamat tujuan</div>
                <div className="flex items-center gap-2"><span>✓</span> Tarif transparan, tanpa biaya tersembunyi</div>
                <div className="flex items-center gap-2"><span>✓</span> Konfirmasi pemesanan cepat & mudah</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-wa w-full py-3 text-sm mb-2">
                Chat WhatsApp
              </a>
              <Link href="/pesan?paket=curup-palembang" className="btn-gold w-full py-3 text-sm">
                🎫 Pesan Online
              </Link>
              <p className="text-center text-xs text-gray-400 mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
