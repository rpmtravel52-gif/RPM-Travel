import styles from "./Services.module.css";

const services = [
  {
    id: "curup-palembang",
    icon: "🛣️",
    route: "Curup → Palembang",
    title: "Travel Antarkota",
    desc: "Perjalanan nyaman langsung ke Palembang tanpa transit. Berangkat tepat waktu, tiba dengan selamat.",
    armada: ["Hiace", "Innova"],
    highlights: ["AC Dingin", "Kursi Recline", "Bagasi Luas", "Jadwal Fleksibel"],
    color: "#c9a84c",
  },
  {
    id: "curup-lebong",
    icon: "🏔️",
    route: "Curup → Lebong",
    title: "Travel Lokal",
    desc: "Solusi transportasi andalan warga Curup–Lebong. Cepat, aman, dan harga terjangkau.",
    armada: ["Avanza", "Innova"],
    highlights: ["Berangkat Rutin", "Harga Bersahabat", "Sopir Lokal", "Pintu ke Pintu"],
    color: "#4c7bc9",
  },
  {
    id: "sewa-bus",
    icon: "🚌",
    route: "Sewa Bus Wisata",
    title: "Bus Pariwisata",
    desc: "Sewa bus untuk wisata, family gathering, study tour, atau perjalanan kelompok. All-in sudah termasuk bensin & sopir.",
    armada: ["Bus 30 Kursi"],
    highlights: ["30 Penumpang", "Sudah Termasuk BBM", "Sopir Profesional", "All In"],
    color: "#c94c4c",
    featured: true,
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="layanan">
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Apa yang Kami Tawarkan</p>
          <h2 className={styles.title}>Layanan RPM Travel</h2>
          <div className="gold-divider" />
          <p className={styles.subtitle}>
            Kami hadir untuk memenuhi kebutuhan transportasi Anda, dari perjalanan antarkota
            hingga wisata bersama keluarga dan rombongan.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`${styles.card} ${service.featured ? styles.featured : ""}`}
            >
              {service.featured && (
                <div className={styles.featuredBadge}>✨ Populer</div>
              )}

              <div className={styles.cardIcon}>{service.icon}</div>
              <div className={styles.routeTag}>{service.route}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>

              <div className={styles.armadaRow}>
                {service.armada.map((a) => (
                  <span key={a} className={styles.armadaBadge}>
                    {a}
                  </span>
                ))}
              </div>

              <ul className={styles.highlights}>
                {service.highlights.map((h) => (
                  <li key={h} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20pesan%20${encodeURIComponent(service.route)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={service.featured ? "btn-gold" : "btn-outline"}
                style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}
              >
                Pesan Sekarang →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
