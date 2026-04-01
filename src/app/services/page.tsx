import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insulation Services | Spray Foam for Attics, Crawlspaces & Walls",
  description:
    "Residential and commercial spray foam insulation in Telluride, CO. Attic & roof, crawlspace, and whole-wall solutions engineered for high-altitude performance.",
  keywords: [
    "spray foam insulation services Telluride",
    "attic insulation Mountain Village",
    "crawlspace sealing Colorado",
    "whole wall insulation",
    "commercial insulation Telluride",
    "high altitude spray foam",
  ],
  openGraph: {
    title: "Insulation Services | Telluride Thermal",
    description:
      "The Architectural Shield — luxury spray foam solutions for high-altitude homes and commercial buildings in Telluride.",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Engineered Protection
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none text-on-background mb-8">
              The Architectural<br />
              <span className="text-primary">Shield</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              In the extreme climate of the San Juan Mountains, insulation isn&apos;t a utility—it&apos;s a precision-engineered
              barrier. Telluride Thermal provides luxury-grade spray foam solutions designed for high-altitude performance.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
              <Image
                alt="Modern architectural house in the snowy mountains with large glass windows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFP-ZPIIwBSPPmR9zP5gSinmhiBg_N-8ZW33ad6aaDLTfTj-pIAkx_gcSdLh_i7FaOlKjAYTmDgxqdVrmWf2FH6TeFZ796GevKkade36inRjqrOLtvS3e1lUtpeqYieJ-nEWjSUfJeyt5aPyU0o5cx_VyN4-no4gHpWn8IrlJZyAM3iPfNb5hQVvrxQInfQ0zG-i-11k8azxZl3RlAPvs5Zat9z6i5vC4oIBkRQECByD2PnLWO9Giqvgv2gIm7zv8nmVa8xfkQDp4"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-surface-container-highest rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="bg-surface-container-low py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tight text-on-background mb-4">
                Residential Spray Foam
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                High-performance envelopes for luxury estates. We seal the most vulnerable points of your mountain home
                against freezing drafts and ice dams.
              </p>
            </div>
            <div className="thermal-indicator h-20 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Attic */}
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-b-4 border-primary/20 hover:border-primary transition-all group">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">roofing</span>
                <span className="text-xs font-bold text-outline-variant group-hover:text-primary transition-colors">
                  01 / ATTIC
                </span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Attic & Roof</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Prevent ice damming and heat loss where it matters most. Our high-R-value foam creates a continuous air
                barrier at the roofline.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Eliminates Drafts
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Prevents Ice Dams
                </li>
              </ul>
              <Link
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/contact"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Crawlspace */}
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-b-4 border-primary/20 hover:border-primary transition-all group">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">foundation</span>
                <span className="text-xs font-bold text-outline-variant group-hover:text-primary transition-colors">
                  02 / CRAWL
                </span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Crawlspace</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Moisture control starts at the ground level. We seal crawlspaces to prevent rot and keep your floors warm
                during peak winter.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Stops Moisture
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Radon Mitigation Support
                </li>
              </ul>
              <Link
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/contact"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Walls */}
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-b-4 border-primary/20 hover:border-primary transition-all group">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">wall_art</span>
                <span className="text-xs font-bold text-outline-variant group-hover:text-primary transition-colors">
                  03 / WALLS
                </span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Whole-Wall</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Standard batting fails in thin mountain air. Our spray foam expands into every crevice, creating a quiet,
                thermally-stable interior.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Sound Dampening
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    check_circle
                  </span>
                  Structural Reinforcement
                </li>
              </ul>
              <Link
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/contact"
              >
                LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section - Bento Style */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tight text-on-background mb-12">
          Commercial Insulation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Image Card */}
          <div className="md:col-span-8 relative overflow-hidden rounded-lg group">
            <div className="aspect-[16/9] relative">
              <Image
                alt="Industrial steel building framework under construction with bright blue sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-SSIi0En1-Ng7ZFyo0I5qPthQN4MMOJZ4CPvAOkNgj2fc5nvNVK7PAQ6w3JiDElnuAAp6568p4plQzuw5H5NkfHhi1a_yxmYR76-KELF4sTvdIInpZ2G2h69PFU7YfwkL5OBYjwZaWpncKal83HBWR6AhzwpN-yiI0RBALaNVDWApV78vRwO8OJQV1pkPBZjZ8ALR9CFig2uZMBz7OIK7ec-7xuwcaMJ_a1uczqmugopSy_IVvTu1aFpmtIwX7sjDFDMExkz8Tw"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-black text-white font-headline mb-4">Industrial Steel Buildings</h3>
              <p className="text-slate-200 max-w-xl mb-6">
                Massive square footage requires massive efficiency. Our commercial-grade foam prevents condensation in
                steel structures while providing superior climate control.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="primary-gradient text-white px-8 py-3 rounded-full font-bold text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* Small Data Card */}
          <div className="md:col-span-4 bg-secondary text-white p-10 rounded-lg flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">domain</span>
              <h3 className="text-2xl font-bold font-headline mb-4">Multi-Family</h3>
              <p className="text-on-secondary/80 text-sm leading-relaxed mb-6">
                Energy modeling for condos and apartment complexes. Optimized for R-value per inch.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span>
                Fire-Rated Options
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span>
                HUD & Energy Star Compliance
              </li>
            </ul>
          </div>
          {/* Storage Card */}
          <div className="md:col-span-12 bg-surface-container-high p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-black font-headline text-on-background mb-4">
                Cold Storage & Warehousing
              </h3>
              <p className="text-on-surface-variant mb-8">
                Maintain stable temperatures for inventory, wine cellars, and mechanical rooms. We provide closed-cell
                systems that serve as both vapor and thermal barriers.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-primary font-black tracking-widest text-xs uppercase border-b-2 border-primary pb-1"
                href="/contact"
              >
                Technical Specs <span className="material-symbols-outlined text-sm">launch</span>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded shadow-sm">
                <p className="text-4xl font-black text-primary font-headline">R-7</p>
                <p className="text-xs font-bold text-slate-500 uppercase mt-1">Per Inch Rating</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <p className="text-4xl font-black text-secondary font-headline">0%</p>
                <p className="text-xs font-bold text-slate-500 uppercase mt-1">Air Leakage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-lg bg-slate-900 overflow-hidden min-h-[400px] flex items-center">
          <div className="absolute inset-0 opacity-40">
            <Image
              alt="Dramatic close up of frozen mountain peak with sharp rock edges"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZfU8vT9X5ounCtwR8fq7E0Ob0HyNqpvNdeLtxrIk9LH3lseLVfPzkdJAT82GLN3OUkZRWrNH8bF1POsESPhsWqHfTbO4Nx2c6baJMboz8B-i7zdwXxZ17LKPF74tUVNZIQmlISd6Scneh6LHxSN8GMXUc8GPjhVLeWD3XYOcMG39o2JY75DP2F9ZV4lQKdOx5FQ0T8Lhmu2t75SxsvVM0zf2zrSQx33O3MOoaw1hjsn9YfwKyjoTPapN10P0YCwnssmXasgsxB14"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 px-8 md:px-20 py-16 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black tracking-widest uppercase mb-6">
              Telluride Exclusive
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter mb-6">
              High-Altitude Coatings
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              UV radiation and extreme barometric swings at 8,750ft+ degrade standard materials. Our specialized
              coatings are engineered for the Telluride climate, providing extreme durability for exposed insulation and
              roof systems.
            </p>
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold transition-colors hover:bg-slate-200"
            >
              Request Technical Brief
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-container-low rounded-lg p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black font-headline text-on-background mb-6">
              Ready for the Shield?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">
              Schedule a thermal audit and get a custom quote for your residential or commercial project.
            </p>
            <Link
              href="/contact"
              className="primary-gradient text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
            >
              Get Started
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[20px] border-primary/5 rounded-full" />
        </div>
      </section>
    </main>
  );
}
