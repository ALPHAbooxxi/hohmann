import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function Hero({ title, subtitle, image, imageAlt }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-brand-clay/60 shadow-card">
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
      <Image
        src={image}
        alt={imageAlt}
        width={1600}
        height={920}
        priority
        className="h-[64vh] min-h-[460px] w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
          <PawPrint size={14} aria-hidden="true" />
          Hovawart-Zucht
        </div>
        <h1 className="max-w-3xl text-balance text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/unsere-wuerfe"
            className="inline-flex items-center gap-2 rounded-full bg-brand-bark px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-barkDark"
          >
            Zu unseren Würfen
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
