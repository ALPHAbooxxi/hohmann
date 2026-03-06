"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ChevronLeft, ChevronRight, Heart, PawPrint, Maximize2 } from "lucide-react";
import { Lightbox } from "./lightbox";

import type { Litter } from "@/lib/site-data";

type LitterCardProps = {
  litter: Litter;
};

export function LitterCard({ litter }: LitterCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // Combine gallery images and parent images for the lightbox
  const parentImages = (litter.parents || []).map(p => p.image);
  const allImages = [...litter.images, ...parentImages];

  const hasMultiple = allImages.length > 1;

  function prev() {
    setCurrentIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
  }

  function next() {
    setCurrentIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));
  }

  function openLightbox(index: number) {
    setCurrentIndex(index);
    setShowLightbox(true);
  }

  return (
    <>
      <article className="overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[1.2fr_1fr] h-full items-stretch">
          {/* Gallery Section */}
          <div className="relative group cursor-zoom-in min-h-[400px] lg:min-h-0" onClick={() => openLightbox(currentIndex)}>
            <div className="h-full w-full overflow-hidden">
              <Image
                src={allImages[currentIndex]}
                alt={litter.litterName}
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

            <div className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-brand-ink/70 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              <Maximize2 size={20} />
            </div>

            {hasMultiple && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="Vorheriges Bild"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink/70 shadow-md transition hover:bg-white hover:text-brand-ink"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="Nächstes Bild"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink/70 shadow-md transition hover:bg-white hover:text-brand-ink"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                      aria-label={`Bild ${idx + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${idx === currentIndex
                        ? "bg-white scale-125 shadow-sm"
                        : "bg-white/40 hover:bg-white/70"
                        }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-brand-ink leading-tight">{litter.litterName}</h3>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-brand-barkDark">
                  <CalendarDays size={14} aria-hidden="true" />
                  {litter.date}
                </p>
              </div>

              {/* Parents Section */}
              <div className="flex gap-4">
                {litter.parents?.map((parent, idx) => (
                  <div key={parent.name} className="flex flex-col items-center text-center space-y-1">
                    <button
                      onClick={() => openLightbox(litter.images.length + idx)}
                      className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-brand-sand shadow-sm bg-brand-sand group/parent cursor-zoom-in"
                    >
                      <Image
                        src={parent.image}
                        alt={parent.name}
                        fill
                        className="object-cover transition-transform group-hover/parent:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover/parent:bg-black/20 flex items-center justify-center">
                        <Maximize2 size={14} className="text-white opacity-0 group-hover/parent:opacity-100 transition-opacity" />
                      </div>
                    </button>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold uppercase text-brand-bark/60">{parent.role}</p>
                      <p className="text-[11px] font-medium text-brand-ink/90 max-w-[80px] leading-tight">{parent.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <h4 className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-barkDark border-b-2 border-brand-sand pb-1 w-full">
                  <PawPrint size={15} aria-hidden="true" />
                  Details
                </h4>
                <div className="space-y-2 text-sm text-brand-ink/80">
                  <p><strong className="text-brand-barkDark/90">Wurfstärke:</strong> {litter.count}</p>
                  <p><strong className="text-brand-barkDark/90">Vater:</strong> {litter.father}</p>
                  <p><strong className="text-brand-barkDark/90">Mutter:</strong> {litter.mother}</p>
                </div>
              </div>

              <div>
                <h4 className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-barkDark border-b-2 border-brand-sand pb-1 w-full">
                  <Heart size={15} aria-hidden="true" />
                  Nachzucht
                </h4>
                <ul className="grid gap-2 text-sm text-brand-ink/80">
                  {litter.descendants.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-brand-bark/40 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

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
