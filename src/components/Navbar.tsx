"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/jadwal", label: "Jadwal" },
  { href: "/rute", label: "Rute" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Montserrat', sans-serif;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 14, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(196, 160, 100, 0.18);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.4);
        }

        .navbar.top {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── LOGO + BRAND ── */
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          border: 1.5px solid rgba(196, 160, 100, 0.5);
          flex-shrink: 0;
          position: relative;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          line-height: 1;
        }

        .brand-rpm {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #fff;
          line-height: 1;
          position: relative;
        }

        .brand-rpm span {
          background: linear-gradient(135deg, #e8c97e 0%, #c4a064 50%, #9a7a48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          color: rgba(196, 160, 100, 0.8);
          text-transform: uppercase;
          padding-left: 1px;
        }

        /* ── NAV LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          display: inline-block;
          padding: 0.45rem 1rem;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          border-radius: 2px;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c4a064, transparent);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .nav-links a:hover {
          color: #e8c97e;
        }

        .nav-links a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* ── GOLD DIVIDER ── */
        .nav-divider {
          width: 1px;
          height: 20px;
          background: linear-gradient(180deg, transparent, rgba(196, 160, 100, 0.4), transparent);
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
          z-index: 1100;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 8, 12, 0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 999;
          animation: fadeIn 0.3s ease;
          border-top: 1px solid rgba(196, 160, 100, 0.12);
        }

        .mobile-menu.open {
          display: flex;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 1rem 2rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .mobile-menu a:hover {
          color: #e8c97e;
        }

        .mobile-menu .mobile-divider {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,160,100,0.35), transparent);
          margin: 0.2rem 0;
        }

        /* ── TOP GOLD LINE ── */
        .gold-line {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #c4a064 30%, #e8c97e 50%, #c4a064 70%, transparent 100%);
          z-index: 1001;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .gold-line.visible {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-divider {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .navbar-inner {
            padding: 0 1.25rem;
          }

          .brand-rpm {
            font-size: 1.35rem;
          }
        }
      `}</style>

      {/* Gold accent line at very top */}
      <div className={`gold-line${isScrolled ? " visible" : ""}`} />

      <nav className={`navbar${isScrolled ? " scrolled" : " top"}`}>
        <div className="navbar-inner">

          {/* Brand */}
          <Link href="/" className="brand">
            <div className="logo-wrap">
              <Image
                src="/logo.png"
                alt="RPM Travel Curup Logo"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="brand-text">
              <div className="brand-rpm">
                <span>RPM</span> TRAVEL
              </div>
              <div className="brand-sub">Curup &nbsp;·&nbsp; Since 2018</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <>
                {i > 0 && <div key={`div-${i}`} className="nav-divider" />}
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              </>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link, i) => (
          <>
            {i > 0 && <div key={`mdiv-${i}`} className="mobile-divider" />}
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
