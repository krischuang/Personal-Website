export default function Projects() {
  const projects = [
    {
      title: "Invoice QR Code Auto-Scan System",
      description:
        "Developed an invoice reimbursement automation system integrating Python (OpenCV) with Oracle ERP through RESTful APIs. Implemented OCR and QR code recognition logic to auto-extract invoice data, reducing accounting workload by 3 man-days/month. Designed and tested backend APIs for data validation and fraud detection.",
      technologies: ["Python", "OpenCV", "Oracle ERP", "RESTful APIs", "OCR", "QR Recognition"],
      github: "https://github.com/kai-hsiang-chuang",
      demo: "",
    },
    {
      title: "Shared Kitchen Platform",
      description:
        "ITRI cooperation project implementing user authentication, reservation system, and billing modules with MySQL database. Built RESTful APIs in Python to handle bookings, payments, and user profiles. Applied Transfer Learning for image recognition supporting automated data upload.",
      technologies: ["Python", "MySQL", "RESTful APIs", "Transfer Learning", "Authentication"],
      github: "https://github.com/kai-hsiang-chuang",
      demo: "",
    },
    {
      title: "ERP Workflow Automation",
      description:
        "Automated financial reporting workflows at VIS using Python scripts and SQL queries, improving efficiency by 30%. Integrated Oracle Treasury with in-house systems via API endpoints to support business expansion.",
      technologies: ["Python", "SQL", "Oracle Treasury", "API Integration", "Automation"],
      github: "https://github.com/kai-hsiang-chuang",
      demo: "",
    },
    {
      title: "Ad Performance Analytics Pipeline",
      description:
        "Built SQL pipelines using PostgreSQL to analyze advertising performance and user retention at Alfred Camera, improving monthly revenue by 10%. Developed Python scripts for A/B testing and pricing optimization using Pandas and NumPy.",
      technologies: ["PostgreSQL", "Python", "Pandas", "NumPy", "A/B Testing", "Analytics"],
      github: "https://github.com/kai-hsiang-chuang",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">
                  {project.title.split(" ").map((word) => word[0]).join("")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub Profile
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
