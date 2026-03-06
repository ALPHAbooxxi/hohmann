import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, PawPrint } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aktuelles"
};

export default function AktuellesPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Aktuelles"
        text="Neuigkeiten zu Würfen, Treffen, Erfolgen und Entwicklungen rund um unsere Hovawarte."
        image="/images/allgemein/aktuelles-hero.jpg"
      />

      <section>
        <SectionHeading
          title="Updates aus unserem Zwinger"
          subtitle="Die Inhalte basieren auf der bisherigen Chronik und wurden als übersichtliche Beitragsliste neu strukturiert."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newsItems.map((item) => (
            <article key={`${item.title}-${item.dateLabel}`} className="overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft">
              <Image src={item.image} alt={item.title} width={860} height={640} className="h-48 w-full object-cover" />
              <div className="space-y-3 p-5">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-barkDark">
                  <CalendarDays size={14} aria-hidden="true" />
                  {item.dateLabel}
                </p>
                <h2 className="text-2xl font-bold text-brand-ink">{item.title}</h2>
                <p className="text-sm leading-relaxed text-brand-ink/80">{item.excerpt}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-bark">
                  <PawPrint size={12} aria-hidden="true" />
                  Hovawart-Update
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
