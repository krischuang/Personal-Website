export default function Hero() {
  const badges = [
    "Java", "Python", "RESTful APIs", "AWS", "Microservices",
    "PostgreSQL", "Oracle DB", "CI/CD", "Docker", "SQL",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080d1a 0%, #0d1424 50%, #080d1a 100%)" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float-alt"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 mb-10 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-300 font-medium">Open to Senior SE roles across ANZ</span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0, letterSpacing: "-0.02em" }}
        >
          Kai-Hsiang{" "}
          <span className="gradient-text">Chuang</span>
        </h1>

        {/* Title */}
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Senior Software Engineer
          <span className="text-indigo-400 mx-3">·</span>
          Backend Java &amp; API Platforms
          <span className="text-indigo-400 mx-3">·</span>
          Revenue Systems
        </h2>

        {/* Summary */}
        <p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          7+ years building mission-critical backend systems, well-documented APIs, and self-serve
          platforms that empower teams to move fast. Master of IT @ UTS · WAM&nbsp;89.88 (HD).
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <a
            href="#experience"
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm
              bg-gradient-to-r from-indigo-600 to-indigo-500
              hover:from-indigo-500 hover:to-cyan-500
              transition-all duration-300 shadow-lg shadow-indigo-900/50
              hover:shadow-indigo-500/30 hover:scale-105"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-slate-200 text-sm
              glass border border-white/10
              hover:border-indigo-400/40 hover:text-white
              transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/kai-hsiang-chuang-501450123"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-slate-400 text-sm
              hover:text-white transition-all duration-300 hover:scale-105
              flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Tech badges */}
        <div
          className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400
                bg-white/[0.05] border border-white/[0.08]
                hover:text-indigo-300 hover:border-indigo-500/30 hover:bg-indigo-500/10
                transition-all duration-200 cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
