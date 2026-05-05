import Link from "next/link";
import { MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { MARINA } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-900)] text-white/80">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <Logo size={64} faded />
            <span className="font-[var(--font-display)] text-xl tracking-wide leading-tight">
              Khlong Son <span className="text-[var(--color-gold)]">Marina</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            {MARINA.shortDesc} Trang&apos;s first marina · Navily Partner · gateway to
            9 islands within 30 NM of the dock.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium tracking-wide uppercase">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-[var(--color-gold)]" href="/berthing">Berthing</Link></li>
            <li><Link className="hover:text-[var(--color-gold)]" href="/services">Services</Link></li>
            <li><Link className="hover:text-[var(--color-gold)]" href="/tours">Tours</Link></li>
            <li><Link className="hover:text-[var(--color-gold)]" href="/transfers">Transfers</Link></li>
            <li><Link className="hover:text-[var(--color-gold)]" href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium tracking-wide uppercase">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--color-gold)]" />
              <span>
                {MARINA.address.line1}<br />
                {MARINA.address.district}, {MARINA.address.province}<br />
                Thailand {MARINA.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-[var(--color-gold)]" />
              <a
                href={MARINA.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)]"
              >
                WhatsApp {MARINA.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/55">
              <span className="text-[var(--color-gold)]">⚓</span>
              <a
                href={MARINA.contact.navily}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)]"
              >
                Navily · {MARINA.contact.navilyName}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {MARINA.fullName} · Operated by {MARINA.legalEntity}</p>
          <p>30-year concession · WhatsApp {MARINA.contact.whatsapp}</p>
        </div>
      </div>
    </footer>
  );
}
