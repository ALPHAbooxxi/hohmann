"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NewsItem } from "@/lib/site-data";
import { Lightbox } from "./lightbox";

interface NewsModalProps {
      item: NewsItem | null;
      onClose: () => void;
}

export function NewsModal({ item, onClose }: NewsModalProps) {
      const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

      // Lock body scroll when modal is open
      useEffect(() => {
            if (item) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "unset";
            }
            return () => {
                  document.body.style.overflow = "unset";
            };
      }, [item]);

      if (!item) return null;

      return (
            <AnimatePresence>
                  <div className="fixed inset-0 z-[100] overflow-y-auto">
                        {/* Backdrop - brown as requested, deep dimming */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={onClose}
                              className="fixed inset-0 bg-brand-barkDark/90 backdrop-blur-md"
                        />

                        {/* Scrollable Container Wrapper */}
                        <div className="min-h-full flex items-center justify-center p-4 md:p-12 pointer-events-none">
                              {/* Modal Content */}
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-2xl pointer-events-auto my-8"
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    {/* Close Button - BACK INSIDE the popup window */}
                                    <button
                                          onClick={onClose}
                                          className="absolute right-4 top-4 z-20 rounded-full bg-brand-sand/80 p-2 text-brand-barkDark transition-colors hover:bg-brand-barkDark hover:text-white md:right-6 md:top-6"
                                          aria-label="Schließen"
                                    >
                                          <X size={24} />
                                    </button>

                                    <div className="flex flex-col">
                                          {/* Header Image */}
                                          <div className="relative h-64 w-full shrink-0 md:h-80 lg:h-[400px]">
                                                <Image
                                                      src={item.image}
                                                      alt={item.title}
                                                      fill
                                                      className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                          </div>

                                          {/* Body */}
                                          <div className="space-y-6 px-6 pb-12 pt-4 md:px-12 md:pt-6">
                                                <div className="space-y-4">
                                                      <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-barkDark">
                                                            <CalendarDays size={16} aria-hidden="true" />
                                                            {item.dateLabel}
                                                      </p>
                                                      <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">
                                                            {item.title}
                                                      </h2>
                                                      <div className="prose-block text-lg leading-relaxed text-brand-ink/90">
                                                            <p>{item.excerpt}</p>
                                                      </div>
                                                </div>

                                                {/* Gallery Section */}
                                                {item.images && item.images.length > 0 && (
                                                      <div className="pt-6 border-t border-brand-clay/20">
                                                            <h3 className="text-xl font-bold text-brand-ink mb-6">Bildergalerie</h3>
                                                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                                                  {item.images.map((src, idx) => (
                                                                        <div
                                                                              key={`${src}-${idx}`}
                                                                              className="group relative h-32 cursor-pointer overflow-hidden rounded-2xl border border-brand-clay/20 bg-brand-sand/10 transition-shadow hover:shadow-md"
                                                                              onClick={() => setLightboxIndex(idx)}
                                                                        >
                                                                              <Image
                                                                                    src={src}
                                                                                    alt={`Galeriebild ${idx + 1}`}
                                                                                    fill
                                                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                              />
                                                                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                                                                    <Maximize2 className="text-white" size={20} />
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                              </motion.div>
                        </div>

                        {/* Lightbox for Gallery */}
                        {lightboxIndex !== null && item.images && (
                              <Lightbox
                                    images={item.images}
                                    initialIndex={lightboxIndex}
                                    onClose={() => setLightboxIndex(null)}
                              />
                        )}
                  </div>
            </AnimatePresence>
      );
}
