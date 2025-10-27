import { motion } from "framer-motion";
import { Carousel } from "@/components/global/carousel";
import { PricingCard } from "@/components/global/pricing-card";
import { PricingPlan } from "./pricing-data";

interface PricingGridProps {
  plans: PricingPlan[];
  isAnnual: boolean;
}

/**
 * Pricing grid section with desktop grid and mobile carousel
 * Handles responsive layout for different screen sizes
 */
export function PricingGrid({ plans, isAnnual }: PricingGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Desktop: Grid Layout */}
      <div className="hidden md:block w-full max-w-7xl mx-auto mb-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </motion.div>
      </div>

      {/* Mobile & Tablet: Carousel */}
      <div className="md:hidden w-full max-w-7xl mx-auto mb-16 relative z-10">
        <Carousel>
          {plans.map((plan) => (
            <div key={plan.id} className="px-4">
              <PricingCard plan={plan} isAnnual={isAnnual} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
