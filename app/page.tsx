import Hero from "@/components/Hero";
import OnRequestBanner from "@/components/OnRequestBanner";
import IslandMap from "@/components/IslandMap";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";
import SellingPoints from "@/components/SellingPoints";
import NavilyBanner from "@/components/NavilyBanner";
import ServicesSection from "@/components/ServicesSection";
import BookingTeaser from "@/components/BookingTeaser";
import ToursSection from "@/components/ToursSection";
import VisionMasterplan from "@/components/VisionMasterplan";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import ApproachGuide from "@/components/ApproachGuide";
import MarinaMapWrapper from "@/components/MarinaMapWrapper";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <OnRequestBanner />
      <IslandMap />
      <IntroSection />
      <StatsSection />
      <SellingPoints />
      <NavilyBanner />
      <ServicesSection />
      <BookingTeaser />
      <ToursSection />
      <VisionMasterplan />
      <Reviews />
      <Gallery />
      <ApproachGuide />
      <MarinaMapWrapper />
      <CtaSection />
    </>
  );
}
