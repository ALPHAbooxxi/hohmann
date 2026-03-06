import type { Metadata } from "next";
import Image from "next/image";
import { Dog, PawPrint } from "lucide-react";

import { DogCard } from "@/components/ui/dog-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { dogProfiles, lineageCaptions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Unsere Hunde"
};

export default function UnsereHundePage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Unsere Hunde"
        text="Aktuelle Zuchthündinnen, Eigenschaften und geprüfte Zucht- bzw. Leistungsdaten."
        image="/images/hunde/hunde-hero.jpg"
      />

      <section>
        <SectionHeading
          title="Aktuelle Zuchthunde"
          subtitle="Die Daten stammen aus den bisherigen Profilen und wurden als strukturierte Karten aufbereitet."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {dogProfiles.map((dog) => (
            <DogCard key={dog.name} dog={dog} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-brand-clay/60 bg-white p-6 shadow-soft md:p-8">
        <header className="mb-6 flex items-center gap-3">
          <span className="rounded-full bg-brand-sand p-2 text-brand-bark">
            <Dog size={18} aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-bold text-brand-ink">Zuchthündinnen aus dem Emsland</h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          <Image src="/images/hunde/linie-1.jpg" alt="Bild 1" width={620} height={520} className="h-48 w-full rounded-2xl object-cover" />
          <Image src="/images/hunde/linie-2.jpg" alt="Bild 2" width={620} height={520} className="h-48 w-full rounded-2xl object-cover" />
          <Image src="/images/hunde/linie-3.jpg" alt="Bild 3" width={620} height={520} className="h-48 w-full rounded-2xl object-cover" />
        </div>

        <ul className="mt-6 space-y-2 text-sm leading-relaxed text-brand-ink/80">
          {lineageCaptions.map((caption) => (
            <li key={caption} className="flex gap-2">
              <PawPrint size={14} className="mt-1 shrink-0 text-brand-bark/70" aria-hidden="true" />
              <span>{caption}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
