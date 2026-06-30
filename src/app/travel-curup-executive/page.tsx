import Link from "next/link";

export const metadata = {
  title: "Travel Bengkulu ke Palembang Hiace Executive | Nyaman & Harga Ekonomis",
  description:
    "Nikmati travel Bengkulu ke Palembang dengan Hiace Executive Class kapasitas 8 seat. Kursi nyaman dengan sandaran kaki, tersedia jadwal siang & malam, harga ekonomis.",
  alternates: {
    canonical: "https://rpmtravel.co.id/travel-curup-executive",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RPM Travel Curup",
    description:
      "Layanan travel Bengkulu ke Palembang dengan Hiace Executive Class kapasitas 8 seat, nyaman dengan sandaran kaki, tersedia jadwal siang dan malam.",
    url: "https://rpmtravel.co.id/travel-curup-executive",
    telephone: "+628XXXXXXXXXX", // GANTI dengan nomor Anda
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curup",
      addressRegion: "Bengkulu",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Bengkulu" },
      { "@type": "City", name: "Palembang" },
    ],
    serviceOffered: {
      "@type": "Service",
      name: "Travel Bengkulu ke Palembang",
      description:
        "Transportasi travel menggunakan Hiace Executive Class dengan kapasitas 8 penumpang, kursi nyaman dengan leg rest.",
      provider: {
        "@type": "LocalBusiness",
        name: "RPM Travel Curup",
      },
      areaServed: {
        "@type": "Place",
        name: "Bengkulu ke Palembang",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Bengkulu - Palembang",
        },
      },
    },
    // OPTIONAL: aktifkan jika memang ada harga & ingin ditampilkan
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "250000", // GANTI sesuai harga
      availability: "https://schema.org/InStock",
    },
    // OPTIONAL: aktifkan hanya jika benar-benar ada ulasan asli
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "120",
    // },
  };

  return (
    <>
      <article className="prose max-w-4xl mx-auto py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="not-prose flex items-center gap-2 text-gold-600 text-xs font-semibold mb-6">
          <Link href="/" className="hover:text-gold-500 transition-colors">Beranda</Link>
          <span className="text-gray-400">/</span>
          <Link href="/travel-bengkulu-palembang" className="hover:text-gold-500 transition-colors">Travel Bengkulu – Palembang</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">Hiace Executive</span>
        </nav>

        <h1>Travel Bengkulu ke Palembang Nyaman dengan Hiace Executive Class</h1>

        <p>
          Mencari layanan <strong>travel Bengkulu ke Palembang</strong> yang nyaman,
          aman, dan tetap terjangkau? RPM Travel Curup hadir sebagai solusi terbaik
          untuk perjalanan Anda. Dengan armada Hiace Executive Class, perjalanan
          jauh menjadi lebih santai dan menyenangkan.
        </p>

        {/* GANTI NAMA FILE GAMBAR SESUAI YANG ANDA UPLOAD DI /public/images */}
        <img
          src="/images/hiace/interior.jpg"
          alt="Interior Hiace Executive travel Bengkulu Palembang"
          className="rounded-xl"
        />

        <h2>Kenapa Pilih Travel Bengkulu Palembang RPM Curup?</h2>
        <p>
          Perjalanan Bengkulu ke Palembang membutuhkan waktu yang cukup panjang.
          Oleh karena itu, memilih layanan travel yang nyaman sangat penting.
          RPM Travel menyediakan armada eksklusif dengan kapasitas terbatas,
          sehingga perjalanan terasa lebih lega dan tidak berdesakan.
        </p>

        <h2>Fasilitas Hiace Executive Class yang Nyaman</h2>
        <p>
          Kami menggunakan mobil Hiace Executive Class dengan kapasitas hanya
          8 penumpang. Setiap kursi dirancang untuk memberikan kenyamanan maksimal,
          bahkan untuk perjalanan jarak jauh.
        </p>

        <ul>
          <li>Kursi eksklusif dengan sandaran kaki (leg rest)</li>
          <li>Posisi duduk ergonomis, nyaman untuk tidur</li>
          <li>Ruang kaki lebih luas</li>
          <li>Interior bersih dan terawat</li>
        </ul>

        <p>
          Dengan fasilitas ini, travel Bengkulu Palembang menjadi lebih nyaman dan
          tidak melelahkan.
        </p>

        <h2>Jadwal Travel: Siang dan Malam</h2>
        <p>RPM Travel Curup menyediakan jadwal fleksibel sesuai kebutuhan Anda:</p>

        <ul>
          <li>
            <strong>Perjalanan siang</strong> – cocok untuk menikmati pemandangan
          </li>
          <li>
            <strong>Perjalanan malam</strong> – lebih hemat waktu dan tenaga
          </li>
        </ul>

        <h2>Harga Travel Bengkulu ke Palembang Terjangkau</h2>
        <p>
          Meskipun menggunakan armada Executive Class, harga yang ditawarkan tetap
          ekonomis dan kompetitif. Anda mendapatkan layanan premium dengan biaya
          yang ramah di kantong.
        </p>

        <h2>Cocok untuk Berbagai Kebutuhan</h2>
        <p>
          Layanan ini cocok untuk perjalanan pribadi, bisnis, kunjungan keluarga,
          maupun wisata. Dengan kapasitas terbatas, perjalanan terasa lebih privat
          dan eksklusif.
        </p>

        <h2>Rute Sebaliknya Tersedia</h2>
        <p>
          Selain rute Bengkulu ke Palembang, kami juga melayani perjalanan arah
          sebaliknya. Lihat detail layanan di halaman berikut:
        </p>

        <p>
          <Link href="/travel-palembang-bengkulu" className="text-blue-600 underline">
            Travel Palembang ke Bengkulu
          </Link>
        </p>

        <h2>Pesan Travel Sekarang</h2>
        <p>
          Jangan tunda perjalanan Anda. Nikmati layanan travel Bengkulu ke
          Palembang dengan Hiace Executive Class yang nyaman, aman, dan harga
          ekonomis bersama RPM Travel Curup.
        </p>

        {/* Layanan Terkait */}
        <div className="not-prose mt-8">
          <h2 className="font-display text-xl font-bold text-primary-900 mb-4">Layanan Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/travel-bengkulu-palembang', label: '🚐 Travel Bengkulu – Palembang', desc: 'Rute lengkap Bengkulu ke Palembang, 2 jadwal harian' },
              { href: '/travel-palembang-bengkulu', label: '↔ Travel Palembang – Bengkulu', desc: 'Rute balik dari Palembang ke Bengkulu' },
              { href: '/berapa-jam-palembang-bengkulu', label: '⏱ Berapa Jam Palembang ke Bengkulu?', desc: 'Estimasi waktu tempuh dan info perjalanan' },
              { href: '/rute-travel-palembang-bengkulu', label: '🛣️ Rute Perjalanan Palembang – Bengkulu', desc: 'Panduan jalur dan waypoint yang dilalui' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block border border-gray-200 hover:border-gold-400 rounded-xl p-3 transition-all group no-underline">
                <p className="font-semibold text-primary-900 text-sm group-hover:text-gold-600 transition-colors">{l.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
