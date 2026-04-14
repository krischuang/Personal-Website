export default function About() {
  const stats = [
    { value: "7+",     label: "Years Experience" },
    { value: "89.88",  label: "UTS WAM (HD)" },
    { value: "10+",    label: "Systems Built" },
    { value: "ANZ",    label: "Based in Sydney" },
  ];

  return (
    <section id="about" style={{ background: "#0d1424" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - avatar + stats */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Avatar card */}
            <div className="relative">
              <div
                className="w-56 h-56 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #4338ca 0%, #6366f1 40%, #22d3ee 100%)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/avatar.png"
                    alt="Kai-Hsiang Chuang"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 border border-indigo-500/20 shadow-xl">
                <p className="text-xs text-slate-400">Currently @</p>
                <p className="text-sm font-semibold text-white">Solum Medical</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Building platforms that{" "}
              <span className="gradient-text">power revenue</span> and
              empower teams
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a backend-focused software engineer with 7+ years of experience designing and
                delivering enterprise-grade APIs, platforms, and self-serve tooling. My work spans
                high-throughput ERP finance systems, Java/Oracle treasury platforms, cloud-based SaaS
                products, and revenue analytics pipelines.
              </p>
              <p>
                I&apos;m currently completing a{" "}
                <span className="text-slate-200 font-medium">Master of Information Technology</span> at
                the University of Technology Sydney (WAM 89.88, High Distinction), backed by an Academic
                Merit International Scholarship. I hold dual Master&apos;s degrees, the first in Industrial
                Engineering from National Tsing Hua University (GPA 3.80).
              </p>
              <p>
                I&apos;m at my best when partnering with product and business stakeholders to translate
                ambiguous requirements into scalable, well-documented systems: the kind that other teams
                can use and build on independently. I also actively mentor engineers, champion code
                quality, and leverage AI coding tools to amplify team output.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/kai-hsiang-chuang-501450123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  glass border border-white/10 text-sm text-slate-300
                  hover:text-white hover:border-indigo-400/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/kai-hsiang-chuang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  glass border border-white/10 text-sm text-slate-300
                  hover:text-white hover:border-indigo-400/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:kris.kh.chuang@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  glass border border-white/10 text-sm text-slate-300
                  hover:text-white hover:border-indigo-400/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
