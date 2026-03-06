"use client";

import { useState } from "react";
import Image from "next/image";
import { Dog, PawPrint, Maximize2 } from "lucide-react";
import { DogCard } from "./dog-card";
import { SectionHeading } from "./section-heading";
import { Lightbox } from "./lightbox";
import type { DogProfile } from "@/lib/site-data";

type DogsGalleryProps = {
      dogProfiles: DogProfile[];
      lineageCaptions: string[];
};

export function DogsGallery({ dogProfiles, lineageCaptions }: DogsGalleryProps) {
      const [showLightbox, setShowLightbox] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);

      const staticImages = [
            "/images/hunde/linie-1.jpg",
            "/images/hunde/linie-2.jpg",
            "/images/hunde/linie-3.jpg"
      ];

      const allImages = [
            ...dogProfiles.map(d => d.image),
            ...staticImages
      ];

      function openLightbox(index: number) {
            setCurrentIndex(index);
            setShowLightbox(true);
      }

      return (
            <>
                  <section>
                        <SectionHeading
                              title="Aktuelle Zuchthunde"
                              subtitle="Die Daten stammen aus den bisherigen Profilen und wurden als strukturierte Karten aufbereitet."
                        />
                        <div className="grid gap-6 lg:grid-cols-2">
                              {dogProfiles.map((dog, idx) => (
                                    <DogCard
                                          key={dog.name}
                                          dog={dog}
                                          onClick={() => openLightbox(idx)}
                                    />
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
                              {staticImages.map((src, idx) => (
                                    <div
                                          key={src}
                                          className="group relative cursor-zoom-in overflow-hidden rounded-2xl"
                                          onClick={() => openLightbox(dogProfiles.length + idx)}
                                    >
                                          <Image
                                                src={src}
                                                alt={`Linie Bild ${idx + 1}`}
                                                width={620}
                                                height={520}
                                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                          />
                                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center">
                                                <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                          </div>
                                    </div>
                              ))}
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

                  {showLightbox && (
                        <Lightbox
                              images={allImages}
                              initialIndex={currentIndex}
                              onClose={() => setShowLightbox(false)}
                        />
                  )}
            </>
      );
}
