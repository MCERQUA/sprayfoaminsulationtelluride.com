"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
          >
            shield
          </span>
          <span className="text-2xl font-black uppercase italic text-slate-900 dark:text-white font-headline tracking-tighter">
            Telluride Thermal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-label"
          >
            Services
          </Link>
          <Link
            href="/tools"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-label"
          >
            Calculator
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-label"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="primary-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-outline-variant/20 px-6 py-6 space-y-4">
          <Link
            href="/services"
            className="block text-slate-600 dark:text-slate-400 hover:text-primary font-label"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/tools"
            className="block text-slate-600 dark:text-slate-400 hover:text-primary font-label"
            onClick={() => setMobileOpen(false)}
          >
            Calculator
          </Link>
          <Link
            href="/contact"
            className="block text-slate-600 dark:text-slate-400 hover:text-primary font-label"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="primary-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg inline-block"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
