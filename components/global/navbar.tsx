"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link" // Add this import

interface NavigationItem {
    label: string
    href?: string
    submenu?: { label: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Resources",
        submenu: [
            { label: "Growth Charters", href: "/" },
            { label: "Downloads", href: "/downloads" },
        ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about-us" }, // Changed from "/about" to "/about-us"
]

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                if (dropdownTimeoutRef.current) {
                    clearTimeout(dropdownTimeoutRef.current)
                }
                setOpenDropdown(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleMouseEnter = (label: string) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current)
        }
        setOpenDropdown(label)
    }

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null)
        }, 150)
    }

    return (
        <header
            className={`flex w-full items-center backdrop-blur-xl box-border border-b border-solid sticky top-0 z-50 px-[25px] max-sm:px-5 transition-all duration-500 ease-in-out ${isScrolled
                ? "h-[55px] bg-transparent border-gray-200 shadow-lg mt-10 rounded-[25px]"
                : "h-[65px] bg-transparent border-[#E6E6E6]"
            }`}
        >
            <div className="flex h-16 items-center w-full max-w-[1920px] mx-auto">
                {/* Logo */}
                <Link href="/" className={`flex items-center gap-3 max-sm:gap-2 transition-all duration-500 cursor-pointer ${isScrolled ? "scale-90" : "scale-100"}`}>
                    <div
                        className={`flex flex-col justify-center items-center shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] pt-[5.95px] pb-[7.05px] px-0 rounded-lg bg-gradient-to-br from-[#5444E9] to-[#4338CA] transition-all duration-500 ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}
                    >
                        <div
                            className={`text-white text-center font-bold transition-all duration-500 ${isScrolled ? "text-base leading-[20px]" : "text-lg leading-[26.1px]"}`}
                        >
                            GC
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1
                            className={`text-gray-900 font-bold tracking-[-0.16px] max-sm:text-sm max-sm:leading-5 transition-all duration-500 ${isScrolled ? "text-sm leading-[20px]" : "text-base leading-[23.2px]"}`}
                        >
                            Growth Charters
                        </h1>
                    </div>
                </Link>

                {/* Navigation Menu */}
                <div className="flex-1 flex justify-center">
                    <nav
                        className="flex items-center gap-[22px] max-md:gap-4 max-sm:hidden"
                        role="navigation"
                        aria-label="Primary navigation"
                    >
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                ref={item.submenu ? dropdownRef : undefined}
                                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                                onMouseLeave={() => item.submenu && handleMouseLeave()}
                            >
                                {item.submenu ? (
                                    <button
                                        className="flex items-center gap-1.5 pt-[5px] pb-[6.3px] px-2 rounded-lg transition-colors duration-200 group cursor-pointer hover:text-[#5444E9]"
                                    >
                    <span className="relative text-gray-500 text-sm font-normal leading-[20.3px] group-hover:text-[#5444E9] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#5444E9] after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {item.label}
                    </span>
                                        <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-[#5444E9] transition-all duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className={`flex flex-col items-start pt-[5px] pb-[6.3px] px-2 rounded-lg transition-colors duration-200 group cursor-pointer text-gray-500 hover:text-[#5444E9]`}
                                    >
                    <span className={`relative text-sm font-normal leading-[20.3px] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#5444E9] after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100`}>
                      {item.label}
                    </span>
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {item.submenu && openDropdown === item.label && (
                                    <div
                                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px] z-50"
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                        onMouseLeave={() => handleMouseLeave()}
                                    >
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.label}
                                                href={subitem.href}
                                                className={`block px-4 py-2.5 text-sm font-normal transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-[#5444E9] cursor-pointer`}
                                            >
                                                {subitem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Action Button - Desktop Only */}
                <Link href="/" className="flex justify-center items-center shadow-[0_6px_18px_0_rgba(84,68,233,0.18)] bg-[#5444E9] px-[15px] py-[9px] rounded-[10px] hover:bg-[#4338CA] hover:shadow-[0_8px_24px_0_rgba(84,68,233,0.25)] transition-all duration-200 cursor-pointer max-sm:hidden">
                    <span className="text-white text-center text-sm font-bold">Get Started</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden flex items-center justify-center w-10 h-10 text-gray-900"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div
                    className={`sm:hidden absolute left-0 right-0 bg-white/80 border-b border-gray-200 shadow-lg backdrop-blur-xl transition-all duration-300 ${isScrolled ? "top-[55px]" : "top-[65px]"}`}
                >
                    <nav className="flex flex-col py-4 px-[25px]">
                        {navigationItems.map((item) => (
                            <div key={item.label}>
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                                            className="flex items-center gap-2 w-full py-3 px-2 rounded-lg transition-colors duration-200 group cursor-pointer text-gray-500 hover:text-[#5444E9]"
                                        >
                      <span className="relative text-sm font-normal leading-[20.3px] group-hover:text-[#5444E9] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#5444E9] after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        {item.label}
                      </span>
                                            <ChevronDown className={`w-4 h-4 ml-auto transition-all duration-200 ${openMobileDropdown === item.label ? "rotate-180" : ""}`} />
                                        </button>
                                        {openMobileDropdown === item.label && (
                                            <div className="bg-gray-50 rounded-lg ml-4 my-2">
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.label}
                                                        href={subitem.href}
                                                        className={`block px-4 py-2.5 text-sm font-normal transition-colors duration-200 text-gray-700 hover:bg-white hover:text-[#5444E9] cursor-pointer`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subitem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className={`flex flex-col items-start py-3 px-2 rounded-lg transition-colors duration-200 group cursor-pointer text-gray-500 hover:text-[#5444E9]`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                    <span className="relative text-sm font-normal leading-[20.3px] group-hover:text-[#5444E9] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#5444E9] after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {item.label}
                    </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/pricing"
                            className="flex flex-col items-start py-3 px-2 rounded-lg transition-colors duration-200 group cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
              <span className="relative text-gray-500 text-sm font-normal leading-[20.3px] group-hover:text-[#5444E9] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#5444E9] after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Get Started
              </span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}