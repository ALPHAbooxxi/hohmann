import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TeaserCardProps = {
  title: string;
  text: string;
  href: string;
  image: string;
};

export function TeaserCard({ title, text, href, image }: TeaserCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <Image
        src={image}
        alt={title}
        width={860}
        height={580}
        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold text-brand-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-brand-ink/75">{text}</p>
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-bark transition hover:text-brand-barkDark">
          Mehr erfahren
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
