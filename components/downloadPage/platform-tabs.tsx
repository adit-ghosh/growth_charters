import { motion } from "framer-motion";
import { Platform } from "./platform-data";

interface PlatformTabsProps<T extends string> {
  platforms: Record<T, Platform>;
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabType: "desktop" | "mobile";
}

/**
 * Tab navigation component for platform selection
 * Features animated underline and responsive design
 * Uses generic types to handle both desktop and mobile platforms
 */
export function PlatformTabs<T extends string>({
  platforms,
  activeTab,
  onTabChange,
  tabType,
}: PlatformTabsProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 sm:gap-8 mb-12 sm:mb-16 border-b border-border pb-4 overflow-x-auto"
    >
      {(Object.entries(platforms) as [T, Platform][]).map(([key, platform]) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          className="relative text-sm sm:text-lg font-medium transition-colors duration-200 whitespace-nowrap"
        >
          <span
            className={`${
              activeTab === key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {platform.name}
          </span>
          {activeTab === key && (
            <motion.div
              layoutId={`${tabType}Tab`}
              className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}
