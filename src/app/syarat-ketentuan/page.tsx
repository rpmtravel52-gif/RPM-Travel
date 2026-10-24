import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | RPM Travel Curup',
  description:
    'Syarat dan Ketentuan penggunaan situs, akun, serta layanan pemesanan travel dan sewa kendaraan RPM Travel Curup.',
  alternates: { canonical: '/syarat-ketentuan' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20bertanya%20soal%20syarat%20dan%20ketentuan';

export default function SyaratKetentuanPage() {
  return (
    <LegalLayout
      title="Syarat & Ketentuan"
      updated="25 Oktober 2026"
      intro="Dengan mengakses situs rpmtravel.co.id, membuat akun, atau memesan layanan RPM Travel Curup, Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan berikut."
    >
      <section>
        <h2>1. Tentang Layanan</h2>
        <p>
          RPM Travel Curup menyediakan jasa travel antar-jemput (door to door) dan sewa kendaraan, termasuk rute
          Curup, Bengkulu, Lebong, dan Palembang, serta sewa bus wisata. Informasi rute, jadwal, dan harga di situs
          adalah acuan dan dapat berubah sewaktu-waktu; harga yang berlaku adalah harga yang tampil saat Anda
          membuat pesanan.
        </p>
      </section>

      <section>
        <h2>2. Akun Pengguna</h2>
        <ul>
          <li>Anda dapat mendaftar menggunakan email atau akun Google. Membuat akun bersifat opsional — pemesanan tetap dapat dilakukan tanpa akun.</li>
          <li>Anda wajib memberikan data yang benar dan menjaga kerahasiaan kata sandi serta akses ke akun Anda.</li>
          <li>Segala aktivitas yang terjadi melalui akun Anda menjadi tanggung jawab Anda.</li>
          <li>Kami berhak menangguhkan atau menghapus akun yang disalahgunakan atau melanggar ketentuan ini.</li>
          <li>Anda dapat meminta penghapusan akun kapan saja melalui admin kami.</li>
        </ul>
      </section>

      <section>
        <h2>3. Pemesanan</h2>
        <ul>
          <li>Pesanan dibuat melalui formulir di halaman <Link href="/pesan">Pesan Tiket</Link> dengan mengisi data secara lengkap dan benar, termasuk nomor WhatsApp aktif.</li>
          <li>Pesanan dianggap terkonfirmasi setelah admin kami menyampaikan konfirmasi melalui WhatsApp atau email.</li>
          <li>Ketersediaan kursi dan armada bergantung pada jadwal dan kondisi operasional. Kami dapat menghubungi Anda untuk menyesuaikan jadwal bila diperlukan.</li>
          <li>Fitur “Pesan Kembali” hanya mengisi ulang formulir dengan data pesanan sebelumnya; pesanan baru tetap harus Anda periksa dan konfirmasi sendiri.</li>
        </ul>
      </section>

      <section>
        <h2>4. Pembayaran</h2>
        <ul>
          <li>Metode pembayaran yang tersedia adalah QRIS dan tunai (dibayarkan langsung kepada sopir), sesuai pilihan saat pemesanan.</li>
          <li>Total harga yang tampil pada formulir sudah termasuk layanan antar-jemput untuk paket travel, serta BBM dan sopir untuk paket sewa, sebagaimana dijelaskan pada tiap paket.</li>
          <li>Status pesanan berubah menjadi lunas setelah pembayaran dikonfirmasi oleh admin.</li>
        </ul>
      </section>

      <section>
        <h2>5. Perubahan dan Pembatalan</h2>
        <p>
          Permintaan perubahan jadwal atau pembatalan harus disampaikan sesegera mungkin kepada admin melalui{' '}
          <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>. Ketentuan yang berlaku untuk
          perubahan atau pengembalian dana disampaikan dan disepakati oleh admin sesuai kondisi pesanan Anda.
        </p>
      </section>

      <section>
        <h2>6. Kewajiban Penumpang</h2>
        <ul>
          <li>Hadir di titik jemput sesuai jadwal yang telah dikonfirmasi.</li>
          <li>Menjaga keselamatan, ketertiban, dan kebersihan selama perjalanan, serta mengikuti arahan sopir.</li>
          <li>Tidak membawa barang terlarang atau berbahaya sesuai ketentuan hukum yang berlaku.</li>
          <li>Memberitahu admin sebelum berangkat bila membawa bayi, barang berukuran besar, atau kebutuhan khusus.</li>
        </ul>
      </section>

      <section>
        <h2>7. Batasan Tanggung Jawab</h2>
        <p>
          Kami berupaya memberikan layanan yang aman dan tepat waktu. Namun, keterlambatan akibat keadaan di luar
          kendali kami (cuaca, kondisi jalan, kemacetan, bencana alam, atau kebijakan pemerintah) bukan merupakan
          kelalaian kami. Kami tidak bertanggung jawab atas barang berharga yang tidak diberitahukan atau ditinggalkan
          di kendaraan, kecuali ditentukan lain oleh peraturan perundang-undangan.
        </p>
      </section>

      <section>
        <h2>8. Penggunaan Situs</h2>
        <p>
          Anda setuju tidak menggunakan situs untuk tujuan melanggar hukum, mengganggu keamanan atau kinerja situs,
          atau mencoba mengakses data pengguna lain tanpa izin. Seluruh konten, logo, dan materi di situs adalah milik
          RPM Travel Curup dan tidak boleh disalin tanpa izin tertulis.
        </p>
      </section>

      <section>
        <h2>9. Privasi</h2>
        <p>
          Pengelolaan data pribadi Anda diatur dalam <Link href="/kebijakan-privasi">Kebijakan Privasi</Link> kami,
          yang merupakan bagian tidak terpisahkan dari syarat dan ketentuan ini.
        </p>
      </section>

      <section>
        <h2>10. Perubahan Ketentuan</h2>
        <p>
          Kami dapat memperbarui syarat dan ketentuan ini sewaktu-waktu. Penggunaan situs setelah perubahan
          dipublikasikan berarti Anda menyetujui versi terbaru.
        </p>
      </section>

      <section>
        <h2>11. Hukum yang Berlaku</h2>
        <p>
          Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diupayakan diselesaikan secara
          musyawarah terlebih dahulu.
        </p>
      </section>

      <section>
        <h2>12. Kontak</h2>
        <p>
          RPM Travel Curup — Jl. S. Parman, Talang Benih, Curup, Kabupaten Rejang Lebong, Bengkulu 39119.<br />
          WhatsApp: <a href={WA} target="_blank" rel="noopener noreferrer">0852-8282-8005</a>
        </p>
      </section>
    </LegalLayout>
  );
}
