import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Curup Palembang PP - Armada Eksekutif & Nyaman | RPM Travel',
  description:
    'Jasa travel Curup Palembang terbaik dengan armada Toyota Hiace & kelas Eksekutif. Penjemputan door-to-door, driver ramah, dan perjalanan tepat waktu. Pesan tiket Anda sekarang!',
  alternates: { canonical: '/travel-curup-palembang' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20booking%20travel%20Curup%E2%80%93Palembang';

const features = [
  { icon: '🏠', label: 'Penjemputan door-to-door langsung ke lokasi Anda' },
  { icon: '❄️', label: 'Fasilitas Full AC & Reclining Seat yang empuk' },
  { icon: '🧳', label: 'Ruang bagasi optimal untuk barang bawaan Anda' },
  { icon: '👨‍✈️', label: 'Sopir profesional yang mengutamakan keselamatan' },
  { icon: '⏰', label: 'Estimasi keberangkatan yang konsisten dan terjadwal' },
  { icon: '✨', label: 'Kendaraan prima, wangi, dan selalu dalam kondisi bersih' },
];

const faqs = [
  {
    q: 'Berapa lama waktu tempuh dari Curup ke Palembang?',
    a: 'Estimasi perjalanan darat biasanya berkisar antara 6 sampai 7 jam, menyesuaikan dengan kondisi lalu lintas terkini.',
  },
  {
    q: 'Apa saja tipe kendaraan yang tersedia?',
    a: 'Kami mengandalkan unit Toyota Hiace yang luas serta pilihan kelas Eksekutif bagi Anda yang menginginkan privasi lebih.',
  },
  {
    q: 'Bagaimana sistem pemesanan tiketnya?',
    a: 'Sangat mudah! Cukup hubungi admin kami melalui WhatsApp, tentukan tanggal berangkat, dan kami akan mencatat pesanan Anda.',
  },
  {
    q: 'Apakah layanan ini tersedia setiap hari?',
    a: 'Ya, kami melayani rute Curup – Palembang setiap hari dengan jadwal yang bisa Anda konfirmasikan langsung kepada kami.',
  },
];

export default function TravelCurupPalembangPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">

          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Travel Curup – Palembang<br />
            <span className="text-gold-400">Solusi Perjalanan Berkelas</span>
          </h1>

          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
            Lupakan rasa lelah di jalan. Dengan RPM Travel, perjalanan dari Curup menuju Palembang kini jauh lebih rileks menggunakan armada modern yang terawat. Nikmati layanan antar-jemput berkualitas dengan standar kenyamanan eksekutif.
          </p>

          <a href={WA} className="btn-wa px-6 py-3 text-sm">
            Reservasi Tiket Sekarang
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* FASILITAS */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Mengapa Memilih RPM Travel?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-gray-700">
                  <span>{f.icon}</span> {f.label}
                </li>
              ))}
            </ul>

            {/* NARASI TAMBAHAN SEO */}
            <div className="mt-8 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Rute perjalanan <strong>Curup – Palembang</strong> merupakan jalur vital bagi masyarakat yang melakukan mobilitas bisnis maupun silaturahmi keluarga. Kami memahami bahwa keamanan adalah prioritas utama Anda.
              </p>
              <p>
                Oleh karena itu, RPM Travel menghadirkan unit <strong>Toyota Hiace</strong> yang dikenal memiliki suspensi empuk dan kabin yang senyap. Setiap kursi dirancang agar Anda bisa beristirahat dengan maksimal selama perjalanan berlangsung.
              </p>
              <p>
                Bagi Anda yang memerlukan ruang lebih personal, opsi <strong>Layanan Eksekutif</strong> kami menawarkan konfigurasi kursi yang lebih lega, sehingga perjalanan jarak jauh tidak akan terasa membosankan.
              </p>
              <p>
                Didukung oleh tim driver yang hafal rute lintas Sumatera, kami memastikan Anda sampai di tempat tujuan dengan efisien tanpa mengabaikan aspek keselamatan berkendara.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Informasi Penting (FAQ)</h2>
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-4">
                  <p className="font-semibold text-gray-800">{faq.q}</p>
                  <p className="text-gray-600 mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 p-8 rounded-2xl border-l-4 border-gold-400">
            <h3 className="text-xl font-bold mb-2">Siap Berangkat Hari Ini?</h3>
            <p className="mb-6 text-gray-700">
              Dapatkan pengalaman perjalanan terbaik rute Curup – Palembang hanya bersama RPM Travel. Hubungi kami untuk cek ketersediaan kursi sekarang juga!
            </p>
            <a href={WA} className="btn-wa px-8 py-3 text-sm inline-block">
              Hubungi Admin Kami
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
