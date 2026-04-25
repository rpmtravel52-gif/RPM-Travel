import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jasa Transportasi Perjalanan Dinas Curup Bengkulu | RPM Travel',
  description:
    'Layanan transportasi perjalanan dinas profesional di Curup dan Bengkulu. Antar jemput tamu, pejabat, dan rombongan dinas menggunakan armada Hiace Executive. Tepat waktu, sopir berpenampilan rapi. Hubungi 085282828005.',
  keywords: [
    'transportasi perjalanan dinas curup',
    'jasa antar jemput tamu dinas bengkulu',
    'sewa mobil perjalanan dinas curup',
    'transportasi dinas rejang lebong',
    'antar jemput rombongan dinas bengkulu',
    'rental mobil executive curup',
    'transportasi instansi curup bengkulu',
  ],
  alternates: { canonical: '/transportasi-perjalanan-dinas' },
  openGraph: {
    title: 'Transportasi Perjalanan Dinas Curup Bengkulu | RPM Travel',
    description: 'Jasa transportasi dinas profesional di Curup & Bengkulu. Hiace Executive, sopir berpenampilan rapi, tepat waktu.',
    url: 'https://rpmtravel.co.id/transportasi-perjalanan-dinas',
  },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20menggunakan%20layanan%20transportasi%20perjalanan%20dinas';

const keunggulan = [
  { icon: '⭐', title: 'Armada Executive', desc: 'Toyota Hiace Executive berkapasitas 8 penumpang dengan interior premium dan leg room luas.' },
  { icon: '👔', title: 'Sopir Berpenampilan Rapi', desc: 'Pengemudi berpakaian rapi, ramah, dan terlatih untuk melayani tamu VIP dan pejabat.' },
  { icon: '⏰', title: 'Ketepatan Waktu', desc: 'Kami memahami bahwa waktu adalah segalanya dalam perjalanan dinas. Penjemputan selalu tepat waktu.' },
  { icon: '📍', title: 'Fleksibel & Responsif', desc: 'Siap menyesuaikan jadwal dan rute sesuai kebutuhan instansi atau perusahaan Anda.' },
  { icon: '🔒', title: 'Keamanan & Kenyamanan', desc: 'Armada terawat, sopir berpengalaman, dan rekam jejak pelayanan yang terpercaya.' },
  { icon: '📞', title: 'Koordinasi Mudah', desc: 'Tim kami responsif via WhatsApp untuk koordinasi jadwal, lokasi jemput, dan detail perjalanan.' },
];

const layananList = [
  { icon: '🏛️', label: 'Antar Jemput Tamu Pemerintahan', desc: 'Kunjungan kerja pejabat daerah, tamu dari pusat, atau delegasi antar instansi.' },
  { icon: '🏢', label: 'Mobilitas Tamu Korporat', desc: 'Perjalanan dinas tim manajemen, direksi, atau tamu bisnis perusahaan swasta.' },
  { icon: '🎓', label: 'Kunjungan Akademis', desc: 'Transportasi tamu kampus, tim akreditasi, atau delegasi lembaga pendidikan.' },
  { icon: '✈️', label: 'Jemput Bandara Fatmawati', desc: 'Penjemputan khusus dari Bandara Fatmawati Soekarno Bengkulu ke Curup atau sebaliknya.' },
  { icon: '🏨', label: 'Antar ke Hotel & Venue', desc: 'Mobilitas peserta rapat, seminar, atau acara MICE dari hotel ke lokasi kegiatan.' },
  { icon: '🗺️', label: 'Tur Lokasi & Site Visit', desc: 'Transportasi tim survey, inspeksi lapangan, atau kunjungan ke lokasi proyek.' },
];

const faqs = [
  {
    q: 'Armada apa yang digunakan untuk perjalanan dinas?',
    a: 'Kami menggunakan Toyota Hiace Executive berkapasitas 8 penumpang. Kendaraan ini dipilih karena memberikan kenyamanan premium dengan tempat duduk lega, cocok untuk tamu VIP, pejabat, dan perjalanan bisnis.',
  },
  {
    q: 'Apakah bisa memesan untuk perjalanan mendadak?',
    a: 'Kami berusaha mengakomodasi permintaan mendadak sesuai ketersediaan armada. Untuk kepastian, disarankan menghubungi kami minimal beberapa jam sebelum jadwal keberangkatan.',
  },
  {
    q: 'Apakah tersedia layanan antar jemput ke Bandara?',
    a: 'Ya, kami melayani antar jemput ke Bandara Fatmawati Soekarno Bengkulu dari Curup dan sekitarnya, termasuk untuk tamu yang baru tiba dari penerbangan.',
  },
  {
    q: 'Apakah bisa digunakan untuk rombongan besar?',
    a: 'Untuk rombongan yang melebihi kapasitas Hiace Executive (8 kursi), kami juga menyediakan Hiace Regular (14 kursi) atau Bus Pariwisata 31 kursi sesuai kebutuhan.',
  },
  {
    q: 'Bagaimana sistem pembayaran untuk instansi pemerintah?',
    a: 'Kami menerima pembayaran tunai maupun transfer bank. Untuk kebutuhan kwitansi atau invoice resmi, kami dapat menyiapkan dokumen yang diperlukan.',
  },
];

export default function TransportasiPerjalananDinasPage() {
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
            <span className="text-gray-400">Transportasi Perjalanan Dinas</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            💼 Hiace Executive · Profesional & Tepat Waktu
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Jasa Transportasi<br />
            <span className="text-gold-400">Perjalanan Dinas Curup & Bengkulu</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Layanan antar jemput tamu dan rombongan dinas yang profesional di wilayah Curup, Rejang Lebong, dan Bengkulu. Menggunakan armada Hiace Executive dengan sopir berpenampilan rapi dan terlatih untuk memberikan pelayanan terbaik bagi tamu instansi Anda.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Mengapa Pilih RPM Travel untuk Perjalanan Dinas?</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keunggulan.map(k => (
              <div key={k.title} className="bg-cream-50 border border-gray-100 rounded-2xl p-5 hover:border-gold-400 hover:shadow-md transition-all">
                <span className="text-3xl mb-3 block">{k.icon}</span>
                <h3 className="font-bold text-primary-900 text-base mb-1">{k.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jenis Layanan */}
      <section className="py-14 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-2">Jenis Layanan yang Tersedia</h2>
          <div className="w-12 h-0.5 bg-gold-500 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {layananList.map(l => (
              <div key={l.label} className="flex items-start gap-4 bg-white/5 border border-white/10 hover:border-gold-500/30 rounded-2xl p-5 transition-all">
                <span className="text-3xl flex-shrink-0">{l.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{l.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada highlight */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Armada Andalan: Hiace Executive</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
          <div className="bg-white border-2 border-gold-400 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-8xl">⭐🚐</div>
              <div className="flex-1">
                <div className="inline-block bg-gold-500 text-primary-900 text-xs font-bold px-3 py-1 rounded-full mb-3">Premium Class</div>
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-2">Toyota Hiace Executive</h3>
                <p className="text-gold-600 font-semibold mb-4">👥 Kapasitas 8 Penumpang</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    '8 kursi premium dengan sandaran nyaman',
                    'Leg room ekstra luas',
                    'AC berpendingin optimal',
                    'Interior bersih dan terawat',
                    'Sopir berpenampilan rapi',
                    'Tepat waktu terjamin',
                  ].map(f => (
                    <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gold-500 font-bold mt-0.5">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Untuk rombongan lebih besar, tersedia juga <Link href="/sewa-hiace-curup" className="text-gold-600 font-semibold hover:underline">Hiace Regular (14 kursi)</Link> dan <Link href="/sewa-bus-wisata" className="text-gold-600 font-semibold hover:underline">Bus Wisata (31 kursi)</Link>.
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
          <div>
            <div className="bg-primary-900 rounded-2xl p-6 sticky top-20">
              <h3 className="font-display font-bold text-white text-lg mb-1">Hubungi Kami</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Diskusikan kebutuhan transportasi dinas Anda dengan tim kami. Kami siap menyesuaikan layanan sesuai kebutuhan instansi.
              </p>
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Hiace Executive premium</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Sopir berpenampilan rapi</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Tepat waktu terjamin</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Invoice/kwitansi tersedia</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-sm">
                Konsultasi WhatsApp
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
