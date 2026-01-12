import { Link } from "react-router-dom";
import { Trophy, Medal, ExternalLink } from "lucide-react";

const awards = [
  {
    date: "October 2025",
    title: "1st Place Winner – UI/UX Competition at Rafatech 2025",
    slug: "uiuxdesigner-bajoo",
    rank: "Winner",
    organizer: "UIN Raden Fatah",
  },
  {
    date: "October 2025",
    title: "Finalist – Web Development Competition at Rafatech 2025",
    slug: "finaliswebsite",
    rank: "Finalist",
    organizer: "UIN Raden Fatah",
  },
];

export const Award = () => {
  return (
    <section className="w-full py-20 border-t border-slate-200 dark:border-slate-800">
      {/* Label Header */}
      <div className="flex items-center gap-3 mb-10">
        <Trophy className="text-yellow-500" size={20} />
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-slate-400 uppercase">
          Recognitions
        </span>
      </div>

      <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white tracking-tighter">
        Honors & <span className="text-yellow-500">Awards.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <Link
            key={index}
            to={`/project/${award.slug}`}
            className="
              group
              relative
              block
              p-8
              bg-white dark:bg-[#0a0a0a]
              rounded-[2.5rem]
              border border-slate-200 dark:border-slate-800
              hover:border-yellow-500/50
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              {award.rank === "Winner" ? (
                <Trophy size={120} strokeWidth={1} />
              ) : (
                <Medal size={120} strokeWidth={1} />
              )}
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                    {award.date}
                  </span>
                  <ExternalLink
                    size={18}
                    className="text-slate-300 group-hover:text-yellow-500 transition-colors"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Organized by {award.organizer}
                </p>
              </div>

              {/* Badge Rank */}
              <div className="mt-8">
                <span
                  className={`
                  inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]
                  ${
                    award.rank === "Winner"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-500"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  }
                `}
                >
                  {award.rank}
                </span>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div
              className={`absolute -bottom-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 
              ${award.rank === "Winner" ? "bg-yellow-500" : "bg-blue-500"}`}
            ></div>
          </Link>
        ))}
      </div>
    </section>
  );
};
