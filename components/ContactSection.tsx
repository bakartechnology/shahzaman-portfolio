"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/data";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Globe2,
  Clock,
  Sparkles
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Full-Stack Web App",
    budgetRange: "$2,000 - $5,000",
    message: "",
    honeypot: "", // Bot trap
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const projectTypes = [
    "Full-Stack Web App",
    "Custom WordPress Website",
    "Shopify Storefront",
    "UI/UX Interface Design",
    "Technical SEO & Performance",
    "Prompt Engineering / AI Workflow",
    "Full-Time / Contract Role"
  ];

  const budgetOptions = [
    "< $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000+",
    "Full-Time Salary / Monthly Retainer",
    "Discuss Later"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    // Basic email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#E76F51", "#56754b", "#C9A66B"],
          });
        } catch {
          // graceful fallback if canvas-confetti is not loaded
        }
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit message. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network issue. Please send an email directly to codebyshazzy@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-[#E76F51]/8 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Value Proposition & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
                Initiate Collaboration
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-6">
                Have a product, website or digital experience in mind?
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                Whether you represent a fast-moving startup, an established agency, an e-commerce brand, or need a dedicated full-stack engineer on contract, I am ready to build solutions that exceed expectations.
              </p>

              {/* Direct Channels Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="card-warm p-4 rounded-xl flex items-center gap-4 group hover:border-[#E76F51]/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[#E76F51] group-hover:bg-[#E76F51] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-warm p-4 rounded-xl flex items-center gap-4 group hover:border-[#56754b]/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[#56754b] group-hover:bg-[#56754b] group-hover:text-white transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      linkedin.com/in/muhammed-shahzaman-developer
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-warm p-4 rounded-xl flex items-center gap-4 group hover:border-[#C9A66B]/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[#C9A66B] group-hover:bg-[#C9A66B] group-hover:text-white transition-colors">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      GitHub Repositories
                    </span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      github.com/developwithshazzy
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time & Timezone Guarantee */}
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                <Clock className="w-4 h-4 text-[#56754b]" />
                <span>Guaranteed Response within 24 Hours</span>
              </div>
              <p>
                Flexible overlap across North American, European (CET/GMT), and Asian timezones.
              </p>
            </div>
          </div>

          {/* Right Column: Production-Ready Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-warm p-6 sm:p-10 rounded-3xl">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#56754b]/15 text-[#56754b] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-editorial font-bold text-[var(--text-primary)]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your project details have been transmitted. I will review your requirements and respond promptly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "Full-Stack Web App",
                        budgetRange: "$2,000 - $5,000",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#E76F51] hover:underline pt-4"
                  >
                    <span>Send another inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      Project Inquiry Form
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      * Required fields
                    </span>
                  </div>

                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Startup / Agency / Brand"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                        Project Scope / Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                      >
                        {projectTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                    >
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
                      Project Goals &amp; Overview *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the goals, existing tech stack, target timeline, or specific challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="cta-terracotta w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message / Start Collaboration</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[var(--text-muted)] text-center pt-2">
                    Direct confidential communication. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
