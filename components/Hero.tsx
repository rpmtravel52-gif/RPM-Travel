import styles from "./Hero.module.css";

export default function Hero() {
  const WA_LINK =
    "https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20memesan%20travel";

  return (
    <section className={styles.hero} id="beranda">
      {/* Background pattern */}
      <div className={styles.bgPattern} />
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Curup · Bengkulu
        </div>

        <h1 className={styles.headline}>
          Perjalanan Nyaman,
          <br />
          <span className={styles.headlineGold}>Sampai Tujuan</span>
          <br />
          Dengan Aman
        </h1>

        <p className={styles.subtext}>
          Jasa travel terpercaya di Curup untuk rute Curup–Palembang &
          Curup–Lebong. Armada lengkap, ber-AC, sopir berpengalaman.
        </p>

        <div className={styles.actions}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.848L.057 23.5a.5.5 0 00.614.614l5.701-1.481A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.83-.543-5.408-1.485l-.387-.23-3.383.878.893-3.322-.252-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Pesan via WhatsApp
          </a>
          <a href="#layanan" className="btn-outline">
            Lihat Layanan
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>Rute Tetap</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>30</span>
            <span className={styles.statLabel}>Kapasitas Bus</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>24/7</span>
            <span className={styles.statLabel}>Siap Melayani</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
