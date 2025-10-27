export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  customPrice?: boolean;
  features: PlanFeature[];
  popular: boolean;
  color: string;
}

/**
 * Pricing plans data with feature lists and pricing information
 */
export const plans: PricingPlan[] = [
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
];

/**
 * FAQ data for the pricing page
 */
export const faqData = [
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
];
