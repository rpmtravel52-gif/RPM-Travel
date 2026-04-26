import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Tambahkan folder yang ingin Anda sembunyikan dari Google
    },
    // Pastikan URL di bawah ini sudah benar sesuai domain Anda
    sitemap: 'https://rpmtravel.co.id/sitemap.xml',
  }
}
