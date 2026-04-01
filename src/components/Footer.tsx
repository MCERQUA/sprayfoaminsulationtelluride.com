import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-slate-100 dark:bg-slate-950 font-label text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* About Column */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            Telluride Thermal
          </div>
          <p className="text-slate-500">
            Premium spray foam insulation solutions for luxury mountain architecture in the San Juan Mountains.
          </p>
          <p className="text-slate-500 italic">The Architectural Shield</p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link href="mailto:info@sprayfoaminsulationtelluride.com" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">
            Services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/services"
              >
                Residential
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/services"
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/services"
              >
                Attic Insulation
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/services"
              >
                Crawlspaces
              </Link>
            </li>
          </ul>
        </div>

        {/* Areas Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">
            Service Areas
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/service-areas"
              >
                Telluride
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/service-areas"
              >
                Mountain Village
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/service-areas"
              >
                Placerville
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-300"
                href="/service-areas"
              >
                Ophir / Rico
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">
            Contact Us
          </h4>
          <div className="text-slate-500 space-y-2">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-600 text-sm">call</span>
              (970) 555-8240
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-600 text-sm">location_on</span>
              674 Mountain Village Blvd<br />Telluride, CO 81435
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-600 text-sm">schedule</span>
              Mon — Fri: 8am - 6pm<br />Sat: By Appointment
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Telluride Thermal. Built for the Architectural Shield.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link className="text-xs hover:text-orange-500" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:text-orange-500" href="#">
            Safety Standards
          </Link>
        </div>
      </div>
    </footer>
  );
}
