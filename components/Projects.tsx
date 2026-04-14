export default function Projects() {
  const projects = [
    {
      title: "Promotional Offer Platform",
      subtitle: "Self-Serve Revenue Enablement",
      description:
        "Backend promotional platform in Java/Python enabling internal teams to configure, launch, and manage targeted offers without engineering involvement. Integrated with content management, personalisation, and experimentation services.",
      highlights: [
        "RESTful API layer with full documentation & self-serve config interface",
        "Scalable DB schemas for discounts, trials, bundles with real-time eligibility",
        "SOLID-principled design, enabling new offer types to be added without structural rework",
      ],
      technologies: ["Java", "Python", "PostgreSQL", "RESTful APIs", "SOLID"],
      gradient: "from-indigo-600 via-violet-600 to-purple-700",
      icon: "🚀",
    },
    {
      title: "Invoice Automation Service",
      subtitle: "Distributed Java/Oracle Backend",
      description:
        "Distributed Java/Python backend service with concurrent data processing for OCR-based invoice extraction and Oracle ERP integration, reducing manual financial processing from days to minutes.",
      highlights: [
        "Event-driven patterns with structured error handling at service boundaries",
        "OCR + QR recognition logic with fraud detection validation",
        "Delivered with automated testing and CI/CD from day one",
      ],
      technologies: ["Java", "Python", "Oracle ERP", "OCR", "CI/CD", "Event-driven"],
      gradient: "from-cyan-600 via-blue-600 to-indigo-700",
      icon: "⚙️",
    },
    {
      title: "ERP Finance System Automation",
      subtitle: "AP Workflow & Oracle Treasury Integration",
      description:
        "C# application automating the Accounts Payable Excel reporting workflow at VIS, plus distributed integration service connecting Oracle Treasury with internal financial platforms to support a 10% business expansion.",
      highlights: [
        "Automated AP data parsing, business logic, and formatted report generation",
        "Zero-downtime Oracle Treasury integration with concurrent data transformation",
        "Improved ERP workflow efficiency by 30% through systematic service decomposition",
      ],
      technologies: ["C#", "Python", "SQL", "Oracle DB", "Oracle Treasury", "REST APIs"],
      gradient: "from-violet-600 via-indigo-600 to-blue-700",
      icon: "📊",
    },
    {
      title: "Ad Performance Analytics Pipeline",
      subtitle: "Revenue & Retention Data Platform",
      description:
        "PostgreSQL-backed data pipeline and growth dashboard system at AlfredCamera tracking paid user acquisition, retention, upsell, and cross-sell KPIs. Python A/B testing and pricing analysis services enabling data-driven revenue decisions.",
      highlights: [
        "SQL pipelines powering executive-facing revenue and retention dashboards",
        "Python A/B testing automation contributing to 10% monthly revenue improvement",
        "API integrations with external partners for seamless data ingestion",
      ],
      technologies: ["PostgreSQL", "Python", "Pandas", "A/B Testing", "REST APIs", "Analytics"],
      gradient: "from-emerald-600 via-cyan-600 to-blue-700",
      icon: "📈",
    },
  ];

  return (
    <section id="projects" style={{ background: "#0d1424" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Projects</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden border border-white/[0.07] flex flex-col"
            >
              {/* Card top gradient banner */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Title row */}
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mt-4 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5 flex-1">
                  {project.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2.5 text-xs text-slate-500 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kai-hsiang-chuang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              glass border border-white/10 text-sm text-slate-400
              hover:text-white hover:border-indigo-400/30 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
