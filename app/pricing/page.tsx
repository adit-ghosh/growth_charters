"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MorphingHeader } from "@/components/morphing-header"
import { AnimatedFooter } from "@/components/animated-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Carousel } from "@/components/carousel"
import { Button } from "@/components/ui/button"
import { PricingCard } from "@/components/pricing-card"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals just starting their growth journey",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { name: "AI-powered success scoring", included: true },
        { name: "Monthly insights & recommendations", included: true },
        { name: "Basic career analytics", included: true },
        { name: "Email support", included: true },
        { name: "Up to 3 data integrations", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "Custom roadmaps", included: false },
      ],
      popular: false,
      color: "from-secondary to-secondary/80",
    },
    {
      id: "professional",
      name: "Professional",
      description: "For professionals serious about career advancement",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Weekly personalized insights", included: true },
        { name: "Advanced analytics & trends", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Unlimited data integrations", included: true },
        { name: "Custom career roadmaps", included: true },
        { name: "Peer community access", included: true },
        { name: "API access", included: false },
      ],
      popular: true,
      color: "from-primary to-primary/80",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For organizations scaling growth across teams",
      monthlyPrice: null,
      annualPrice: null,
      customPrice: true,
      features: [
        { name: "Everything in Professional", included: true },
        { name: "Team management & analytics", included: true },
        { name: "Custom AI models", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Advanced security & compliance", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: true },
      ],
      popular: false,
      color: "from-tertiary to-tertiary/80",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-background text-foreground">
      <MorphingHeader />

      {/* Pricing Header */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

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
            <div className="flex items-center justify-center gap-6 mb-16">
              <motion.span
                animate={{ color: isAnnual ? "var(--color-muted-foreground)" : "var(--color-foreground)" }}
                className="font-semibold text-sm md:text-lg"
              >
                Monthly
              </motion.span>

              <motion.button
                onClick={() => setIsAnnual(!isAnnual)}
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
                animate={{ color: isAnnual ? "var(--color-foreground)" : "var(--color-muted-foreground)" }}
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
          </ScrollReveal>
        </div>

        <div className="hidden md:block w-full max-w-7xl mx-auto mb-16 relative z-10">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {plans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} idx={idx} isAnnual={isAnnual} />
            ))}
          </motion.div>
        </div>

        {/* Tablet & Mobile: Carousel */}
        <div className="md:hidden w-full max-w-7xl mx-auto mb-16 relative z-10">
          <Carousel>
            {plans.map((plan, idx) => (
              <div key={idx} className="px-4">
                <PricingCard plan={plan} idx={idx} isAnnual={isAnnual} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Have questions? We have answers.</p>
            </div>
          </ScrollReveal>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                q: "Can I change my plan anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all plans come with a 7-day free trial. No credit card required to get started.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers through Razorpay.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. No questions asked, no hidden fees.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border hover:border-primary/50 bg-card/50 hover:bg-card/80 transition-all duration-300 group"
              >
                <h4 className="font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm md:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl" />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">
              Join thousands of professionals transforming their careers with Growth Charters.
            </p>
            <a href="https://app-growth-charters.netlify.app/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Start Your Free Trial
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>

      <AnimatedFooter />
    </div>
  )
}
