export default function Projects() {
  const projects = [
    {
      title: "AI Document Intelligence Pipeline",
      subtitle: "Airlie / AI Registrar",
      description:
        "Document processing pipeline combining OCR and LLM-based structured field extraction (OpenAI, Claude), with a Redis-backed queue for asynchronous human review, replacing manual handling of clinical documents arriving from email and upload channels.",
      highlights: [
        "Split into ingestion, LLM extraction, human review, and output storage stages, each with its own validation step, so bad data gets caught early and stays traceable",
        "Iterated on prompt design and structured output schemas to improve extraction accuracy",
        "Integration and end-to-end tests catch regressions as extraction logic changes",
      ],
      technologies: ["OpenAI API", "Claude API", "OCR", "Redis", "PostgreSQL"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      icon: "🩺",
    },
    {
      title: "Invoice OCR & ERP Automation System",
      subtitle: "Vanguard International Semiconductor (VIS)",
      description:
        "Python (OpenCV) OCR pipeline integrated with Oracle ERP via REST APIs, automatically extracting invoice data and QR codes from scanned documents and submitting validated records, reducing manual accounting effort by 3 man-days/month.",
      highlights: [
        "Split into image preprocessing, QR decode, field extraction, and ERP submission stages, each validated independently to handle scan quality issues",
        "Schema validation and business-rule checks catch malformed or non-compliant records before they reach the ERP system",
      ],
      technologies: ["Python", "OpenCV", "Oracle ERP", "REST APIs"],
      gradient: "from-blue-600 via-indigo-600 to-violet-700",
      icon: "📊",
    },
    {
      title: "WorkerAI",
      subtitle: "Modular AI Task Orchestration Platform · Active Personal Project",
      description:
        "Modular AI task orchestration platform where independent workers handle discrete pieces of logic and are chained into multi-stage pipelines by a central scheduler that tracks task state and coordinates workflow execution.",
      highlights: [
        "Orchestration runtime in Python/FastAPI with PostgreSQL-backed task state, async execution, and retry/failure recovery, covered by unit and integration tests",
        "React/Next.js dashboard and REST API for monitoring workers and generating daily reports",
        "Worker-based design allows new workflow types, including human-in-the-loop review steps, without changing the core scheduler; first applied end-to-end to a quantitative trading strategy evaluator",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "React/Next.js"],
      gradient: "from-indigo-600 via-violet-600 to-purple-700",
      icon: "🤖",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
