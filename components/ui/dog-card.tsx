import Image from "next/image";
import { Bone, Dog, PawPrint, Maximize2 } from "lucide-react";

import type { DogProfile } from "@/lib/site-data";

type DogCardProps = {
  dog: DogProfile;
  onClick?: () => void;
};

export function DogCard({ dog, onClick }: DogCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft">
      <div className="relative cursor-zoom-in group" onClick={onClick}>
        <Image src={dog.image} alt={dog.name} width={1000} height={700} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center">
          <Maximize2 size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <div className="space-y-4 p-6">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-brand-ink">{dog.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-bark">Kennung: {dog.shortCode}</p>
          </div>
          <span className="rounded-full bg-brand-sand p-2 text-brand-bark">
            <Dog size={18} aria-hidden="true" />
          </span>
        </header>

        <p className="rounded-2xl bg-brand-sand/70 p-4 text-sm leading-relaxed text-brand-ink/80">{dog.traits}</p>

        <div>
          <h4 className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-barkDark">
            <Bone size={15} aria-hidden="true" />
            Zucht- und Prüfungsdaten
          </h4>
          <ul className="space-y-2">
            {dog.record.map((entry) => (
              <li key={entry} className="flex gap-2 text-sm leading-relaxed text-brand-ink/80">
                <PawPrint size={14} className="mt-1 shrink-0 text-brand-bark/70" aria-hidden="true" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
