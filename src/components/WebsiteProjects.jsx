import { Globe, ExternalLink } from "lucide-react";

const webProjects = [
  {
    title: "E-Commerce Furniture Store",
    description:
      "Built a fully responsive online store using React and Tailwind CSS with integrated payment gateway.",
    link: "#", // Ganti dengan link project asli
  },
  {
    title: "Personal Branding Blog",
    description:
      "Developed a high-performance blog with SEO optimization and custom content management system.",
    link: "#", // Ganti dengan link project asli
  },
];

export const WebsiteProjects = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
        Website Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Globe
                  className="text-indigo-500 dark:text-indigo-400"
                  size={20}
                />
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
