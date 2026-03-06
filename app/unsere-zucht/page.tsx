import type { Metadata } from "next";
import { HeartHandshake, Home, PawPrint } from "lucide-react";

import { InfoBox } from "@/components/ui/info-box";
import { PawDivider } from "@/components/ui/paw-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { breedingHighlights, breedingStory } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Unsere Zucht"
};

export default function UnsereZuchtPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Unsere Zucht"
        text="Kompetenz, viel Erfahrung und große Liebe zu unseren Hunden und dieser Rasse."
        image="/images/allgemein/zucht-hero.jpg"
      />

      <section className="rounded-[2rem] border border-brand-clay/60 bg-white p-6 shadow-soft md:p-9">
        <SectionHeading
          title="Verantwortung von Anfang an"
          subtitle="Die Textgrundlage stammt aus der bisherigen Seite und wurde nur sprachlich leicht geglättet."
        />

        <div className="prose-block space-y-5 text-base leading-relaxed text-brand-ink/85">
          {breedingStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PawDivider />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {breedingHighlights.map((item) => (
            <div
              key={item}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-clay/60 bg-brand-sand/80 px-4 py-4 text-sm font-semibold text-brand-barkDark"
            >
              <PawPrint size={14} aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <InfoBox title="Unser Anspruch" icon={<HeartHandshake size={18} aria-hidden="true" />}>
          <p>
            Wir haben uns der Zucht guter Hovawarte im Sinne des Rassestandards verschrieben: gesund,
            sportlich, vielseitig einsetzbar, lernfähig und schön.
          </p>
          <p>Die Erfahrung eines Züchters ist durch nichts zu ersetzen.</p>
        </InfoBox>

        <InfoBox title="Aufzuchtumfeld" icon={<Home size={18} aria-hidden="true" />}>
          <p>
            Unsere liebevolle und verantwortungsvolle Aufzucht beginnt im Haus und erweitert sich Schritt
            für Schritt auf Nebengebäude, Garten, Auto und kleine Spaziergänge.
          </p>
        </InfoBox>
      </section>

    </div>
  );
}
