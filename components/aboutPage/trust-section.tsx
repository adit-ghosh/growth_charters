import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { trustPoints } from "./about-data";

/**
 * Trust section with company values and security features
 */
export function TrustSection() {
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
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Trust Us</h2>
            <div className="space-y-4">
              {trustPoints.map((item, idx) => (
                <TrustPointItem key={idx} text={item.text} variants={itemVariants} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface TrustPointItemProps {
  text: string;
  variants: Variants;
}

/**
 * Individual trust point component
 */
function TrustPointItem({ text, variants }: TrustPointItemProps) {
  return (
    <motion.div variants={variants} className="flex gap-4 items-start">
      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <p className="text-base text-muted-foreground">{text}</p>
    </motion.div>
  );
}
