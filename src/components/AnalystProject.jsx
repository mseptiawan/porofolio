import { Folder } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const projects = [
  {
    title: "Consultation for Freelancer",
    slug: "sistem-stok", // Ini harus sama dengan nama file mdx kamu
    description:
      "Guided a freelance graphic designer in organizing client projects in Notion.",
  },
  {
    title: "Custom Workspace for Content Creator",
    slug: "sistem-hrd", // Ini harus sama dengan nama file mdx kamu
    description:
      "Created a custom Notion workspace to manage multiple social media channels and projects.",
  },
];

export const AnalystProject = () => {
  return (
    <section className="max-w-5xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          /* Bungkus dengan Link */
          <Link
            to={`/project/${project.slug}`}
            key={index}
            className="block p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Folder
                className="text-slate-600 dark:text-slate-400"
                size={20}
              />
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tambahan visual agar user tahu ini bisa diklik */}
            <div className="mt-4 text-sm font-medium text-indigo-500 dark:text-indigo-400">
              Read details →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
