"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { ArrowUp, Mail, Heart, Globe } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Identity & Mission */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-xs">
                  {PERSONAL_INFO.initials}
                </div>
                <span className="font-bold text-base text-[var(--text-primary)]">
                  {PERSONAL_INFO.name}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mb-6">
                Web Developer, Full-Stack Engineer, and CMS Specialist crafting bespoke WordPress, Shopify, and Next.js digital platforms for international clients.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Muhammad Shahzaman"
                className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#E76F51] text-[var(--text-secondary)] hover:text-[#E76F51] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#56754b] text-[var(--text-secondary)] hover:text-[#56754b] transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#C9A66B] text-[var(--text-secondary)] hover:text-[#C9A66B] transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li>
                <a href="#about" className="hover:text-[#E76F51] transition-colors">
                  About Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E76F51] transition-colors">
                  Capabilities &amp; Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#E76F51] transition-colors">
                  Verified Experience
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-[#E76F51] transition-colors">
                  Technology Ecosystem
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#E76F51] transition-colors">
                  Curated Projects
                </a>
              </li>
              <li>
                <a href="#cv" className="hover:text-[#E76F51] transition-colors">
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </div>

          {/* CMS & Web App Categories */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
              CMS &amp; Builds
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li>
                <a href="https://dawley.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Dawley Institute (WP)
                </a>
              </li>
              <li>
                <a href="https://dawleycafe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Dawley Cafe (Shopify)
                </a>
              </li>
              <li>
                <a href="https://jazakbuilders.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Jazak Builders (WP)
                </a>
              </li>
              <li>
                <a href="https://cloth-pos-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Cloth POS System (App)
                </a>
              </li>
              <li>
                <a href="https://spotify-music-player-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Spotify Music Player (App)
                </a>
              </li>
              <li>
                <a href="https://invoice-builder-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E76F51] transition-colors">
                  Invoice Builder (App)
                </a>
              </li>
            </ul>
          </div>

          {/* International Reach & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#56754b]" />
                <span>Global Reach</span>
              </h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-4">
                Available for clients across Pakistan, US, UK, Germany, Netherlands, Nordic countries &amp; worldwide.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[#E76F51] text-[var(--text-primary)] hover:text-[#E76F51] transition-all shadow-xs w-fit"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {new Date().getFullYear()} Muhammad Shahzaman. All rights reserved. Strictly verified record.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js 16</span>
            <span>&bull;</span>
            <span>TypeScript</span>
            <span>&bull;</span>
            <span>Tailwind CSS</span>
            <span>&bull;</span>
            <span>Warm Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
