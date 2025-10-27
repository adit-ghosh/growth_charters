import { ScrollReveal } from "@/components/global/scroll-reveal";

/**
 * Hero section for about page with company mission and call-to-action
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Redefining Employability with AI
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Growth Charter gives individuals and companies a clear, data-driven GC Score to measure
            real potential — not just buzzwords.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app-growth-charters.netlify.app/login"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8 py-2"
            >
              Get Your GC Score
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all border border-primary/30 hover:border-primary bg-transparent h-10 px-8 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              For Companies
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
