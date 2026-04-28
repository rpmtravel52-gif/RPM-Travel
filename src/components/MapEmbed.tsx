// components/MapEmbed.tsx
// ✅ FIX: Komponen ini di-import secara dynamic (ssr:false) dari page.tsx
// sehingga iframe Google Maps tidak ikut di-load saat halaman pertama dibuka

export default function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.8!2d102.5167!3d-3.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e37c3b2b1111111%3A0x1!2sTalang+Benih%2C+Curup!5e0!3m2!1sid!2sid!4v1234567890"
      width="100%"
      height="380"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Lokasi Kantor RPM Travel Curup"
    />
  );
}
