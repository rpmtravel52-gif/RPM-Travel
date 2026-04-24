"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#armada", label: "Armada" },
    { href: "#harga", label: "Harga" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🚌</span>
          <div className={styles.logoText}>
            <span className={styles.logoBrand}>RPM Travel</span>
            <span className={styles.logoSub}>Curup, Bengkulu</span>
          </div>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285282828005?text=Halo%20RPM%20Travel,%20saya%20ingin%20memesan%20travel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
            onClick={() => setMenuOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barX1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barX2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barX3 : ""}`} />
        </button>
      </div>
    </nav>
  );
}
