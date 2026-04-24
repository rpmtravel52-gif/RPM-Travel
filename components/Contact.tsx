import styles from "./Contact.module.css";

const WA_LINK = "https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20bertanya";

export default function Contact() {
  return (
    <section className={styles.section} id="kontak">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Hubungi Kami</p>
          <h2 className={styles.title}>Lokasi & Kontak</h2>
          <div className="gold-divider" />
          <p className={styles.subtitle}>
            Kami siap melayani Anda setiap hari. Hubungi kami via WhatsApp atau kunjungi kantor kami langsung di Curup.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact info */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h4 className={styles.infoLabel}>Alamat Kantor</h4>
                <p className={styles.infoValue}>
                  Jl. S. Parman, Talang Benih,<br />
                  Curup, Rejang Lebong,<br />
                  Bengkulu 39119
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📱</div>
              <div>
                <h4 className={styles.infoLabel}>WhatsApp / Telepon</h4>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.phoneLink}>
                  0852-8282-8005
                </a>
                <p className={styles.infoSub}>Siap melayani 06.00 – 22.00 WIB</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕐</div>
              <div>
                <h4 className={styles.infoLabel}>Jam Operasional</h4>
                <p className={styles.infoValue}>Senin – Minggu</p>
                <p className={styles.infoSub}>06.00 – 22.00 WIB</p>
              </div>
            </div>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.848L.057 23.5a.5.5 0 00.614.614l5.701-1.481A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.98 0-3.83-.543-5.408-1.485l-.387-.23-3.383.878.893-3.322-.252-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7!2d102.5167!3d-3.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjgnMDAuMSJTIDEwMsKwMzEnMDAuMSJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi RPM Travel Curup"
            />
            <a
              href="https://share.google/nhQgSmsBuE5taP7H1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapCta}
            >
              📍 Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
