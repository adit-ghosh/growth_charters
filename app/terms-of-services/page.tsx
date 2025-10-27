"use client";
import { MorphingHeader } from "@/components/morphing-header";
import { AnimatedFooter } from "@/components/animated-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function TermsOfServices() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Growth Charter is an AI-based platform that provides employability scoring (GC Score) for individuals and companies. By accessing or using our service, you agree to be bound by these Terms of Service.",
    },
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using Growth Charter, you agree to these terms. If you do not agree, please do not use our service. We reserve the right to modify these terms at any time.",
    },
    {
      title: "Use of Service",
      content:
        "You agree to provide accurate information when using our service, including resumes and company data. You must not misuse the system, including attempting to manipulate scores, reverse-engineer algorithms, or use the service for unauthorized purposes.",
    },
    {
      title: "Account Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access or use of your account. Growth Charter is not liable for any loss or damage resulting from your failure to protect your account.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content, algorithms, GC Score models, and intellectual property belong to Growth Charter. You may not reproduce, distribute, or transmit any content without our written permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Growth Charter provides insights and scores for informational purposes only. Scores are not guarantees of employment, hiring decisions, or career outcomes. We are not liable for any indirect, incidental, or consequential damages arising from your use of our service.",
    },
    {
      title: "Termination",
      content:
        "Growth Charter reserves the right to suspend or terminate your access for violation of these terms, misuse of the service, or any illegal activity. Termination may be immediate and without notice.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these terms at any time. Changes will be posted on this page, and your continued use of the service constitutes acceptance of the updated terms.",
    },
    {
      title: "Contact",
      content:
        "For questions about these Terms of Service, please contact us at legal@growthcharter.ai",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <MorphingHeader />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-muted-foreground">
              Clear, straightforward terms for using Growth Charter
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </div>
  );
}
