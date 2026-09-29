"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function TechStackSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <section id="stack" className="py-24 bg-[var(--bg-surface)]/50 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
            Engineering Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-4">
            Technology Ecosystem &amp; Standards
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            A production-proven technology stack spanning reactive frontend frameworks, commercial CMS engines, and search-optimized architectures.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--border-subtle)]">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] ${
                activeCategoryIndex === idx
                  ? "bg-[#E76F51] text-white shadow-sm"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#E76F51]/30 border border-[var(--border-subtle)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {TECH_CATEGORIES[activeCategoryIndex].name}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {TECH_CATEGORIES[activeCategoryIndex].description}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#56754b] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Production Tested Standards</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="card-warm rounded-xl p-5 flex flex-col justify-between hover:border-[#E76F51]/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-surface)] text-[#E76F51] border border-[#E76F51]/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1 text-[11px] text-[var(--text-muted)] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#56754b]" />
                  <span>Verified Skill</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Architecture Quality Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#56754b]/15 text-[#56754b] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                Zero Boilerplate Bloat &bull; Strict Architecture
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Every tool in this ecosystem is deployed with purpose. No unnecessary libraries, clean modular code, and high Lighthouse benchmarks.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="text-xs font-semibold text-[#E76F51] hover:underline shrink-0"
          >
            See Real Deployments &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
