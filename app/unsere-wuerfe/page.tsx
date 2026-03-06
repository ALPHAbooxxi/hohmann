import type { Metadata } from "next";

import { LitterCard } from "@/components/ui/litter-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { litters } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Unsere Würfe"
};

export default function UnsereWuerfePage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Unsere Würfe"
        text="Chronik unserer Würfe von A bis W. Alle Angaben wurden aus der bisherigen Website in eine moderne Übersicht übertragen."
        image="/images/wuerfe/wuerfe-hero.jpg"
      />

      <section>
        <SectionHeading
          title="Wurfübersicht"
          subtitle="Zeitlich absteigend mit Elternlinie, Wurfstärke und bekannten Entwicklungsdaten der Nachzucht."
        />
        <div className="space-y-6">
          {litters.map((litter) => (
            <LitterCard key={`${litter.litterName}-${litter.date}`} litter={litter} />
          ))}
        </div>
      </section>

    </div>
  );
}
