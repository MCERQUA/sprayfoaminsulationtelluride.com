import Link from "next/link";
import Image from "next/image";

export default function ServiceAreasPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-bold text-xs uppercase tracking-widest mb-6">
              Regional Expertise
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-black tracking-tight text-on-surface leading-[0.9] mb-8">
              We Serve Telluride &amp;{" "}
              <span className="text-primary">Surrounding Mountains</span>.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Ensuring structural integrity and peak thermal performance across the San Juan Mountains. From Mountain
              Village estates to Ophir cabins, we provide the architectural shield your home requires.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-3"
              >
                Book a Site Visit
                <span className="material-symbols-outlined">calendar_today</span>
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 bg-surface-container-low rounded-full">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="font-label font-semibold text-sm">Certified Local Specialists</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl" />
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <Image
                alt="Aerial view of Telluride Colorado mountain valley in winter"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTG8dg8mJ15lioBwfqZreCjAN3hGszCt1-5NaoqP3uNhPYmAF5hPgoAnik98Yl5S7ScU4j87K3-T23d2CKR1mrVpIhfgDE0iPkcjzp0Gp1eAthSYkQksj_LghDut6pfJsvc1ntg16UQG9-OLHGWdG7UzUQSFX7ZiZM7qDQpWkUZP8vQOyEOaP-nHH4msEg7HMWJTNzfQUU6UFMhzez9VbWcutvaNMShbzaEALy894t7Zb-e12txRiAzhoAGJMJGCivCOyH-Gjz2MU"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-headline text-3xl font-black text-primary mb-2">9,500&apos;</p>
              <p className="text-sm font-medium text-on-surface-variant">
                Standard operating elevation for our specialized spray foam rigs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Bento & Map */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
              The Mountain Range We Cover
            </h2>
            <p className="text-on-surface-variant max-w-2xl italic">
              Insulation Contractors Telluride | Mountain Village Insulation | Spray Foam Ophir
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Map Container */}
            <div className="md:col-span-8 h-[500px] rounded-xl overflow-hidden shadow-sm relative bg-white">
              <Image
                className="w-full h-full object-cover grayscale opacity-40"
                alt="Stylized map showing mountainous terrain of San Miguel County"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqSZEhzL21zPTNJNzztVhqzPW6wqdBWkggvs3_WVROZEKAeo7LVOkab8ToWTjzM4WY-SGjQisLF9tex0YQQTy3Sr_XdJYBlIX4CjjI120P1OkqKpMkeQl0Fwu0blLUDY1L5VFWrxnmKC_5CFsavrrNcK8tlTje9J8HMCbEzAQYX7o-ZfJFAOopjT9UeWhrHIUaUQTFMt4AL2lcWX2ijt0tsyMlADlzTfb1kWtsj8FtCdfbCLSWlh_G99KUVDFPkFrO5g7Ks3gVLY"
                fill
              />
              {/* Floating Location Tags */}
              <div className="absolute top-1/4 left-1/3 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 border-l-4 border-primary">
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  location_on
                </span>
                <span className="font-bold text-xs uppercase tracking-tight">Mountain Village</span>
              </div>
              <div className="absolute top-1/2 left-1/2 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 border-l-4 border-secondary">
                <span
                  className="material-symbols-outlined text-secondary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  location_on
                </span>
                <span className="font-bold text-xs uppercase tracking-tight">Telluride Proper</span>
              </div>
              <div className="absolute bottom-1/4 left-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 border-l-4 border-primary">
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  location_on
                </span>
                <span className="font-bold text-xs uppercase tracking-tight">Ophir</span>
              </div>
            </div>
            {/* Service List Panel */}
            <div className="md:col-span-4 bg-white p-10 rounded-xl shadow-sm flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-bold mb-8">Service Destinations</h3>
              <ul className="space-y-6">
                {[
                  "Telluride",
                  "Mountain Village",
                  "Placerville",
                  "Ophir",
                  "Sawpit",
                ].map((location) => (
                  <li key={location} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-white text-sm">check</span>
                    </div>
                    <span className="font-semibold text-lg">{location}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Weather Logic Section */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="thermal-indicator absolute left-0 top-0 bottom-0"
                style={{ background: "linear-gradient(to bottom, #005cae, #a04100)", width: "4px" }}
              />
              <div className="pl-12 space-y-12">
                <div>
                  <h3 className="font-headline text-3xl font-bold mb-4">Combatting San Juan Snow Loads</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Telluride winters bring heavy snow accumulation. Traditional batt insulation often leads to ice damming.
                    Our spray foam provides a seamless air seal that prevents heat from escaping to the roof deck,
                    effectively eliminating the thaw-freeze cycle that damages mountain roofs.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline text-3xl font-bold mb-4">High-Altitude Wind Defense</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    The box canyon acts as a natural wind tunnel. Spray foam adds structural rigidity to your home, acting
                    as a secondary skin that prevents wind-driven moisture and cold air infiltration from entering through
                    micro-gaps in the timber frame.
                  </p>
                </div>
                <div className="bg-surface-container-highest p-8 rounded-xl">
                  <p className="font-bold text-primary mb-2">Technical Insight:</p>
                  <p className="text-sm italic">
                    &quot;R-Value retention is critical in sub-zero environments. Our closed-cell application maintains its
                    thermal integrity even when external temperatures drop below -10°F.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  alt="Close up macro shot of closed-cell spray foam insulation texture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmz4_c3AljGCfFPdgfuRprdYfgps3zAVgA5476nCzooebXNIFaVQGoNekduVLbhIJrh8bf5WF8_JxxUsf2aFnCStlWvnrpbkB4fSiEk_RfQsX3V675eB2snfR0VKdGtRdE-I7JYNrb8CDsWAsvmJogF1hxLsU9nhv7czX2hiMXJ8-g_3K49cdicMUUCW2mZZwT5YXPa8UeOLrdZmdKO0JPyBFFfPXhJs2SMGkRcFAXsKyDOCgF2XI_a_5yjPqCQ0Cwo8BoqFoprIM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                  <p className="text-white text-2xl font-headline font-black uppercase tracking-widest">
                    The Thermal Barrier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="mb-24 px-6">
        <div className="max-w-7xl mx-auto primary-gradient rounded-xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
              Schedule a site assessment today. Our engineers will evaluate your home&apos;s unique thermal profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-surface-container-low transition-all"
              >
                Book a Site Visit
              </Link>
              <Link
                href="tel:+19705558240"
                className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all"
              >
                Call (970) 555-8240
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Call Now (Mobile) */}
      <div className="fixed bottom-8 right-8 z-[60] md:hidden">
        <Link
          href="tel:+19705558240"
          className="w-16 h-16 primary-gradient rounded-full shadow-2xl flex items-center justify-center text-white"
          aria-label="Call now"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
          >
            phone
          </span>
        </Link>
      </div>
    </main>
  );
}
