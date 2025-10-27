import { Zap, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface TrustPoint {
  text: string;
}

/**
 * Solution features data
 */
export const solutionFeatures: FeatureItem[] = [
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
];

/**
 * Process steps for how it works section
 */
export const processSteps: ProcessStep[] = [
  { num: "1", title: "Upload", desc: "Share your resume or company culture data" },
  { num: "2", title: "AI Analysis", desc: "Our algorithms analyze your profile" },
  { num: "3", title: "Get Score", desc: "Receive your GC Score + recommendations" },
];

/**
 * Trust points for why trust us section
 */
export const trustPoints: TrustPoint[] = [
  { text: "Privacy First: Your data is encrypted and never sold to third parties" },
  { text: "Transparent Scoring: No hidden algorithms or shady data use" },
  { text: "Fair & Unbiased: Built with fairness and accuracy at the core" },
  { text: "Expert Team: Built by developers and strategists focused on real solutions" },
];

/**
 * Team members data
 */
export const teamMembers: TeamMember[] = [
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
];
