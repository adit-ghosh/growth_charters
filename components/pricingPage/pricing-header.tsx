import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";

interface PricingHeaderProps {
  isAnnual: boolean;
  onToggleBilling: () => void;
}

/**
 * Pricing header section with title, description, and billing toggle
 * Features animated toggle switch with savings indicator
 */
export function PricingHeader({ isAnnual, onToggleBilling }: PricingHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
      <ScrollReveal>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl text-muted-foreground mb-12">
          Choose the perfect plan for your growth journey. All plans include a 7-day free trial.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <BillingToggle isAnnual={isAnnual} onToggle={onToggleBilling} />
      </ScrollReveal>
    </div>
  );
}

/**
 * Billing period toggle component with animations
 */
function BillingToggle({ isAnnual, onToggle }: { isAnnual: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-center gap-6 mb-16">
      <motion.span
        animate={{
          color: isAnnual ? "var(--color-muted-foreground)" : "var(--color-foreground)",
        }}
        className="font-semibold text-sm md:text-lg"
      >
        Monthly
      </motion.span>

      <motion.button
        onClick={onToggle}
        className="relative inline-flex h-10 w-20 items-center rounded-full bg-muted transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          layout
          className="inline-block h-8 w-8 transform rounded-full bg-primary shadow-lg"
          animate={{ x: isAnnual ? 40 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>

      <motion.div
        animate={{
          color: isAnnual ? "var(--color-foreground)" : "var(--color-muted-foreground)",
        }}
        className="font-semibold text-sm md:text-lg"
      >
        Annual
        {isAnnual && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-2 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm"
          >
            Save 20%
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
