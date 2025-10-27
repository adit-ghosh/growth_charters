import { ScrollReveal } from "@/components/global/scroll-reveal";

/**
 * Call-to-action section at the bottom of the pricing page
 * Features gradient background and centered content
 */
export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl" />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">
            Join thousands of professionals transforming their careers with Growth Charters.
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
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8 py-2"
    >
      Start Your Free Trial
    </a>
  );
}
