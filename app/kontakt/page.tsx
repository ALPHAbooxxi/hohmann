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

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <InfoBox title="Kontaktdaten" icon={<Phone size={18} aria-hidden="true" />}>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-brand-bark" aria-hidden="true" />
              <Link href={contact.phoneHref}>{contact.phone}</Link>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={15} className="text-brand-bark" aria-hidden="true" />
              <span>{contact.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-brand-bark" aria-hidden="true" />
              <Link href={contact.mailHref}>{contact.mail}</Link>
            </p>
          </InfoBox>

          <section className="rounded-3xl border border-brand-clay/60 bg-white p-6 shadow-soft">
            <h2 className="mb-4 text-2xl font-bold text-brand-ink">Kontaktformular</h2>
            <p className="mb-6 text-sm text-brand-ink/70">
              Das Formular entspricht inhaltlich dem bisherigen Aufbau und kann bei Bedarf mit Backend-Logik verbunden werden.
            </p>
            <form className="space-y-4" aria-label="Kontaktformular">
              <label className="block text-sm font-semibold text-brand-ink/80">
                Ihr Name *
                <input type="text" required className="mt-1 w-full rounded-xl border border-brand-clay/70 px-3 py-2 text-sm" />
              </label>
              <label className="block text-sm font-semibold text-brand-ink/80">
                Ihre Telefonnummer *
                <input type="tel" required className="mt-1 w-full rounded-xl border border-brand-clay/70 px-3 py-2 text-sm" />
              </label>
              <label className="block text-sm font-semibold text-brand-ink/80">
                Ihre E-Mail-Adresse *
                <input type="email" required className="mt-1 w-full rounded-xl border border-brand-clay/70 px-3 py-2 text-sm" />
              </label>
              <label className="block text-sm font-semibold text-brand-ink/80">
                Ihre Mitteilung
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-brand-clay/70 px-3 py-2 text-sm" />
              </label>
              <label className="flex items-start gap-2 text-sm text-brand-ink/75">
                <input type="checkbox" required className="mt-1" />
                <span>
                  Datenschutz * Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <Link href="/datenschutz" className="underline underline-offset-4">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </span>
              </label>
              <button type="submit" className="rounded-full bg-brand-bark px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-barkDark">
                Nachricht senden
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}
