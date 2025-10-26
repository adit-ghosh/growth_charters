"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-950/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/design-mode/gc%20logo%20-01.png"
            alt="Growth Charters"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg" style={{ color: "#748759" }}>
            Growth Charters
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#748759] relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-[#748759] relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#748759] relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-sm font-medium transition-colors hover:text-[#748759] relative flex items-center gap-1 group">
              Resources
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#748759] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <Link
                href="/download"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                Download
              </Link>
              <Link
                href="#growth-charters"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                Growth Charters
              </Link>
            </div>
          </div>

          <a href="https://app-growth-charters.netlify.app/login">
            <button
              className="px-6 py-2 rounded-full font-medium text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "#748759" }}
            >
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="w-6 h-0.5 bg-current transition-all" />
          <span className="w-6 h-0.5 bg-current transition-all" />
          <span className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-[#748759]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

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
                    href="#download"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download
                  </Link>
                  <Link
                    href="#growth-charters"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#748759] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Growth Charters
                  </Link>
                </div>
              )}
            </div>

            <a href="https://app-growth-charters.netlify.app/login" className="w-full">
              <button
                className="px-6 py-2 rounded-full font-medium text-white transition-all hover:shadow-lg w-full"
                style={{ backgroundColor: "#748759" }}
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
