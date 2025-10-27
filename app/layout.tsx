import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";
import { MorphingHeader } from "@/components/global/morphing-header";
import { AnimatedFooter } from "@/components/global/animated-footer";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Growth Charters - AI-Powered Career & Life Success",
  description:
    "Personalized AI-driven career and life success scoring to help you grow and expand.",
  generator: "Growth Charters - AI-Powered Career & Life Success",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Header - Appears on all pages */}
          <MorphingHeader />

          {/* Main content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer - Appears on all pages */}
          <AnimatedFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
