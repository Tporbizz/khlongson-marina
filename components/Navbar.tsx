"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/berthing", label: "Berthing" },
  { href: "/services", label: "Services" },
  { href: "/tours", label: "Tours" },
  { href: "/transfers", label: "Transfers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-[var(--color-navy)]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-edge flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <Logo size={48} />
          <span className="font-[var(--font-display)] text-lg md:text-xl tracking-wide leading-tight">
            Khlong Son <span className="text-[var(--color-gold)]">Marina</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/85 hover:text-[var(--color-gold)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/berthing#booking" className="btn btn-primary">
            Check Berthing
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/10 bg-[var(--color-navy)]"
          >
            <div className="container-edge py-6 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-white/90 py-2 border-b border-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/berthing#booking"
                onClick={() => setOpen(false)}
                className="btn btn-primary justify-center mt-2"
              >
                Check Berthing
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
