import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogNewsletterForm from "./BlogNewsletterForm";

export const metadata: Metadata = {
  title: "Insulation Tips & Guides | Telluride Thermal Blog",
  description:
    "Expert insights on high-altitude thermal performance, energy efficiency, ice dam prevention, and spray foam insulation for mountain homes in Telluride, CO.",
  keywords: [
    "spray foam insulation tips Telluride",
    "energy efficiency mountain homes",
    "ice dam prevention Colorado",
    "attic insulation guide",
    "high altitude insulation",
  ],
  openGraph: {
    title: "Insulation Tips & Guides | Telluride Thermal",
    description:
      "Expert insights on thermal performance, energy savings, and spray foam insulation for mountain architecture.",
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Editorial Header */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/15 pb-12">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-container/10 text-secondary font-semibold px-3 py-1 rounded-sm text-xs tracking-wider mb-4">
              THE ARCHITECTURAL SHIELD
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6 leading-[0.9]">
              Telluride Insulation Tips &amp;{" "}
              <span className="text-primary">Local Guides</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Expert insights on high-altitude thermal performance, energy efficiency, and protecting your mountain
              architectural investment.
            </p>
          </div>
          {/* Search & Filters */}
          <div className="w-full md:w-80 space-y-6">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-none focus:ring-0 focus:bg-surface-container-highest transition-colors placeholder:text-outline/60 text-sm"
                placeholder="Search guides..."
                type="text"
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant/30" />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface text-xs font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Energy Efficiency
              </span>
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface text-xs font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Case Studies
              </span>
              <span className="px-3 py-1 bg-surface-container-highest text-on-surface text-xs font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors">
                Local News
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Main Featured Post */}
        <article className="md:col-span-8 group cursor-pointer">
          <Link href="/blog">
            <div className="relative overflow-hidden aspect-[16/9] mb-6">
              <Image
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                alt="Modern luxury mountain home in Telluride at dusk with warm interior lights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0zuwNJg_FFLBerbJRu61nNH_nACtm9J1pPdNWMnv-LIzG8TJPedoSz2KeYKelQ6yJEGiMpkCO_w4WzVIDAGrBXk1JzSNHRAjCMrzENo0sIerLLJ4xMW94lQhpxgmQty5FwLfvtvtfzoRJc1oMkqFtKOoCQStZeWFTRvZL2ijpoaOK3P1p8qk8dyUSdN7Hj7yiqmpYRh6t8S-fcWYzEkHqMDibYKh7TaQSSK3pSkypk0WzK3R8XoQwL8Ppg7OBtiRwS5OD1N3-l4"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 tracking-widest mb-3 inline-block">
                  FEATURED GUIDE
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-white leading-tight">
                  The Benefits of Spray Foam for<br />High-Altitude Homes
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-outline uppercase tracking-widest">
              <span>Dec 12, 2024</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>Engineering</span>
            </div>
          </Link>
        </article>

        {/* Secondary Featured */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <article className="group cursor-pointer">
            <Link href="/blog">
              <div className="aspect-square bg-surface-container-low mb-4 overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                  alt="Close-up detail of high-quality closed cell spray foam insulation texture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXrd_Pi61kxhEF5bcwJkZ83tVbcbs3z7oqXuBvsqMDxet4GRGsc25nWSCaD8E3ijjLpbQSAGj2dxJBuMONCmH-VoIbk9HAvu3AFATWmwXUwJfdeRV_pYgWNuF-JMpARg_Hj4qYhUAIopw81rJY4yJ5qkp7WEHYxPnHzqNGxzjpZms4yej24_g1aq-eEAz92VsK2rwH8eBzNlwgY6LP6ZNgw4TvVpV9yW6CG1RcPesbEOlINNSFFZZTJX6BRSmpfrqfB-WuhkF67yk"
                  fill
                />
              </div>
              <div className="flex gap-4">
                <div className="thermal-indicator flex-shrink-0" style={{ background: "linear-gradient(to bottom, #005cae, #a04100)", width: "4px" }} />
                <div>
                  <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors mb-2">
                    Is Your Attic Winter-Ready?
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Prepare your roof for the heavy Telluride snowfall with proper thermal barriers.
                  </p>
                </div>
              </div>
            </Link>
          </article>
          <article className="group cursor-pointer">
            <Link href="/blog">
              <div className="aspect-square bg-surface-container-low mb-4 overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                  alt="Modern architectural blueprint overlaying a thermal imaging map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmWO8fqdCe4piQf4oz4bvArI9OtimVUYJt_QbncM6O4Lnlt5RSqrg5k130a-QzjZp7OiRQt0FLqEDUR5eM8NHinh2feE4ZrA46YYZej99gW51-_6j9Tr_XFnCGbN7DwWGPFTEhtqMx5xRYWl7xUX6kjA3b-sIOiu-KACVal--73TYQ74p2S1lUT-A0Y275wES9P9uBaQWKh5UJcmYgQAyUk4xufSKAUbes0U9GNun6O7sMF6QqJJlEnXJZdXZhxFQtT4hN4Rd_ZI"
                  fill
                />
              </div>
              <div className="flex gap-4">
                <div className="thermal-indicator flex-shrink-0" style={{ background: "linear-gradient(to bottom, #005cae, #a04100)", width: "4px" }} />
                <div>
                  <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors mb-2">
                    Top 5 Ways Spray Foam Saves Energy
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Lowering utility costs by up to 40% through airtight precision sealing.
                  </p>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-surface-container-low p-8 md:p-16 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4 tracking-tight">
              Protect Your Vision.<br />
              <span className="text-primary font-black">Stay Updated.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Join our quarterly newsletter for technical deep-dives into high-performance mountain architecture and
              insulation technology.
            </p>
          </div>
          <BlogNewsletterForm />
        </div>
      </section>

      {/* More Content Grid */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-black tracking-[0.2em] text-outline uppercase">Recent Insights</h2>
          <div className="flex-grow h-px bg-outline-variant/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Blog Card 1 */}
          <article className="group">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden mb-6 relative">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Architectural section view of a luxury home under construction"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFE0fg4798Dz9hdKG6YKFX572SlFth31cUtXE_3Cr4i7QWfBJzxRZKsaMSkUXRwrHWW8a-7T3AiXmJj5YcTvkW_IhzpnJDytD6uwBt0BCDw0T8Hw2U_k8H7dF791_eYbGvN_xXReSRqoiQN4JgHMx6KVgGRR4tgJj2z9N6LQDifJQp7E97DHX69hgeLL6dGEqx_R6WSf9xAp-ANEZ9hy0BXHOtW_GYrvyoo11JQ_ujpBXVHzQMhk9ycwlTUvsfL25IoF4dgxhRZeE"
                fill
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black text-on-surface uppercase tracking-tighter">
                Case Study
              </span>
            </div>
            <h4 className="text-lg font-headline font-bold mb-2 group-hover:text-primary transition-colors">
              The Ice Dam Dilemma: A Solution
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              How we solved recurring roof damage for a historic Downtown Telluride property.
            </p>
            <Link
              className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2"
              href="/blog"
            >
              Read Case Study{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </article>

          {/* Blog Card 2 */}
          <article className="group">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden mb-6 relative">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Clean industrial interior of a mechanical room in a modern mountain estate"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gbXNyQ-TwMvQ5VH2EORt3GVP1PTTl3SkRIdSMII2DovLfkeaq4Qe2t_acqo1fQGU45ByuaUkXjVIsm_KNLexADM7UmGO0uRf5xhfSiO33vFzQ8oqyxx7Q8nVNq1Hzb1XrhUKfhVbcy3UBrjw-yMCMgxEV_7n1oniln1jXppibHr3jx5fha7NnYEGXcmWgWW0ShUhkJidAN0wshG4obZ8YLR31DUkaFfLbZxsNYAr5HOcgan2VN1MlgxN4Nf0Dxc_xpjAT_uQwyU"
                fill
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black text-on-surface uppercase tracking-tighter">
                Efficiency
              </span>
            </div>
            <h4 className="text-lg font-headline font-bold mb-2 group-hover:text-primary transition-colors">
              Acoustic Sealing for Home Cinemas
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Why high-density foam is the silent hero of luxury home entertainment suites.
            </p>
            <Link
              className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2"
              href="/blog"
            >
              Read Guide{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </article>

          {/* Blog Card 3 */}
          <article className="group">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden mb-6 relative">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Stunning mountain range peaks in Telluride during a crisp blue-sky winter day"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmif7Od6CQuBdMx_2P0Y_l_XVmjl-Ttc8qxftvJLWUsGE3SKY1qFECZ4tVW9sZ6P1Juj-rHZHx6gREWNPPbTjHGaV4i3jRfHXvkg9sXzLje0scYmYed3vD8JDbVaqMT9kj80QcHvBV2pZejc5hzJgKzaUZ8ZjPKCp3qNGulB_3uXTiEwTXknSypSaU-0CNGf_SYHXOYRbLzWJMW7MhZjU1Ggai5GdTyRrJHNIwUJ7-DNPxI7H0Qji9avEbGA9Ri8zm_fJsepK4S4E"
                fill
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black text-on-surface uppercase tracking-tighter">
                Local News
              </span>
            </div>
            <h4 className="text-lg font-headline font-bold mb-2 group-hover:text-primary transition-colors">
              Telluride Green Building Codes 2025
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              A brief overview of upcoming energy compliance standards for San Miguel County.
            </p>
            <Link
              className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2"
              href="/blog"
            >
              Read Update{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
