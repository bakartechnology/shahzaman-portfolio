"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase, Calendar, ChevronDown, CheckCircle2, Building2 } from "lucide-react";

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-24 bg-[var(--bg-surface)]/50 relative border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
            Verified Professional Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-4">
            Production Software &amp; CMS Experience
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            A track record grounded in real software lab mentorship, core web engineering, and commercial WordPress &amp; Shopify production deployments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#E76F51]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                    exp.featured
                      ? "bg-[#E76F51] border-white text-white shadow-sm"
                      : "bg-[var(--bg-card)] border-[#56754b] text-[#56754b]"
                  }`}
                >
                  <Briefcase className="w-3 h-3" />
                </div>

                {/* Experience Card */}
                <div
                  className={`card-warm rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                    isExpanded ? "border-[#E76F51]/40 shadow-lg" : "hover:border-[#E76F51]/20"
                  }`}
                >
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                          {exp.role}
                        </span>
                        {exp.featured && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E76F51]/10 text-[#E76F51] border border-[#E76F51]/20">
                            Primary Production Focus
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                        <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-[#56754b]" />
                          {exp.company}
                        </span>
                        <span>&bull;</span>
                        <span className="text-[var(--text-muted)] italic">
                          {exp.environment}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                        <Calendar className="w-3.5 h-3.5 text-[#E76F51]" />
                        <span>{exp.duration}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#E76F51]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Responsibilities & Verified Deliverables */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                      <div className="mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                          Verified Responsibilities &amp; Outcomes
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#56754b] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technical Environment Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
