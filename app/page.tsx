import Image from "next/image";
import Link from "next/link";
import { Dog, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { Hero } from "@/components/ui/hero";
import { InfoBox } from "@/components/ui/info-box";
import { PawDivider } from "@/components/ui/paw-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeaserCard } from "@/components/ui/teaser-card";
import { contact, homeIntro, homeTeasers } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-10">
      <Hero
        title="Herzlich Willkommen im Zwinger aus dem Emsland."
        subtitle={homeIntro.lead}
        image={homeIntro.heroImage}
        imageAlt={homeIntro.heroAlt}
      />

      <section>
        <SectionHeading
          title="Hovawart-Zucht mit Erfahrung und Herz"
          subtitle="Seit Jahrzehnten begleiten wir Familien mit verantwortungsvoll aufgezogenen Hovawarten. Unser Fokus liegt auf gesunden, wesensfesten und alltagstauglichen Hunden."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {homeTeasers.map((teaser) => (
            <TeaserCard
              key={teaser.href}
              title={teaser.title}
              text={teaser.text}
              href={teaser.href}
              image={teaser.image}
            />
          ))}
        </div>
      </section>

      <PawDivider />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <InfoBox
          title="Rassezuchtverein (RZV)"
          icon={<Dog size={18} aria-hidden="true" />}
        >
          <p>{homeIntro.rzvText}</p>
          <p>
            <a
              className="inline-flex items-center gap-2 font-semibold text-brand-bark underline underline-offset-4"
              href={homeIntro.rzvLink}
              target="_blank"
              rel="noreferrer"
            >
              Zur offiziellen RZV-Website
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </p>
        </InfoBox>

        <InfoBox title="Kontakt" icon={<Phone size={18} aria-hidden="true" />}>
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
          <Image
            src="/images/allgemein/kontakt-karte-platzhalter.jpg"
            alt="Lagekarte Geeste"
            width={720}
            height={420}
            className="mt-2 h-44 w-full rounded-2xl object-cover"
          />
        </InfoBox>
      </section>

    </div>
  );
}
