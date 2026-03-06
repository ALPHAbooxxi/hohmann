"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LightboxProps = {
      images: string[];
      initialIndex: number;
      onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
      const [currentIndex, setCurrentIndex] = useState(initialIndex);

      const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

      useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.key === "Escape") onClose();
                  if (e.key === "ArrowLeft") prev();
                  if (e.key === "ArrowRight") next();
            };
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
            return () => {
                  window.removeEventListener("keydown", handleKeyDown);
                  document.body.style.overflow = "auto";
            };
      }, [onClose, images.length]);

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                  <button
                        onClick={onClose}
                        className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  >
                        <X size={32} />
                  </button>

                  <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                        <ChevronLeft size={40} />
                  </button>

                  <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                        <ChevronRight size={40} />
                  </button>

                  <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
                        <AnimatePresence mode="wait">
                              <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex h-full w-full items-center justify-center"
                              >
                                    <div className="relative max-h-[85vh] w-full">
                                          <Image
                                                src={images[currentIndex]}
                                                alt={`Bild ${currentIndex + 1}`}
                                                width={1600}
                                                height={1200}
                                                className="max-h-[85vh] w-full object-contain"
                                                priority
                                          />
                                    </div>
                              </motion.div>
                        </AnimatePresence>

                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70">
                              {currentIndex + 1} / {images.length}
                        </div>
                  </div>
            </div>
      );
}
