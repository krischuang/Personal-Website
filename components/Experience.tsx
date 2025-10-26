export default function Experience() {
  const experiences = [
    {
      title: "Frontend & DevOps Engineer",
      company: "Cloud Riverdale",
      location: "Sydney, Australia",
      period: "Aug 2025 - Present",
      description:
        "Deployed and maintained AWS EC2 infrastructure, Nginx servers, and network configurations, achieving 99.9% uptime. Enhanced frontend performance and security through modular code optimization, reducing load times by 25%. Collaborated cross-functionally with design, backend, and product teams to deliver high-quality, user-focused web applications.",
      technologies: ["React", "JavaScript", "AWS EC2", "Nginx", "Docker", "CI/CD"],
    },
    {
      title: "Senior IT and System Engineer",
      company: "Vanguard International Semiconductor Corporation",
      location: "Taiwan",
      period: "Mar 2021 - Feb 2025",
      description:
        "Automated ERP workflows using Python scripts and SQL queries, improving financial reporting efficiency by 30%. Integrated Oracle Treasury with in-house systems via API endpoints, supporting a 10% business expansion. Led cross-functional teams using Agile methodologies with Jira/Confluence to deliver projects on time.",
      technologies: ["Python", "SQL", "Oracle DB", "RESTful APIs", "Jira", "Agile"],
    },
    {
      title: "Business Data Analyst",
      company: "Alfred Camera",
      location: "Taiwan",
      period: "Jul 2019 - Feb 2021",
      description:
        "Built SQL pipelines (PostgreSQL) to analyse ad performance and retention, improving revenue by 10% monthly. Developed Python (Pandas, NumPy) scripts for A/B testing and pricing optimization. Partnered with engineers to integrate analytics with front-end dashboards.",
      technologies: ["PostgreSQL", "Python", "Pandas", "NumPy", "A/B Testing", "Data Analytics"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
