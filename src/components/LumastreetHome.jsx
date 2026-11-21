import useHomepageMotion from "../hooks/useHomepageMotion.js";
import SiteHeader from "./SiteHeader.jsx";
import HeroSection from "./HeroSection.jsx";
import {
  BriefingCTA,
  DeliverySteps,
  Engagements,
  IndustriesSection,
  IntelligenceSection,
  MetricsStrip,
  PracticeAreas,
  SiteFooter,
  WhySection,
} from "./HomepageSections.jsx";

export default function LumastreetHome() {
  const pageRef = useHomepageMotion();

  return (
    <main className="ls-site" id="top" ref={pageRef}>
      <SiteHeader />
      <HeroSection />
      <MetricsStrip />
      <div className="ls-light"><WhySection /><PracticeAreas /></div>
      <Engagements />
      <div className="ls-light"><DeliverySteps /><IntelligenceSection /></div>
      <IndustriesSection />
      <BriefingCTA />
      <SiteFooter />
    </main>
  );
}
