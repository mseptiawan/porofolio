import { Link } from "react-router-dom";

const awards = [
  {
    date: "October 2025",
    title: "1st Place Winner – UI/UX Competition at Rafatech 2025",
    slug: "uiuxdesigner-bajoo",
  },
  {
    date: "October 2025",
    title: "Finalist – Web Development Competition at Rafatech 2025",
    slug: "finaliswebsite",
  },
];

export const Award = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 max-w-5xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        Award
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        {awards.map((award, index) => (
          <Link
            key={index}
            to={`/project/${award.slug}`}
            className="
              group
              flex flex-col sm:flex-row
              sm:items-baseline
              gap-1 sm:gap-6
              py-2
              rounded-lg
              transition-all
              hover:bg-slate-50 dark:hover:bg-slate-800/50
              active:scale-[0.98]
            "
          >
            {/* Date */}
            <span className="text-slate-500 text-xs sm:text-sm sm:min-w-[120px]">
              {award.date}
            </span>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 transition-colors">
              {award.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
