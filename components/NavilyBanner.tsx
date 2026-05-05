import { MARINA } from "@/content/marina";
import { ArrowUpRight } from "lucide-react";

export default function NavilyBanner() {
  return (
    <section className="bg-[var(--color-cream-100)] py-14">
      <div className="container-edge">
        <a
          href={MARINA.contact.navily}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[var(--radius-lg)] bg-[var(--color-navy)] text-white p-8 md:p-10 hover:bg-[var(--color-navy-800)] transition-colors"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-light)] text-xl">
              ⚓
            </span>
            <div>
              <span className="eyebrow text-[var(--color-gold-light)]">
                Navily Partner Marina
              </span>
              <h3 className="heading-md mt-2 text-white leading-tight">
                The first Navily Partner Marina in Trang Province.
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Listed on Navily — trusted by 1.1 million sailors worldwide.
                Reviews, charts, and arrivals managed in-app.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 self-start md:self-center text-sm uppercase tracking-[0.18em] text-[var(--color-gold-light)] group-hover:text-white">
            View on Navily
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      </div>
    </section>
  );
}
