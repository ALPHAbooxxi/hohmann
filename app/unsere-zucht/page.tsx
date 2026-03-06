"use client";

import { PawPrint } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { PawDivider } from "@/components/ui/paw-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { Lightbox } from "@/components/ui/lightbox";
import { breedingImages, breedingStory } from "@/lib/site-data";

export default function UnsereZuchtPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12 pb-16">
      <SubpageHero
        title="Unsere Zucht"
        text="Kompetenz, viel Erfahrung und große Liebe zu unseren Hunden und dieser Rasse."
        image="/images/allgemein/zucht-hero.jpg"
      />

      <section className="relative overflow-hidden rounded-[2.5rem] border border-brand-clay/60 bg-white p-8 shadow-soft md:p-12">
        <div className="absolute -right-20 -top-20 opacity-5">
          <PawPrint size={320} className="text-brand-clay" />
        </div>

        <SectionHeading
          title="Verantwortung von Anfang an"
          subtitle="Tradition und Leidenschaft für den Hovawart"
        />

        <div className="prose-block relative z-10 mt-8 space-y-6 text-lg leading-relaxed text-brand-ink/85">
          {breedingStory.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        <PawDivider />

        <div className="mt-12">
          <SectionHeading
            title="Einblicke in unsere Aufzucht"
            subtitle="Vom Haus bis zu den ersten Erkundungen"
            className="mb-8"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {breedingImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-72 cursor-pointer overflow-hidden rounded-3xl border border-brand-clay/40 bg-brand-sand/30 shadow-sm transition-all hover:shadow-md"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-0 opacity-100 transition-all duration-300">
                  <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-barkDark shadow-sm">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={breedingImages.map(img => img.src)}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
