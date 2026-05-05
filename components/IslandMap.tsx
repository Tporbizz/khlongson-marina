"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMG } from "@/lib/images";
import { Maximize2, X } from "lucide-react";

const ISLANDS = [
  { name: "Ko Ngai", nm: "9.7 NM", time: "16 min" },
  { name: "Ko Mook · Emerald Cave", nm: "10.8 NM", time: "18 min" },
  { name: "Ko Lanta", nm: "12.4 NM", time: "21 min" },
  { name: "Ko Kradan", nm: "14.6 NM", time: "24 min" },
  { name: "Ko Libong 🐚", nm: "18.9 NM", time: "31 min" },
  { name: "Ko Rok 🤿", nm: "23.8 NM", time: "40 min" },
  { name: "Ko Ha", nm: "26.5 NM", time: "44 min" },
  { name: "Langkawi 🇲🇾", nm: "~60 NM", time: "south" },
];

export default function IslandMap() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full bg-[var(--color-navy-900)] py-20">
      <div className="container-edge max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="heading-lg text-[var(--color-gold)]">
            9 World-Class Islands Within 30 NM
          </h2>
          <p className="text-white/60 mt-3">
            All uncrowded. No charter-fleet pressure. Accessible by speedboat in
            under an hour.
          </p>
        </div>

        {/* Zoomable chart */}
        <button
          onClick={() => setOpen(true)}
          className="group relative w-full overflow-hidden rounded-xl shadow-2xl shadow-black/40 cursor-zoom-in"
          aria-label="Expand island map"
        >
          <Image
            src={IMG.islandMap}
            alt="Khlong Son Marina island destinations nautical map"
            width={1120}
            height={800}
            className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
            <Maximize2 className="h-3 w-3" /> Tap to zoom
          </div>
        </button>

        {/* Island distance grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {ISLANDS.map((island) => (
            <div
              key={island.name}
              className="rounded-lg border border-[var(--color-gold)]/20 bg-white/5 p-3 hover:border-[var(--color-gold)]/40 transition-colors"
            >
              <div className="text-white text-sm font-medium leading-tight">
                {island.name}
              </div>
              <div className="text-[var(--color-gold)] text-lg font-bold mt-1">
                {island.nm}
              </div>
              <div className="text-white/40 text-xs">
                {island.time === "south" ? "south by sail" : `${island.time} by speedboat`}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-white/40">
          Distances verified via Google Maps · WhatsApp us for current marine
          conditions before departure.
        </p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 grid place-items-center bg-black/95 backdrop-blur p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl"
            >
              <Image
                src={IMG.islandMap}
                alt="Nautical chart of the Trang archipelago"
                width={1920}
                height={1200}
                className="w-full h-auto object-contain rounded-lg"
              />
              <button
                aria-label="Close map"
                onClick={() => setOpen(false)}
                className="absolute -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--color-navy)] shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
