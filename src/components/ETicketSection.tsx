import Link from "next/link";

/**
 * Section "E-Ticketing" untuk beranda RPM Travel.
 * Letakkan TEPAT DI ATAS section "Kenapa Pilih Kami".
 * Server component (tanpa JS tambahan di browser) -> aman untuk skor PageSpeed.
 * Mockup tiket dibuat dengan HTML/CSS/SVG (bukan gambar) agar ringan & tajam.
 */

const steps = [
  {
    no: "1",
    title: "Pesan Online",
    desc: "Pilih rute, isi data, dan tekan Konfirmasi Pemesanan.",
    icon: "🧾",
  },
  {
    no: "2",
    title: "Faktur ke Email",
    desc: "Faktur tagihan langsung masuk ke email Anda, otomatis.",
    icon: "📩",
  },
  {
    no: "3",
    title: "Pembayaran Dikonfirmasi",
    desc: "Setelah lunas, status pembayaran kami konfirmasi.",
    icon: "✅",
  },
  {
    no: "4",
    title: "E-Tiket + QR Diterima",
    desc: "Tiket PDF resmi dengan QR code tiba di email Anda.",
    icon: "🎫",
  },
];

const perks = [
  { icon: "⚡", text: "Otomatis ke email, tanpa minta-minta" },
  { icon: "🔍", text: "QR code bisa dipindai untuk cek keaslian" },
  { icon: "🏢", text: "Bukti sah untuk reimburse kantor" },
  { icon: "🗓️", text: "Verifikasi berlaku 3 bulan sejak keberangkatan" },
];

/** QR dekoratif (pola tetap) — hanya ilustrasi, bukan QR sungguhan */
function FakeQr() {
  const n = 21;
  const cells: React.ReactElement[] = [];
  const inFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (inFinder(x, y)) continue;
      if (((x * 7 + y * 13 + x * y) % 5) < 2) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
      }
    }
  }
  const finder = (ox: number, oy: number) => (
    <g key={`f-${ox}-${oy}`}>
      <rect x={ox} y={oy} width="7" height="7" />
      <rect x={ox + 1} y={oy + 1} width="5" height="5" fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width="3" height="3" />
    </g>
  );
  return (
    <svg
      viewBox={`0 0 ${n} ${n}`}
      className="h-full w-full"
      fill="#0f172a"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {cells}
      {finder(0, 0)}
      {finder(n - 7, 0)}
      {finder(0, n - 7)}
    </svg>
  );
}

function TicketMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
      {/* glow lembut di belakang tiket */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-300/50 via-gold-100/40 to-primary-100/50 blur-2xl" />

      <div className="-rotate-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 transition-transform duration-500 hover:rotate-0">
        {/* header tiket */}
        <div className="flex items-start justify-between border-b-2 border-sky-500 pb-3">
          <div>
            <p className="text-base font-bold text-sky-700">RPM Travel Curup</p>
            <p className="text-[10px] text-slate-500">WhatsApp: 0852-8282-8005</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold text-sky-600">E-TICKET / KWITANSI</p>
            <p className="text-[10px] text-slate-500">No. RPM-20261030-001</p>
          </div>
        </div>

        <p className="mt-3 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
          PEMBAYARAN TELAH DIKONFIRMASI - LUNAS
        </p>

        <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-slate-500">Nama Penumpang</p>
            <p className="font-bold text-slate-800">Nama Anda</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wide text-slate-500">Tanggal Berangkat</p>
            <p className="font-bold text-slate-800">Hari, Tanggal Perjalanan</p>
          </div>
          <div className="col-span-2">
            <p className="text-[9px] uppercase tracking-wide text-slate-500">Paket Perjalanan</p>
            <p className="font-bold text-slate-800">Travel Bengkulu – Palembang</p>
          </div>
        </div>

        {/* garis sobekan tiket */}
        <div className="relative my-4 border-t-2 border-dashed border-slate-200">
          <span className="absolute -left-6 -top-3 h-6 w-6 rounded-full bg-cream-50" />
          <span className="absolute -right-6 -top-3 h-6 w-6 rounded-full bg-cream-50" />
        </div>

        {/* area QR */}
        <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50/40 p-3">
          <div className="h-20 w-20 shrink-0 rounded-md border border-slate-200 bg-white p-1">
            <FakeQr />
          </div>
          <div>
            <p className="text-[11px] font-bold text-emerald-700">
              TIKET RESMI RPM TRAVEL – DAPAT DIVERIFIKASI
            </p>
            <p className="mt-1 text-[10px] leading-snug text-slate-600">
              Pindai QR code untuk memeriksa keaslian tiket ini.
            </p>
          </div>
        </div>
      </div>

      {/* stempel LUNAS */}
      <span className="absolute -right-2 -top-3 rotate-6 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-lg">
        ✓ SAH &amp; TERVERIFIKASI
      </span>
    </div>
  );
}

export default function ETicketSection() {
  return (
    <section id="e-ticket" aria-labelledby="eticket-heading" className="pt-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Teks */}
          <div data-rv="left">
            <p className="section-label !mb-1">Layanan Digital</p>
            <h2
              id="eticket-heading"
              className="font-display font-bold text-primary-900 text-xl md:text-4xl leading-tight"
            >
              Tiket Resmi Langsung ke Email Anda,{" "}
              <span className="text-gold-600">dengan QR Code Anti-Palsu</span>
            </h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              Dulu, e-ticket hanya milik travel besar di kota besar. Sekarang
              penumpang dari Curup, Lebong, dan Bengkulu juga menikmatinya.
              Begitu Anda memesan, faktur dan tiket PDF resmi tiba otomatis di
              email, lengkap dengan QR code yang bisa dipindai siapa saja untuk
              memastikan tiket Anda asli dan sah.
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <li
                  key={p.text}
                  className="glow lift flex items-start gap-3 rounded-2xl bg-white p-3 text-xs md:text-sm text-gray-700 shadow-soft border border-primary-900/5"
                >
                  <span className="w-9 h-9 shrink-0 bg-gold-100 rounded-xl flex items-center justify-center text-lg" aria-hidden="true">
                    {p.icon}
                  </span>
                  <span className="self-center">{p.text}</span>
                </li>
              ))}
            </ul>

            <Link href="/pesan" className="btn-gold mt-6">
              Pesan &amp; Terima E-Tiket
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Mockup tiket */}
          <div data-rv="right">
            <TicketMockup />
          </div>
        </div>

        {/* Alur */}
        <div className="mt-12">
          <h3 data-rv="up" className="mb-8 text-center font-display font-bold text-primary-900 text-lg md:text-2xl">
            Cukup 4 Langkah, Tiket Sudah di Genggaman
          </h3>

          <ol className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {/* garis alur horizontal (desktop) */}
            <div
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-gold-500 lg:block"
              aria-hidden="true"
            />
            {steps.map((s, i) => (
              <li
                key={s.no}
                data-rv="up"
                style={{ "--rv-d": `${i * 120}ms` } as React.CSSProperties}
                className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                {/* garis alur vertikal (mobile & tablet) */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-7 top-14 h-[calc(100%-0.5rem)] border-l-2 border-dashed border-gold-500 lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-white text-2xl shadow-soft">
                  <span aria-hidden="true">{s.icon}</span>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-900 text-[10px] font-bold text-white">
                    {s.no}
                  </span>
                </div>
                <div className="lg:mt-3">
                  <p className="font-display font-bold text-primary-900">{s.title}</p>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
