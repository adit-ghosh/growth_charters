import { ScrollReveal } from "@/components/global/scroll-reveal";

/**
 * Final call-to-action section for the about page
 */
export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Your GC Score?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Join thousands discovering their real potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app-growth-charters.netlify.app/login"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8 py-2"
            >
              Get Your GC Score
            </a>
            <a
              href="https://app-growth-charters.netlify.app/login"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all border border-primary/30 hover:border-primary bg-transparent h-10 px-8 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              Join as a Company
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
