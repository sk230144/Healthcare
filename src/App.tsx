import { useRef } from "react";
import { Hero } from "./components/Hero/Hero";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { MobileLanding } from "./mobile/MobileLanding";
import { CaseStudy } from "./sections/CaseStudy/CaseStudy";
import { Clients } from "./sections/Clients/Clients";
import { Cta } from "./sections/Cta/Cta";
import { DoctorsNearMe } from "./sections/DoctorsNearMe/DoctorsNearMe";
import { Footer } from "./sections/Footer/Footer";
import { GooglePresence } from "./sections/GooglePresence/GooglePresence";
import { GrowthBanner } from "./sections/GrowthBanner/GrowthBanner";
import { Hospitals } from "./sections/Hospitals/Hospitals";
import { PartnerDoctors } from "./sections/PartnerDoctors/PartnerDoctors";
import { Presence } from "./sections/Presence/Presence";
import { Process } from "./sections/Process/Process";
import { SeoVideo } from "./sections/SeoVideo/SeoVideo";
import { Testimonial } from "./sections/Testimonial/Testimonial";
import { Websites } from "./sections/Websites/Websites";

/**
 * Phones (< 900px): pixel replica of the Figma mobile frame 2648:2.
 * Wider screens: the responsive desktop layout below.
 */
export default function App() {
  const isPhone = useMediaQuery("(max-width: 899.98px)");
  return isPhone ? <MobileLanding /> : <DesktopLanding />;
}

function DesktopLanding() {
  const hospitalsTrack = useRef<HTMLUListElement>(null);

  const scrollHospitals = (direction: 1 | -1) => {
    const track = hospitalsTrack.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <>
      <main>
        <Hero />
        <Clients />
        <Presence />
        <CaseStudy />
        <Hospitals trackRef={hospitalsTrack} />
        <GrowthBanner />
        <Process onPrev={() => scrollHospitals(-1)} onNext={() => scrollHospitals(1)} />
        <Websites />
        <DoctorsNearMe />
        <SeoVideo />
        <PartnerDoctors />
        <GooglePresence />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
