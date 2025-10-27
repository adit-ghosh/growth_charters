import { ScrollReveal } from "@/components/global/scroll-reveal";
import { AnimatedCard } from "@/components/global/animated-card";
import { Carousel } from "@/components/global/carousel";
import { Zap, Brain, TrendingUp, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface WorkflowStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

/**
 * Workflow section explaining the step-by-step process
 * Shows both grid layout for desktop and carousel for mobile
 */
export function WorkflowSection() {
  const workflowSteps: WorkflowStep[] = [
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
      description:
        "Our advanced algorithms analyze your profile and generate personalized insights.",
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
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="How Growth Charter Works"
          description="Our AI-powered platform guides you through a seamless journey to unlock your full potential"
        />

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-16">
          {workflowSteps.map((step, idx) => (
            <WorkflowStepCard key={idx} step={step} index={idx} />
          ))}
        </div>

        {/* Mobile & Tablet: Carousel */}
        <div className="lg:hidden mb-16">
          <Carousel>
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="px-4">
                <WorkflowStepCard step={step} index={idx} isCarousel />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Connecting Line Animation */}
        <div className="relative h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-16" />
      </div>
    </section>
  );
}

/**
 * Section header component with title and description
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
 * Individual workflow step card component
 */
function WorkflowStepCard({
  step,
  index,
  isCarousel = false,
}: {
  step: WorkflowStep;
  index: number;
  isCarousel?: boolean;
}) {
  const Icon = step.icon;

  return (
    <AnimatedCard delay={isCarousel ? 0 : index * 0.1} glow={index === 1}>
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-3xl font-bold text-primary mb-3">{step.step}</div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
    </AnimatedCard>
  );
}
