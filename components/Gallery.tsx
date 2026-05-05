"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY, type GalleryItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const CATEGORIES = ["All", "Aerial", "Facilities", "Tours", "Vision"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream-100)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">A glimpse of the marina</span>
            <h2 className="heading-lg mt-3">Gallery.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-all",
                  filter === c
                    ? "bg-[var(--color-navy)] border-[var(--color-navy)] text-white"
                    : "bg-white border-[var(--color-silver-200)] text-[var(--color-navy-800)]/70 hover:border-[var(--color-gold)]"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                onClick={() => setActive(g)}
                className={cn(
                  "relative overflow-hidden rounded-[var(--radius-md)] group focus:outline-none",
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
                )}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-navy-900)]/90 backdrop-blur p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="80vw"
                className="object-contain rounded-lg"
              />
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--color-navy)] shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="absolute bottom-4 left-4 text-white/85 text-sm">
                {active.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
