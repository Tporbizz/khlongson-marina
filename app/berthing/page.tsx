import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingTeaser from "@/components/BookingTeaser";
import MarinaMapWrapper from "@/components/MarinaMapWrapper";
import ApproachGuide from "@/components/ApproachGuide";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AMENITIES, MARINA, BERTHING_RATES, ANCILLARY_SERVICES,
} from "@/lib/constants";
import { IMG } from "@/lib/images";
import {
  Anchor, Ship, Waves, Trees, Compass, ParkingCircle, MapPin,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Berthing & Rates",
  description:
    "Alongside berths on a concrete T-shape pier in the Khlong Sikao river. 25 m max LOA · 2.0 m at LW · 3.5 m+ at HW. Daily, weekly, and long-stay rates.",
};

export default function BerthingPage() {
  return (
    <>
      <PageHero
        eyebrow="Berthing"
        title={
          <>
            Alongside berths in a <span className="italic text-[var(--color-gold)]">protected river</span>.
          </>
        }
        subtitle={`${MARINA.specs.berths} alongside berths · ${MARINA.specs.maxLOA} max LOA · ${MARINA.specs.depthLW}, ${MARINA.specs.depthHW}`}
        image={IMG.about}
      />

      {/* At-a-glance specs */}
      <section className="py-20 md:py-24 bg-[var(--color-cream)]">
        <div className="container-edge">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Technical specifications</span>
            <h2 className="heading-md mt-3">
              A natural harbour, engineered for the slow cruiser.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Anchor, k: "Berths", v: `${MARINA.specs.berths} alongside` },
              { icon: Ship, k: "Max LOA", v: MARINA.specs.maxLOA },
              { icon: Waves, k: "Depth (LW → HW)", v: `2.0 m → 3.5 m+` },
              { icon: Compass, k: "Structure", v: MARINA.specs.structure },
              { icon: MapPin, k: "Mooring", v: MARINA.specs.mooring },
              { icon: Waves, k: "Bottom", v: MARINA.specs.bottom },
              { icon: Trees, k: "Protection", v: MARINA.specs.protection },
              { icon: ParkingCircle, k: "Parking", v: MARINA.specs.parking },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="card p-5 flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-navy)] text-[var(--color-gold)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/55">
                    {k}
                  </div>
                  <div className="text-sm font-medium text-[var(--color-navy)] leading-tight">{v}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-[var(--color-navy-800)]/55 max-w-2xl">
            {MARINA.specs.plannedDredging}. Floating pontoons, shore power, and a
            crane are part of the Phase 2 vision — not yet available.
          </p>
        </div>
      </section>

      {/* Pricing table */}
      <section id="booking" className="py-20 md:py-24 bg-[var(--color-cream-100)]">
        <div className="container-edge">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Berthing rates</span>
            <h2 className="heading-lg mt-3">Honest pricing, no surprises.</h2>
            <p className="mt-4 text-[var(--color-navy-800)]/70">
              All rates in THB and EUR (indicative). Weekly = 7 nights at a small
              long-stay discount. WhatsApp before arrival to confirm a berth.
            </p>
          </div>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-silver-200)] shadow-xl shadow-[var(--color-navy)]/5 bg-white">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-[var(--color-navy)] text-white">
                  <tr>
                    <th className="text-left p-4 font-medium tracking-wide">LOA</th>
                    <th className="text-right p-4 font-medium tracking-wide">THB / day</th>
                    <th className="text-right p-4 font-medium tracking-wide">EUR / day</th>
                    <th className="text-right p-4 font-medium tracking-wide">THB / week</th>
                    <th className="text-right p-4 font-medium tracking-wide">THB / month</th>
                  </tr>
                </thead>
                <tbody>
                  {BERTHING_RATES.map((r, i) => (
                    <tr
                      key={r.loa}
                      className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-cream)]"}
                    >
                      <td className="p-4 font-medium text-[var(--color-navy)]">
                        {r.loa}
                      </td>
                      {r.note ? (
                        <td className="p-4 text-right text-[var(--color-navy-800)]/65 italic" colSpan={4}>
                          {r.note}
                        </td>
                      ) : (
                        <>
                          <td className="p-4 text-right text-[var(--color-navy-800)]">
                            ฿{r.thbDay?.toLocaleString()}
                          </td>
                          <td className="p-4 text-right text-[var(--color-navy-800)]/75">
                            €{r.eurDay}
                          </td>
                          <td className="p-4 text-right text-[var(--color-gold-dark)]">
                            ฿{r.thbWeek?.toLocaleString()}
                          </td>
                          <td className="p-4 text-right text-[var(--color-gold-dark)] font-medium">
                            ฿{r.thbMonth?.toLocaleString()}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <p className="mt-4 text-sm text-[var(--color-navy-800)]/70 max-w-2xl">
            Monthly rates available on request — WhatsApp for long-stay packages.
          </p>

          <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-4 py-3 max-w-2xl text-sm text-[var(--color-navy-800)]">
            <strong className="font-medium text-[var(--color-navy)]">Vessels over 15 m:</strong>{" "}
            tidal entry required. WhatsApp 24 hrs ahead for your tide window.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={MARINA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp to reserve
            </a>
            <a
              href={MARINA.contact.navily}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy"
            >
              Book via Navily
            </a>
          </div>

          <p className="mt-6 text-xs text-[var(--color-navy-800)]/55 max-w-2xl">
            Rates indicative. EUR figures use a typical reference rate and may
            move with the market. Final pricing confirmed at booking.
          </p>
        </div>
      </section>

      {/* Booking estimator */}
      <BookingTeaser />

      {/* On-request services */}
      <section className="py-20 md:py-24 bg-[var(--color-cream)]">
        <div className="container-edge">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Services on request</span>
            <h2 className="heading-md mt-3">
              Anything you need, arranged via WhatsApp.
            </h2>
            <p className="mt-3 text-[var(--color-navy-800)]/70 text-sm">
              All services coordinated on request — there are no permanent
              concession stands at the marina yet.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ANCILLARY_SERVICES.map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--radius-md)] bg-white border border-[var(--color-silver-200)] p-5"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-medium text-[var(--color-navy)]">{s.label}</h3>
                  <span className="text-sm text-[var(--color-gold-dark)] font-medium whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                {s.note && (
                  <p className="text-xs text-[var(--color-navy-800)]/60">{s.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's at the dock */}
      <section className="py-20 bg-[var(--color-cream-100)]">
        <div className="container-edge">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow">On the dock</span>
            <h2 className="heading-md mt-3">What you get at the pier.</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] bg-white border border-[var(--color-silver-200)]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-[var(--color-navy-800)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApproachGuide />
      <MarinaMapWrapper />
    </>
  );
}
