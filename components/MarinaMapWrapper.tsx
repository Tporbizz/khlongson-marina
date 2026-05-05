"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Loader2, MapPin } from "lucide-react";
import { MARINA } from "@/lib/constants";

export default function MarinaMapWrapper({
  height = "h-[520px]",
  showHeader = true,
}: {
  height?: string;
  showHeader?: boolean;
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import("./MarinaMap"), {
        ssr: false,
        loading: () => (
          <div className="grid h-full w-full place-items-center bg-[var(--color-silver-100)] text-[var(--color-navy)]">
            <div className="flex items-center gap-2 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading interactive map…
            </div>
          </div>
        ),
      }),
    []
  );

  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <div className="container-edge">
        {showHeader && (
          <div className="grid gap-6 lg:grid-cols-12 mb-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">On the chart</span>
              <h2 className="heading-lg mt-3">
                Find us on the <span className="italic text-[var(--color-moss)]">Andaman</span>.
              </h2>
              <p className="mt-4 text-[var(--color-navy-800)]/75 max-w-xl">
                We sit a short distance up the Khlong Sikao river — protected from
                Andaman swell yet only minutes from open sea and the 4-island chain.
              </p>
            </div>
            <div className="lg:col-span-5 flex items-center gap-2 text-sm text-[var(--color-navy-800)]/65">
              <MapPin className="h-4 w-4 text-[var(--color-gold)]" />
              {MARINA.coords.lat.toFixed(4)}°N · {MARINA.coords.lng.toFixed(4)}°E
            </div>
          </div>
        )}

        <div
          className={`relative ${height} rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-silver-200)] shadow-xl shadow-[var(--color-navy)]/10`}
        >
          <Map />
        </div>

        <p className="mt-3 text-xs text-[var(--color-navy-800)]/50">
          Map data © OpenStreetMap contributors. Coordinates are approximate; please
          contact us for precise pilotage waypoints.
        </p>
      </div>
    </section>
  );
}
