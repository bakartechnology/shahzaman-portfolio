"use client";

import React, { useEffect } from "react";
import { Project } from "@/lib/data";
import { X, ExternalLink, CheckCircle2, Layers, Globe, Shield } from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {
    overview: project.description,
    challenge: "Engineering an intuitive and performant digital experience tailored to end-user needs and brand requirements.",
    approach: "Utilized clean modular architecture, responsive design tokens, and performance optimizations to deliver a robust production deployment.",
    keyDeliverables: ["Modern responsive interface", "Cross-browser validation", "Fast asset delivery"]
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] shadow-2xl p-6 sm:p-8 my-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#E76F51]/10 text-[#E76F51] border border-[#E76F51]/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Case Study &bull; {project.type}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-editorial font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E76F51] mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 text-[#E76F51]" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] mb-2">
                <Layers className="w-4 h-4 text-[#56754b]" />
                <span>Architectural Approach</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Key Engineering Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#56754b] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Pill Box */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Technology Stack Employed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[var(--text-muted)]">
            Verified live project in Muhammad Shahzaman&apos;s production portfolio.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all"
            >
              Close
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-terracotta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
