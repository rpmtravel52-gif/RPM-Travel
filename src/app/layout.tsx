import type { Metadata } from 'next';
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Montserrat,
} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ── Font: Playfair Display (dipakai di konten utama) ──────────────
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

// ── Font: Plus Jakarta Sans (body text) ───────────────────────────
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

// ── Font: Cormorant Garamond (logo Navbar) ────────────────────────
// FIX: dipindahkan dari @import CSS di Navbar ke sini agar tidak
// render-blocking. next/font otomatis preload & self-host.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// ── Font: Montserrat (nav links) ──────────────────────────────────
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
  description:
    'RPM Travel Curup – Jasa travel door to door dan sewa bus wisata. Hubungi 085282828005.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        {/*
          FIX LCP: Preload gambar hero secara eksplisit di <head>.
          Browser akan download gambar ini sebelum apapun, bahkan sebelum
          React hydration — ini cara tercepat untuk mempercepat LCP.
          imageSrcSet mencakup mobile dan desktop sekaligus.
        */}
        <link
          rel="preload"
          as="image"
          href="/images/hiace/exterior.jpg"
          imageSrcSet="/images/hiace/exterior.jpg"
          imageSizes="(max-width: 1024px) 90vw, 45vw"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
