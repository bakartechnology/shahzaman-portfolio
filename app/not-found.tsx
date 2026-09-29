import React from "react";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#363636] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E76F51]/15 text-[#E76F51] font-mono text-xl font-bold">
          404
        </div>

        <div>
          <h1 className="text-3xl font-editorial font-bold text-[#363636] mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-[#575757] leading-relaxed">
            The requested destination does not exist or has been relocated within Muhammad Shahzaman&apos;s digital portfolio.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="cta-terracotta inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e5e5e5] bg-white text-xs font-semibold text-[#363636] hover:border-[#56754b] transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
