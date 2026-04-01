"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ToolsPage() {
  const [thickness, setThickness] = useState(3);
  const [sqft, setSqft] = useState("");

  const heatRetention = Math.min(42 + (thickness - 3) * 5, 95);
  const annualSavings = sqft ? Math.round(parseInt(sqft) * 0.8) : 1840;

  return (
    <main className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4">
              Precision Engineering
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter text-on-background leading-tight mb-6">
              The Efficiency<br />
              <span className="text-primary">Benchmark</span>
            </h2>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Calculate the exact thermal performance of your mountain residence. Our tools translate complex R-values
              into tangible energy protection.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 aspect-[4/3]">
              <Image
                alt="Modern architectural blueprint on a clean desk with technical drawings"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjCf8gDHWcpxR3ND_w8-qsbjPrwcEkrk3eeFQ5rDX_ACwboR7sSq9rSFDPpGTILhOXQ-o5dJwFEf4luLTQLMVDrWkWjH6gC2s90KGeXzvoinORFlaJiryWPwMZrqTy4GgTNUSaGgc0g2W7f77WKRZqCmoirCAhXRhRtEcolkGo8WxLKRrwTdmOqUh6Bri4ETIvl9B-MTKcq-ZOBSaHYafdmmjoeagi0HJlXq6eqZbqLhCjdBQzA7ZWaRClacaMeyeXOBN42ycbd20"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden lg:block border-l-4 border-primary">
              <p className="text-3xl font-black font-headline text-primary">ROI 3.5x</p>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
                Avg. Thermal Recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-none">
            <h3 className="text-2xl font-bold font-headline mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">calculate</span>
              ROI Configuration
            </h3>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Current Insulation Thickness (Inches)
                </label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-sm font-bold text-on-surface">
                  <span>0&quot;</span>
                  <span className="text-primary text-lg">{thickness} Inches</span>
                  <span>15&quot;</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Home Square Footage
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:bg-surface-container-highest focus:ring-0 transition-colors font-bold text-lg"
                    placeholder="2,500"
                  />
                  <span className="absolute right-4 top-4 text-slate-400 font-bold">SQ FT</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary-container transition-colors flex justify-center items-center gap-2"
                >
                  Run Thermal Simulation
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Results Display (Bento Style) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Heat Retention</p>
              <p className="text-5xl font-black font-headline text-on-background mb-4">+{heatRetention}%</p>
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: `${heatRetention}%` }} />
              </div>
            </div>
            <div className="bg-on-background p-8 rounded-xl text-white">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Est. Annual Savings</p>
              <p className="text-5xl font-black font-headline text-primary-container mb-4">${annualSavings.toLocaleString()}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Based on Telluride seasonal averages and standard utility tariffs.
              </p>
            </div>
            <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl flex items-center gap-8">
              <div
                className="thermal-indicator h-24 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(to bottom, #a04100, #005cae)" }}
              />
              <div>
                <h4 className="text-xl font-bold font-headline mb-2">
                  Recommended: Closed-Cell Spray Foam
                </h4>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  To achieve an R-49 rating in Alpine climates, we recommend a 7-inch depth of high-density
                  closed-cell foam for your specific square footage.
                </p>
                <Link
                  className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all"
                  href="/contact"
                >
                  View Technical Specs <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black font-headline tracking-tight text-on-background mb-4">
            Knowledge Base
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>
        <div className="space-y-4">
          {[
            {
              q: "What is the ideal R-Value for high-altitude mountain homes?",
              a: "In the Telluride region (Climate Zone 7), the DOE recommends R-49 to R-60 for attics. Our specialized spray foam achieves this with significantly less bulk than fiberglass.",
            },
            {
              q: "Open-Cell vs. Closed-Cell: Which is better for Alpine environments?",
              a: "Closed-cell foam is preferred for high-altitude applications due to its higher R-value per inch, moisture resistance, and structural reinforcement properties. It performs better in extreme temperature fluctuations.",
            },
            {
              q: "How long does the installation process typically take?",
              a: "Most residential projects are completed in 1-3 days depending on square footage and access. Commercial projects timeline varies based on scope.",
            },
            {
              q: "Does your insulation provide a vapor barrier?",
              a: "Closed-cell spray foam inherently acts as a vapor barrier. Open-cell provides breathability while still offering excellent thermal performance. We recommend the right solution based on your specific application.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-lg group cursor-pointer">
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-bold text-on-background">{item.q}</h5>
                <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">
                  expand_more
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative bg-secondary rounded-2xl overflow-hidden py-16 px-8 md:px-20 text-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black font-headline text-white mb-6">
              Ready for a Technical Assessment?
            </h3>
            <p className="text-secondary-fixed text-lg max-w-2xl mx-auto mb-10">
              Our specialists provide on-site thermal imaging and precise ROI projections for your property.
            </p>
            <Link
              href="/contact"
              className="primary-gradient text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-transform inline-block"
            >
              Book an Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
