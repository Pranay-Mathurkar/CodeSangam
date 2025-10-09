import React, { useState } from "react";

// Simple ContactPage.jsx for Alchemist's Grimoire
// Black & gold theme, no backend, all frontend only

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-[#070606] text-gray-100 flex flex-col items-center py-12 px-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#d4af37]">Contact Alchemist's Grimoire</h1>
        <p className="text-gray-400 mt-2">We would love to hear from you!</p>
      </header>

      <main className="w-full max-w-md bg-black/60 p-6 rounded-2xl shadow-2xl border border-[#d4af37]/20">
        {submitted ? (
          <div className="text-center text-[#d4af37] font-semibold">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded-md bg-black/40 placeholder-gray-400 ring-1 ring-[#d4af37]/20 focus:outline-none"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded-md bg-black/40 placeholder-gray-400 ring-1 ring-[#d4af37]/20 focus:outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="px-3 py-2 rounded-md bg-black/40 placeholder-gray-400 ring-1 ring-[#d4af37]/20 focus:outline-none"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-[#d4af37] text-black font-semibold rounded-lg shadow-inner hover:bg-[#ffd873] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Alchemist's Grimoire
      </footer>
    </div>
  );
}