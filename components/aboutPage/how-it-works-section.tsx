import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { Carousel } from "@/components/global/carousel";
import { processSteps } from "./about-data";

/**
 * How it works section with process steps and responsive carousel
 */
export function HowItWorksSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              3 simple steps to your GC Score
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:block">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, idx) => (
              <ProcessStepCard key={idx} step={step} variants={itemVariants} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel>
            {processSteps.map((step, idx) => (
              <div key={idx} className="px-4">
                <ProcessStepCard step={step} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepCardProps {
  step: {
    num: string;
    title: string;
    desc: string;
  };
  variants?: Variants;
}

/**
 * Individual process step card component
 */
function ProcessStepCard({ step, variants }: ProcessStepCardProps) {
  const cardContent = (
    <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
        <span className="text-xl font-bold text-primary">{step.num}</span>
      </div>
      <h3 className="font-bold mb-2">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.desc}</p>
    </div>
  );

  return variants ? <motion.div variants={variants}>{cardContent}</motion.div> : cardContent;
}
