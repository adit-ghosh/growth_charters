import { ScrollReveal } from "@/components/global/scroll-reveal";

/**
 * Problem statement section explaining the challenges in the job market
 */
export function ProblemSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              The job market is noisy and vague. Candidates don't know how employable they are.
              Companies can't measure culture clearly. Traditional hiring relies on gut feelings and
              outdated metrics, leaving both sides uncertain.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
