"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-24 flex-grow">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Content & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-none">
                Contact Us
              </h1>
              <p className="text-xl text-on-surface-variant max-w-md">
                Secure the thermal integrity of your mountain estate. Our specialists are ready to architect your
                efficiency.
              </p>
            </div>

            {/* Contact Cards Grid (Bento Style) */}
            <div className="grid grid-cols-1 gap-4">
              {/* Direct Call */}
              <div className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-lg shadow-secondary/20">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">Immediate Inquiry</p>
                    <p className="text-2xl font-black font-headline tracking-tight">(970) 555-8240</p>
                  </div>
                </div>
                <Link
                  href="tel:+19705558240"
                  className="primary-gradient text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              {/* Address & Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-xs font-bold text-on-surface-variant uppercase mb-4">Location</p>
                  <p className="font-bold leading-tight">
                    674 Mountain Village Blvd<br />Telluride, CO 81435
                  </p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-xs font-bold text-on-surface-variant uppercase mb-4">Business Hours</p>
                  <p className="font-bold leading-tight">
                    Mon — Fri: 8am - 6pm<br />Sat: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Thermal Indicator Decor */}
            <div className="flex items-center gap-4 py-4">
              <div className="thermal-indicator h-16 rounded-full" />
              <div className="text-sm italic text-on-surface-variant">
                Precision insulation services tailored for high-altitude architecture.
              </div>
            </div>
          </div>

          {/* Right Column: Form (The "Shield" Container) */}
          <div className="lg:col-span-7">
            <div
              className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-2xl shadow-on-background/5 relative overflow-hidden"
              style={{ boxShadow: "0 25px 50px -12px rgba(17, 28, 44, 0.05)" }}
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:bg-surface-container-highest focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary"
                      placeholder="John Sterling"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:bg-surface-container-highest focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary"
                      placeholder="(970) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Service Type
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-4 appearance-none focus:bg-surface-container-highest focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-4 text-on-surface-variant pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:bg-surface-container-highest focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary"
                    placeholder="How can we assist your project?"
                    rows={4}
                  />
                </div>
                <button
                  className="w-full primary-gradient text-white py-5 rounded-full font-black text-lg tracking-widest uppercase shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-20">
        <div className="h-[500px] w-full bg-surface-container-high relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover grayscale opacity-50 contrast-125"
            alt="Abstract stylized topographic map of telluride mountains"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBauR6amkcZPJzldDPBfTkFHFhfcQko0F0ZNknQo72ULQoQ6C61phvTJ9QqkB05bIbeAHyAycM1hWIbcD8rdy2ofearQzeRZkOUv-0iQgK_yk7vDrgpyZkl7H8fD0pS2jibnErX_sEbcFqgCiqpCjZ4J0EnxorhHXDaf_NY9Tfd9CjZXseaLWk_UvBN-BFZXPoPGcVxYOwUWKU0d4tZ3DQx1CJZIr4XScjNYqGGCcvS0RWNVR3j-jMQC4o6iF4L9GAOO6CKZFVcRG4"
            fill
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="glass-effect p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-4 text-center border-t border-white/50">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  location_on
                </span>
              </div>
              <div>
                <p className="font-headline font-black text-2xl tracking-tighter">Mountain Standard</p>
                <p className="text-on-surface-variant">Serving San Miguel County & Beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
