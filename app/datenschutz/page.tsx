import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { InfoBox } from "@/components/ui/info-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { privacySections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz"
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Datenschutz"
        text="Inhaltlich an der bisherigen Datenschutzerklärung orientiert und strukturiert neu gegliedert."
        image="/images/allgemein/datenschutz-hero.jpg"
      />

      <section>
        <SectionHeading
          title="Datenschutzhinweise"
          subtitle="Bitte beachten Sie: Dieser Relaunch übernimmt die vorhandenen Hinweise. Für eine aktuelle rechtliche Prüfung sollte zusätzlich fachlicher Rechtsrat eingeholt werden."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {privacySections.map((section) => (
            <InfoBox key={section.title} title={section.title} icon={<ShieldCheck size={18} aria-hidden="true" />}>
              <p>{section.body}</p>
            </InfoBox>
          ))}
        </div>
      </section>
    </div>
  );
}
