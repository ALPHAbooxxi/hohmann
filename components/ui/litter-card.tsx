"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ChevronLeft, ChevronRight, Heart, PawPrint } from "lucide-react";

import type { Litter } from "@/lib/site-data";

type LitterCardProps = {
  litter: Litter;
};

export function LitterCard({ litter }: LitterCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = litter.images.length > 1;

  function prev() {
    setCurrentIndex((i) => (i === 0 ? litter.images.length - 1 : i - 1));
  }

  function next() {
    setCurrentIndex((i) => (i === litter.images.length - 1 ? 0 : i + 1));
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft">
      <div className="grid md:grid-cols-[0.95fr_1.05fr]">
        {/* Image carousel */}
        <div className="relative">
          <Image
            src={litter.images[currentIndex]}
            alt={litter.litterName}
            width={900}
            height={620}
            className="h-full min-h-56 w-full object-cover"
          />

          {hasMultiple && (
            <>
              {/* Left arrow */}
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-brand-ink/70 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-brand-ink"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right arrow */}
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-brand-ink/70 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-brand-ink"
              >
                <ChevronRight size={22} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {litter.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Bild ${idx + 1}`}
                    className={`h-2 w-2 rounded-full transition ${idx === currentIndex
                        ? "bg-white shadow-sm"
                        : "bg-white/50 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-4 p-5 md:p-6">
          <header className="space-y-2">
            <h3 className="text-2xl font-bold text-brand-ink">{litter.litterName}</h3>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-brand-barkDark">
              <CalendarDays size={14} aria-hidden="true" />
              {litter.date}
            </p>
          </header>

          <div className="grid gap-3 rounded-2xl bg-brand-sand/65 p-4 text-sm leading-relaxed text-brand-ink/80 sm:grid-cols-2">
            <p>
              <strong className="text-brand-barkDark">Vater:</strong> {litter.father}
            </p>
            <p>
              <strong className="text-brand-barkDark">Mutter:</strong> {litter.mother}
            </p>
            <p className="sm:col-span-2">
              <strong className="text-brand-barkDark">Wurfstärke:</strong> {litter.count}
            </p>
          </div>

          <div>
            <h4 className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-barkDark">
              <Heart size={15} aria-hidden="true" />
              Nachzucht
            </h4>
            <ul className="grid gap-1.5 text-sm leading-relaxed text-brand-ink/80">
              {litter.descendants.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <PawPrint size={13} className="mt-1 shrink-0 text-brand-bark/70" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
