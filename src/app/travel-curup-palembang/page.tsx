import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Travel Curup Palembang Door to Door | RPM Travel',
  description:
    'Travel Curup Palembang terpercaya. Antar jemput door to door, armada Hiace & Innova ber-AC. Berangkat sesuai jadwal. Hubungi RPM Travel 085282828005.',
  alternates: { canonical: '/travel-curup-palembang' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Curup%E2%80%93Palembang';

const schedules = ['13.00 WIB', '20.00 WIB'];

const features = [
  { icon: '🏠', label: 'Antar jemput dari rumah (door to door)' },
  { icon: '❄️', label: 'AC double blower, kursi recline nyaman' },
  { icon: '🧳', label: 'Bagasi luas & aman untuk semua kebutuhan' },
  { icon: '👨‍✈️', label: 'Sopir berpengalaman & berlisensi resmi' },
  { icon: '⏰', label: 'Berangkat tepat sesuai jadwal' },
  { icon: '👶', label: 'Tersedia kursi khusus bayi & anak' },
];

const faqs = [
  { q: 'Berapa lama perjalanan Curup ke Palembang?', a: 'Estimasi perjalanan sekitar 6–7 jam tergantung kondisi lalu lintas dan rute yang dilalui.' },
  { q: 'Apakah ada layanan jemput dari rumah?', a: 'Ya, kami menyediakan layanan antar jemput door to door di area Curup dan sekitarnya.' },
  { q: 'Bagaimana cara memesan?', a: 'Hubungi kami via WhatsApp di 085282828005. Informasikan nama, jumlah penumpang, dan jadwal keberangkatan.' },
  { q: 'Apakah bagasi dikenakan biaya tambahan?', a: 'Bagasi standar sudah termasuk dalam harga tiket. Bagasi berlebih dapat dikenakan biaya tambahan.' },
];

export default function TravelCurupPalembangPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Travel Curup – Palembang</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Teks */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                🔥 Rute Terlaris
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Travel Curup – Palembang<br />
                <span className="text-gold-400">Door to Door</span>
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
                Layanan travel antar jemput Curup–Palembang dengan armada Hiace & Innova ber-AC. Berangkat tepat waktu, tiba dengan nyaman dan aman.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa px-6 py-3 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pesan via WhatsApp
                </a>
                <Link href="/pesan" className="btn-gold px-6 py-3 text-sm">
                  🎫 Pesan Tiket Online
                </Link>
              </div>
            </div>

            {/* Gambar Exterior */}
            <div className="hidden lg:block">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20">
                <Image
                  src="/images/hiace/exterior.jpg"
                  alt="Armada Hiace RPM Travel Curup Palembang"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-gold-500 text-primary-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    Armada Hiace
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info cards ── */}
      <section className="py-10 bg-cream-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Rute', value: 'Curup → Palembang' },
            { label: 'Jarak', value: '± 350 km' },
            { label: 'Estimasi', value: '6–7 jam' },
            { label: 'Armada', value: 'Hiace & Innova' },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-gold-500 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Kolom kiri */}
          <div className="md:col-span-2 space-y-10">

            {/* Fasilitas */}
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

            {/* Gambar Kabin */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Kabin Armada</h2>
              <div className="gold-bar" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/hiace/exterior.jpg"
                    alt="Eksterior Hiace RPM Travel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-white text-xs font-bold bg-black/50 px-2 py-0.5 rounded-full">Eksterior</span>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/hiace/interior.jpg"
                    alt="Interior Hiace RPM Travel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-white text-xs font-bold bg-black/50 px-2 py-0.5 rounded-full">Interior</span>
                </div>
              </div>
            </div>

            {/* Jadwal — 2 keberangkatan */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Jadwal Keberangkatan</h2>
              <div className="gold-bar" />
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-3 bg-primary-900 text-white rounded-2xl px-6 py-4">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <p className="text-gold-400 text-xs font-bold uppercase tracking-wide">Siang</p>
                    <p className="font-display text-xl font-bold">13.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-primary-900 text-white rounded-2xl px-6 py-4">
                  <span className="text-2xl">🌙</span>
                  <div>
                    <p className="text-gold-400 text-xs font-bold uppercase tracking-wide">Malam</p>
                    <p className="font-display text-xl font-bold">20.00 WIB</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-3">*Jadwal dapat berubah. Konfirmasi via WhatsApp untuk jadwal terkini.</p>
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

            {/* === INTERNAL LINK BLOCK === */}
            <div className="rounded-2xl bg-primary-900 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Rute Lainnya</p>
                <h3 className="font-display text-xl font-bold text-white mb-3">Cari Rute atau Arah Perjalanan Lain?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  RPM Travel melayani berbagai rute antar kota. Pilih perjalanan sesuai kebutuhan Anda.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/travel-palembang-curup"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold text-sm px-4 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    🔄 Palembang → Curup
                  </Link>
                  <Link
                    href="/travel-palembang-bengkulu"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    🗺️ Palembang → Bengkulu
                  </Link>
                  <Link
                    href="/travel-lebong-palembang"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    🚐 Lebong → Palembang
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Kolom kanan: Order box */}
          <div className="space-y-4">
            <div className="card p-6 border-2 border-gold-500 sticky top-20">
              <h3 className="font-display font-bold text-primary-900 text-lg mb-1">Pesan Sekarang</h3>
              <div className="gold-bar" />
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Hubungi kami via WhatsApp atau pesan langsung secara online.
              </p>
              <div className="space-y-2 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span>✓</span> Antar jemput rumah</div>
                <div className="flex items-center gap-2"><span>✓</span> Harga transparan</div>
                <div className="flex items-center gap-2"><span>✓</span> Konfirmasi cepat</div>
              </div>
              <Link href="/pesan"
                className="btn-gold w-full py-3 text-sm text-center mb-2 block">
                🎫 Pesan Tiket Online
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-wa w-full py-3 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">📞 0852-8282-8005</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
