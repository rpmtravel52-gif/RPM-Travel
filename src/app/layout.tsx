import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'; // ← tambah ini
import './globals.css';
import Navbar from '@/components/Navbar';
import WAFloat from '@/components/WAFloat';
import Footer from '@/components/Footer';

// ← Definisikan font di sini
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
  description: 'RPM Travel Curup – Jasa travel door to door dan sewa bus wisata. Hubungi 085282828005.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}> {/* ← tambah className */}
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WAFloat />
      </body>
    </html>
  );
}
