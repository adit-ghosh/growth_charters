"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MorphingHeader() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "w-[90%] left-1/2 -translate-x-1/2 top-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-slate-950/10 dark:border-slate-800/20"
          : "w-full rounded-none bg-transparent border-b border-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/images/icon.svg"
              alt="Growth Charters Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg lg:inline text-foreground">Growth Charters</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-[#748759] relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-lg font-medium transition-colors hover:text-[#748759] relative flex items-center gap-1 group">
              Resources
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
            </button>

            <div
              className={`absolute left-0 mt-0 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg transition-all duration-300 py-2 ${isResourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <Link
                href="/download"
                className="block px-4 py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-[#748759] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                Download
              </Link>
              <Link
                href="https://app-growth-charters.netlify.app/login"
                className="block px-4 py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-[#748759] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                Growth Charters
              </Link>
            </div>
          </div>

          <Link
            href="/pricing"
            className="text-lg font-medium transition-colors hover:text-[#748759] relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium transition-colors hover:text-[#748759] relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link href="https://app-growth-charters.netlify.app/login">
            <Button
              size="sm"
              className="hidden sm:inline-flex rounded-full font-medium text-white hover:shadow-lg"
              style={{ backgroundColor: "#748759" }}
            >
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-slate-950/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-[#748759]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Resources Dropdown */}
            <div className="space-y-2">
              <button
                className="text-sm font-medium transition-colors hover:text-[#748759] flex items-center gap-1 w-full"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
              </button>

              {isResourcesOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/download"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download
                  </Link>
                  <Link
                    href="https://app-growth-charters.netlify.app/login"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Growth Charters
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:text-[#748759]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-[#748759]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>



          </nav>
        </div>
      )}
    </header>
  )
}
