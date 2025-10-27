import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { Carousel } from "@/components/global/carousel";

interface Stat {
  label: string;
  value: string;
}

/**
 * Statistics section showing platform metrics
 * Features hover animations and responsive carousel for mobile
 */
export function StatsSection() {
  const stats: Stat[] = [
    { label: "Active Users", value: "10K+" },
    { label: "Success Rate", value: "94%" },
    { label: "Career Transitions", value: "2.5K+" },
    { label: "Avg. Growth", value: "3.2x" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Mobile & Tablet: Carousel */}
        <div className="md:hidden">
          <Carousel>
            {stats.map((stat, idx) => (
              <div key={idx} className="px-4">
                <StatCardMobile stat={stat} index={idx} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual statistic card with animation for desktop
 */
function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-2"
        >
          {stat.value}
        </motion.div>
        <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
      </motion.div>
    </ScrollReveal>
  );
}

/**
 * Individual statistic card for mobile carousel
 */
function StatCardMobile({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-2"
      >
        {stat.value}
      </motion.div>
      <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
}
