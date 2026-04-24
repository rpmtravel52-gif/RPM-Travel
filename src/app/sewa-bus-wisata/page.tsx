import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sewa Bus Wisata Curup 30 Kursi All-In | RPM Travel',
  description:
    'Sewa bus wisata Curup kapasitas 30 penumpang. Harga Rp 3.000.000/hari all-in sudah BBM & sopir profesional. Cocok wisata, gathering, study tour. Hubungi 085282828005.',
  alternates: { canonical: '/sewa-bus-wisata' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20sewa%20bus%20wisata';

const includes = [
  { icon: '⛽', label: 'Bahan Bakar (BBM)', desc: 'Semua biaya BBM sudah termasuk' },
  { icon: '👨‍✈️', label: 'Sopir Profesional', desc: 'Berpengalaman & berlisensi resmi' },
  { icon: '🚌', label: 'Bus 30 Kursi', desc: 'Kapasitas penumpang 30 orang' },
  { icon: '🗺️', label: 'Semua Rute Wisata', desc: 'Fleksibel ke semua destinasi' },
];

const useCases = [
  { icon: '🏖️', label: 'Wisata Keluarga' },
  { icon: '🏢', label: 'Family Gathering Kantor' },
  { icon: '📚', label: 'Study Tour Sekolah' },
  { icon: '🏔️', label: 'Wisata Alam Bengkulu' },
  { icon: '🙏', label: 'Ziarah & Keagamaan' },
  { icon: '🎉', label: 'Acara Komunitas' },
];

const faqs = [
  { q: 'Berapa harga sewa bus wisata per hari?', a: 'Harga sewa bus adalah Rp 3.000.000 per hari, sudah all-in termasuk BBM dan sopir profesional.' },
  { q: 'Apa saja yang sudah termasuk dalam harga?', a: 'Harga sudah termasuk BBM (bensin/solar), sopir profesional, dan penggunaan bus selama 1 hari. Tiket masuk wisata, makan, dan akomodasi tidak termasuk.' },
  { q: 'Berapa kapasitas bus?', a: 'Bus kami berkapasitas 30 penumpang dengan tempat duduk yang nyaman.' },
  { q: 'Apakah bisa sewa lebih dari 1 hari?', a: 'Ya, tersedia paket multi-hari. Hubungi kami untuk negosiasi harga paket.' },
  { q: 'Bagaimana cara memesan bus?', a: 'Hubungi kami via WhatsApp di 085282828005. Informasikan tanggal, tujuan, dan jumlah penumpang.' },
];

export default function SewaBusWisataPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Sewa Bus Wisata</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            ✨ All-In BBM & Sopir
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sewa Bus Wisata Curup<br />
            <span className="text-gold-400">30 Kursi, All-In</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
            Sewa bus pariwisata untuk wisata, family gathering, study tour, atau acara rombongan. Kapasitas 30 penumpang, sudah termasuk BBM & sopir profesional.
          </p>

          {/* Price highlight */}
          <div className="inline-flex items-baseline gap-1 bg-gold-500 text-primary-900 px-6 py-3 rounded-2xl mb-6">
            <span className="font-display text-3xl font-bold">Rp 3.000.000</span>
            <span className="text-sm font-semibold">/ hari</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa px-7 py-3.5 text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan Bus Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-12 bg-cream-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center font-display text-xl font-bold text-primary-900 mb-6">Sudah Termasuk dalam Harga (All-In)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {includes.map((item) => (
              <div key={item.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-primary-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            *Tidak termasuk: tiket masuk wisata, konsumsi, dan akomodasi penumpang.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            {/* Use cases */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Cocok untuk Berbagai Acara</h2>
              <div className="gold-bar" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {useCases.map((u) => (
                  <div key={u.label} className="flex items-center gap-2 bg-cream-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-700 font-medium">
                    <span>{u.icon}</span>
                    {u.label}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Pertanyaan Umum</h2>
              <div className="gold-bar" />
              <div className="space-y-4 mt-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-100 rounded-xl p-4 bg-cream-50">
                    <p className="font-semibold text-primary-900 text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order box */}
          <div>
            <div className="card p-6 border-2 border-gold-500 sticky top-20">
              <div className="text-center mb-4">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Harga Sewa Bus</p>
                <div className="font-display text-3xl font-bold text-primary-900">Rp 3.000.000</div>
                <div className="text-sm text-gold-500 font-semibold">per hari · All-In</div>
              </div>
              <div className="gold-bar mx-auto" />
              <div className="space-y-2 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span>✓</span> 30 penumpang</div>
                <div className="flex items-center gap-2"><span>✓</span> BBM sudah termasuk</div>
                <div className="flex items-center gap-2"><span>✓</span> Sopir profesional</div>
                <div className="flex items-center gap-2"><span>✓</span> Semua rute wisata</div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa w-full py-3 text-sm mb-2">
                Pesan Bus Sekarang
              </a>
              <p className="text-center text-xs text-gray-400 mt-2">📞 0852-8282-8005</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
