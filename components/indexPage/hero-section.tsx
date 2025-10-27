import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

/**
 * Hero section with animated background, logo, and call-to-action buttons
 * Features gradient text and pulsing background elements
 */
export function HeroSection({ opacity, scale }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/logo.svg"
            alt="Growth Charters Logo"
            width={250}
            height={300}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          AI-Powered Career & Life Success
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Unlock personalized insights and achieve measurable growth through intelligent AI-driven
          analysis. Discover your path to success.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <CTAButtons />

        {/* Trust Badge */}
        <TrustBadge />
      </motion.div>
    </section>
  );
}

/**
 * Call-to-action buttons component for hero section
 */
function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
    >
      <a
        href="https://app-growth-charters.netlify.app/login"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8 py-2 group"
      >
        Start Free Trial
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
      <Link
        href="/404"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all border border-primary/30 hover:border-primary bg-transparent h-10 px-8 py-2 hover:bg-accent hover:text-accent-foreground"
      >
        Watch Demo
      </Link>
    </motion.div>
  );
}

/**
 * Trust indicators for the hero section
 */
function TrustBadge() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xs sm:text-sm text-muted-foreground"
    >
      ✓ 7-day free trial • No credit card required • Cancel anytime
    </motion.p>
  );
}
