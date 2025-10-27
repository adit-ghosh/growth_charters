"use client";

import { useState } from "react";
import { PricingHeader } from "@/components/pricingPage/pricing-header";
import { PricingGrid } from "@/components/pricingPage/pricing-grid";
import { FAQSection } from "@/components/pricingPage/faq-section";
import { CTASection } from "@/components/pricingPage/cta-section";
import { plans } from "@/components/pricingPage/pricing-data";

/**
 * Main pricing page component with subscription plans and FAQ
 * Features toggle between monthly and annual billing with animations
 */
export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* Pricing Header */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <PricingHeader isAnnual={isAnnual} onToggleBilling={() => setIsAnnual(!isAnnual)} />

        <PricingGrid plans={plans} isAnnual={isAnnual} />
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
