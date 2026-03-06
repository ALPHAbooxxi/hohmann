"use strict";

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, PawPrint, Heart, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Litter, NewsItem } from "@/lib/site-data";
import { Lightbox } from "./lightbox";

interface LitterUpdatesModalProps {
      litter: Litter | null;
      onClose: () => void;
}

export function LitterUpdatesModal({ litter, onClose }: LitterUpdatesModalProps) {
      const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
      const [lightboxImages, setLightboxImages] = useState<string[]>([]);

      // Lock body scroll when modal is open
      useEffect(() => {
            if (litter) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "unset";
            }
            return () => {
                  document.body.style.overflow = "unset";
            };
      }, [litter]);

      if (!litter) return null;

      const parentImages = (litter.parents || []).map((p) => p.image);
      const allLitterImages = [...litter.images, ...parentImages];

      // Helper to open lightbox with a specific set of images
      const openGallery = (images: string[], startIndex: number) => {
            setLightboxImages(images);
            setLightboxIndex(startIndex);
      };

      return (
            <AnimatePresence>
                  <div className="fixed inset-0 z-[100] overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={onClose}
                              className="fixed inset-0 bg-brand-barkDark/90 backdrop-blur-md"
                        />

                        {/* Scrollable Container Wrapper */}
                        <div className="min-h-full flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none">
                              {/* Modal Content */}
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-brand-sand shadow-2xl pointer-events-auto my-8"
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    {/* Close Button */}
                                    <button
                                          onClick={onClose}
                                          className="absolute right-4 top-4 z-20 rounded-full bg-white/80 p-2 text-brand-bark transition-colors hover:bg-brand-barkDark hover:text-white md:right-6 md:top-6 shadow-sm"
                                          aria-label="Schließen"
                                    >
                                          <X size={24} />
                                    </button>

                                    {/* Content Container */}
                                    <div className="flex flex-col">
                                          {/* Litter Header / Summary */}
                                          <div className="bg-white p-6 md:p-10 rounded-b-[2rem] md:rounded-b-[2.5rem] shadow-sm">
                                                <div className="flex flex-col md:flex-row gap-8 items-start">

                                                      {/* Title & Stats */}
                                                      <div className="flex-1 space-y-6">
                                                            <div>
                                                                  <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl leading-tight mb-2">
                                                                        {litter.litterName}
                                                                  </h2>
                                                                  <p className="inline-flex items-center gap-2 rounded-full bg-brand-sand/50 px-3 py-1 text-sm font-bold uppercase tracking-[0.1em] text-brand-barkDark">
                                                                        <CalendarDays size={16} aria-hidden="true" />
                                                                        {litter.date}
                                                                  </p>
                                                            </div>

                                                            <div className="grid gap-6 sm:grid-cols-2">
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
                                                                        <ul className="grid gap-1 text-sm text-brand-ink/80 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                                                              {litter.descendants.map((item) => (
                                                                                    <li key={item} className="flex items-start gap-2">
                                                                                          <span className="mt-1 h-1 w-1 rounded-full bg-brand-bark/40 shrink-0" />
                                                                                          <span className="leading-tight">{item}</span>
                                                                                    </li>
                                                                              ))}
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      {/* Parents Gallery Preview */}
                                                      {allLitterImages.length > 0 && (
                                                            <div className="w-full md:w-1/3 shrink-0">
                                                                  <div
                                                                        className="relative h-48 rounded-2xl overflow-hidden cursor-zoom-in group shadow-md"
                                                                        onClick={() => openGallery(allLitterImages, 0)}
                                                                  >
                                                                        <Image
                                                                              src={allLitterImages[0]}
                                                                              alt={litter.litterName}
                                                                              fill
                                                                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                              <Maximize2 size={32} className="text-white drop-shadow-md" />
                                                                        </div>
                                                                        {allLitterImages.length > 1 && (
                                                                              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                                                                    + {allLitterImages.length - 1} Fotos
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            </div>
                                                      )}
                                                </div>
                                          </div>


                                          {/* Updates Timeline Section */}
                                          <div className="p-6 md:p-10 border-t border-brand-clay/10">
                                                <h3 className="text-2xl font-bold text-brand-ink mb-8 inline-flex items-center gap-2">
                                                      <CalendarDays size={24} className="text-brand-barkDark" />
                                                      Chronologische Updates
                                                </h3>

                                                {(!litter.updates || litter.updates.length === 0) ? (
                                                      <div className="text-center py-12 text-brand-ink/60 bg-white/50 rounded-2xl border border-brand-clay/30">
                                                            <p>Bisher gibt es keine weiteren Updates zu diesem Wurf.</p>
                                                      </div>
                                                ) : (
                                                      <div className="space-y-10 relative before:absolute before:inset-0 before:left-[19px] before:w-0.5 before:bg-brand-clay/20 md:before:left-[27px]">
                                                            {litter.updates.map((update, idx) => (
                                                                  <div key={idx} className="relative pl-10 md:pl-16">
                                                                        {/* Timeline dot */}
                                                                        <div className="absolute left-0 inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-full border-4 border-brand-sand z-10 shadow-sm top-0">
                                                                              <div className="w-3 h-3 md:w-4 md:h-4 bg-brand-terracotta rounded-full shadow-inner" />
                                                                        </div>

                                                                        <article className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-brand-clay/30 hover:shadow-md transition-shadow">
                                                                              <div className="flex flex-col gap-6">
                                                                                    <div className="space-y-3">
                                                                                          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-barkDark">
                                                                                                <CalendarDays size={14} aria-hidden="true" />
                                                                                                {update.dateLabel}
                                                                                          </p>
                                                                                          <h4 className="text-2xl font-bold text-brand-ink leading-tight">
                                                                                                {update.title}
                                                                                          </h4>
                                                                                          <div className="prose-block text-brand-ink/90 leading-relaxed max-w-3xl">
                                                                                                <p>{update.excerpt}</p>
                                                                                          </div>
                                                                                    </div>

                                                                                    {/* Updates Images Gallery */}
                                                                                    {update.images && update.images.length > 0 && (
                                                                                          <div className="mt-2 text-sm font-semibold tracking-wide text-brand-barkDark uppercase">
                                                                                                Bildergalerie
                                                                                          </div>
                                                                                    )}

                                                                                    {/* Large Update Main Image */}
                                                                                    <div
                                                                                          className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl cursor-zoom-in group mt-1 shadow-sm border border-brand-clay/20 bg-brand-sand/10"
                                                                                          onClick={() => openGallery(update.images || [update.image], 0)}
                                                                                    >
                                                                                          <Image
                                                                                                src={update.image || update.images?.[0] || ""}
                                                                                                alt={update.title}
                                                                                                fill
                                                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                                          />
                                                                                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center">
                                                                                                <Maximize2 size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                                          </div>
                                                                                          {update.images && update.images.length > 1 && (
                                                                                                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm z-10 pointer-events-none">
                                                                                                      + {update.images.length - 1} Fotos
                                                                                                </div>
                                                                                          )}
                                                                                    </div>
                                                                              </div>
                                                                        </article>
                                                                  </div>
                                                            ))}
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                              </motion.div>
                        </div>

                        {/* Generic Lightbox for whatever images we want to show */}
                        {lightboxIndex !== null && (
                              <Lightbox
                                    images={lightboxImages}
                                    initialIndex={lightboxIndex}
                                    onClose={() => setLightboxIndex(null)}
                              />
                        )}
                  </div>
            </AnimatePresence>
      );
}
