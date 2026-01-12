import { Folder } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Sistem Insentif Promotor",
    slug: "sistem-stok",
    description:
      "Menganalisa aktifitas pemberian insentif pada PT Changhong Electric Indonesia yang sering error dan menyebabkan kehilangan data.",
  },
  {
    title: "Sistem Stok",
    slug: "sistem-hrd",
    description:
      "Created a custom system to manage stock data efficiently and minimize human error.",
  },
];

export const AnalystProject = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 max-w-5xl mx-auto py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
        Projects
      </h2>

      {/* Grid Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, index) => (
          <Link
            to={`/project/${project.slug}`}
            key={index}
            className="
              group
              block
              p-5 sm:p-6
              rounded-2xl
              border border-slate-200 dark:border-slate-700
              bg-white dark:bg-slate-800
              shadow-sm
              hover:shadow-lg
              hover:border-indigo-500 dark:hover:border-indigo-400
              transition-all duration-300
              active:scale-[0.98]
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <Folder
                size={20}
                className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors"
              />
              <h3 className="font-semibold sm:font-bold text-base sm:text-lg text-slate-800 dark:text-slate-100">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>

            {/* CTA */}
            <div className="mt-4 text-sm font-medium text-indigo-500 dark:text-indigo-400">
              Read details →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
