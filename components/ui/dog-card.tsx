import Image from "next/image";
import { Bone, Dog, PawPrint } from "lucide-react";

import type { DogProfile } from "@/lib/site-data";

type DogCardProps = {
  dog: DogProfile;
};

export function DogCard({ dog }: DogCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-brand-clay/60 bg-white shadow-soft">
      <Image src={dog.image} alt={dog.name} width={1000} height={700} className="h-64 w-full object-cover" />
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
