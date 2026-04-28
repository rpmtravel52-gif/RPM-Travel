import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ✅ FIX: Kurangi font weight — hanya load yang benar-benar dipakai
// Sebelum: 4 weight + italic style → Sesudah: 2 weight saja
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],       // hapus 400 & 600, italic tidak dipakai di kode
  variable: '--font-playfair',
  display: 'swap',
});

// ✅ FIX: Kurangi dari 6 weight → 3 weight
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // hapus 300, 700, 800
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
  description: 'RPM Travel Curup – Jasa travel door to door dan sewa bus wisata. Hubungi 085282828005.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
