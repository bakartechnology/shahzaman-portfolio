import React from "react";
import { SERVICES } from "@/lib/data";
import {
  Globe,
  Layers,
  FileCode,
  ShoppingBag,
  Palette,
  Search,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  Check
} from "lucide-react";

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    Layers,
    FileCode,
    ShoppingBag,
    Palette,
    Search,
    Sparkles,
    Bot,
    Zap
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E76F51]">
              Capabilities &amp; Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[var(--text-primary)] mt-2 mb-4">
              Comprehensive Digital Services
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              From bespoke WordPress and Shopify e-commerce platforms to custom full-stack web applications and AI-optimized SEO architectures.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E76F51] hover:underline"
          >
            <span>Have a specific requirement? Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid (3x3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="card-warm rounded-2xl p-7 flex flex-col justify-between group hover:border-[#E76F51]/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] flex items-center justify-center text-[#E76F51] group-hover:bg-[#E76F51] group-hover:text-white transition-all duration-200 mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-[var(--border-subtle)]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#56754b] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-between text-xs font-semibold text-[#E76F51] pt-3 border-t border-[var(--border-subtle)] hover:translate-x-1 transition-transform"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
