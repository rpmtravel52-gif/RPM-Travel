import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  href: string;
  pesanHref?: string;
  badge?: string;
  image?: string;
  emoji?: string;
  isPriority?: boolean; // ✅ FIX: prop baru untuk preload LCP image
}

export default function ServiceCard({
  title, description, price, href, pesanHref, badge, image, emoji,
  isPriority = false, // ✅ default false, hanya card pertama yang true
}: ServiceCardProps) {
  return (
    <div className="card group overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-200">
      {/* Image */}
      <Link href={href}>
        <div className="relative h-44 bg-primary-900 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              // ✅ FIX: priority=true pada card pertama → browser preload LCP image
              priority={isPriority}
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl">{emoji ?? '🚗'}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
          {badge && (
            <span className="absolute top-3 left-3 bg-gold-500 text-primary-900 text-xs font-bold px-2.5 py-1 rounded-full">
              {badge}
            </span>
          )}
          {price && (
            <span className="absolute bottom-3 right-3 bg-white/95 text-primary-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
              {price}
            </span>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <Link href={href}>
          <h3 className="font-display font-bold text-primary-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex gap-2 mt-1">
          <Link href={href}
            className="flex-1 text-center text-primary-900 border border-primary-900 hover:bg-primary-900 hover:text-white text-xs font-semibold py-2 rounded-lg transition-all">
            Lihat Detail
          </Link>
          <Link href={pesanHref ?? `${href}#pesan`}
            className="flex-1 text-center text-white text-xs font-bold py-2 rounded-lg transition-all"
            style={{ background: 'linear-gradient(135deg,#c9a84c,#e2c46e)', color: '#0a1628' }}>
            Pesan →
          </Link>
        </div>
      </div>
    </div>
  );
}
