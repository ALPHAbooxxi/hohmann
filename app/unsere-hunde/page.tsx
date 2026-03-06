import type { Metadata } from "next";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { DogsGallery } from "@/components/ui/dogs-gallery";
import { dogProfiles, lineageCaptions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Unsere Hunde"
};

export default function UnsereHundePage() {
  return (
    <div className="space-y-10 pb-10">
      <SubpageHero
        title="Unsere Hunde"
        text="Aktuelle Zuchthündinnen, Eigenschaften und geprüfte Zucht- bzw. Leistungsdaten."
        image="/images/hunde/hunde-hero.jpg"
      />

      <DogsGallery dogProfiles={dogProfiles} lineageCaptions={lineageCaptions} />
    </div>
  );
}
