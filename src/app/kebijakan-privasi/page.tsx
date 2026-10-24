import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | RPM Travel Curup',
  description:
    'Kebijakan Privasi RPM Travel Curup: data apa yang kami kumpulkan saat Anda masuk dengan email atau Google, cara kami menggunakannya, dan hak Anda atas data pribadi.',
  alternates: { canonical: '/kebijakan-privasi' },
};

const WA = 'https://wa.me/6285282828005?text=Halo%20RPM%20Travel%2C%20saya%20ingin%20bertanya%20soal%20data%20pribadi%20saya';

export default function KebijakanPrivasiPage() {
  return (
    <LegalLayout
      title="Kebijakan Privasi"
      updated="25 Oktober 2026"
      intro="RPM Travel Curup (“kami”) menghormati privasi Anda. Kebijakan ini menjelaskan data pribadi apa yang kami kumpulkan melalui situs rpmtravel.co.id, untuk apa data itu digunakan, dengan siapa dibagikan, dan bagaimana Anda dapat mengendalikannya."
    >
      <section>
        <h2>1. Siapa Kami</h2>
        <p>
          RPM Travel Curup adalah penyedia jasa travel antar-jemput dan sewa kendaraan yang berbasis di Curup,
          Kabupaten Rejang Lebong, Provinsi Bengkulu, Indonesia. Situs ini dikelola oleh RPM Travel Curup
          dan beralamat di <strong>https://rpmtravel.co.id</strong>.
        </p>
      </section>

      <section>
        <h2>2. Data yang Kami Kumpulkan</h2>
        <ul>
          <li><strong>Data akun.</strong> Saat Anda mendaftar atau masuk dengan email: nama, alamat email, dan kata sandi (disimpan dalam bentuk terenkripsi/hash oleh penyedia autentikasi kami, bukan dalam bentuk asli).</li>
          <li><strong>Data dari Google.</strong> Jika Anda memilih “Lanjutkan dengan Google”, kami menerima nama, alamat email, dan foto profil akun Google Anda. Kami tidak meminta akses ke Gmail, Google Drive, Kalender, Kontak, atau data Google lainnya.</li>
          <li><strong>Data pemesanan.</strong> Nama, nomor WhatsApp, email (opsional), paket perjalanan, tanggal dan jam keberangkatan, jumlah penumpang, lokasi penjemputan dan tujuan, metode pembayaran, serta catatan yang Anda tulis.</li>
          <li><strong>Data profil tersimpan.</strong> Jika Anda memilih menyimpan alamat, nomor telepon, dan email di akun, data itu kami simpan agar pesanan berikutnya terisi otomatis.</li>
          <li><strong>Data teknis.</strong> Cookie sesi login dan data teknis dasar (jenis peramban, alamat IP) yang diproses oleh penyedia hosting untuk keamanan dan kinerja situs.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cara Kami Menggunakan Data</h2>
        <ul>
          <li>Membuat dan mengelola akun serta sesi login Anda.</li>
          <li>Memproses pesanan, mengirim konfirmasi, invoice, dan e-ticket melalui WhatsApp atau email.</li>
          <li>Menampilkan riwayat dan status pesanan Anda serta memudahkan fitur “Pesan Kembali”.</li>
          <li>Mengisi otomatis formulir pemesanan dengan data yang Anda simpan.</li>
          <li>Menghubungi Anda terkait pesanan (misalnya konfirmasi jemputan atau perubahan jadwal).</li>
          <li>Menjaga keamanan situs dan mencegah penyalahgunaan.</li>
        </ul>
        <p className="mt-3">
          Kami <strong>tidak menjual</strong> data pribadi Anda dan tidak menggunakannya untuk iklan pihak ketiga.
        </p>
      </section>

      <section>
        <h2>4. Penggunaan Data Pengguna Google</h2>
        <p>
          Data akun Google (nama, email, foto profil) hanya digunakan untuk mengautentikasi Anda, menampilkan nama
          dan foto Anda di dalam situs, serta mengaitkan pesanan dengan akun Anda. Data tersebut tidak dibagikan
          atau dijual kepada pihak lain, tidak digunakan untuk iklan, dan tidak ditransfer kecuali diperlukan untuk
          menyediakan layanan ini, mematuhi hukum, atau dengan persetujuan Anda. Penggunaan informasi yang diterima
          dari Google kami patuhi sesuai{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
            Kebijakan Data Pengguna Layanan Google API
          </a>
          , termasuk persyaratan Penggunaan Terbatas (Limited Use).
        </p>
      </section>

      <section>
        <h2>5. Pihak Ketiga yang Memproses Data</h2>
        <p>Untuk menjalankan layanan, kami memakai penyedia berikut sebagai pemroses data:</p>
        <ul>
          <li><strong>Supabase</strong> — autentikasi akun dan penyimpanan profil.</li>
          <li><strong>Google</strong> — opsi masuk dengan akun Google.</li>
          <li><strong>Vercel</strong> — hosting situs.</li>
          <li><strong>Penyedia database Redis</strong> — penyimpanan data pesanan.</li>
          <li><strong>Resend</strong> — pengiriman invoice dan e-ticket melalui email.</li>
          <li><strong>Fonnte / WhatsApp</strong> — notifikasi dan konfirmasi pesanan melalui WhatsApp.</li>
        </ul>
        <p className="mt-3">
          Penyedia tersebut dapat memproses data di server di luar Indonesia. Kami hanya membagikan data
          sebatas yang diperlukan untuk menjalankan fungsinya.
        </p>
      </section>

      <section>
        <h2>6. Penyimpanan dan Keamanan</h2>
        <p>
          Data akun dan profil disimpan selama akun Anda aktif. Data pesanan disimpan selama diperlukan untuk
          pelayanan, pencatatan, dan kewajiban hukum. Kami menerapkan langkah keamanan yang wajar, termasuk
          koneksi terenkripsi (HTTPS), pembatasan akses data per akun, dan penyimpanan kata sandi dalam bentuk hash.
          Tidak ada sistem yang sepenuhnya bebas risiko, sehingga kami tidak dapat menjamin keamanan mutlak.
        </p>
      </section>

      <section>
        <h2>7. Hak Anda</h2>
        <p>Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak untuk:</p>
        <ul>
          <li>mengakses dan memperbaiki data pribadi Anda (alamat, nomor telepon, dan email dapat diubah langsung di halaman akun);</li>
          <li>meminta penghapusan akun dan data pribadi Anda;</li>
          <li>menarik persetujuan pemrosesan data;</li>
          <li>mengajukan keberatan atau pertanyaan terkait pengelolaan data Anda.</li>
        </ul>
        <p className="mt-3">
          Permintaan dapat diajukan melalui <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp admin kami</a>.
          Kami akan menanggapi dalam waktu yang wajar. Sebagian data pesanan dapat tetap kami simpan bila diwajibkan
          oleh hukum atau diperlukan untuk pencatatan transaksi.
        </p>
      </section>

      <section>
        <h2>8. Cookie</h2>
        <p>
          Kami memakai cookie yang diperlukan untuk menjaga sesi login Anda tetap aman. Kami tidak memasang cookie
          iklan. Anda dapat menghapus cookie melalui pengaturan peramban, namun Anda akan keluar dari akun.
        </p>
      </section>

      <section>
        <h2>9. Anak di Bawah Umur</h2>
        <p>
          Layanan akun kami ditujukan bagi pengguna yang cakap hukum. Pemesanan untuk anak-anak sebaiknya
          dilakukan oleh orang tua atau wali.
        </p>
      </section>

      <section>
        <h2>10. Perubahan Kebijakan</h2>
        <p>
          Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru selalu tersedia di halaman ini dengan
          tanggal pembaruan di bagian atas.
        </p>
      </section>

      <section>
        <h2>11. Hubungi Kami</h2>
        <p>
          RPM Travel Curup — Jl. S. Parman, Talang Benih, Curup, Kabupaten Rejang Lebong, Bengkulu 39119.<br />
          WhatsApp: <a href={WA} target="_blank" rel="noopener noreferrer">0852-8282-8005</a><br />
          Situs: <a href="https://rpmtravel.co.id">rpmtravel.co.id</a>
        </p>
      </section>
    </LegalLayout>
  );
}
