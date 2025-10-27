import { Apple, Wind as Windows, Link2 as Linux, Play } from "lucide-react";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Define platform types with proper typing for icons
type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface DownloadOption {
  label: string;
  format: string;
}

export interface Platform {
  name: string;
  icon: IconComponent;
  description: string;
  version: string;
  build: string;
  date: string;
  size: string;
  requirements: string;
  downloads: DownloadOption[];
}

// Define proper types for the platform objects
export type DesktopPlatforms = {
  windows: Platform;
  macos: Platform;
  linux: Platform;
};

export type MobilePlatforms = {
  ios: Platform;
  android: Platform;
};

export type DesktopPlatformKey = keyof DesktopPlatforms;
export type MobilePlatformKey = keyof MobilePlatforms;

// Platform data constants
export const desktopPlatforms: DesktopPlatforms = {
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

export const mobilePlatforms: MobilePlatforms = {
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
