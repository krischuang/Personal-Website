export default function Skills() {
  const categories = [
    {
      label: "Languages",
      accent: "text-indigo-400",
      border: "border-indigo-500/20",
      dot: "bg-indigo-400",
      skills: ["Java", "Python", "JavaScript", "SQL", "C#", "Shell Scripting"],
    },
    {
      label: "Backend & Architecture",
      accent: "text-violet-400",
      border: "border-violet-500/20",
      dot: "bg-violet-400",
      skills: [
        "RESTful API Design", "Microservices", "Distributed Systems",
        "Concurrency & Multithreading", "SOLID Principles", "Service Decomposition",
        "Self-Serve Platform Design", "Revenue Platform Patterns",
      ],
    },
    {
      label: "Databases",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      dot: "bg-cyan-400",
      skills: [
        "PostgreSQL", "MySQL", "Oracle DB",
        "SQL Modelling & Tuning", "Data Structure Design for Scale", "Oracle ERP",
      ],
    },
    {
      label: "Cloud & DevOps",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      dot: "bg-emerald-400",
      skills: ["AWS EC2", "Docker", "GitHub Actions CI/CD", "Nginx", "Linux", "Git"],
    },
    {
      label: "AI & Tooling",
      accent: "text-amber-400",
      border: "border-amber-500/20",
      dot: "bg-amber-400",
      skills: [
        "GitHub Copilot", "ChatGPT / LLM Integration",
        "AI-Assisted Development", "Deep Learning", "OpenCV",
      ],
    },
    {
      label: "Collaboration",
      accent: "text-rose-400",
      border: "border-rose-500/20",
      dot: "bg-rose-400",
      skills: [
        "Technical Mentoring", "Stakeholder Communication",
        "Code Review Leadership", "Pair Programming",
        "Cross-functional Agile Delivery", "Architectural Trade-off Analysis",
      ],
    },
  ];

  const certifications = [
    { name: "SAS Viya Data Challenge", detail: "Ranked 10th Nationally · SAS · 2025" },
    { name: "Commonwealth Bank SE Virtual Experience", detail: "Forage" },
    { name: "Big Data Analyst Certification", detail: "iPAS" },
    { name: "Google Analytics Individual Qualification", detail: "Google" },
    { name: "Journal Paper Published", detail: "International Journal of Production Research · 2021" },
    { name: "Best Industrial Application Paper", detail: "18th APIEMS Conference · 2018" },
    { name: "Outstanding Presentation Award", detail: "ISMI International Conference · 2018" },
  ];

  return (
    <section id="skills" style={{ background: "#080d1a" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Skills & Recognition</span>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 border ${cat.border}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <h3 className={`text-sm font-semibold ${cat.accent}`}>{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07]
                      px-2.5 py-1 rounded-lg hover:text-slate-200 hover:bg-white/[0.08]
                      transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <h3 className="text-slate-300 font-semibold mb-6 text-sm tracking-wide uppercase">
          Certifications &amp; Awards
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass-card rounded-xl px-5 py-4 border border-white/[0.06] flex items-start gap-3"
            >
              <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-slate-200">{cert.name}</p>
                <p className="text-xs text-slate-600 mt-0.5">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
