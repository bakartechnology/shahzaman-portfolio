"use client";

import React, { useState, useMemo } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { CaseStudyModal } from "./CaseStudyModal";
import {
  ExternalLink,
  BookOpen,
  Lock,
  Globe2,
  Code,
  Layers,
  ArrowUpRight,
  Filter
} from "lucide-react";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: "All Work", value: "All" },
    { label: "WordPress", value: "WordPress" },
    { label: "Shopify", value: "Shopify" },
    { label: "Web Applications", value: "Web Apps" },
    { label: "UI/UX & Creative", value: "Creative/UI" },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return PROJECTS;
    if (selectedFilter === "Creative/UI") {
      return PROJECTS.filter((p) => p.category === "Creative" || p.category === "UI/UX");
    }
    return PROJECTS.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  // Separate CMS and Coding for quick spotlight
  const cmsProjects = useMemo(() => PROJECTS.filter((p) => p.type === "CMS"), []);
  const codingProjects = useMemo(() => PROJECTS.filter((p) => p.type === "Code"), []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
            Curated Portfolio of Live Builds
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-4">
            Production Projects &amp; Digital Solutions
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Explore 18 verified live deployments spanning production WordPress institutional platforms, bespoke Shopify storefronts, and full-stack web applications.
          </p>
        </div>

        {/* CMS / Production Spotlight Stats */}
        <div id="cms" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#E76F51]">7 Live CMS Stores</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1">
              Production WordPress institutional sites &amp; high-converting Shopify e-commerce.
            </span>
          </div>
          <div className="flex flex-col border-y sm:border-y-0 sm:border-x border-[var(--border-subtle)] py-4 sm:py-0 sm:px-6">
            <span className="text-2xl font-bold text-[#56754b]">11 Web App Builds</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1">
              Modern React &amp; TypeScript apps, Point of Sale systems, and interactive tools.
            </span>
          </div>
          <div className="flex flex-col sm:pl-4">
            <span className="text-2xl font-bold text-[#C9A66B]">100% Verified URLs</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1">
              Every card connects directly to an active, demonstrable live production URL.
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-[var(--text-muted)] mr-1 hidden sm:block" />
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedFilter(tab.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] ${
                    isSelected
                      ? "bg-[#E76F51] text-white shadow-sm"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#E76F51]/30 border border-[var(--border-subtle)]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)]">
            Showing {filteredProjects.length} of {PROJECTS.length} verified projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const domain = project.liveUrl
              .replace("https://", "")
              .replace("http://", "")
              .replace(/\/$/, "");

            return (
              <div
                key={project.id}
                className="card-warm rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-[#E76F51]/40"
              >
                {/* Stylized Browser Frame Header */}
                <div className="p-4 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E76F51]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C9A66B]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#56754b]/80" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.status && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C9A66B]/15 text-[#C9A66B] font-semibold border border-[#C9A66B]/30 animate-pulse">
                          {project.status}
                        </span>
                      )}
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-card)] text-[#E76F51] border border-[var(--border-subtle)]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Browser Address Bar Simulation */}
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] truncate">
                    <Lock className="w-3 h-3 text-[#56754b] shrink-0" />
                    <span className="truncate">{domain}</span>
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#E76F51] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveCaseStudyProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#C9A66B]" />
                        <span>Case Study</span>
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-terracotta inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Injection */}
      <CaseStudyModal
        project={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </section>
  );
}
