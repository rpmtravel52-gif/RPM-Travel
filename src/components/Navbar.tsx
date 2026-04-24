'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20pesan%20travel';

interface NavItem {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavItem[] = [
  {
    label: 'Layanan',
    children: [
      { href: '/travel-curup-palembang', label: '🚐 Travel Curup – Palembang' },
      { href: '/travel-curup-lebong',    label: '🚗 Travel Curup – Lebong' },
      { href: '/sewa-bus-wisata',        label: '🚌 Sewa Bus Wisata' },
    ],
  },
  { href: '/#armada', label: 'Armada' },
  { href: '/#kenapa-kami', label: 'Tentang Kami' },
  { href: '/pesan',   label: 'Pesan Tiket' },
  { href: '/#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 font-bold text-lg shadow-md transition-colors">
            R
          </div>
          <div className="leading-tight">
            <div className="font-bold text-slate-900 text-sm">RPM</div>
            <div className="font-bold text-amber-500 text-sm -mt-0.5">Travel Curup</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  {link.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[240px] z-50"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-slate-900 hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href || link.label}
                href={link.href || '#'} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/pesan" className="hidden sm:block bg-amber-500 text-white text-sm px-4 py-2 rounded-xl font-medium">
            Pesan Tiket
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white text-sm px-4 py-2 rounded-xl font-medium flex items-center gap-2">
            WhatsApp
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button 
                    onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                    className="w-full text-left py-2 px-3 text-sm font-bold text-gray-800 flex justify-between"
                  >
                    {link.label} <span>{expandedMobile === link.label ? '−' : '+'}</span>
                  </button>
                  {expandedMobile === link.label && (
                    <div className="pl-4">
                      {link.children.map(child => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href || '#'} onClick={() => setOpen(false)} className="block py-2 px-3 text-sm text-gray-600">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
