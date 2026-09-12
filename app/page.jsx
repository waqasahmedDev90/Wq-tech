import { Header } from "@/components/layout";

import {
  HeroSection,
  OurProcessSection,
  ResultsSection,
  ServicesSection,
  SelectedWorkSection,
  TechnologyStrip,
  WhoWeAreSection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-ink">
      <Header />

      <HeroSection />

      <TechnologyStrip />

      <WhoWeAreSection />

      <ServicesSection />

      <SelectedWorkSection />

      <OurProcessSection />

      <ResultsSection />
    </main>
  );
}