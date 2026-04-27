import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Users, Shield, CheckCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Bengkulu Palembang – Hiace Berangkat Tiap Hari via Curup",
  description:
    "Travel Bengkulu–Palembang melewati Curup dan Kepahiang. Armada Toyota Hiace ber-AC, sopir berpengalaman, jemput di Kota Bengkulu. Durasi 8–9 jam. Pesan: 081270826212.",
  keywords: [
    "travel bengkulu palembang",
    "travel bengkulu ke palembang",
    "travel palembang bengkulu",
    "bus bengkulu palembang",
    "hiace bengkulu palembang",
    "travel bengkulu palembang murah",
  ],
  alternates: { canonical: "https://travelcurup.biz.id/travel-bengkulu-palembang" },
  openGraph: {
    title: "Travel Bengkulu Palembang – Hiace AC Berangkat Tiap Hari",
    description:
      "Rute Bengkulu–Palembang via Curup dengan Toyota Hiace ber-AC. Jemput di Kota Bengkulu. Pesan tiket via WhatsApp 081270826212.",
    url: "https://travelcurup.biz.id/travel-bengkulu-palembang",
  },
};

const schedules = [
  { waktu: "04.00 WIB", jenis: "Subuh — Paling Favorit", keterangan: "Tiba Palembang ±13.00 WIB", highlight: true },
  { waktu: "07.00 WIB", jenis: "Pagi", keterangan: "Tiba Palembang ±16.00 WIB", highlight: false },
  { waktu: "12.00 WIB", jenis: "Siang", keterangan: "Tiba Palembang ±21.00 WIB", highlight: false },
];

const ruteInternal = [
  {
    href: "/travel-curup-palembang",
    judul: "Travel Curup – Palembang",
    desc: "Naik dari Curup? Durasi lebih singkat, harga lebih hemat.",
    durasi: "6–7 jam",
  },
  {
    href: "/travel-lebong-palembang",
    judul: "Travel Lebong – Palembang",
    desc: "Berangkat dari Kabupaten Lebong langsung ke Palembang.",
    durasi: "7–8 jam",
  },
  {
    href: "/travel-curup-lebong",
    judul: "Travel Curup – Lebong",
    desc: "Perlu transit atau lanjut ke Lebong? Kami siap antarkan.",
    durasi: "1,5–2 jam",
  },
  {
    href: "/sewa-hiace-curup",
    judul: "Sewa Hiace Curup",
    desc: "Butuh armada khusus untuk rombongan? Charter Hiace tersedia.",
    durasi: "Fleksibel",
  },
];

const faq = [
  {
    q: "Berapa lama perjalanan dari Bengkulu ke Palembang?",
    a: "Dari Kota Bengkulu menuju Palembang, perjalanan normalnya memakan waktu 8 hingga 9 jam. Ini karena rutenya lebih panjang — melewati Curup (Rejang Lebong), kemudian Kepahiang, turun ke Lahat di Sumatera Selatan, dan akhirnya masuk ke Kota Palembang.",
  },
  {
    q: "Dari mana titik penjemputan di Kota Bengkulu?",
    a: "Kami melayani penjemputan di area Kota Bengkulu, termasuk kawasan Panorama, Ratu Samban, Teluk Segara, dan sekitarnya. Konfirmasikan alamat jemput saat menghubungi kami di WhatsApp.",
  },
  {
    q: "Apakah melewati Curup dalam perjalanan Bengkulu–Palembang?",
    a: "Ya, semua armada kami yang beroperasi dari Bengkulu menuju Palembang melewati Curup. Penumpang yang ingin naik dari Curup juga bisa bergabung di sini — lihat halaman travel Curup–Palembang untuk jadwal spesifiknya.",
  },
  {
    q: "Berapa harga tiket travel Bengkulu ke Palembang?",
    a: "Harga tiket mulai dari Rp 180.000 per penumpang dari Kota Bengkulu. Harga dapat berbeda tergantung musim dan ketersediaan kursi. Hubungi kami di 081270826212 untuk konfirmasi harga terkini.",
  },
  {
    q: "Apakah tersedia rute sebaliknya, Palembang ke Bengkulu?",
    a: "Ya, kami juga melayani rute Palembang–Bengkulu setiap hari. Lihat halaman khusus travel Palembang–Bengkulu untuk informasi jadwal dan pemesanan.",
  },
  {
    q: "Bagaimana cara pesan tiket travel Bengkulu–Palembang?",
    a: "Cukup hubungi kami melalui WhatsApp di 081270826212. Sampaikan tanggal keberangkatan, jumlah penumpang, dan titik jemput. Konfirmasi tiket dilakukan dalam hitungan menit.",
  },
];

export default function TravelBengkuluPalembang() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <MapPin size={13} /> Kota Bengkulu → Palembang
          </div>
          <h1>Travel Bengkulu – Palembang Setiap Hari</h1>
          <p className="hero-desc">
            Dari bibir Samudra Hindia hingga tepian Sungai Musi — kami menemani
            perjalanan Anda melintasi punggung Bukit Barisan menuju Palembang.
            Armada Toyota Hiace ber-AC berangkat setiap hari, menjemput langsung
            dari Kota Bengkulu.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/6281270826212?text=Halo%2C+saya+ingin+pesan+tiket+travel+Bengkulu-Palembang"
              className="btn-primary"
            >
              <Phone size={16} /> Pesan via WhatsApp
            </a>
            <a href="tel:081270826212" className="btn-outline">
              📞 Hubungi Langsung
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="info-strip">
        <div className="info-strip-inner">
          <div className="info-item"><Clock size={15} /> Durasi: 8–9 jam</div>
          <div className="info-item"><Users size={15} /> Kapasitas: 9–12 kursi</div>
          <div className="info-item"><Shield size={15} /> AC + Bagasi Luas</div>
          <div className="info-item"><MapPin size={15} /> Jemput di Kota Bengkulu</div>
        </div>
      </div>

      <div className="main-content">

        {/* Route box */}
        <div className="route-box">
          <div className="route-path">
            <span className="route-city">Bengkulu</span>
            <span className="route-arrow">⟶</span>
            <span className="route-city">Palembang</span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginLeft: "auto" }}>
              via Curup · Kepahiang · Lahat
            </span>
          </div>
          <div className="route-stats">
            <div className="stat-item">
              <div className="stat-label">Durasi Tempuh</div>
              <div className="stat-value">8–9</div>
              <div className="stat-sub">jam perjalanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Harga Mulai</div>
              <div className="stat-value">Rp 180k</div>
              <div className="stat-sub">per penumpang</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Armada</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>Toyota Hiace</div>
              <div className="stat-sub">AC, kursi ergonomis</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Keberangkatan</div>
              <div className="stat-value" style={{ fontSize: "1rem" }}>Setiap Hari</div>
              <div className="stat-sub">subuh, pagi & siang</div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <section className="section">
          <p className="section-label">Jadwal Keberangkatan</p>
          <h2>Tiga Waktu Berangkat dari Bengkulu</h2>
          <p style={{ marginBottom: "1rem" }}>
            Keberangkatan subuh pukul 04.00 adalah yang paling banyak dipilih
            penumpang — tiba di Palembang sekitar tengah hari, masih punya banyak
            waktu untuk urusan di kota.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Jam Berangkat</th>
                  <th>Sesi</th>
                  <th>Estimasi Tiba di Palembang</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((s) => (
                  <tr key={s.waktu} style={s.highlight ? { background: "var(--parchment)" } : {}}>
                    <td><strong>{s.waktu}</strong></td>
                    <td>
                      {s.jenis}
                      {s.highlight && (
                        <span className="badge badge-orange" style={{ marginLeft: "0.5rem" }}>
                          Terpopuler
                        </span>
                      )}
                    </td>
                    <td>{s.keterangan}</td>
                    <td><span className="badge badge-green">Tersedia</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Article */}
        <section className="section prose">
          <p className="section-label">Tentang Rute Ini</p>
          <h2>Perjalanan Bengkulu–Palembang: Lebih dari Sekadar Pindah Kota</h2>
          <p>
            Jarak antara Kota Bengkulu dan Kota Palembang sekitar 420–440 km melalui
            jalur darat. Rute ini melewati lanskap yang luar biasa bervariasi — dari
            pesisir barat Bengkulu, naik ke dataran tinggi Curup di Rejang Lebong,
            menembus perbukitan Kepahiang, kemudian turun perlahan menuju dataran
            Lahat dan Sumatera Selatan sebelum tiba di Palembang.
          </p>

          <h3>Kenapa Pilih Hiace untuk Perjalanan Sepanjang Ini?</h3>
          <p>
            Untuk rute lintas provinsi sepanjang Bengkulu–Palembang, kenyamanan bukan
            sekadar bonus — itu keharusan. Toyota Hiace yang kami operasikan dirancang
            untuk perjalanan jarak jauh: suspensi lebih meredam getaran di jalan
            berbukit, AC bekerja optimal bahkan di ketinggian Curup yang dingin, dan
            ruang kabin yang cukup lapang untuk beristirahat atau meluruskan kaki
            selama perjalanan.
          </p>

          <h3>Jalur yang Dilalui dan Titik Istirahat</h3>
          <p>
            Armada berangkat dari Kota Bengkulu, melintasi kawasan Pondok Kelapa dan
            masuk ke jalur pegunungan menuju Curup. Dari Curup, perjalanan berlanjut
            ke Kepahiang — di sinilah kebun teh dan kopi Robusta Bengkulu menghampar
            di kiri kanan jalan. Selepas Kepahiang, armada turun ke Lahat (Sumatera
            Selatan), melewati Muara Enim, dan masuk ke Palembang dari jalur selatan.
          </p>
          <p>
            Tersedia satu kali pemberhentian istirahat di warung makan yang sudah
            menjadi langganan penumpang kami — sekitar 30 menit untuk makan, sholat,
            dan meregangkan badan.
          </p>

          <h3>Yang Sudah Termasuk dalam Harga Tiket</h3>
          <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
            {[
              "Penjemputan di area Kota Bengkulu",
              "Kursi ber-AC Toyota Hiace sepanjang perjalanan",
              "Satu kali pemberhentian istirahat",
              "Pengantaran ke titik tujuan di Palembang",
              "Bagasi standar 1 koper atau ransel besar",
              "Sopir berpengalaman lintas provinsi Bengkulu–Sumsel",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle size={16} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <div className="testimonials">
          <p className="section-label">Kata Penumpang Kami</p>
          <h2>Dipercaya Warga Bengkulu yang Sering ke Palembang</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Setiap bulan saya bolak-balik Bengkulu–Palembang untuk urusan bisnis.
                Sudah coba beberapa travel, dan ini yang paling konsisten soal jadwal
                dan kebersihan mobilnya."
              </p>
              <div className="testimonial-author">— Pak Andri, pengusaha dari Bengkulu Tengah</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Anak saya yang kuliah di Palembang sering pakai travel ini pulang
                kampung ke Bengkulu. Saya tenang karena sopirnya pelan tapi pasti,
                tidak ugal-ugalan di jalan pegunungan."
              </p>
              <div className="testimonial-author">— Ibu Nurhayati, orang tua mahasiswi</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★☆</div>
              <p className="testimonial-text">
                "Pesan tiket subuh, dijemput tepat waktu, sampai Palembang sebelum
                dzuhur. Sempurna untuk yang punya agenda padat di hari yang sama."
              </p>
              <div className="testimonial-author">— Rizal, ASN dari Kota Bengkulu</div>
            </div>
          </div>
        </div>

        {/* Internal links */}
        <section className="section">
          <p className="section-label">Rute Lainnya</p>
          <h2>Berangkat dari Kota Lain? Kami Juga Melayani</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Selain dari Kota Bengkulu, kami melayani rute keberangkatan dari Curup
            dan Lebong dengan armada dan jadwal masing-masing.
          </p>
          <div className="cards-grid">
            {ruteInternal.map((r) => (
              <Link href={r.href} key={r.href} className="card" style={{ display: "block" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ color: "var(--bark)", fontSize: "1rem" }}>{r.judul}</h3>
                  <ArrowRight size={16} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>{r.desc}</p>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--terracotta)" }}>
                  ⏱ {r.durasi}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <p className="section-label">Pertanyaan Umum</p>
          <h2>FAQ – Travel Bengkulu ke Palembang</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <div className="faq-item" key={item.q}>
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <h2>Pesan Tiket Bengkulu–Palembang Sekarang</h2>
          <p>
            Chat langsung di WhatsApp — tidak perlu antre, tidak perlu ke kantor.
            Kursi Anda kami simpankan begitu pemesanan dikonfirmasi.
          </p>
          <div className="cta-actions">
            <a
              href="https://wa.me/6281270826212?text=Halo%2C+saya+ingin+pesan+tiket+travel+Bengkulu-Palembang"
              className="btn-wa"
            >
              💬 Pesan via WhatsApp
            </a>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
            atau telepon langsung: <strong style={{ color: "white" }}>081270826212</strong>
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": "Travel Bengkulu ke Palembang",
            "description":
              "Layanan travel antar kota rute Bengkulu–Palembang via Curup dan Kepahiang. Armada Toyota Hiace ber-AC, berangkat setiap hari.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Travel Curup",
              "url": "https://travelcurup.biz.id",
              "telephone": "+6281270826212",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curup",
                "addressRegion": "Bengkulu",
                "addressCountry": "ID",
              },
            },
            "offers": {
              "@type": "Offer",
              "price": "180000",
              "priceCurrency": "IDR",
            },
          }),
        }}
      />
    </main>
  );
}
