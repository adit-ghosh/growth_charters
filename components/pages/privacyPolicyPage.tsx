"use client";

import { ScrollReveal } from "@/components/global/scroll-reveal";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Growth Charter is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered employability scoring platform.",
    },
    {
      title: "Information We Collect",
      content:
        "We collect several types of information: Resumes and career details you upload, Company surveys and culture data, Analytics data about how you use our platform, Optional account information (email, name, company details), and Device information for security and analytics purposes.",
    },
    {
      title: "How We Use Information",
      content:
        "Your information is used to: Generate accurate GC Scores, Improve our AI algorithms and scoring accuracy, Provide personalized insights and recommendations, Enhance user experience and platform functionality, Comply with legal obligations, and Prevent fraud and misuse.",
    },
    {
      title: "Data Storage and Security",
      content:
        "Your data is securely stored with industry-standard encryption. We implement multiple layers of security to protect your information. Your data is never sold to third parties. We retain your data only as long as necessary to provide our service.",
    },
    {
      title: "Sharing of Data",
      content:
        "We do not share your personal data with third parties except: When required by law or legal process, With your explicit written consent, With service providers who assist us (under strict confidentiality agreements), and In case of business transfer or acquisition (with notice to you).",
    },
    {
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to improve your experience, remember your preferences, and analyze platform usage. You can control cookie settings in your browser. Some features may not work properly if cookies are disabled.",
    },
    {
      title: "User Rights",
      content:
        "You have the right to: Access your personal data anytime, Request deletion of your data, Correct inaccurate information, Export your data in a portable format, and Opt-out of non-essential communications. To exercise these rights, contact us at privacy@growthcharter.ai",
    },
    {
      title: "Children's Privacy",
      content:
        "Growth Charter is not intended for users under 16 years old. We do not knowingly collect information from children. If we discover we have collected data from a child, we will delete it immediately.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Your continued use of Growth Charter constitutes acceptance of the updated policy.",
    },
    {
      title: "Contact Us",
      content:
        "For privacy-related questions or concerns, please contact us at privacy@growthcharter.ai. We aim to respond to all inquiries within 7 business days.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-muted-foreground">
              Your privacy is our priority. Learn how we protect your data.
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
    </div>
  );
}
