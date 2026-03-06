"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { newsItems, NewsItem } from "@/lib/site-data";
import { NewsModal } from "@/components/ui/news-modal";

export default function AktuellesPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const featuredNews = newsItems[0];

  return (
    <div className="space-y-12 pb-16">
      <SubpageHero
        title="Aktuelles"
        text="Neuigkeiten zu Würfen, Treffen, Erfolgen und Entwicklungen rund um unsere Hovawarte."
        image="/images/allgemein/aktuelles-hero.jpg"
      />

      <section>
        <SectionHeading
          title="Updates aus unserem Zwinger"
          subtitle="Die aktuellsten Neuigkeiten und spannende Einblicke in unser Züchterleben."
        />

        {/* Featured News Item */}
        {featuredNews && (
          <article
            className="group mb-12 cursor-pointer overflow-hidden rounded-[2.5rem] border border-brand-clay/60 bg-white shadow-soft transition-all hover:shadow-lg lg:hover:-translate-y-1"
            onClick={() => setSelectedNews(featuredNews)}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-auto overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 p-8 md:p-12">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-barkDark">
                  <CalendarDays size={16} aria-hidden="true" />
                  {featuredNews.dateLabel}
                </p>
                <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">{featuredNews.title}</h2>
                <div className="prose-block line-clamp-3 text-lg leading-relaxed text-brand-ink/90">
                  <p>{featuredNews.excerpt}</p>
                </div>
                <div className="pt-4 flex items-center gap-2 font-bold text-brand-barkDark transition-colors group-hover:text-brand-terracotta">
                  Mehr lesen <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </article>
        )}
      </section>

      {/* Article Detail Modal */}
      <NewsModal
        item={selectedNews}
        onClose={() => setSelectedNews(null)}
      />
    </div>
  );
}
