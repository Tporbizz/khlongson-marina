"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { MARINA } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <motion.a
        href={MARINA.contact.navily}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-4 py-2.5 text-xs font-medium text-white shadow-lg shadow-[var(--color-navy)]/30 hover:bg-[var(--color-navy-800)]"
      >
        <span className="h-2 w-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
        Book via Navily
      </motion.a>

      <motion.a
        href={MARINA.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-700/30"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
        <span className="absolute -inset-1 rounded-full ring-2 ring-[#25D366]/30 animate-ping" />
      </motion.a>
    </div>
  );
}
