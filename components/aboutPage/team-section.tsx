import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { Carousel } from "@/components/global/carousel";
import { Users } from "lucide-react";
import { teamMembers } from "./about-data";

/**
 * Team section showcasing company founders and key members
 */
export function TeamSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
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

        {/* Desktop: Grid Layout */}
        <div className="hidden md:block">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} variants={itemVariants} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel>
            {teamMembers.map((member, idx) => (
              <div key={idx} className="px-4">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
  };
  variants?: Variants;
}

/**
 * Individual team member card component
 */
function TeamMemberCard({ member, variants }: TeamMemberCardProps) {
  const cardContent = (
    <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center">
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-bold mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
      <p className="text-sm text-muted-foreground">{member.bio}</p>
    </div>
  );

  return variants ? <motion.div variants={variants}>{cardContent}</motion.div> : cardContent;
}
