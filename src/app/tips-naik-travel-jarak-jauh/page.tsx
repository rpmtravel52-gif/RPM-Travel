import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tips Naik Travel Jarak Jauh Supaya Tetap Nyaman & Tidak Capek',
  description:
    'Panduan lengkap persiapan naik travel jarak jauh agar perjalanan 10+ jam tetap nyaman. Dari perlengkapan bawaan, pilihan kursi, hingga cara mengatasi mabuk perjalanan.',
  keywords: [
    'tips naik travel jarak jauh',
    'cara agar tidak capek naik travel',
    'persiapan naik travel antar kota',
    'tips perjalanan travel nyaman',
    'naik travel palembang bengkulu nyaman',
    'tips travel jarak jauh sumatera',
    'cara menghindari mabuk perjalanan travel',
    'persiapan travel malam hari',
  ],
  alternates: { canonical: 'https://rpmtravel.co.id/tips-naik-travel-jarak-jauh' },
  openGraph: {
    title: 'Tips Naik Travel Jarak Jauh Supaya Tetap Nyaman & Tidak Capek',
    description:
      'Panduan praktis agar perjalanan travel 10+ jam tetap nyaman: perlengkapan yang wajib dibawa, cara memilih kursi, dan tips anti mabuk perjalanan.',
    url: 'https://rpmtravel.co.id/tips-naik-travel-jarak-jauh',
  },
};

const WA =
  'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20booking%20travel%20Palembang%E2%80%93Bengkulu';

const tipsUtama = [
  {
    icon: '🛏️',
    title: 'Bawa Bantal Leher',
    desc: 'Bantal leher travel adalah investasi kecil yang dampaknya luar biasa. Perjalanan panjang akan terasa jauh lebih ringan jika kepala dan leher mendapat tumpuan yang nyaman saat mengantuk.',
  },
  {
    icon: '👕',
    title: 'Pakai Pakaian Santai & Lapang',
    desc: 'Hindari celana jeans ketat atau pakaian formal. Pilih bahan yang ringan, menyerap keringat, dan tidak membatasi gerak. Kamu akan lebih mudah tidur dan tidak gerah sepanjang perjalanan.',
  },
  {
    icon: '🍱',
    title: 'Jangan Makan Terlalu Kenyang',
    desc: 'Perut terlalu penuh saat duduk lama bisa memicu rasa tidak nyaman, mual, bahkan mabuk perjalanan. Makan secukupnya sebelum berangkat dan simpan cemilan ringan untuk di jalan.',
  },
  {
    icon: '🎧',
    title: 'Siapkan Hiburan Pribadi',
    desc: 'Unduh film, podcast, atau playlist favorit sebelum berangkat. Koneksi internet di sepanjang jalur lintas Sumatera tidak selalu stabil, jadi lebih aman menyiapkan konten offline.',
  },
  {
    icon: '💊',
    title: 'Bawa Obat Pribadi & Antimo',
    desc: 'Terutama untuk yang rentan mabuk perjalanan, konsumsi antimo sesuai anjuran sebelum keberangkatan. Jangan lupa obat-obatan rutin jika kamu memiliki kondisi medis tertentu.',
  },
  {
    icon: '🌡️',
    title: 'Pakai Jaket Tipis',
    desc: 'AC di armada travel bisa terasa dingin, terutama saat malam hari atau melewati kawasan pegunungan. Jaket tipis atau selimut travel kecil sangat berguna untuk menjaga kehangatan tubuh.',
  },
];

const persiapanMalam = [
  'Pastikan kamu sudah tidur cukup malam sebelumnya',
  'Atur alarm lebih awal agar tidak terburu-buru ke titik penjemputan',
  'Konfirmasi ulang jadwal dan titik penjemputan via WhatsApp',
  'Simpan nomor pengemudi atau agen travel sebagai kontak darurat',
  'Isi daya penuh semua perangkat elektronik sebelum berangkat',
];

const bawaanWajib = [
  { item: 'Bantal leher travel', ket: 'Untuk istirahat lebih nyaman di perjalanan' },
  { item: 'Ear plug / earphone', ket: 'Meredam suara bising dan menjaga fokus' },
  { item: 'Cemilan ringan', ket: 'Biskuit, kacang, atau buah kering sebagai pengganjal' },
  { item: 'Air minum', ket: 'Minimal 600 ml, cukup untuk sepanjang perjalanan' },
  { item: 'Obat-obatan pribadi', ket: 'Antimo, obat maag, atau obat rutin lainnya' },
  { item: 'Powerbank', ket: 'Penting untuk menjaga daya ponsel selama perjalanan' },
  { item: 'Jaket atau selimut tipis', ket: 'Mengantisipasi dinginnya AC dan daerah pegunungan' },
  { item: 'Masker', ket: 'Menjaga kebersihan udara selama perjalanan panjang' },
];

const faqs = [
  {
    q: 'Apa saja barang wajib yang harus dibawa saat naik travel jarak jauh?',
    a: 'Setidaknya siapkan bantal leher, obat-obatan pribadi (termasuk antimo jika rentan mabuk), air minum, cemilan ringan, earphone, jaket tipis, dan powerbank. Barang-barang ini tidak memakan banyak tempat tapi sangat meningkatkan kenyamanan perjalanan.',
  },
  {
    q: 'Apakah ada pemberhentian istirahat selama perjalanan?',
    a: 'Ya. Pengemudi biasanya berhenti 1–2 kali di titik istirahat untuk keperluan makan, toilet, atau mengisi bahan bakar. Pemberhentian biasanya di Lubuklinggau atau Curup tergantung jadwal keberangkatan.',
  },
  {
    q: 'Bagaimana cara menghindari mabuk perjalanan di travel?',
    a: 'Beberapa cara yang efektif: konsumsi antimo sesuai dosis sebelum berangkat, duduk di kursi depan atau tengah (lebih stabil getarannya), hindari membaca atau bermain ponsel terlalu lama, dan pastikan jendela tidak tertutup rapat agar sirkulasi udara baik.',
  },
  {
    q: 'Kursi mana yang paling nyaman di dalam travel?',
    a: 'Untuk kenyamanan maksimal, kursi baris pertama atau kedua biasanya lebih nyaman karena getaran lebih minim dan lebih mudah melihat ke arah jalan. Untuk yang rentan mabuk, hindari duduk di kursi paling belakang.',
  },
  {
    q: 'Bolehkah membawa koper besar saat naik travel?',
    a: 'Boleh. Armada Hiace memiliki bagasi besar yang cukup untuk menampung koper ukuran sedang hingga besar. Informasikan jumlah dan ukuran bagasi saat memesan agar pengemudi bisa mempersiapkan ruang yang cukup.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export default function TipsNaikTravelJarakJauhPage() {
  return (
    <>
      <style>{`
        @keyframes shimmer-slide {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%);
          animation: shimmer-slide 2.4s ease-in-out infinite;
        }
        .btn-shimmer:hover::after { animation-duration: 1.2s; }
      `}</style>

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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Tips Naik Travel Jarak Jauh</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            💡 Panduan Perjalanan · Travel Antar Kota
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tips Naik Travel Jarak Jauh<br />
            <span className="text-gold-400">Tetap Nyaman & Tidak Capek</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Perjalanan 10 jam lebih bukan hal yang ringan. Tapi dengan persiapan yang tepat, kamu bisa tiba di tujuan dalam kondisi segar — bukan kelelahan. Panduan ini merangkum tips praktis dari pengalaman perjalanan jarak jauh menggunakan armada travel.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
            >
              🎫 Booking Perjalanan Nyaman
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-cream-100 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Cocok untuk', value: 'Perjalanan 10+ Jam' },
            { label: 'Armada', value: 'Hiace & Innova' },
            { label: 'Rute Populer', value: 'Palembang – Bengkulu' },
            { label: 'Booking', value: 'Via WhatsApp' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
              <p className="font-display font-bold text-primary-900 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS UTAMA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Tips Utama agar Perjalanan Tetap Nyaman</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Tidak perlu membawa banyak hal. Justru persiapan yang tepat dan efisien yang membuat perbedaan besar antara perjalanan yang melelahkan dan yang terasa ringan. Berikut tips yang sudah terbukti efektif.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tipsUtama.map((t) => (
              <div key={t.title} className="border border-gray-100 rounded-2xl p-5 hover:border-gold-400 hover:shadow-sm transition-all bg-cream-50 flex gap-4">
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <div>
                  <p className="font-display font-bold text-primary-900 text-sm mb-1.5">{t.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAFTAR BAWAAN */}
      <section className="py-14 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Checklist Bawaan Wajib</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Simpan checklist ini sebelum berangkat. Semua barang ini ringan dan tidak memakan ruang, tapi masing-masing punya peran penting dalam menjaga kenyamanan perjalanan.
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {bawaanWajib.map((b, idx) => (
              <div
                key={b.item}
                className={`flex items-center gap-4 px-5 py-4 ${idx !== bawaanWajib.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-gold-500 font-bold text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">{b.item}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{b.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS MALAM + SIDEBAR */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {/* TIPS KEBERANGKATAN MALAM */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Khusus Keberangkatan Malam Hari</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Travel malam sering dipilih karena lebih efisien — kamu bisa tidur di jalan dan tiba pagi hari. Namun ada beberapa hal tambahan yang perlu dipersiapkan untuk keberangkatan malam.
              </p>
              <div className="space-y-3">
                {persiapanMalam.map((p) => (
                  <div key={p} className="flex items-start gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-cream-50">
                    <span className="text-gold-500 font-bold mt-0.5">✓</span>
                    <p className="text-gray-600 text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-4">Pertanyaan Umum</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RUTE TERKAIT */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Rute Perjalanan Populer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/travel-palembang-bengkulu', label: '🚐 Travel Palembang – Bengkulu', desc: 'Hiace & Innova, berangkat tiap hari' },
                  { href: '/travel-bengkulu-palembang', label: '↩ Travel Bengkulu – Palembang', desc: 'Rute balik dari Bengkulu' },
                  { href: '/rute-travel-palembang-bengkulu', label: '🛣️ Rute & Jalur Perjalanan', desc: 'Panduan jalur yang dilalui' },
                  { href: '/sewa-bus-wisata-30-seat', label: '🚌 Sewa Bus Wisata 30 Seat', desc: 'Cocok untuk rombongan besar' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="block border border-gray-100 hover:border-gold-400 rounded-xl p-3 transition-all group">
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
              <h3 className="font-display font-bold text-white text-lg mb-1">Booking Sekarang</h3>
              <div className="w-10 h-0.5 bg-gold-500 rounded mb-4" />
              <div className="space-y-2 mb-5 text-sm text-gray-300">
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Armada terawat & ber-AC</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Pengemudi berpengalaman</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Ada pemberhentian istirahat</div>
                <div className="flex gap-2"><span className="text-gold-400">✓</span>Door to door ke tujuan</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center justify-center w-full font-bold py-3 rounded-xl text-sm"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8d080,#c9a84c)', color: '#0a1628' }}
              >
                📲 Booking via WhatsApp
              </a>
              <p className="text-center text-gray-500 text-xs mt-3">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    </>
  );
}
