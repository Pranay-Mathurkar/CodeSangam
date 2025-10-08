import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ busy: false, ok: null, msg: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ busy: false, ok: false, msg: 'Please fill name, email and message.' });
      return false;
    }
    // basic email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setStatus({ busy: false, ok: false, msg: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ busy: true, ok: null, msg: '' });

    if (!validate()) return;

    try {
      // placeholder: replace with your real endpoint
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ busy: false, ok: true, msg: 'Message sent — we will reply soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ busy: false, ok: false, msg: 'Failed to send. Try again later.' });
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-900 text-gray-200 p-6">
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Contact Form Card */}
        <div className="relative rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#050505]/80 via-[#0b0b0b]/60 to-transparent shadow-2xl border border-gray-800 backdrop-blur-sm">
          {/* golden spotlight */}
          <div className="absolute -top-8 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #D4AF37 0%, rgba(212,175,55,0.0) 45%)' }} />

          <h1 className="text-3xl font-semibold tracking-tight mb-2" style={{ color: '#F0DFA6' }}>
            Contact the Alchemist
          </h1>
          <p className="text-sm text-gray-400 mb-6">Have a question, feedback, or a potion idea? Drop a message — we’ll reply within 48 hrs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="relative block">
                <span className="text-xs text-gray-400">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 transition-shadow shadow-sm"
                  placeholder="Your name"
                />
              </label>

              <label className="relative block">
                <span className="text-xs text-gray-400">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 transition-shadow shadow-sm"
                  placeholder="you@alchemy.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs text-gray-400">Subject (optional)</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 transition-shadow shadow-sm"
                placeholder="What's this about?"
              />
            </label>

            <label className="block">
              <span className="text-xs text-gray-400">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="mt-1 w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 transition-shadow shadow-sm"
                placeholder="Tell us something..."
              />
            </label>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status.busy}
                className="inline-flex items-center gap-3 rounded-full px-6 py-2 text-sm font-medium shadow-md focus:outline-none"
                style={{ background: 'linear-gradient(90deg, #B8860B, #D4AF37)', color: '#0b0b0b' }}
              >
                {status.busy ? 'Sending...' : 'Send Message'}
              </button>

              <span className={`text-sm ${status.ok === true ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status.msg}
              </span>
            </div>

          </form>

          {/* subtle footer */}
          <div className="mt-6 text-xs text-gray-500">
            <span>Prefer a carrier pigeon? We accept them on full moon nights.</span>
          </div>
        </div>

        {/* Right: Contact info & map */}
        <aside className="rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-black/60 via-gray-900/40 to-transparent border border-gray-800 shadow-inner">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold" style={{ color: '#F0DFA6' }}>Find the Spire</h2>
            <p className="text-sm text-gray-400">House of Alchemy — 13 Nightshade Alley, Old Quarter</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#1b1b1b] border border-gray-800 shadow-sm">📞</div>
              <div>
                <div className="text-sm text-gray-200">Phone</div>
                <div className="text-sm text-gray-400">+91 98765 43210</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#1b1b1b] border border-gray-800 shadow-sm">✉️</div>
              <div>
                <div className="text-sm text-gray-200">Email</div>
                <div className="text-sm text-gray-400">hello@alchemistsgrimoire.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#1b1b1b] border border-gray-800 shadow-sm">⏰</div>
              <div>
                <div className="text-sm text-gray-200">Hours</div>
                <div className="text-sm text-gray-400">Mon — Sat, 10:00 — 19:00</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black/40">
              {/* placeholder map */}
              <div className="w-full h-48 flex items-center justify-center text-gray-500">Map preview</div>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500">Follow the golden sigils to find the entrance. Bring a torch.</div>
        </aside>

      </section>
    </main>
  );
}
