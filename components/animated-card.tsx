"use client"

import { motion } from "framer-motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  glow?: boolean
  className?: string
}

export function AnimatedCard({ children, delay = 0, glow = false, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`relative group ${className}`}
    >
      <div className="relative rounded-2xl border border-border overflow-hidden">
        <GlowingEffect spread={40} glow={glow} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative p-8 bg-card/50 backdrop-blur-sm border-0.75 rounded-2xl">{children}</div>
      </div>
    </motion.div>
  )
}
