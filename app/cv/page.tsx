"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO, EXPERIENCES } from "@/lib/data";
import { ArrowLeft, Download, Printer, Mail, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export default function CvPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#363636] p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Print Actions */}
        <div className="flex items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#575757] hover:text-[#56754b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/api/cv"
              download="Muhammad_Shahzaman_CV.html"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#e5e5e5] bg-white text-xs font-semibold hover:border-[#56754b] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#56754b]" />
              <span>Download File</span>
            </a>

            <button
              onClick={() => {
                if (typeof window !== "undefined") window.print();
              }}
              className="cta-terracotta inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Wrapper */}
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-[#e5e5e5]">
            <div>
              <h1 className="text-3xl sm:text-4xl font-editorial font-bold tracking-tight text-[#363636]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#E76F51] mt-1.5">
                {PERSONAL_INFO.primaryTitle}
              </p>
              <p className="text-xs text-[#575757] mt-0.5">
                {PERSONAL_INFO.secondaryTitle}
              </p>
            </div>

            <div className="text-xs space-y-1 sm:text-right font-mono text-[#575757]">
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

          {/* Professional Narrative */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-[#575757] leading-relaxed">
              Full-Stack Developer, WordPress &amp; Shopify Specialist, and Digital Product Engineer with a proven track record delivering responsive web applications, enterprise CMS platforms, and precision UI/UX interfaces. Demonstrated capability across institutional web portals, commercial e-commerce storefronts, and cutting-edge frontend architectures utilizing React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5]">
                <span className="font-bold text-[#363636] block mb-1">Frontend Engineering</span>
                <p className="text-[#575757]">
                  React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, shadcn/ui
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5]">
                <span className="font-bold text-[#363636] block mb-1">CMS &amp; E-Commerce</span>
                <p className="text-[#575757]">
                  WordPress, Shopify, Theme Customization, WooCommerce, Liquid, PHP, Live Deployments
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5]">
                <span className="font-bold text-[#363636] block mb-1">Search, AI &amp; Tooling</span>
                <p className="text-[#575757]">
                  Git, GitHub, REST APIs, Vercel, Technical SEO, AI SEO (AEO/GEO), Prompt Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience from CV */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] mb-4">
              Professional Employment History
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="pb-5 border-b border-[#e5e5e5] last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="text-sm sm:text-base font-bold text-[#363636]">
                      {exp.role} &mdash; <span className="font-normal text-[#575757]">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-[#E76F51] font-semibold">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#7e7e7e] italic mb-3">
                    {exp.environment}
                  </p>

                  <ul className="space-y-2 mb-3">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[#575757] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#56754b] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f6f6f6] text-[#7e7e7e] border border-[#e5e5e5]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
