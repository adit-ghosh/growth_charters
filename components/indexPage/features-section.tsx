import { ScrollReveal } from "@/components/global/scroll-reveal";
import { AnimatedCard } from "@/components/global/animated-card";
import { Carousel } from "@/components/global/carousel";
import { Brain, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Features section showcasing platform capabilities
 * Responsive design with grid for desktop and carousel for mobile
 */
export function FeaturesSection() {
  const features: Feature[] = [
    {
      title: "Smart Analysis",
      description:
        "Our AI analyzes your career data to identify growth opportunities and potential paths forward.",
      icon: Brain,
    },
    {
      title: "Personalized Insights",
      description:
        "Get tailored recommendations based on your unique skills, experience, and aspirations.",
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
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden grid-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Powerful Features"
          description="Everything you need to transform your career and life"
        />

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel>
            {features.map((feature, idx) => (
              <div key={idx} className="px-4">
                <FeatureCard feature={feature} index={idx} isCarousel />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/**
 * Section header component reusable across sections
 */
function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}

/**
 * Individual feature card component
 */
function FeatureCard({
  feature,
  index,
  isCarousel = false,
}: {
  feature: Feature;
  index: number;
  isCarousel?: boolean;
}) {
  const Icon = feature.icon;

  return (
    <AnimatedCard delay={isCarousel ? 0 : index * 0.1}>
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
  );
}
