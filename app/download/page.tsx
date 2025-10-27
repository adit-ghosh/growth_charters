"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphingHeader } from "@/components/morphing-header";
import { AnimatedFooter } from "@/components/animated-footer";
import { Button } from "@/components/ui/button";
import { Apple, Wind as Windows, Link2 as Linux, Play, Download, ChevronDown } from "lucide-react";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Define platform types with proper typing for icons
type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface Platform {
  name: string;
  icon: IconComponent;
  description: string;
  version: string;
  build: string;
  date: string;
  size: string;
  requirements: string;
  downloads: Array<{ label: string; format: string }>;
}

// Define proper types for the platform objects
type DesktopPlatforms = {
  windows: Platform;
  macos: Platform;
  linux: Platform;
};

type MobilePlatforms = {
  ios: Platform;
  android: Platform;
};

type DesktopPlatformKey = keyof DesktopPlatforms;
type MobilePlatformKey = keyof MobilePlatforms;

// Move DesktopSection outside the main component
const DesktopSection = ({ platform }: { platform: Platform }) => {
  const Icon = platform.icon;
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{platform.name}</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          {platform.description}
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <div className="relative group w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-4 sm:px-6 flex items-center gap-2 border-primary/30 hover:border-primary/50 bg-transparent w-full sm:w-auto text-sm sm:text-base"
            >
              <span className="truncate">{platform.downloads[0].label}</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            </Button>
            <div className="absolute top-full left-0 mt-2 w-full sm:w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              {platform.downloads.map((download, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-3 hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg text-xs sm:text-sm transition-colors"
                >
                  {download.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          Free download, no registration required
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Version
            </p>
            <p className="font-semibold text-sm sm:text-base text-primary">{platform.version}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Size
            </p>
            <p className="font-semibold text-sm sm:text-base text-primary">{platform.size}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Build
            </p>
            <p className="font-semibold text-xs sm:text-sm">{platform.build}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Released
            </p>
            <p className="font-semibold text-xs sm:text-sm">{platform.date}</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-xs sm:text-sm">
          <a href="#" className="text-primary hover:underline">
            System requirements
          </a>
          <a href="#" className="text-primary hover:underline">
            Installation instructions
          </a>
          <a href="#" className="text-primary hover:underline">
            Other versions
          </a>
        </div>
      </motion.div>

      {/* Right Screenshot - Hidden on mobile and tablet, visible on lg */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden lg:block"
      >
        <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
          <img
            src={`/images/growth-charter-.jpg?height=500&width=600&query=Growth Charter ${platform.name} desktop application interface`}
            alt={`${platform.name} Application`}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

// Move MobileSection outside the main component
const MobileSection = ({ platform }: { platform: Platform }) => {
  const Icon = platform.icon;
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Screenshot - Visible on lg, hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block order-first"
      >
        <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
          <img
            src={`/growth-charter-.jpg?height=600&width=300&query=Growth Charter ${platform.name} mobile app interface`}
            alt={`${platform.name} Application`}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{platform.name}</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          {platform.description}
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="relative group w-full">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 w-full text-sm sm:text-base"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <div className="absolute top-full left-0 mt-2 w-full bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              {platform.downloads.map((download, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-3 hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg text-xs sm:text-sm transition-colors"
                >
                  {download.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          Free download, no registration required
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Version
            </p>
            <p className="font-semibold text-sm sm:text-base text-primary">{platform.version}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Size
            </p>
            <p className="font-semibold text-sm sm:text-base text-primary">{platform.size}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Build
            </p>
            <p className="font-semibold text-xs sm:text-sm">{platform.build}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
              Released
            </p>
            <p className="font-semibold text-xs sm:text-sm">{platform.date}</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-xs sm:text-sm">
          <a href="#" className="text-primary hover:underline">
            System requirements
          </a>
          <a href="#" className="text-primary hover:underline">
            Installation guide
          </a>
          <a href="#" className="text-primary hover:underline">
            Troubleshooting
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function DownloadPage() {
  const [activeDesktopTab, setActiveDesktopTab] = useState<DesktopPlatformKey>("windows");
  const [activeMobileTab, setActiveMobileTab] = useState<MobilePlatformKey>("ios");

  const desktopPlatforms: DesktopPlatforms = {
    windows: {
      name: "Windows",
      icon: Windows,
      description: "The Leading Growth Charter for Professional Development on Windows",
      version: "v2.1.0",
      build: "Build: 2025.2.3",
      date: "15 October 2025",
      size: "245 MB",
      requirements: "Windows 10 or later, 4GB RAM, 500MB disk space",
      downloads: [
        { label: ".exe (Windows)", format: "exe" },
        { label: ".msi (Windows)", format: "msi" },
        { label: ".zip (Portable)", format: "zip" },
      ],
    },
    macos: {
      name: "macOS",
      icon: Apple,
      description: "The Leading Growth Charter for Professional Development on macOS",
      version: "v2.1.0",
      build: "Build: 2025.2.3",
      date: "15 October 2025",
      size: "198 MB",
      requirements: "macOS 11 or later, 4GB RAM, 500MB disk space",
      downloads: [
        { label: ".dmg (Intel)", format: "dmg-intel" },
        { label: ".dmg (Apple Silicon)", format: "dmg-arm" },
        { label: ".zip (Portable)", format: "zip" },
      ],
    },
    linux: {
      name: "Linux",
      icon: Linux,
      description: "The Leading Growth Charter for Professional Development on Linux",
      version: "v2.1.0",
      build: "Build: 2025.2.3",
      date: "15 October 2025",
      size: "187 MB",
      requirements: "Ubuntu 20.04+, 4GB RAM, 500MB disk space",
      downloads: [
        { label: ".AppImage (Universal)", format: "appimage" },
        { label: ".deb (Debian/Ubuntu)", format: "deb" },
        { label: ".tar.gz (Portable)", format: "tar" },
      ],
    },
  };

  const mobilePlatforms: MobilePlatforms = {
    ios: {
      name: "iOS",
      icon: Apple,
      description: "Growth Charters for iOS - Track Your Growth On The Go",
      version: "v2.1.0",
      build: "Build: 2025.2.3",
      date: "15 October 2025",
      size: "156 MB",
      requirements: "iOS 14.0 or later",
      downloads: [
        { label: "App Store", format: "appstore" },
        { label: ".ipa (Direct Download)", format: "ipa" },
      ],
    },
    android: {
      name: "Android",
      icon: Play,
      description: "Growth Charters for Android - Track Your Growth On The Go",
      version: "v2.1.0",
      build: "Build: 2025.2.3",
      date: "15 October 2025",
      size: "142 MB",
      requirements: "Android 8.0 or later",
      downloads: [
        { label: "Google Play", format: "playstore" },
        { label: ".apk (Direct Download)", format: "apk" },
      ],
    },
  };

  return (
    <div className="bg-background text-foreground">
      <MorphingHeader />

      {/* Desktop Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 sm:gap-8 mb-12 sm:mb-16 border-b border-border pb-4 overflow-x-auto"
          >
            {(Object.entries(desktopPlatforms) as [DesktopPlatformKey, Platform][]).map(
              ([key, platform]) => (
                <button
                  key={key}
                  onClick={() => setActiveDesktopTab(key)}
                  className="relative text-sm sm:text-lg font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  <span
                    className={`${
                      activeDesktopTab === key
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {platform.name}
                  </span>
                  {activeDesktopTab === key && (
                    <motion.div
                      layoutId="desktopTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )
            )}
          </motion.div>

          {/* Content */}
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
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 sm:gap-8 mb-12 sm:mb-16 border-b border-border pb-4 overflow-x-auto"
          >
            {(Object.entries(mobilePlatforms) as [MobilePlatformKey, Platform][]).map(
              ([key, platform]) => (
                <button
                  key={key}
                  onClick={() => setActiveMobileTab(key)}
                  className="relative text-sm sm:text-lg font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  <span
                    className={`${
                      activeMobileTab === key
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {platform.name}
                  </span>
                  {activeMobileTab === key && (
                    <motion.div
                      layoutId="mobileTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )
            )}
          </motion.div>

          {/* Content */}
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

      <AnimatedFooter />
    </div>
  );
}
