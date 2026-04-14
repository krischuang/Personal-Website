export default function Footer() {
  const links = [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Skills",     href: "#skills" },
    { label: "Contact",    href: "#contact" },
  ];

  const socials = [
    { label: "GitHub",   href: "https://github.com/kai-hsiang-chuang" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kai-hsiang-chuang-501450123" },
    { label: "Email",    href: "mailto:kris.kh.chuang@gmail.com" },
  ];

  return (
    <footer style={{ background: "#080d1a" }} className="border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">KC</span>
              </div>
              <span className="text-slate-200 font-semibold">Kai-Hsiang Chuang</span>
            </div>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Senior Software Engineer · Backend Java &amp; API Platforms · Revenue Systems ·
              Greater Sydney Area
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Kai-Hsiang Chuang. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
