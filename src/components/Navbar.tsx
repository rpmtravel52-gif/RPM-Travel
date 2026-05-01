'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ChildLink = { href: string; label: string };
type NavLink =
  | { label: string; children: ChildLink[]; href?: undefined }
  | { label: string; href: string; children?: undefined };

const navLinks: NavLink[] = [
  {
    label: 'Layanan',
    children: [
      // ── Bengkulu ↔ Palembang (priority tertinggi)
      { href: '/travel-bengkulu-palembang', label: '🚌 Travel Bengkulu – Palembang' },
      { href: '/travel-palembang-bengkulu', label: '↩️ Travel Palembang – Bengkulu' },
      // ── Curup ↔ Palembang
      { href: '/travel-curup-palembang',    label: '🚐 Travel Curup – Palembang' },
      { href: '/travel-palembang-curup',    label: '↩️ Travel Palembang – Curup' },
      // ── Curup ↔ Lebong
      { href: '/travel-curup-lebong',       label: '🚗 Travel Curup – Lebong' },
      { href: '/travel-lebong-curup',       label: '↩️ Travel Lebong – Curup' },
      // ── Lebong ↔ Palembang
      { href: '/travel-lebong-palembang',   label: '🚌 Travel Lebong – Palembang' },
      { href: '/travel-palembang-lebong',   label: '↩️ Travel Palembang – Lebong' },
      // ── Sewa
      { href: '/sewa-hiace-curup',          label: '🚐 Sewa Hiace Curup' },
      { href: '/sewa-bus-wisata',           label: '🚌 Sewa Bus Wisata' },
    ],
  },
  {
    label: 'Artikel',
    children: [
      { href: '/berapa-jam-palembang-bengkulu',    label: '🕐 Berapa Jam Palembang – Bengkulu?' },
      { href: '/berapa-jam-palembang-lebong',      label: '🕐 Berapa Jam Palembang – Lebong?' },
      { href: '/harga-travel-palembang-lebong',    label: '💰 Harga Travel Palembang – Lebong' },
      { href: '/rute-travel-palembang-bengkulu',   label: '🗺️ Rute Travel Palembang – Bengkulu' },
      { href: '/tips-naik-travel-jarak-jauh',      label: '✈️ Tips Naik Travel Jarak Jauh' },
      { href: '/tips-sewa-bus-wisata',             label: '🚌 Tips Sewa Bus Wisata' },
      { href: '/sewa-bus-vs-travel-rombongan',     label: '⚖️ Sewa Bus vs Travel Rombongan' },
    ],
  },
  { href: '/transportasi-perjalanan-dinas', label: 'Perjalanan Dinas' },
  { href: '/#armada',                       label: 'Armada' },
  { href: '/#kenapa-kami',                  label: 'Tentang Kami' },
  { href: '/#kontak',                       label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen]                     = useState(false);
  const [dropdown, setDropdown]             = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [scrolled, setScrolled]             = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .rpm-logo-text { font-family: var(--font-cormorant), serif; }
        .rpm-nav-font  { font-family: var(--font-montserrat), sans-serif; }

        .rpm-gold {
          background: linear-gradient(135deg, #b8893a 0%, #e2b96f 45%, #c99a48 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rpm-nav-link { position: relative; }
        .rpm-nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 55%; height: 1px;
          background: linear-gradient(90deg, transparent, #c99a48, transparent);
          transition: transform .3s cubic-bezier(.4,0,.2,1);
        }
        .rpm-nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

        .rpm-topline {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #c99a48 30%, #e2b96f 50%, #c99a48 70%, transparent 100%);
          z-index: 60;
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
        }
        .rpm-topline.show { opacity: 1; }

        /* Dropdown dibagi 2 kolom jika item > 6 */
        .rpm-dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .rpm-dropdown-single {
          display: block;
        }
      `}</style>

      {/* Gold top line */}
      <div className={`rpm-topline${scrolled ? ' show' : ''}`} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md shadow-md border-b border-amber-100'
            : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* ── Brand ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md ring-1 ring-amber-200 flex-shrink-0 transition-shadow group-hover:shadow-lg group-hover:ring-amber-400">
              <Image
                src="/images/logo.png"
                alt="RPM Travel Curup Logo"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="leading-none select-none">
              <div className="rpm-logo-text flex items-baseline gap-[5px]">
                <span className="rpm-gold text-[1.35rem] font-bold tracking-widest">RPM</span>
                <span className="text-gray-800 text-[1.1rem] font-semibold tracking-[0.18em]">TRAVEL</span>
              </div>
              <div
                className="rpm-nav-font text-[0.56rem] font-medium tracking-[0.42em] uppercase mt-[2px]"
                style={{ color: '#a8854a', paddingLeft: '1px' }}
              >
                Curup &nbsp;·&nbsp; Bengkulu
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="rpm-nav-font hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className="rpm-nav-link px-4 py-2 text-[0.8rem] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-amber-50 flex items-center gap-1 tracking-wide"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdown === link.label && (
                    <div
                      className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-amber-100 py-2 z-50 ${
                        link.children.length > 6
                          ? 'rpm-dropdown-grid min-w-[480px]'
                          : 'rpm-dropdown-single min-w-[260px]'
                      }`}
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-amber-800 hover:bg-amber-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rpm-nav-link px-4 py-2 text-[0.8rem] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-amber-50 tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-amber-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu navigasi"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {open && (
          <div className="rpm-nav-font md:hidden bg-white border-t border-amber-100 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-widest hover:bg-amber-50 rounded-lg"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedMobile === link.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobile === link.label && (
                    <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-amber-200 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 px-3 text-sm text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-3 text-sm text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
}
