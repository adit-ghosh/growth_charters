"use client"
import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function AnimatedFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xs md:text-sm lg:text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xs md:text-sm font-bold">
                GC
              </div>
              <span className="text-xs md:text-sm lg:text-base">Growth Charters</span>
            </div>
            <p className="text-xs md:text-xs lg:text-sm text-muted-foreground">
              AI-powered career and life success scoring for personalized growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Product Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-xs md:text-sm lg:text-base">Product</h3>
              <ul className="space-y-2 text-xs md:text-xs lg:text-sm">
                <li>
                  <Link href="/404" className="text-muted-foreground hover:text-primary transition-colors">
                    Growth Charters
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-muted-foreground hover:text-primary transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-xs md:text-sm lg:text-base">Quick Links</h3>
              <ul className="space-y-2 text-xs md:text-xs lg:text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-xs md:text-sm lg:text-base">Connect</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-xs lg:text-sm text-muted-foreground">
          <p>&copy; 2025 Growth Charters. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-services" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
