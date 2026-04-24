import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu",
  description:
    "RPM Travel Curup – Jasa travel terpercaya rute Curup–Palembang, Curup–Lebong, dan sewa bus wisata di Curup, Rejang Lebong, Bengkulu. Armada Hiace, Innova, Avanza, dan Bus 30 kursi. Hubungi 085282828005.",
  keywords: [
    "travel curup",
    "travel curup palembang",
    "travel curup lebong",
    "sewa bus wisata curup",
    "sewa bus bengkulu",
    "travel bengkulu",
    "RPM travel curup",
    "jasa travel rejang lebong",
    "travel hiace curup",
    "sewa bus pariwisata curup",
    "travel curup terpercaya",
    "angkutan travel curup bengkulu",
  ],
  authors: [{ name: "RPM Travel Curup" }],
  creator: "RPM Travel Curup",
  publisher: "RPM Travel Curup",
  metadataBase: new URL("https://rpmtravel.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rpmtravel.vercel.app",
    siteName: "RPM Travel Curup",
    title: "RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu",
    description:
      "Jasa travel terpercaya Curup–Palembang, Curup–Lebong & sewa bus wisata di Curup, Bengkulu. Armada lengkap, nyaman & profesional.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RPM Travel Curup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPM Travel Curup | Travel & Sewa Bus Wisata Bengkulu",
    description:
      "Jasa travel terpercaya Curup–Palembang, Curup–Lebong & sewa bus wisata di Curup, Bengkulu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="ID-BE" />
        <meta name="geo.placename" content="Curup, Rejang Lebong, Bengkulu" />
        <meta name="geo.position" content="-3.4667;102.5167" />
        <meta name="ICBM" content="-3.4667, 102.5167" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "RPM Travel Curup",
              description:
                "Jasa travel dan sewa bus wisata di Curup, Bengkulu. Melayani rute Curup–Palembang dan Curup–Lebong.",
              url: "https://rpmtravel.vercel.app",
              telephone: "+6285282828005",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. S. Parman, Talang Benih",
                addressLocality: "Curup",
                addressRegion: "Rejang Lebong, Bengkulu",
                postalCode: "39119",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-3.4667",
                longitude: "102.5167",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "22:00",
              },
              priceRange: "Rp",
              servesCuisine: [],
              areaServed: [
                "Curup",
                "Rejang Lebong",
                "Bengkulu",
                "Palembang",
                "Lebong",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
