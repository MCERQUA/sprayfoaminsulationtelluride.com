"use client";

export default function ContactFormClient() {
  return (
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
  );
}
