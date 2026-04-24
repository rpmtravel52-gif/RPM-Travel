import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  href: string;
  badge?: string;
  image?: string;
  emoji?: string;
}

export default function ServiceCard({ title, description, price, href, badge, image, emoji }: ServiceCardProps) {
  return (
    <Link href={href} className="card group overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-200">
      {/* Image / Placeholder */}
      <div className="relative h-44 bg-primary-900 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
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

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="font-display font-bold text-primary-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
        <span className="text-gold-500 text-sm font-semibold flex items-center gap-1 mt-1">
          Pesan Sekarang
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
