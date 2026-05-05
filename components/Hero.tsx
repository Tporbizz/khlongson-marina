"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Anchor, MessageCircle } from "lucide-react";
import { IMG } from "@/lib/images";
import { MARINA } from "@/content/marina";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={IMG.hero}
          alt="Aerial view of Khlong Son Marina pier inside the Khlong Sikao mangrove estuary"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)]/55 via-[var(--color-navy)]/30 to-[var(--color-navy-900)]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,169,120,0.15),_transparent_60%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-edge h-full flex flex-col justify-end pb-20 md:pb-28 md:justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-[var(--color-gold-light)]"
        >
          Khlong Sikao Estuary · Si Kao · Trang · Thailand
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl mt-4 max-w-3xl text-white"
        >
          Your Natural <span className="italic text-[var(--color-gold)]">Safe Haven</span>
          <br className="hidden md:block" /> in the Andaman Sea.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-5 max-w-xl text-base md:text-lg text-white/80 leading-relaxed"
        >
          {MARINA.subTagline}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <Link href="/berthing#booking" className="btn btn-primary">
            <Anchor className="h-4 w-4" />
            Check Berthing
          </Link>
          <a
            href={MARINA.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
