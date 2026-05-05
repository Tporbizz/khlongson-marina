import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaSection from "@/components/CtaSection";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Aerial views, facilities, tours, and dugong encounters at KhlongSon Marina, Trang.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A river marina in <span className="italic text-[var(--color-gold)]">pictures</span>.
          </>
        }
        subtitle="Drone shots over the Khlong Sikao basin, the alongside concrete pier, the islands of Trang, and the mangrove waterways."
        image={IMG.marinaAerial}
      />
      <Gallery />
      <CtaSection />
    </>
  );
}
