export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Solum Medical",
      location: "Sydney, Australia",
      period: "Jan 2026 – Present",
      color: "from-emerald-500 to-cyan-500",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      bullets: [
        "Designed and built backend APIs for an Order Management System applying SOLID principles and clean API contract design to handle concurrent product, inventory, and distributor data flows at production scale.",
        "Built and documented self-serve platform tooling and internal APIs, enabling engineering teams to integrate independently, directly reducing cross-team friction and accelerating delivery velocity.",
        "Acted as technical quality champion: led code reviews to enforce engineering best practices, identify architectural risks, and ensure services met scalability and security standards before each production release.",
        "Leveraged AI coding tools (GitHub Copilot) hands-on to accelerate feature delivery and improve code consistency across the backend codebase.",
        "Used every production incident as an opportunity to improve system observability, resilience, and operational runbooks.",
      ],
      technologies: ["Java", "Python", "RESTful APIs", "Microservices", "AWS", "CI/CD", "GitHub Copilot"],
    },
    {
      title: "DevOps & Frontend Developer",
      company: "Cloud Riverdale",
      location: "Sydney, Australia",
      period: "Aug 2025 – Dec 2025",
      color: "from-indigo-500 to-violet-500",
      accent: "text-indigo-400",
      border: "border-indigo-500/20",
      bullets: [
        "Optimised backend service performance on AWS EC2, maintaining 99.9% uptime through targeted infrastructure tuning, automated health monitoring, and rapid incident response.",
        "Designed and implemented CI/CD pipelines (GitHub Actions) enabling fully automated zero-downtime deployments: commit → test → staging → production.",
        "Developed self-serve internal tooling and operational documentation, empowering non-technical stakeholders to manage releases and configurations independently.",
        "Profiled and refactored concurrent backend service code to reduce API response times by 25% through threading improvements and service simplification.",
      ],
      technologies: ["AWS EC2", "GitHub Actions", "Docker", "Nginx", "CI/CD", "Linux"],
    },
    {
      title: "Junior → Senior IT and System Engineer",
      company: "Vanguard International Semiconductor Corporation",
      location: "Taiwan",
      period: "Mar 2021 – Jan 2025",
      color: "from-violet-500 to-indigo-500",
      accent: "text-violet-400",
      border: "border-violet-500/20",
      bullets: [
        "Progressed from maintaining high-throughput ERP Finance System modules (AP/AR/GL) to leading end-to-end design of the VIS Treasury System, a Java/Oracle enterprise financial platform handling internal lending, accounting management, and real-time treasury operations at corporate scale.",
        "Architected RESTful backend APIs and relational database schemas for complex multi-step financial workflows; defined API contracts and documented platform interfaces to enable self-serve adoption across finance and accounting teams.",
        "Identified solution options, evaluated architectural trade-offs, and proposed scalable software designs to non-technical stakeholders; balancing immediate business needs against long-term extensibility, then executed iteratively while maintaining production stability.",
        "Developed a C# application to automate the Accounts Payable Excel reporting workflow (data parsing, business logic, formatted output), eliminating manual compilation; also optimised SQL query performance and backend integrations across enterprise financial systems.",
        "Proactively identified and communicated technical debt to stakeholders; drove AI tool adoption (VIS ChatGPT) across engineering workflows. Both initiatives measurably reduced system complexity and improved team productivity.",
        "Mentored junior engineers through structured code reviews and pair-programming; built a knowledge-sharing culture that raised team capability and code quality.",
      ],
      technologies: ["Java", "Python", "C#", "Oracle DB", "PostgreSQL", "RESTful APIs", "SQL", "Agile"],
      awards: ["2023 Annual Excellent Employee – VIS", "2022 Individual Outstanding Performance Award – VIS"],
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
        "Designed and implemented API integrations with external partners, creating reliable data pipelines that powered company-wide revenue, retention, and monetisation analytics surfaced to executives.",
        "Built growth dashboards tracking paid user acquisition, retention, upsell, and cross-sell KPIs, directly informing pricing and promotion strategy at the CEO level.",
        "Developed Python automation services for A/B testing and pricing analysis, enabling rapid monetisation experiments and evidence-based product decisions.",
        "Collaborated with Product and Engineering teams to design backend APIs for customer-facing features, translating ambiguous business requirements into clear technical specifications.",
      ],
      technologies: ["PostgreSQL", "Python", "Pandas", "RESTful APIs", "A/B Testing", "Analytics"],
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
