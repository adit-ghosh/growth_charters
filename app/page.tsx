"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MorphingHeader } from "@/components/morphing-header"
import { AnimatedFooter } from "@/components/animated-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { Carousel } from "@/components/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div ref={containerRef} className="bg-background text-foreground">
      <MorphingHeader />

      {/* Hero Section with Grid Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div style={{ opacity, scale }} className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
          >
            AI-Powered Career & Life Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Unlock personalized insights and achieve measurable growth through intelligent AI-driven analysis. Discover
            your path to success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a href="https://app-growth-charters.netlify.app/login">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/404">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 hover:border-primary bg-transparent"
              >
                Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm text-muted-foreground"
          >
            ✓ 7-day free trial • No credit card required • Cancel anytime
          </motion.p>
        </motion.div>
      </section>

      {/* Workflow Section - How It Works */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How Growth Charter Works</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform guides you through a seamless journey to unlock your full potential
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Brain,
                step: "01",
                title: "Data Integration",
                description: "Connect your career history, skills, and aspirations to our AI system.",
              },
              {
                icon: Zap,
                step: "02",
                title: "AI Analysis",
                description: "Our advanced algorithms analyze your profile and generate personalized insights.",
              },
              {
                icon: TrendingUp,
                step: "03",
                title: "Success Scoring",
                description: "Receive actionable recommendations tailored to your growth journey.",
              },
              {
                icon: CheckCircle2,
                step: "04",
                title: "Progress Tracking",
                description: "Monitor your growth with real-time dashboards and detailed analytics.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <AnimatedCard key={idx} delay={idx * 0.1} glow={idx === 1}>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">{feature.step}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </AnimatedCard>
              )
            })}
          </div>

          {/* Tablet & Mobile: Carousel */}
          <div className="lg:hidden mb-16">
            <Carousel>
              {[
                {
                  icon: Brain,
                  step: "01",
                  title: "Data Integration",
                  description: "Connect your career history, skills, and aspirations to our AI system.",
                },
                {
                  icon: Zap,
                  step: "02",
                  title: "AI Analysis",
                  description: "Our advanced algorithms analyze your profile and generate personalized insights.",
                },
                {
                  icon: TrendingUp,
                  step: "03",
                  title: "Success Scoring",
                  description: "Receive actionable recommendations tailored to your growth journey.",
                },
                {
                  icon: CheckCircle2,
                  step: "04",
                  title: "Progress Tracking",
                  description: "Monitor your growth with real-time dashboards and detailed analytics.",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="px-4">
                    <AnimatedCard delay={0} glow={idx === 1}>
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-3">{feature.step}</div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                    </AnimatedCard>
                  </div>
                )
              })}
            </Carousel>
          </div>

          {/* Connecting Line Animation */}
          <div className="relative h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-16" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative overflow-hidden grid-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to transform your career and life
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Analysis",
                description:
                  "Our AI analyzes your career data to identify growth opportunities and potential paths forward.",
                icon: Brain,
              },
              {
                title: "Personalized Insights",
                description: "Get tailored recommendations based on your unique skills, experience, and aspirations.",
                icon: Zap,
              },
              {
                title: "Actionable Roadmap",
                description: "Receive a clear, step-by-step plan to achieve your career and life goals.",
                icon: TrendingUp,
              },
              {
                title: "Progress Tracking",
                description: "Monitor your growth with real-time dashboards and detailed analytics.",
                icon: CheckCircle2,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <AnimatedCard key={idx} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <Carousel>
              {[
                {
                  title: "Smart Analysis",
                  description:
                    "Our AI analyzes your career data to identify growth opportunities and potential paths forward.",
                  icon: Brain,
                },
                {
                  title: "Personalized Insights",
                  description: "Get tailored recommendations based on your unique skills, experience, and aspirations.",
                  icon: Zap,
                },
                {
                  title: "Actionable Roadmap",
                  description: "Receive a clear, step-by-step plan to achieve your career and life goals.",
                  icon: TrendingUp,
                },
                {
                  title: "Progress Tracking",
                  description: "Monitor your growth with real-time dashboards and detailed analytics.",
                  icon: CheckCircle2,
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="px-4">
                    <AnimatedCard delay={0}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "10K+" },
              { label: "Success Rate", value: "94%" },
              { label: "Career Transitions", value: "2.5K+" },
              { label: "Avg. Growth", value: "3.2x" },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tablet & Mobile: Carousel */}
          <div className="md:hidden">
            <Carousel>
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Success Rate", value: "94%" },
                { label: "Career Transitions", value: "2.5K+" },
                { label: "Avg. Growth", value: "3.2x" },
              ].map((stat, idx) => (
                <div key={idx} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of professionals using Growth Charters to achieve their goals and unlock their potential.
            </p>
            <a href="https://app-growth-charters.netlify.app/login">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>

      <AnimatedFooter />
    </div>
  )
}
