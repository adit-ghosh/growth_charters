"use client";

import { HeroSection } from "@/components/aboutPage/hero-section";
import { ProblemSection } from "@/components/aboutPage/problem-section";
import { SolutionSection } from "@/components/aboutPage/solution-section";
import { MissionVisionSection } from "@/components/aboutPage/mission-vision-section";
import { HowItWorksSection } from "@/components/aboutPage/how-it-works-section";
import { TrustSection } from "@/components/aboutPage/trust-section";
import { TeamSection } from "@/components/aboutPage/team-section";
import { CTASection } from "@/components/aboutPage/cta-section";

/**
 * Main about page component showcasing company mission, team, and values
 * Features animated sections and responsive design
 */
export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <TrustSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
