import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import WAFloat from '@/components/WAFloat';

export const metadata: Metadata = {
  title: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
  description: 'RPM Travel Curup – Jasa travel door to door dan sewa bus wisata. Hubungi 085282828005.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <WAFloat />
      </body>
    </html>
  );
}
