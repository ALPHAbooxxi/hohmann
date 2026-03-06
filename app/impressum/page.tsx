import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { InfoBox } from "@/components/ui/info-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { legalNotice } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum"
};

export default function ImpressumPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Impressum"
        text="Strukturiert aufbereitete Fassung der bestehenden Anbieterkennzeichnung und Hinweise."
        image="/images/allgemein/impressum-hero.jpg"
      />

      <section>
        <SectionHeading title="Anbieterkennzeichnung" />
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoBox title="Betreiberin" icon={<FileText size={18} aria-hidden="true" />}>
            <address className="not-italic">
              {legalNotice.ownerBlock.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </InfoBox>

          <InfoBox title="Haftungsausschluss" icon={<FileText size={18} aria-hidden="true" />}>
            <p>{legalNotice.disclaimer}</p>
          </InfoBox>

          <InfoBox title="Haftung für Links" icon={<FileText size={18} aria-hidden="true" />}>
            <p>{legalNotice.linksLiability}</p>
          </InfoBox>

          <InfoBox title="Urheberrecht" icon={<FileText size={18} aria-hidden="true" />}>
            <p>{legalNotice.copyright}</p>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
