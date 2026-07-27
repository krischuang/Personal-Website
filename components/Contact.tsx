"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "kris.kh.chuang@gmail.com",
      href: "mailto:kris.kh.chuang@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "kai-hsiang-chuang-501450123",
      href: "https://www.linkedin.com/in/kai-hsiang-chuang-501450123",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "github.com/kai-hsiang-chuang",
      href: "https://github.com/kai-hsiang-chuang",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Sydney, NSW · Open to Remote (ANZ)",
      href: null,
    },
  ];

  return (
    <section id="contact" style={{ background: "#0d1424" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m actively exploring Senior AI/Software Engineer opportunities across ANZ, with a
              focus on applied AI workflows, backend platforms, and healthcare systems. Open to hybrid or
              remote roles. If you have an opportunity or just want to connect, reach out.
            </p>

            <div className="space-y-4">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-indigo-400 shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wide">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-300 hover:text-indigo-400 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {sent && (
              <div className="glass border border-emerald-500/30 rounded-xl px-4 py-3 text-sm text-emerald-400">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
                Name
              </label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08]
                  text-slate-200 placeholder-slate-600 text-sm
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30
                  transition-all duration-200 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08]
                  text-slate-200 placeholder-slate-600 text-sm
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30
                  transition-all duration-200 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about the role or opportunity..."
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08]
                  text-slate-200 placeholder-slate-600 text-sm
                  focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30
                  transition-all duration-200 bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-white text-sm
                bg-gradient-to-r from-indigo-600 to-indigo-500
                hover:from-indigo-500 hover:to-cyan-500
                transition-all duration-300 shadow-lg shadow-indigo-900/50
                hover:shadow-indigo-500/30 hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
