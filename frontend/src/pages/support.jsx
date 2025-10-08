import React, { useState } from 'react';

export default function SupportPage() {
  const [query, setQuery] = useState({ issue: '', details: '', email: '' });
  const [status, setStatus] = useState({ busy: false, ok: null, msg: '' });

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ busy: true, ok: null, msg: '' });

    if (!query.email.trim() || !query.issue.trim()) {
      setStatus({ busy: false, ok: false, msg: 'Please fill all required fields.' });
      return;
    }

    try {
      // simulate API call
      await new Promise(function (r) { setTimeout(r, 800); });
      setStatus({ busy: false, ok: true, msg: 'Support ticket submitted successfully!' });
      setQuery({ issue: '', details: '', email: '' });
    } catch (err) {
      setStatus({ busy: false, ok: false, msg: 'Submission failed. Try again.' });
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-200 p-6">
      <section className="w-full max-w-5xl rounded-2xl relative p-10 bg-gradient-to-br from-[#0b0b0b]/70 via-[#121212]/60 to-transparent border border-gray-800 shadow-2xl backdrop-blur-sm">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #D4AF37 0%, rgba(212,175,55,0.0) 45%)' }} />

        <h1 className="text-3xl font-semibold mb-3" style={{ color: '#F0DFA6' }}>Support Center</h1>
        <p className="text-sm text-gray-400 mb-6">Facing trouble with the Grimoire? Our alchemists are here to assist you. Submit a ticket below.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              placeholder="you@alchemy.com"
              className="w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Issue</label>
            <input
              name="issue"
              value={query.issue}
              onChange={handleChange}
              placeholder="Brief title of your problem"
              className="w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Details</label>
            <textarea
              name="details"
              value={query.details}
              onChange={handleChange}
              rows={6}
              placeholder="Describe your issue in detail..."
              className="w-full rounded-lg bg-transparent border border-gray-700 px-3 py-2 outline-none text-gray-100 focus:border-amber-400 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status.busy}
              className="inline-flex items-center gap-3 rounded-full px-6 py-2 text-sm font-medium shadow-md focus:outline-none"
              style={{ background: 'linear-gradient(90deg, #B8860B, #D4AF37)', color: '#0b0b0b' }}
            >
              {status.busy ? 'Submitting...' : 'Submit Ticket'}
            </button>

            <span className={`text-sm ${status.ok === true ? 'text-emerald-400' : 'text-rose-400'}`}>
              {status.msg}
            </span>
          </div>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg p-4 border border-gray-800 bg-black/30">
            <h3 className="text-sm font-semibold" style={{ color: '#F0DFA6' }}>Self-Help</h3>
            <ul className="text-sm text-gray-400 mt-2 space-y-2">
              <li>- Check your internet connection</li>
              <li>- Logout & login again</li>
              <li>- Clear cache and cookies</li>
              <li>- Read the FAQ in the dashboard</li>
            </ul>
          </div>

          <div className="rounded-lg p-4 border border-gray-800 bg-black/30">
            <h3 className="text-sm font-semibold" style={{ color: '#F0DFA6' }}>Priority Support</h3>
            <p className="text-sm text-gray-400 mt-2">Need faster help? Use the email below with subject prefix <code>[PRIORITY]</code>.</p>
            <div className="mt-3 text-sm text-gray-300">support@alchemistsgrimoire.com</div>
          </div>
        </div>

      </section>
    </main>
  );
}
