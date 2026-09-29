"use client";

import React, { useEffect } from "react";
import { PERSONAL_INFO, EXPERIENCES } from "@/lib/data";
import { X, Download, Printer, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] shadow-2xl p-6 sm:p-10 my-8 z-10 max-h-[92vh] overflow-y-auto">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#E76F51]/10 text-[#E76F51]">
              CURRICULUM VITAE
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
              Verified Professional Record
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Printable View</span>
            </a>

            <a
              href="/api/cv"
              download="Muhammad_Shahzaman_CV.html"
              className="cta-terracotta inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Readable CV Document Layout */}
        <div className="space-y-8 text-[var(--text-primary)] bg-[var(--bg-surface)]/40 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <h1 id="cv-modal-title" className="text-3xl font-editorial font-bold tracking-tight text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#E76F51] mt-1">
                {PERSONAL_INFO.primaryTitle}
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                {PERSONAL_INFO.secondaryTitle}
              </p>
            </div>

            <div className="text-xs space-y-1 sm:text-right font-mono text-[var(--text-secondary)]">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E76F51]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-[#56754b]" />
                <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/muhammed-shahzaman-developer
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <GitHubIcon className="w-3.5 h-3.5 text-[#C9A66B]" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/developwithshazzy
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Full-Stack Developer, WordPress &amp; Shopify Specialist, and Digital Product Engineer with a proven track record delivering responsive web applications, enterprise CMS platforms, and precision UI/UX interfaces. Demonstrated capability across institutional web portals, commercial e-commerce storefronts, and cutting-edge frontend architectures utilizing React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="font-bold text-[var(--text-primary)] block mb-1">Frontend &amp; Apps</span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, shadcn/ui
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="font-bold text-[var(--text-primary)] block mb-1">CMS &amp; E-Commerce</span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  WordPress, Shopify, Theme Customization, Liquid, WooCommerce, PHP, CMS Deployments
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="font-bold text-[var(--text-primary)] block mb-1">Tools, SEO &amp; AI</span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Git, GitHub, REST APIs, Vercel, Technical SEO, AI SEO (AEO/GEO), Prompt Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience Section strictly from CV */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-4">
              Professional Employment History
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="pb-5 border-b border-[var(--border-subtle)] last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-base font-bold text-[var(--text-primary)]">
                      {exp.role} &mdash; <span className="text-[var(--text-secondary)] font-normal">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-[#E76F51] font-semibold">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[var(--text-muted)] italic mb-3">
                    {exp.environment}
                  </p>

                  <ul className="space-y-2 mb-3">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#56754b] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">
            Open for remote and contract opportunities worldwide.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
