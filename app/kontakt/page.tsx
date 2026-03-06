import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { InfoBox } from "@/components/ui/info-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { contact, contactPage } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt"
};

export default function KontaktPage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Kontakt"
        text="Wir freuen uns auf Ihre Anfrage rund um unsere Hovawarte und geplante Würfe."
        image="/images/allgemein/kontakt-hero.jpg"
      />

      <section>
        <SectionHeading
          title="So erreichen Sie uns"
          subtitle={contactPage.locationText}
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Telefon Card */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-brand-clay/60 bg-white p-10 shadow-soft transition-all hover:border-brand-bark/40 hover:shadow-card">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="rounded-full bg-brand-sand p-5 text-brand-bark transition-transform duration-500 group-hover:scale-110">
                  <Phone size={40} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-barkDark uppercase tracking-wider">Telefonisch</h3>
                  <p className="text-sm text-brand-ink/60">Für alle Fragen rund um unsere Zucht.</p>
                </div>
                <Link
                  href={contact.phoneHref}
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-brand-sand px-8 text-xl font-bold text-brand-bark transition hover:bg-brand-bark hover:text-white"
                >
                  {contact.phone}
                </Link>
              </div>
            </div>

            {/* E-Mail Card */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-brand-clay/60 bg-white p-10 shadow-soft transition-all hover:border-brand-bark/40 hover:shadow-card">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="rounded-full bg-brand-sand p-5 text-brand-bark transition-transform duration-500 group-hover:scale-110">
                  <Mail size={40} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-barkDark uppercase tracking-wider">Per E-Mail</h3>
                  <p className="text-sm text-brand-ink/60">Schreiben Sie uns gerne eine Nachricht.</p>
                </div>
                <Link
                  href={contact.mailHref}
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-brand-sand px-8 text-lg font-bold text-brand-bark transition hover:bg-brand-bark hover:text-white"
                >
                  {contact.mail}
                </Link>
              </div>
            </div>
          </div>

          {/* Address Box */}
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-3 rounded-full bg-brand-sand p-3 text-brand-bark">
              <MapPin size={24} aria-hidden="true" />
            </div>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.2em] text-brand-bark/60">Anschrift</h3>
            <p className="text-xl font-semibold text-brand-ink">{contact.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
