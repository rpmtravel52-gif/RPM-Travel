import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sewa Bus Wisata Curup 30 Kursi All-In BBM & Sopir | RPM Travel Rejang Lebong',
  description:
    'Sewa bus wisata di Curup, Rejang Lebong mulai Rp 3.000.000/hari — sudah termasuk BBM dan sopir berlisensi resmi. Ideal untuk study tour sekolah, family gathering kantor, ziarah, hingga wisata alam Bengkulu. Hubungi RPM Travel: 085282828005.',
  alternates: { canonical: '/sewa-bus-wisata' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20sewa%20bus%20wisata';

const includes = [
  { icon: '⛽', label: 'Bahan Bakar (BBM)', desc: 'Bensin/solar sudah dihitung dalam paket' },
  { icon: '👨‍✈️', label: 'Sopir Berlisensi', desc: 'Pengemudi resmi berpengalaman rute lokal' },
  { icon: '🚌', label: 'Bus 30 Kursi', desc: 'Kabin luas, tempat duduk nyaman' },
  { icon: '🗺️', label: 'Rute Bebas', desc: 'Wisata, dinas, atau keperluan rombongan lain' },
];

const useCases = [
  { icon: '🏖️', label: 'Wisata Keluarga' },
  { icon: '🏢', label: 'Family Gathering Kantor' },
  { icon: '📚', label: 'Study Tour Sekolah' },
  { icon: '🏔️', label: 'Wisata Alam Bengkulu' },
  { icon: '🙏', label: 'Ziarah & Keagamaan' },
  { icon: '🎉', label: 'Acara Komunitas' },
];

const faqs = [
  {
    q: 'Berapa harga sewa bus wisata per hari?',
    a: 'Harga sewa bus kami Rp 3.000.000 per hari, sudah all-in mencakup BBM dan sopir berlisensi. Tidak ada biaya tambahan tersembunyi selama satu hari penuh pemakaian.',
  },
  {
    q: 'Apa saja yang sudah termasuk dalam harga?',
    a: 'Harga mencakup bahan bakar (bensin/solar) untuk seluruh rute yang disepakati, serta sopir profesional berlisensi resmi yang hafal jalur wisata di area Bengkulu dan sekitarnya. Tiket masuk lokasi wisata, konsumsi, dan akomodasi penumpang tidak termasuk.',
  },
  {
    q: 'Berapa kapasitas bus?',
    a: 'Bus kami menampung 30 penumpang dengan konfigurasi kursi yang memberi ruang gerak cukup — tidak berdesakan seperti minibus. Cocok untuk rombongan sekolah satu kelas atau kelompok kantor ukuran sedang.',
  },
  {
    q: 'Apakah bisa sewa lebih dari 1 hari?',
    a: 'Bisa. Untuk perjalanan multi-hari seperti study tour menginap atau wisata lintas kabupaten, kami menyediakan paket khusus dengan harga yang bisa dinegosiasikan. Hubungi admin kami via WhatsApp untuk simulasi biaya.',
  },
  {
    q: 'Bagaimana cara memesan bus?',
    a: 'Kirim pesan ke WhatsApp 085282828005 dengan menyebutkan tanggal keberangkatan, estimasi rute, dan jumlah penumpang. Admin kami akan konfirmasi ketersediaan dan kirimkan detail pemesanan.',
  },
];

export default function SewaBusWisataPage() {
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
            <span className="text-gray-400">Sewa Bus Wisata</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            ✨ All-In BBM & Sopir — Tanpa Biaya Tersembunyi
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sewa Bus Wisata Curup<br />
            <span className="text-gold-400">30 Kursi, Harga Sudah Beres</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
            Butuh bus untuk rombongan? RPM Travel menyediakan bus 30 kursi berbasis di Curup, Rejang Lebong — siap melayani study tour sekolah, gathering kantor, wisata alam Bengkulu, hingga perjalanan ziarah. Satu harga, sudah termasuk BBM dan sopir berpengalaman.
          </p>

          {/* Price highlight */}
          <div className="inline-flex items-baseline gap-1 bg-gold-500 text-primary-900 px-6 py-3 rounded-2xl mb-6">
            <span className="font-display text-3xl font-bold">Rp 3.000.000</span>
            <span className="text-sm font-semibold">/ hari</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa px-7 py-3.5 text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cek Ketersediaan & Pesan
            </a>
          </div>
        </div>
      </section>

      {/* Foto Eksterior Bus */}
      <section className="bg-primary-900 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/bus/luarbus.jpg"
              alt="Armada bus wisata RPM Travel 30 kursi berbasis di Curup, Rejang Lebong"
              width={900}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Armada bus wisata RPM Travel — siap jemput rombongan Anda dari Curup, Rejang Lebong.
          </p>
        </div>
      </section>

      {/* Includes */}
      <section className="py-12 bg-cream-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center font-display text-xl font-bold text-primary-900 mb-6">Yang Sudah Masuk dalam Satu Harga</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {includes.map((item) => (
              <div key={item.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-primary-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            *Di luar paket: tiket masuk lokasi wisata, konsumsi selama perjalanan, dan akomodasi penumpang.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">

            {/* Use cases */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Untuk Acara Apa Saja?</h2>
              <div className="gold-bar" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {useCases.map((u) => (
                  <div key={u.label} className="flex items-center gap-2 bg-cream-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-700 font-medium">
                    <span>{u.icon}</span>
                    {u.label}
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Article */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Bus Rombongan dari Curup yang Tidak Bikin Pusing</h2>
              <div className="gold-bar" />
              <div className="prose prose-sm text-gray-600 space-y-4 mt-4">
                <p>
                  Salah satu tantangan terbesar merencanakan perjalanan rombongan adalah menghitung biaya transportasi yang kerap berubah-ubah — bensin naik, tarif sopir berbeda-beda, dan belum tentu semua tersedia dalam satu paket. RPM Travel hadir dengan pendekatan yang lebih sederhana: satu harga flat Rp 3.000.000 per hari, sudah mencakup BBM dan sopir, titik.
                </p>
                <p>
                  Bus 30 kursi kami berbasis di Curup, Rejang Lebong, dan siap diberangkatkan ke berbagai tujuan wisata di Bengkulu maupun lintas provinsi. Mulai dari Pantai Panjang, Bukit Kaba, air terjun di kawasan Kepahiang, hingga destinasi religi seperti makam ulama lokal — sopir kami sudah terbiasa dengan rute-rute tersebut.
                </p>

                {/* Foto Interior Bus */}
                <div className="not-prose my-6">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/bus/interior.jpg"
                      alt="Interior kabin bus wisata RPM Travel — kursi nyaman untuk 30 penumpang"
                      width={800}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">
                    Kabin bus kami — kursi lega untuk 30 penumpang, tidak berdesakan seperti minibus.
                  </p>
                </div>

                <p>
                  Untuk sekolah yang menjadwalkan study tour, kami memahami bahwa koordinasi waktu dan jumlah penumpang tidak selalu tepat di angka bulat. Tidak masalah — selama masih dalam kapasitas 30 kursi, Anda bisa berangkat dengan kursi tidak penuh tanpa dikenai biaya tambahan per kursi kosong.
                </p>
                <p>
                  Bagi instansi atau perusahaan yang rutin mengadakan gathering atau kunjungan lapangan, kami juga melayani pemesanan berulang dengan konfirmasi yang bisa dilakukan jauh hari. Hubungi admin kami via WhatsApp untuk mendiskusikan kebutuhan dan ketersediaan armada.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pertanyaan yang Sering Masuk</h2>
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

          {/* Order box */}
          <div>
            <div className="card p-6 border-2 border-gold-500 sticky top-20">
              <div className="text-center mb-4">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Harga Sewa Bus</p>
                <div className="font-display text-3xl font-bold text-primary-900">Rp 3.000.000</div>
                <div className="text-sm text-gold-500 font-semibold">per hari · All-In</div>
              </div>
              <div className="gold-bar mx-auto" />
              <div className="space-y-2 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span>✓</span> 30 penumpang</div>
                <div className="flex items-center gap-2"><span>✓</span> BBM sudah termasuk</div>
                <div className="flex items-center gap-2"><span>✓</span> Sopir berlisensi resmi</div>
                <div className="flex items-center gap-2"><span>✓</span> Rute fleksibel</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa w-full py-3 text-sm mb-2">
                Cek Ketersediaan & Pesan
              </a>
              <p className="text-center text-xs text-gray-400 mt-2">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
