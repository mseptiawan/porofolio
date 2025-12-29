import { Link } from "react-router-dom";

const webProjects = [
  {
    date: "Nov 2025",
    title: "BJB Rental Mobil Palembang",
    slug: "bjb-rental-mobil-palembang",
  },
  {
    date: "Oct 2025",
    title: "Palembiz – Direktori UMKM Palembang",
    slug: "palembiz-direktori-umkm",
  },
  {
    date: "Feb 2025",
    title: "Sistem Insentif Promotor Changhong",
    slug: "sistem-insentif-promotor-changhong",
  },
  {
    date: "Nov 2025",
    title: "Marketplace Jasa Receh",
    slug: "jasa-receh-marketplace",
  },
  {
    date: "Sep 2025",
    title: "Blog CMS Laravel – Pemenang Karir",
    slug: "blog-cms-laravel",
  },  {
    date: "Des 2025",
    title: "Cafe  – Pemenang Karir",
    slug: "cafe",
  },  {
    date: "Des 2025",
    title: "Desaian Tamana Punti Kayu – Pemenang Karir",
    slug: "taman-punti-kayu",
  },


];

export const WebsiteProjects = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 max-w-5xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        Website and Design Projects
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        {webProjects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${project.slug}`}
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
            <span className="text-slate-500 text-xs sm:text-sm sm:min-w-[110px]">
              {project.date}
            </span>

            {/* Title */}
            <h3 className="text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 transition-colors">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
