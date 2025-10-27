"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroSection } from "@/components/indexPage/hero-section";
import { WorkflowSection } from "@/components/indexPage/workflow-section";
import { FeaturesSection } from "@/components/indexPage/features-section";
import { StatsSection } from "@/components/indexPage/stats-section";
import { CTASection } from "@/components/indexPage/cta-section";

/**
 * Main homepage component that orchestrates all sections
 * Handles global scroll animations and provides ref for scroll tracking
 */
export default function IndexPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-background text-foreground">
      <HeroSection opacity={opacity} scale={scale} />
      <WorkflowSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
