import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WAFloat from '@/components/WAFloat';

export const metadata: Metadata = {
  title: {
    default: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
    template: '%s | RPM Travel Curup',
  },
  description:
    'RPM Travel Curup – Jasa travel terpercaya rute Curup–Palembang & Curup–Lebong. Sewa bus wisata 30 kursi all-in sudah BBM & sopir. Armada Hiace, Innova, Avanza. Hubungi 085282828005.',
  keywords: [
    'travel curup', 'travel curup palembang', 'travel curup lebong',
    'sewa bus wisata curup', 'sewa bus bengkulu', 'RPM travel curup',
    'jasa travel rejang lebong', 'travel hiace curup', 'sewa bus pariwisata curup',
    'travel bengkulu curup',
  ],
  metadataBase: new URL('https://rpmtravel.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'id_ID',
    url: 'https://rpmtravel.vercel.app',
    siteName: 'RPM Travel Curup',
    title: 'RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu',
    description: 'Jasa travel terpercaya Curup–Palembang & Curup–Lebong. Sewa bus wisata 30 kursi all-in di Curup, Bengkulu.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta name="geo.region" content="ID-BE" />
        <meta name="geo.placename" content="Curup, Rejang Lebong, Bengkulu" />
        <meta name="geo.position" content="-3.4667;102.5167" />
        <meta name="ICBM" content="-3.4667, 102.5167" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'RPM Travel Curup',
              description: 'Jasa travel dan sewa bus wisata di Curup, Bengkulu.',
              url: 'https://rpmtravel.vercel.app',
              telephone: '+6285282828005',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. S. Parman, Talang Benih',
                addressLocality: 'Curup',
                addressRegion: 'Rejang Lebong, Bengkulu',
                postalCode: '39119',
                addressCountry: 'ID',
              },
              geo: { '@type': 'GeoCoordinates', latitude: '-3.4667', longitude: '102.5167' },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '06:00', closes: '22:00',
              },
              areaServed: ['Curup', 'Rejang Lebong', 'Bengkulu', 'Palembang', 'Lebong'],
              priceRange: 'Rp',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WAFloat />
      </body>
    </html>
  );
}
