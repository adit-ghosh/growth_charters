"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DesktopSection } from "@/components/downloadPage/desktop-section";
import { MobileSection } from "@/components/downloadPage/mobile-section";
import { PlatformTabs } from "@/components/downloadPage/platform-tabs";
import { desktopPlatforms, mobilePlatforms } from "@/components/downloadPage/platform-data";
import type {
  DesktopPlatformKey,
  MobilePlatformKey,
} from "@/components/downloadPage/platform-data";

/**
 * Main download page component with desktop and mobile platform sections
 * Features animated tab navigation and platform-specific download options
 */
export default function DownloadPage() {
  const [activeDesktopTab, setActiveDesktopTab] = useState<DesktopPlatformKey>("windows");
  const [activeMobileTab, setActiveMobileTab] = useState<MobilePlatformKey>("ios");

  return (
    <div className="bg-background text-foreground">
      {/* Desktop Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto">
          <PlatformTabs
            platforms={desktopPlatforms}
            activeTab={activeDesktopTab}
            onTabChange={setActiveDesktopTab}
            tabType="desktop"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDesktopTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DesktopSection platform={desktopPlatforms[activeDesktopTab]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <PlatformTabs
            platforms={mobilePlatforms}
            activeTab={activeMobileTab}
            onTabChange={setActiveMobileTab}
            tabType="mobile"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMobileTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MobileSection platform={mobilePlatforms[activeMobileTab]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
