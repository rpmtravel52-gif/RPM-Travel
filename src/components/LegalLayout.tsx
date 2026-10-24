import Link from 'next/link';

export default function LegalLayout({
  title, updated, intro, children,
}: { title: string; updated: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="bg-cream-50 min-h-screen px-4 pt-8 md:pt-24 pb-16">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-soft p-6 md:p-10">
        <nav className="flex items-center gap-2 text-xs font-semibold text-gold-700 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Beranda</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">{title}</span>
        </nav>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-900">{title}</h1>
        <p className="text-xs text-gray-400 mt-2">Terakhir diperbarui: {updated}</p>
        <div className="gold-bar" />
        <p className="text-gray-600 leading-relaxed mb-8">{intro}</p>
        <div className="space-y-8 text-gray-600 leading-relaxed text-[0.95rem] [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-primary-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-gold-700 [&_a]:underline [&_strong]:text-primary-900">
          {children}
        </div>
      </article>
    </div>
  );
}
