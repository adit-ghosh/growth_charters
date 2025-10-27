import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { solutionFeatures } from "./about-data";

/**
 * Solution section with features and AI-powered approach
 */
export function SolutionSection() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Growth Charter uses AI to analyze resumes and workplace culture to generate a simple
              GC Score that shows how employable someone is or how strong a company's culture is.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {solutionFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
