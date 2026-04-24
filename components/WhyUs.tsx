import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: "🛡️",
    title: "Terpercaya & Aman",
    desc: "Armada terawat rutin, sopir berpengalaman dan terlatih. Keselamatan Anda adalah prioritas utama kami.",
  },
  {
    icon: "⏰",
    title: "Tepat Waktu",
    desc: "Kami menghargai waktu Anda. Keberangkatan dan kedatangan selalu on-schedule.",
  },
  {
    icon: "💰",
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi. Harga yang kami tawarkan sudah final dan bersaing.",
  },
  {
    icon: "📞",
    title: "Layanan 24/7",
    desc: "Tim kami siap membantu kapan saja via WhatsApp untuk pemesanan dan informasi.",
  },
  {
    icon: "🚗",
    title: "Armada Lengkap",
    desc: "Hiace, Innova, Avanza, hingga Bus 30 kursi. Semua kebutuhan perjalanan tersedia.",
  },
  {
    icon: "📍",
    title: "Jemput & Antar",
    desc: "Layanan antar-jemput dari titik yang Anda tentukan di area Curup dan sekitarnya.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Mengapa Pilih Kami</p>
            <h2 className={styles.title}>
              Perjalanan Nyaman<br />
              Dimulai dari<br />
              <span className={styles.titleGold}>Pilihan Tepat</span>
            </h2>
            <div className="gold-divider left" />
            <p className={styles.desc}>
              Sejak berdiri, RPM Travel Curup telah melayani ribuan penumpang dengan
              standar keselamatan dan kenyamanan yang tidak pernah kami kompromikan.
            </p>
            <a
              href="https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20pesan%20travel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Pesan Sekarang
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.grid}>
              {reasons.map((r) => (
                <div key={r.title} className={styles.card}>
                  <span className={styles.icon}>{r.icon}</span>
                  <h4 className={styles.cardTitle}>{r.title}</h4>
                  <p className={styles.cardDesc}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
