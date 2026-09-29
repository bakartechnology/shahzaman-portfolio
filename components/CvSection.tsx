"use client";

import React from "react";
import { FileText, Download, Eye, ShieldCheck, CheckCircle2, GraduationCap } from "lucide-react";

interface CvSectionProps {
  onOpenCvModal: () => void;
}

export function CvSection({ onOpenCvModal }: CvSectionProps) {
  return (
    <section id="cv" className="py-24 bg-[var(--bg-surface)]/60 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-[#56754b]/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[#56754b] mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-[var(--text-primary)] mb-4">
                Want the full professional profile?
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-6">
                Access the complete documentation of Muhammad Shahzaman&apos;s professional employment history at Dawley Institute of Technology, comprehensive WordPress and Shopify deliverables, and technical competencies.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#56754b]" />
                  <span>2+ Years WordPress &amp; Shopify Production</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#56754b]" />
                  <span>18 Verified Live Production Deployments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#56754b]" />
                  <span>React, Next.js &amp; TypeScript Stack</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#56754b]" />
                  <span>Strict Accuracy &amp; Clean Architecture</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenCvModal}
                  className="cta-terracotta inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View CV</span>
                </button>

                <a
                  href="/api/cv"
                  download="Muhammad_Shahzaman_CV.html"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56754b]"
                >
                  <Download className="w-4 h-4 text-[#56754b]" />
                  <span>Download CV</span>
                </a>

                <a
                  href="/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[#56754b] underline underline-offset-4"
                >
                  Open in Clean Print Tab
                </a>
              </div>
            </div>

            {/* Right Document Preview Accent */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-inner text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] mx-auto flex items-center justify-center text-[#56754b] shadow-xs">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[var(--text-primary)]">
                    Muhammad_Shahzaman_CV
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                    Updated &bull; Verified Record
                  </p>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                  Tailored for international companies, engineering teams, and direct hiring partners.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
