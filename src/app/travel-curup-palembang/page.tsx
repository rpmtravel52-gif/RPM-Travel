import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Travel Curup Palembang Nyaman & Profesional | Hiace & Executive RPM Travel',
  description:
    'Layanan travel Curup ke Palembang dengan armada Hiace bersih dan Executive class. Perjalanan lebih nyaman, aman, dan tepat waktu bersama driver berpengalaman. Hubungi RPM Travel sekarang.',
  alternates: { canonical: '/travel-curup-palembang' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel%20Curup%E2%80%93Palembang';

const features = [
  { icon: '🏠', label: 'Layanan penjemputan fleksibel sesuai kebutuhan' },
  { icon: '❄️', label: 'AC double blower, kursi recline nyaman' },
  { icon: '🧳', label: 'Bagasi luas & aman untuk semua kebutuhan' },
  { icon: '👨‍✈️', label: 'Driver berpengalaman & profesional' },
  { icon: '⏰', label: 'Jadwal keberangkatan teratur & tepat waktu' },
  { icon: '✨', label: 'Armada bersih, terawat, dan nyaman' },
];

const faqs = [
  {
    q: 'Berapa estimasi waktu perjalanan Curup ke Palembang?',
    a: 'Perjalanan biasanya memakan waktu sekitar 6 hingga 7 jam tergantung kondisi lalu lintas dan situasi di jalan.',
  },
  {
    q: 'Apakah tersedia pilihan armada selain Hiace?',
    a: 'Ya, tersedia juga layanan Executive dengan kenyamanan lebih dan jumlah penumpang yang lebih sedikit.',
  },
  {
    q: 'Bagaimana cara melakukan pemesanan?',
    a: 'Pemesanan dapat dilakukan melalui WhatsApp dengan mengirimkan data perjalanan seperti nama, jumlah penumpang, dan jadwal.',
  },
  {
    q: 'Apakah cocok untuk perjalanan keluarga?',
    a: 'Sangat cocok karena armada memiliki kabin luas dan nyaman untuk perjalanan bersama keluarga.',
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
            <span className="text-gold-400">Nyaman & Lebih Berkualitas</span>
          </h1>

          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
            Nikmati perjalanan dari Curup ke Palembang dengan layanan travel yang dirancang untuk kenyamanan maksimal. Armada Hiace yang bersih dan terawat siap menemani perjalanan Anda, didukung driver berpengalaman serta jadwal keberangkatan yang tertata dengan baik.
          </p>

          <a href={WA} className="btn-wa px-6 py-3 text-sm">
            Pesan via WhatsApp
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* FASILITAS */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Fasilitas & Keunggulan</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f.label}>{f.icon} {f.label}</li>
              ))}
            </ul>

            {/* NARASI TAMBAHAN SEO */}
            <div className="mt-6 space-y-3 text-gray-600">
              <p>
                Rute Curup – Palembang merupakan salah satu jalur perjalanan yang cukup padat, baik untuk kebutuhan kerja, kunjungan keluarga, maupun aktivitas pribadi lainnya.
              </p>
              <p>
                Untuk menunjang kenyamanan selama perjalanan, digunakan armada Hiace dengan kabin luas, kursi ergonomis, serta kondisi kendaraan yang selalu terjaga.
              </p>
              <p>
                Selain itu, tersedia juga layanan Executive bagi penumpang yang menginginkan suasana perjalanan lebih tenang dengan kapasitas lebih sedikit.
              </p>
              <p>
                Driver berpengalaman memastikan perjalanan berlangsung lebih aman, efisien, dan minim hambatan hingga tiba di Palembang.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Pertanyaan Umum</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold">{faq.q}</p>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="mb-4">
              Amankan jadwal perjalanan Anda sekarang dan nikmati layanan travel Curup – Palembang yang lebih nyaman, aman, dan terpercaya.
            </p>
            <a href={WA} className="btn-wa px-6 py-3 text-sm">
              Chat WhatsApp
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
