import Image from "next/image";
import styles from "./Fleet.module.css";

const fleet = [
  {
    id: "hiace",
    name: "Toyota Hiace",
    type: "Travel Curup–Palembang",
    desc: "Minibus premium dengan kapasitas 12–15 penumpang. AC double blower, kursi full recline, bagasi besar.",
    specs: ["15 Kursi", "AC Double", "Recline Seat", "Bagasi Besar"],
    images: {
      exterior: "/images/hiace/exterior.jpg",
      interior: "/images/hiace/interior.jpg",
    },
    placeholder: "🚐",
  },
  {
    id: "innova",
    name: "Toyota Innova",
    type: "Curup–Palembang & Curup–Lebong",
    desc: "Kendaraan MPV tangguh dan nyaman untuk perjalanan antarkota maupun dalam kota.",
    specs: ["7 Kursi", "AC Sejuk", "Nyaman", "Andal"],
    images: {
      exterior: "/images/innova/exterior.jpg",
      interior: "/images/innova/interior.jpg",
    },
    placeholder: "🚗",
  },
  {
    id: "avanza",
    name: "Toyota Avanza",
    type: "Travel Curup–Lebong",
    desc: "Mobil keluarga favorit untuk rute Curup–Lebong. Irit, nyaman, dan tepat waktu.",
    specs: ["7 Kursi", "Irit BBM", "Servis Ramah", "Harga Terjangkau"],
    images: {
      exterior: "/images/avanza/exterior.jpg",
    },
    placeholder: "🚙",
  },
  {
    id: "bus",
    name: "Bus Pariwisata",
    type: "Sewa Bus Wisata",
    desc: "Bus wisata kapasitas 30 penumpang. All-in sudah termasuk bensin dan sopir profesional.",
    specs: ["30 Kursi", "All-In", "Sopir Pro", "Wisata Nyaman"],
    images: {
      exterior: "/images/bus/exterior.jpg",
      interior: "/images/bus/interior.jpg",
    },
    placeholder: "🚌",
    featured: true,
  },
];

export default function Fleet() {
  return (
    <section className={styles.section} id="armada">
      <div className={styles.bgDark} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Kendaraan Kami</p>
          <h2 className={styles.title}>Armada RPM Travel</h2>
          <div className="gold-divider" />
          <p className={styles.subtitle}>
            Seluruh armada terawat, berperawatan rutin, dan disiapkan untuk kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {fleet.map((car) => (
            <div key={car.id} className={`${styles.card} ${car.featured ? styles.featured : ""}`}>
              {/* Image */}
              <div className={styles.imageWrap}>
                {/* Placeholder until real images uploaded */}
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderIcon}>{car.placeholder}</span>
                  <span className={styles.placeholderText}>Foto {car.name}</span>
                  <span className={styles.placeholderSub}>
                    Upload foto ke: /public/images/{car.id}/
                  </span>
                </div>
                {car.featured && (
                  <div className={styles.featuredRibbon}>Populer</div>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.typeTag}>{car.type}</div>
                <h3 className={styles.carName}>{car.name}</h3>
                <p className={styles.carDesc}>{car.desc}</p>

                <div className={styles.specs}>
                  {car.specs.map((s) => (
                    <span key={s} className={styles.specBadge}>{s}</span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inquiryBtn}
                >
                  Tanya Ketersediaan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upload note */}
        <div className={styles.uploadNote}>
          <span>📸</span>
          <p>
            <strong>Foto Armada:</strong> Upload foto interior & exterior ke folder{" "}
            <code>public/images/[nama-armada]/</code> di GitHub untuk tampil otomatis.
          </p>
        </div>
      </div>
    </section>
  );
}
