import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { faqData } from "./pricing-data";

/**
 * FAQ section with animated question-answer pairs
 * Features hover effects and smooth transitions
 */
export function FAQSection() {
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
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Have questions? We have answers.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  variants: Variants;
}

/**
 * Individual FAQ item component
 */
function FAQItem({ question, answer, variants }: FAQItemProps) {
  return (
    <motion.div
      variants={variants}
      className="p-6 rounded-xl border border-border hover:border-primary/50 bg-card/50 hover:bg-card/80 transition-all duration-300 group"
    >
      <h4 className="font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
        {question}
      </h4>
      <p className="text-muted-foreground text-sm md:text-base">{answer}</p>
    </motion.div>
  );
}
