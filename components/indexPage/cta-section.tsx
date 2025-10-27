import { ScrollReveal } from "@/components/global/scroll-reveal";
import { ArrowRight } from "lucide-react";

/**
 * Call-to-action section with gradient background
 * Encourages user signup with compelling copy and button
 */
export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />

      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Join thousands of professionals using Growth Charters to achieve their goals and unlock
            their potential.
          </p>
          <CTAButton />
        </div>
      </ScrollReveal>
    </section>
  );
}

/**
 * Reusable CTA button component
 */
function CTAButton() {
  return (
    <a
      href="https://app-growth-charters.netlify.app/login"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8 py-2 group"
    >
      Get Started Today
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
