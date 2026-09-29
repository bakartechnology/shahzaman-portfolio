"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { PERSONAL_INFO } from "@/lib/data";
import { Sun, Moon, Menu, X, ArrowUpRight, Globe2, FileText, Send } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracker
      const sections = ["home", "about", "services", "experience", "stack", "projects", "cms", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open & close on escape/resize
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "CMS", href: "#cms", id: "cms" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "navbar-scrolled py-2.5 sm:py-3"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo & Identity */}
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b] rounded-lg p-1 min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
                {PERSONAL_INFO.initials}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[#56754b] transition-colors truncate max-w-[130px] xs:max-w-[180px] sm:max-w-none">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-[var(--text-secondary)] hidden sm:flex items-center gap-1.5 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56754b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#56754b]"></span>
                  </span>
                  International Availability
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full navbar-nav-pill">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium navbar-nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b] ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                className="p-2 sm:p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#56754b]/40 text-[var(--text-primary)] hover:text-[#56754b] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#C9A66B]" />}
              </button>

              {/* Direct CV Link (Desktop/Tablet) */}
              <a
                href="#cv"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#56754b] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
              >
                CV
              </a>

              {/* Prominent Hire Me CTA (Hidden on tiny phones, visible on xs+) */}
              <a
                href="#contact"
                className="cta-terracotta hidden xs:inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open mobile menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#E76F51]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full navbar-mobile-drawer shadow-2xl px-5 sm:px-6 py-5 transition-all duration-300 max-h-[calc(100vh-70px)] overflow-y-auto border-b border-[var(--border-subtle)]">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Quick Navigation
                </span>
                <span className="text-xs text-[#56754b] font-medium flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5" /> Global Remote Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? "bg-[#56754b] text-white font-semibold shadow-xs"
                        : "text-[var(--text-primary)] hover:bg-[var(--bg-surface)] bg-[var(--bg-card)] border border-[var(--border-subtle)]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2.5">
                <a
                  href="#cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-[var(--border-medium)] text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#56754b]" />
                  <span>View Professional CV &amp; Credentials</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="cta-terracotta w-full text-center py-3 px-4 rounded-xl text-sm font-semibold shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Project / Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
