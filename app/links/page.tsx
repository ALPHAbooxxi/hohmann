import type { Metadata } from "next";
import { ExternalLink, Link2 } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { linkDirectory } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Links"
};

export default function LinksPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Links"
        text="Informative Verweise rund um den Hovawart und ergänzende Partnerseiten."
        image="/images/partner/links-hero.jpg"
      />

      <section className="rounded-[2rem] border border-brand-clay/60 bg-white p-6 shadow-soft md:p-9">
        <SectionHeading title={linkDirectory.intro} subtitle={linkDirectory.note} />

        <ul className="grid gap-4 sm:grid-cols-2">
          {linkDirectory.links.map((entry) => (
            <li key={entry.href}>
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center justify-between rounded-2xl border border-brand-clay/70 bg-brand-sand/65 px-4 py-4 text-brand-ink transition hover:border-brand-bark/60 hover:bg-brand-sand"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Link2 size={15} className="text-brand-bark" aria-hidden="true" />
                  {entry.label}
                </span>
                <ExternalLink size={16} className="text-brand-bark transition group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
