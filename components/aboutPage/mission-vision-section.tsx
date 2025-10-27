import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";

/**
 * Mission and vision section with company values
 */
export function MissionVisionSection() {
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
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ScrollReveal>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We're on a mission to make employability transparent and measurable for everyone.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A world where opportunities align with skills and culture, not guesswork.
              </p>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
