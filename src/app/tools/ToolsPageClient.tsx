"use client";

import Link from "next/link";
import Image from "next/image";

export default function ToolsPageClient() {
  // State is managed in parent, calculator is interactive here
  const heatRetention = 42; // static display — calculator needs state
  const annualSavings = 1840;

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

      {/* Calculator Section — placeholder CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black font-headline mb-4">Get Your Custom ROI Calculation</h3>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Every mountain home is unique. Our specialists provide on-site thermal imaging and precise ROI projections — customized for your specific elevation and structure.
          </p>
          <Link
            href="/contact"
            className="primary-gradient text-white px-10 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform inline-block"
          >
            Book a Free Assessment
          </Link>
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
              a: "Closed-cell foam is preferred for high-altitude applications due to its higher R-value per inch, moisture resistance, and structural reinforcement properties.",
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
            <div key={i} className="bg-surface-container-low p-6 rounded-lg">
              <h5 className="text-lg font-bold text-on-background">{item.q}</h5>
              <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">{item.a}</p>
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
