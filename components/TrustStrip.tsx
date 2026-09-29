import React from "react";
import {
  Code,
  ShoppingBag,
  Sparkles,
  Layers,
  Search,
  Cpu,
  Palette,
  FileCode,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export function TrustStrip() {
  const capabilities = [
    { label: "WordPress Core & Custom Themes", icon: FileCode, tag: "2+ Yrs Production" },
    { label: "Shopify & Liquid E-Commerce", icon: ShoppingBag, tag: "Storefronts" },
    { label: "React 19 & Next.js 16", icon: Layers, tag: "Modern Apps" },
    { label: "TypeScript Engineering", icon: Code, tag: "Type-Safe" },
    { label: "Tailwind CSS & Design Tokens", icon: Palette, tag: "Precision UI" },
    { label: "Technical & AI SEO (AEO/GEO)", icon: Search, tag: "Discoverability" },
    { label: "Prompt Engineering & AI Workflows", icon: Cpu, tag: "AI Workflows" },
    { label: "Core Web Vitals & Speed", icon: ShieldCheck, tag: "100% Score Target" },
  ];

  return (
    <section className="py-12 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
              Engineered for Enterprise &amp; Growth
            </span>
            <h2 className="text-xl sm:text-2xl font-editorial font-bold text-[var(--text-primary)]">
              Core Competencies &amp; Technical Standards
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#56754b]" />
            <span>Designed for startups, software agencies, e-commerce retailers &amp; global tech teams</span>
          </div>
        </div>

        {/* Dynamic Credibility Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-warm p-4 rounded-xl flex flex-col justify-between group hover:border-[#E76F51]/40"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[#E76F51] group-hover:bg-[#E76F51] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
