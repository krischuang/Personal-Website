export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "Web Performance", level: 85 },
        { name: "Accessibility", level: 80 },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 75 },
        { name: "Data Validation", level: 85 },
      ],
    },
    {
      category: "Data & Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Oracle DB", level: 85 },
        { name: "SQL Modeling & Tuning", level: 90 },
        { name: "Pandas & NumPy", level: 90 },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2", level: 85 },
        { name: "Docker", level: 85 },
        { name: "Nginx", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
