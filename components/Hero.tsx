"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import {
  ArrowRight,
  Download,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2,
  Workflow,
  Globe2
} from "lucide-react";

export function Hero({ onOpenCvModal }: { onOpenCvModal: () => void }) {
  const [activeTab, setActiveTab] = useState<"code" | "cms" | "vitals">("code");

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grain"
    >
      {/* Subtle Warm Gradient Highlights */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E76F51]/12 via-[#C9A66B]/8 to-transparent rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#56754b]/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Availability Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E76F51] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E76F51]"></span>
              </span>
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Muhammad Shahzaman &bull; Full-Stack &amp; CMS Engineer
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-bold text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6">
              Building Digital Experiences That{" "}
              <span className="italic font-normal text-[#E76F51] underline decoration-[#E76F51]/30 decoration-wavy decoration-2">
                Perform
              </span>
              ,{" "}
              <span className="text-[var(--text-primary)]">Convert</span> &amp;{" "}
              <span className="text-[#C9A66B]">Stand Out</span>.
            </h1>

            {/* Concise, Direct Professional Positioning Paragraph */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8 font-normal">
              Senior-level web developer and digital product engineer crafting enterprise WordPress &amp; Shopify storefronts, reactive Next.js &amp; TypeScript applications, and precision UI/UX workflows designed for global brands, software houses, and startups.
            </p>

            {/* 3 Value Anchor Badges */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xl mb-8 p-3 rounded-2xl bg-[var(--bg-surface)]/80 border border-[var(--border-subtle)]">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-[#E76F51] tracking-tight">
                  {PERSONAL_INFO.experienceYears.frontendFullstack}
                </span>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] font-medium leading-tight">
                  Frontend &amp; Full-Stack
                </span>
              </div>
              <div className="flex flex-col border-x border-[var(--border-subtle)] px-2 sm:px-3">
                <span className="text-lg sm:text-xl font-bold text-[#56754b] tracking-tight">
                  {PERSONAL_INFO.experienceYears.uiuxDesign}
                </span>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] font-medium leading-tight">
                  UI/UX Architecture
                </span>
              </div>
              <div className="flex flex-col pl-1 sm:pl-2">
                <span className="text-lg sm:text-xl font-bold text-[#C9A66B] tracking-tight">
                  {PERSONAL_INFO.experienceYears.promptEngineering}
                </span>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] font-medium leading-tight">
                  Prompt Engineering
                </span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="cta-terracotta inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
              >
                <span>Hire / Contact Me</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-[#56754b] hover:text-[var(--text-primary)] hover:bg-[#56754b]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* International Reach strip */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
              <Globe2 className="w-4 h-4 text-[#56754b] shrink-0" />
              <span>
                Collaborating with teams across UK, US, Europe, Pakistan &amp; worldwide.
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Digital Workspace */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Floating Technology Pills Orbiting the workspace */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-2 z-20 px-3 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[#E76F51]/30 shadow-md text-xs font-semibold text-[#E76F51] animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>React 19 &bull; Next.js 16</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-3 z-20 px-3 py-1.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[#56754b]/40 shadow-md text-xs font-semibold text-[#56754b]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Shopify &amp; WordPress Live</span>
              </div>

              {/* Main Interactive Terminal / Workspace Card */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#E76F51]/30">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E76F51]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#C9A66B]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#56754b]/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-[var(--text-muted)]">
                      shahzaman-workspace.tsx
                    </span>
                  </div>

                  {/* Workspace Tab Switcher */}
                  <div className="flex items-center gap-1 bg-[var(--bg-card)] p-0.5 rounded-lg border border-[var(--border-subtle)] text-[11px]">
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`px-2 py-0.5 rounded font-medium transition-colors ${
                        activeTab === "code"
                          ? "bg-[#E76F51] text-white"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      Engine
                    </button>
                    <button
                      onClick={() => setActiveTab("cms")}
                      className={`px-2 py-0.5 rounded font-medium transition-colors ${
                        activeTab === "cms"
                          ? "bg-[#E76F51] text-white"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      CMS Matrix
                    </button>
                    <button
                      onClick={() => setActiveTab("vitals")}
                      className={`px-2 py-0.5 rounded font-medium transition-colors ${
                        activeTab === "vitals"
                          ? "bg-[#E76F51] text-white"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      Vitals
                    </button>
                  </div>
                </div>

                {/* Workspace Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed">
                  {activeTab === "code" && (
                    <div className="space-y-2 text-[var(--text-secondary)]">
                      <div className="text-[var(--text-muted)] italic">
                        // Senior Full-Stack &amp; Product Developer Entity
                      </div>
                      <div>
                        <span className="text-[#E76F51]">const</span>{" "}
                        <span className="text-[#C9A66B]">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">name:</span>{" "}
                        <span className="text-[#56754b]">&quot;Muhammad Shahzaman&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">coreStack:</span> [
                        <span className="text-[#56754b]">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-[#56754b]">&quot;TypeScript&quot;</span>,{" "}
                        <span className="text-[#56754b]">&quot;Tailwind&quot;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">cmsMastery:</span> &#123;
                      </div>
                      <div className="pl-8">
                        <span className="text-[var(--text-primary)]">wordpress:</span>{" "}
                        <span className="text-[#E76F51]">&quot;Themes &amp; Custom Layouts&quot;</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-[var(--text-primary)]">shopify:</span>{" "}
                        <span className="text-[#E76F51]">&quot;Liquid &amp; Storefronts&quot;</span>,
                      </div>
                      <div className="pl-4">&#125;,</div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">aiAcceleration:</span>{" "}
                        <span className="text-[#C9A66B]">&quot;Prompt Engineering&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">liveProjects:</span>{" "}
                        <span className="text-[#E76F51]">18</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[var(--text-primary)]">status:</span>{" "}
                        <span className="text-[#56754b]">&quot;Ready for Hire&quot;</span>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  )}

                  {activeTab === "cms" && (
                    <div className="space-y-3 font-sans">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        Active Production CMS Deployments
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#56754b]" />
                            <span className="font-medium text-xs text-[var(--text-primary)]">
                              Dawley Institute (dawley.io)
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-[#E76F51]">WordPress</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#56754b]" />
                            <span className="font-medium text-xs text-[var(--text-primary)]">
                              Dawley Cafe (dawleycafe.com)
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-[#56754b]">Shopify</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#56754b]" />
                            <span className="font-medium text-xs text-[var(--text-primary)]">
                              Jazak Builders (jazakbuilders.ca)
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-[#E76F51]">WordPress</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#56754b]" />
                            <span className="font-medium text-xs text-[var(--text-primary)]">
                              Teaser Tackle (teasertackle.com)
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-[#56754b]">Shopify</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "vitals" && (
                    <div className="space-y-4 font-sans">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        Lighthouse &amp; Engineering Quality Audit
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                          <div className="text-2xl font-bold text-[#56754b]">100</div>
                          <div className="text-[11px] font-medium text-[var(--text-secondary)]">
                            Performance
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                          <div className="text-2xl font-bold text-[#56754b]">100</div>
                          <div className="text-[11px] font-medium text-[var(--text-secondary)]">
                            Accessibility
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                          <div className="text-2xl font-bold text-[#56754b]">100</div>
                          <div className="text-[11px] font-medium text-[var(--text-secondary)]">
                            Best Practices
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                          <div className="text-2xl font-bold text-[#56754b]">100</div>
                          <div className="text-[11px] font-medium text-[var(--text-secondary)]">
                            Technical SEO
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] text-center">
                        Zero layout shift &bull; Fast TTFB &bull; Structured AEO Schema
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Footer Live Interactive Indicator */}
                <div className="px-4 py-3 bg-[var(--bg-surface)]/70 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-[#E76F51]" />
                    <span>Next.js App Router &bull; Strict TypeScript</span>
                  </div>
                  <a
                    href="#projects"
                    className="text-[#E76F51] hover:underline font-semibold flex items-center gap-1 text-[11px]"
                  >
                    <span>Inspect Builds</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
