export default function Experience() {
  const experiences = [
    {
      title: "Senior AI Software Consultant",
      company: "Airlie / AI Registrar",
      location: "Sydney, Australia",
      period: "Jul 2026 – Present",
      color: "from-emerald-500 to-cyan-500",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      bullets: [
        "Lead code reviews for production features across multiple AI healthcare projects, ensuring code quality, security, maintainability, and compliance with engineering standards.",
        "Partner with external partners and third-party vendors to gather requirements, evaluate technical feasibility, and translate business needs into scoped engineering work.",
        "Break large initiatives into work packages and coordinate implementation priorities and delivery planning across engineering, product, and management stakeholders.",
        "Advise leadership on software architecture and technical risk, recommending scalable, maintainable solutions, while continuing to build production software across backend services, AI workflows, and system integrations.",
      ],
      technologies: ["OpenAI API", "Claude API", "System Architecture", "Code Review", "Stakeholder Delivery"],
    },
    {
      title: "AI Software Engineer",
      company: "Airlie / AI Registrar",
      location: "Sydney, Australia",
      period: "May 2026 – Jul 2026",
      color: "from-teal-500 to-emerald-500",
      accent: "text-teal-400",
      border: "border-teal-500/20",
      bullets: [
        "Recognised that manual, document-based data entry was a bottleneck for reliable clinical data capture, and designed/built the backend for an AI-powered document processing platform that automates structured field extraction using OCR and LLM-based extraction (OpenAI, Claude), with output validation, in a regulated environment.",
        "Investigated failure points across document ingestion and extraction, then built async processing pipelines (PostgreSQL, Redis, BullMQ) with validation checks at each stage and retry logic that avoids duplicating work, keeping the pipeline auditable and resilient enough to meet audit requirements in a regulated healthcare environment.",
        "Built REST API integrations and authentication flows with external healthcare systems, plus React/Next.js dashboards for clinical review of extracted data, keeping records in sync and traceable across systems.",
        "Wrote Vitest and end-to-end tests covering the AI extraction workflows, validating extraction quality and catching regressions as prompts and validation logic changed over time.",
      ],
      technologies: ["OpenAI API", "Claude API", "OCR", "PostgreSQL", "Redis", "BullMQ", "React/Next.js", "Vitest"],
    },
    {
      title: "Frontend & Full-Stack Developer",
      company: "Solum Medical",
      location: "Sydney, Australia",
      period: "Jan 2026 – Apr 2026",
      color: "from-indigo-500 to-violet-500",
      accent: "text-indigo-400",
      border: "border-indigo-500/20",
      bullets: [
        "Owned full-stack delivery of a real-time Order Management System (React/TypeScript frontend, Node.js/TypeScript API, PostgreSQL), focusing the architecture on low latency and stability under concurrent usage in production.",
        "Optimised async data-fetching and component re-render logic to keep the UI responsive under heavy concurrent usage, and reviewed TypeScript code across every release for best practices, reusable components, and security issues.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "DevOps & Frontend Developer",
      company: "Cloud Riverdale",
      location: "Sydney, Australia",
      period: "Aug 2025 – Dec 2025",
      color: "from-violet-500 to-purple-500",
      accent: "text-violet-400",
      border: "border-violet-500/20",
      bullets: [
        "Built and maintained GitHub Actions CI/CD pipelines with staging gates and automated tests, and managed AWS EC2, Nginx, and Linux deployment environments for a Dockerised platform, reducing manual deployment steps and supporting reliable production releases.",
        "Reduced frontend load times by 25% through code optimisation and component-level caching in a React CRM platform.",
      ],
      technologies: ["AWS EC2", "GitHub Actions", "Docker", "Nginx", "Linux", "React"],
    },
    {
      title: "Junior to Senior IT and System Engineer",
      company: "Vanguard International Semiconductor Corporation (VIS)",
      location: "Taiwan",
      period: "Mar 2021 – Jan 2025",
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-400",
      border: "border-blue-500/20",
      bullets: [
        "Led end-to-end design and delivery of the VIS Treasury System, an enterprise ERP platform for real-time financial operations, including Oracle Treasury integration, PostgreSQL data models, and REST APIs that let finance and engineering teams pull their own reports.",
        "Integrated Oracle Treasury with internal systems via REST APIs and automated data exchange, supporting a 10% expansion in business volume.",
        "Automated ERP and financial reporting workflows using Python and SQL, achieving a 30% efficiency gain, and identified the opportunity to drive adoption of an internal AI assistant (VIS ChatGPT) across the engineering team to cut down manual work.",
        "Mentored junior engineers through code reviews and pair programming; received the 2023 Annual Excellent Employee and 2022 Outstanding Performance Awards.",
      ],
      technologies: ["Python", "SQL", "Oracle DB", "PostgreSQL", "RESTful APIs"],
      awards: ["2023 Annual Excellent Employee – VIS", "2022 Outstanding Performance Award – VIS"],
    },
    {
      title: "Business Data Analyst",
      company: "AlfredCamera",
      location: "Taiwan",
      period: "Jul 2019 – Feb 2021",
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      bullets: [
        "Built Python data pipelines and API integrations with external analytics partners, powering real-time retention, revenue, and ad-performance dashboards used by executive stakeholders.",
        "Designed PostgreSQL pipelines for ad performance and retention analysis, contributing to 10% monthly revenue growth through data-driven product decisions.",
        "Developed Python (Pandas, NumPy) scripts for A/B testing and pricing analysis, validating hypotheses and turning ambiguous business questions into repeatable data workflows.",
      ],
      technologies: ["PostgreSQL", "Python", "Pandas", "NumPy", "A/B Testing", "Analytics"],
    },
  ];

  return (
    <section id="experience" style={{ background: "#080d1a" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Experience</span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-full bg-[#080d1a] flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${exp.color}`} />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`glass-card rounded-2xl p-7 border ${exp.border}`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className={`text-sm font-semibold ${exp.accent} mt-0.5`}>
                        {exp.company}
                        <span className="text-slate-500 font-normal"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-slate-500 bg-white/[0.05] border border-white/[0.06] px-3 py-1.5 rounded-full self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Awards */}
                  {"awards" in exp && exp.awards && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.awards.map((a, ai) => (
                        <span
                          key={ai}
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {a}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
