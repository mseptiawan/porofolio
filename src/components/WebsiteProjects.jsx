import { Link } from "react-router-dom";

const webProjects = [
  {
    date: "April 9, 2024",
    title: "E-Commerce Furniture Store",
    slug: "bjb-rental",
  },
  // ...
];

export const WebsiteProjects = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        Website Projects
      </h2>
      <div className="flex flex-col gap-4">
        {webProjects.map((project, index) => (
          <Link
            key={index}
            // Ubah dari /projects/ menjadi /p
            to={`/project/${project.slug}`}
            className="group flex items-baseline gap-6 py-1"
          >
            <span className="text-slate-500 min-w-[120px] text-sm">
              {project.date}
            </span>
            <h3 className="text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 transition-colors">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
