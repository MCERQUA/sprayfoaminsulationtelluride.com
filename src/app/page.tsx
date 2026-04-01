"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[751px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Interior of a modern mountain home under construction with high-precision white spray foam insulation"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukRZuE_bWRNfNIWniAmYi4l-HOCUrczMAYFBIxqVBeDQhK9nTljv9yMCZ9VSkSBlKY6NVCa1N9kHEQk_N9yYUkdl5OjSqF4hwVPXcZ0aEO6mowCQwbpF0Orwdcf_AP-Pc-kYm1fv4FAj-3jd8iG7XOV92FZ6zdnTI1JzV243zkRIRFKLqOHGtFb9XCDc2a87cfR1tGW-Jf1pGy-AuNwP5ap3V35ozeTw-01nMbQlBf2cd7L6plaoefXv70fkI6p0mfFQ5NYz7v6k"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Serving Telluride & Mountain Village
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight text-on-surface">
              Best <span className="text-primary">Spray Foam</span> Insulation in Telluride
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Precision-engineered thermal protection for high-altitude architecture. We create airtight seals that
              withstand the harshest San Juan winters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="cta-gradient text-white px-8 py-4 rounded-full font-bold text-center shadow-lg hover:opacity-90 transition-all active:scale-95"
              >
                Get a Free Quote
              </Link>
              <Link
                href="tel:+19705558240"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold text-center border-2 border-transparent hover:border-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline font-extrabold text-4xl text-on-surface mb-4">
              Telluride Insulation Services
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Attic Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">roofing</span>
              </div>
              <h3 className="font-headline font-bold text-2xl">Attic Insulation</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Stop ice dams before they start. Our spray foam creates a seamless thermal cap for your mountain
                residence.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Prevents Heat Loss
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Eliminates Drafts
                </li>
              </ul>
            </div>
            {/* Crawlspace Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl">foundation</span>
              </div>
              <h3 className="font-headline font-bold text-2xl">Crawlspace Sealing</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Protect your foundation and keep floors warm. Vapor barriers and foam application that blocks moisture
                and cold.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Moisture Control
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Warmer Floors
                </li>
              </ul>
            </div>
            {/* Commercial Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">apartment</span>
              </div>
              <h3 className="font-headline font-bold text-2xl">Commercial Projects</h3>
              <p className="text-on-surface-variant leading-relaxed">
                High-performance insulation for Telluride businesses, lodging, and industrial mountain facilities.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Code Compliance
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Max Energy ROI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden z-10">
                <Image
                  alt="Stunning cinematic landscape of Telluride mountains in winter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwd0d3ku920tiUsRA70DGcKCZNgF9wCs_0kOx9cs9jd0_of3ftbOvPiX2YEEZQtwvyXZB5EQwYQaLAuXh5-4gKFRoe-SZ8kAMGQyHFpK5aFPQR6tSygJhwSl4ut6087e1ktMs3pVzOcW6hWd8I0C1owj8nCsWuoyw6ja8lteZa3Z3r0K7aIoM6eDi1YcvrGwWKJ3feP5KX8BgnoTRmld7DPXMXJFjjqNtQjgstTfWVKJAgw479l2hlrbN8YE2eJNdYQhCycT4GUBY"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-xl shadow-xl z-20 hidden md:block border border-white/20">
                <div className="text-primary font-black text-4xl">45%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  Avg. Energy Savings
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-headline font-extrabold text-4xl leading-tight">Why Choose Us in Telluride?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="thermal-indicator h-12 shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Cold-Weather Expertise</h4>
                    <p className="text-on-surface-variant">
                      We understand the specific R-values needed for 8,750+ feet of elevation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="thermal-indicator h-12 shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Local Reliability</h4>
                    <p className="text-on-surface-variant">
                      Born and raised in the San Juans. We know the terrain and the building codes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="thermal-indicator h-12 shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Architectural Shield</h4>
                    <p className="text-on-surface-variant">
                      Our spray foam creates a barrier against air, moisture, and extreme mountain winds.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/services"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary-container transition-all active:scale-95 shadow-md inline-block"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-surface-container-highest/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-inner">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              format_quote
            </span>
          </div>
          <blockquote className="font-headline font-semibold text-3xl md:text-4xl text-on-surface italic leading-snug mb-10">
            &quot;Telluride Thermal transformed our Mountain Village home. We saw a 40% drop in heating costs the first
            winter and our floors are finally warm.&quot;
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="font-bold text-xl">Jameson W.</div>
            <div className="text-primary font-medium tracking-wide uppercase text-sm">Mountain Village Resident</div>
            <div className="flex gap-1 text-orange-500 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  star
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form / CTA Section */}
      <section className="py-24 bg-surface" id="quote">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-secondary p-12 md:p-20 rounded-[2rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h2 className="font-headline font-black text-4xl leading-tight">Ready for a Warmer Winter?</h2>
                <p className="text-secondary-fixed opacity-90 text-lg">
                  Schedule your free thermal assessment today. We&apos;ll show you exactly where you&apos;re losing heat.
                </p>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <span className="text-sm font-medium">Licensed, Bonded, and Insured</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-on-surface-variant">Name</label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-on-surface-variant">Phone</label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="970-000-0000"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-on-surface-variant">Service Area</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 transition-all">
                      <option>Telluride Town</option>
                      <option>Mountain Village</option>
                      <option>Ophir / Rico</option>
                      <option>Ridgway / Ouray</option>
                    </select>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full block text-center cta-gradient text-white font-black py-4 rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    Send Quote Request
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
