import styles from "./Pricing.module.css";

const routes = [
  {
    id: "cp",
    from: "Curup",
    to: "Palembang",
    distance: "±350 km",
    armada: ["Hiace", "Innova"],
    features: ["Berangkat sesuai jadwal", "AC & kursi recline", "Bagasi inklusif", "Sopir berpengalaman"],
    note: "Harga bervariasi. Hubungi kami untuk tarif terkini.",
    cta: "Tanya Tarif",
    waMsg: "Halo%20RPM%20Travel,%20berapa%20harga%20travel%20Curup-Palembang%3F",
  },
  {
    id: "cl",
    from: "Curup",
    to: "Lebong",
    distance: "±80 km",
    armada: ["Avanza", "Innova"],
    features: ["Jadwal pagi & sore", "Harga terjangkau", "Sopir lokal berpengalaman", "Berangkat tepat waktu"],
    note: "Harga bervariasi. Hubungi kami untuk tarif terkini.",
    cta: "Tanya Tarif",
    waMsg: "Halo%20RPM%20Travel,%20berapa%20harga%20travel%20Curup-Lebong%3F",
  },
];

const busPackage = {
  price: "Rp 3.000.000",
  unit: "/hari",
  capacity: "30 Penumpang",
  includes: [
    { icon: "⛽", label: "Bahan Bakar (BBM)" },
    { icon: "👨‍✈️", label: "Sopir Profesional" },
    { icon: "🚌", label: "Bus Kapasitas 30 Kursi" },
    { icon: "🗺️", label: "Semua Rute Wisata" },
  ],
  note: "Harga per hari, belum termasuk biaya masuk destinasi wisata & akomodasi.",
};

export default function Pricing() {
  return (
    <section className={styles.section} id="harga">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Tarif Kami</p>
          <h2 className={styles.title}>Harga & Paket</h2>
          <div className="gold-divider" />
          <p className={styles.subtitle}>
            Harga kompetitif dengan pelayanan terbaik. Hubungi kami untuk informasi tarif detail dan penawaran khusus rombongan.
          </p>
        </div>

        {/* Bus package – highlight */}
        <div className={styles.busCard}>
          <div className={styles.busLeft}>
            <div className={styles.busIcon}>🚌</div>
            <div>
              <p className={styles.busLabel}>Paket Sewa Bus Wisata</p>
              <div className={styles.busPrice}>
                <span className={styles.busPriceNum}>{busPackage.price}</span>
                <span className={styles.busPriceUnit}>{busPackage.unit}</span>
              </div>
              <div className={styles.busCapacity}>
                👥 Kapasitas {busPackage.capacity}
              </div>
            </div>
          </div>

          <div className={styles.busRight}>
            <p className={styles.includesTitle}>Sudah Termasuk (All-In):</p>
            <div className={styles.includesGrid}>
              {busPackage.includes.map((item) => (
                <div key={item.label} className={styles.includeItem}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.busNote}>{busPackage.note}</p>
            <a
              href="https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20sewa%20bus%20wisata.%20Apakah%20tersedia%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Pesan Bus Sekarang →
            </a>
          </div>
        </div>

        {/* Route cards */}
        <div className={styles.routeGrid}>
          {routes.map((route) => (
            <div key={route.id} className={styles.routeCard}>
              <div className={styles.routeHeader}>
                <div className={styles.routePath}>
                  <span className={styles.routeCity}>{route.from}</span>
                  <span className={styles.routeArrow}>→</span>
                  <span className={styles.routeCity}>{route.to}</span>
                </div>
                <span className={styles.routeDist}>{route.distance}</span>
              </div>

              <div className={styles.routeArmada}>
                {route.armada.map((a) => (
                  <span key={a} className={styles.armadaTag}>{a}</span>
                ))}
              </div>

              <ul className={styles.routeFeatures}>
                {route.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <p className={styles.routeNote}>{route.note}</p>

              <a
                href={`https://wa.me/6285282828005?text=${route.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {route.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
