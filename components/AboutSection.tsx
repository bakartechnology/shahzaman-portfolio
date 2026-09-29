"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import {
  Code2,
  Layout,
  Sparkles,
  Compass,
  ArrowRight,
  Shield,
  Workflow,
  Cpu
} from "lucide-react";

export function AboutSection() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "1. Modern Full-Stack & Systems Architecture",
      subtitle: "TypeScript, React, Next.js & Modular Components",
      content:
        "Every project begins with clean architectural boundaries. From component modularity and type-safe data pipelines to high-performance rendering via Next.js App Router, the code is engineered for endurance, maintainability, and zero technical debt.",
      icon: Code2,
      color: "#E76F51",
      highlights: ["Strict TypeScript typing", "Clean folder structure", "Component reusability", "Optimistic state management"]
    },
    {
      title: "2. Enterprise CMS & E-Commerce Mastery",
      subtitle: "WordPress Customization & Shopify Storefronts",
      content:
        "Deep commercial experience in WordPress and Shopify ecosystems. Developing bespoke themes, custom template structures, WooCommerce checkouts, and Liquid sections that align seamlessly with business requirements and deliver proven sales conversion.",
      icon: Layout,
      color: "#56754b",
      highlights: ["Custom WordPress themes & layouts", "Shopify Liquid template customization", "Complex form funnels", "Speed & security hardening"]
    },
    {
      title: "3. UI/UX Polish & AI-Accelerated Engineering",
      subtitle: "UI/UX Craft & AI Prompt Engineering",
      content:
        "Bridging the divide between high-end digital design and robust code. Utilizing prompt engineering to accelerate prototyping cycles, optimize complex algorithms, and test user experiences under diverse international conditions.",
      icon: Sparkles,
      color: "#C9A66B",
      highlights: ["Editorial visual hierarchy", "Zero layout shift (CLS 0.00)", "LLM prompt optimization", "Figma to pixel-perfect code"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
            About Muhammad Shahzaman
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-6">
            Where Technical Precision Meets Bespoke Digital Design.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            I build digital products, custom CMS platforms, and web applications that solve tangible problems for businesses. Rather than relying on generic templates, I take a holistic approach combining rigorous frontend engineering, production CMS architecture, and AI-accelerated workflows.
          </p>
        </div>

        {/* Two Column Narrative: Abstract Brand Visual & Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Abstract Personal Brand Visual (No Fake Portrait!) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl flex flex-col items-center justify-between overflow-hidden group">
              {/* Animated Geometry Background */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#E76F51]/10 via-[#C9A66B]/10 to-[#56754b]/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Central Geometric Monogram Emblem */}
              <div className="relative z-10 w-full flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#E76F51] uppercase tracking-widest">
                  Brand Identity // MS
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  Active Verified
                </span>
              </div>

              {/* Generative Concentric Rings Visual */}
              <div className="relative z-10 my-auto flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer Orbit */}
                  <div className="w-48 h-48 rounded-full border border-dashed border-[#E76F51]/30 animate-spin" style={{ animationDuration: "30s" }} />
                  {/* Middle Orbit */}
                  <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#56754b]/40 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
                  {/* Inner Halo */}
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#E76F51] via-[#C9A66B] to-[#56754b] opacity-90 shadow-lg flex items-center justify-center text-white font-bold text-2xl font-editorial tracking-wider">
                    MS
                  </div>
                </div>
              </div>

              {/* Core Philosophy Caption */}
              <div className="relative z-10 w-full pt-4 border-t border-[var(--border-subtle)] text-center">
                <p className="text-xs font-medium text-[var(--text-secondary)] italic">
                  &ldquo;Code should perform effortlessly; design should communicate with purpose.&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-center gap-4 text-[11px] font-mono text-[var(--text-muted)]">
                  <span>Web</span>
                  <span>&bull;</span>
                  <span>CMS</span>
                  <span>&bull;</span>
                  <span>UI/UX</span>
                  <span>&bull;</span>
                  <span>AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Strategic Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isSelected
                      ? "bg-[var(--bg-card)] border-[#E76F51]/50 shadow-md"
                      : "bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] hover:border-[#E76F51]/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200"
                      style={{
                        backgroundColor: isSelected ? pillar.color : "var(--bg-surface-elevated)",
                        color: isSelected ? "#FFFFFF" : pillar.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {pillar.subtitle}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
                        {pillar.content}
                      </p>

                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2">
                          {pillar.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs text-[var(--text-primary)]">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
