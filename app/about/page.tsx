"use client";
import { motion } from "framer-motion";
import { MorphingHeader } from "@/components/morphing-header";
import { AnimatedFooter } from "@/components/animated-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-background text-foreground">
      <MorphingHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Redefining Employability with AI
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Growth Charter gives individuals and companies a clear, data-driven GC Score to
              measure real potential — not just buzzwords.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app-growth-charters.netlify.app/login">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                >
                  Get Your GC Score
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary/30 hover:border-primary bg-transparent"
              >
                For Companies
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The job market is noisy and vague. Candidates don't know how employable they are.
                Companies can't measure culture clearly. Traditional hiring relies on gut feelings
                and outdated metrics, leaving both sides uncertain.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Solution Section */}
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
                {[
                  {
                    icon: Zap,
                    title: "AI-Powered Analysis",
                    desc: "Advanced algorithms analyze skills, experience, and potential",
                  },
                  {
                    icon: Shield,
                    title: "Data-Driven Insights",
                    desc: "Transparent scoring based on real metrics, not guesswork",
                  },
                ].map((item, idx) => {
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

      {/* Mission & Vision */}
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
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We're on a mission to make employability transparent and measurable for everyone.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A world where opportunities align with skills and culture, not guesswork.
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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

          <div className="hidden md:block">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { num: "1", title: "Upload", desc: "Share your resume or company culture data" },
                { num: "2", title: "AI Analysis", desc: "Our algorithms analyze your profile" },
                { num: "3", title: "Get Score", desc: "Receive your GC Score + recommendations" },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <Carousel>
              {[
                { num: "1", title: "Upload", desc: "Share your resume or company culture data" },
                { num: "2", title: "AI Analysis", desc: "Our algorithms analyze your profile" },
                { num: "3", title: "Get Score", desc: "Receive your GC Score + recommendations" },
              ].map((step, idx) => (
                <div key={idx} className="px-4">
                  <motion.div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">{step.num}</span>
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Trust Us</h2>
              <div className="space-y-4">
                {[
                  "Privacy First: Your data is encrypted and never sold to third parties",
                  "Transparent Scoring: No hidden algorithms or shady data use",
                  "Fair & Unbiased: Built with fairness and accuracy at the core",
                  "Expert Team: Built by developers and strategists focused on real solutions",
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex gap-4 items-start">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Built by a Small Team
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Developers and strategists focused on fair, data-driven hiring
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Co-founder",
                  bio: "AI researcher with 10+ years in career tech",
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO & Co-founder",
                  bio: "Full-stack engineer passionate about scalable platforms",
                },
                {
                  name: "Emily Watson",
                  role: "Head of Product",
                  bio: "Product strategist focused on user-centric design",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <Carousel>
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Co-founder",
                  bio: "AI researcher with 10+ years in career tech",
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO & Co-founder",
                  bio: "Full-stack engineer passionate about scalable platforms",
                },
                {
                  name: "Emily Watson",
                  role: "Head of Product",
                  bio: "Product strategist focused on user-centric design",
                },
              ].map((member, idx) => (
                <div key={idx} className="px-4">
                  <motion.div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Your GC Score?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Join thousands discovering their real potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app-growth-charters.netlify.app/login">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                >
                  Get Your GC Score
                </Button>
              </a>
              <a href="https://app-growth-charters.netlify.app/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary/30 hover:border-primary bg-transparent"
                >
                  Join as a Company
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <AnimatedFooter />
    </div>
  );
}
