import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Platform } from "./platform-data";

interface MobileSectionProps {
  platform: Platform;
}

/**
 * Mobile platform download section with app store integration
 * Features responsive layout optimized for mobile platforms
 */
export function MobileSection({ platform }: MobileSectionProps) {
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
            src={`/images/growth-charter-.jpg?height=600&width=300&query=Growth Charter ${platform.name} mobile app interface`}
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
        <PlatformHeader platform={platform} />

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          {platform.description}
        </p>

        <MobileDownloadButtons platform={platform} />

        <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          Free download, no registration required
        </p>

        <PlatformInfo platform={platform} />

        <MobilePlatformLinks />
      </motion.div>
    </div>
  );
}

/**
 * Platform header with icon and name
 */
function PlatformHeader({ platform }: { platform: Platform }) {
  const Icon = platform.icon;

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{platform.name}</h2>
      </div>
    </div>
  );
}

/**
 * Mobile-specific download buttons
 */
function MobileDownloadButtons({ platform }: { platform: Platform }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
      <div className="relative group w-full">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-6 sm:px-8 py-2 w-full text-sm sm:text-base">
          <Download className="w-4 h-4 mr-2" />
          Download
        </button>
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
  );
}

/**
 * Platform information grid
 */
function PlatformInfo({ platform }: { platform: Platform }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
          Version
        </p>
        <p className="font-semibold text-sm sm:text-base text-primary">{platform.version}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">Size</p>
        <p className="font-semibold text-sm sm:text-base text-primary">{platform.size}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">Build</p>
        <p className="font-semibold text-xs sm:text-sm">{platform.build}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
          Released
        </p>
        <p className="font-semibold text-xs sm:text-sm">{platform.date}</p>
      </div>
    </div>
  );
}

/**
 * Mobile-specific platform links
 */
function MobilePlatformLinks() {
  return (
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
  );
}
