import { Link } from "react-router-dom";

const webProjects = [
  {
    date: "October 2025",
    title: "1st Place Winner – UI/UX Competition at Rafatech 2025",
    slug: "ui-ux",
  },
  {
    date: "October 2025",
    title: "Finalist – Web Development Competition at Rafatech 2025",
    slug: "web-development",
  },
];

export const Award = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl font-bold  mb-8 text-slate-900 dark:text-white">
        Award
      </h2>

      <div className="flex flex-col gap-4">
        {webProjects.map((project, index) => (
          <Link
            key={index}
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
