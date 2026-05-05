"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";

type Props = {
  className?: string;
  size?: number;
  /** drop opacity slightly (used in footer) */
  faded?: boolean;
};

/**
 * Brand mark — transparent PNG with white sailboat lines.
 * Falls back to inline SVG if logo asset is unavailable.
 * Designed to sit on the dark navy background — no wrapper.
 */
export default function Logo({ className, size = 40, faded = false }: Props) {
  const [errored, setErrored] = useState(false);

  if (!errored && IMG.logo) {
    return (
      <Image
        src={IMG.logo}
        alt="Khlong Son Marina"
        width={size}
        height={size}
        priority
        onError={() => setErrored(true)}
        className={cn("shrink-0", className)}
        style={{
          objectFit: "contain",
          opacity: faded ? 0.85 : 1,
          filter: faded ? "none" : "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
        }}
      />
    );
  }

  // SVG fallback — white sailboat outline (no disc; transparent style)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Khlong Son Marina"
      role="img"
      style={{ opacity: faded ? 0.85 : 1 }}
    >
      <line x1="40" y1="14" x2="40" y2="46" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M40.8 16 C 50 25, 53.5 35, 53 46 L 40.8 46 Z" fill="white" />
      <path d="M39.2 22 C 33 28, 30 38, 30 46 L 39.2 46 Z" fill="white" opacity="0.85" />
      <path d="M18 48 Q 40 58 62 48 L 56 53 Q 40 58 24 53 Z" fill="white" />
      <path
        d="M14 60 Q 22 56 30 60 T 46 60 T 62 60 T 70 60"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M20 65 Q 28 62 36 65 T 52 65 T 64 65"
        stroke="white"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}
