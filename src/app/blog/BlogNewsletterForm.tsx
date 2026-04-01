"use client";

export default function BlogNewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
      <input
        className="flex-grow bg-white border-none py-4 px-6 text-sm focus:ring-0 focus:bg-surface-container-lowest"
        placeholder="Email Address"
        type="email"
      />
      <button
        className="primary-gradient text-white px-8 py-4 font-bold text-sm tracking-widest hover:brightness-110 transition-all"
        type="submit"
      >
        SIGN UP
      </button>
    </form>
  );
}
