import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const webProjects = [
  {
    date: "Nov 2025",
    title: "BJB Rental Mobil Palembang",
    slug: "bjb-rental-mobil-palembang",
    type: "Web App",
  },
  {
    date: "Oct 2025",
    title: "Palembiz – Direktori UMKM Palembang",
    slug: "palembiz-direktori-umkm",
    type: "Platform",
  },
  {
    date: "Feb 2025",
    title: "Sistem Insentif Promotor Changhong",
    slug: "sistem-insentif-promotor-changhong",
    type: "Enterprise",
  },
  {
    date: "Nov 2025",
    title: "Marketplace Jasa Receh",
    slug: "jasa-receh-marketplace",
    type: "Marketplace",
  },
  {
    date: "Sep 2025",
    title: "Blog CMS Laravel – Pemenang Karir",
    slug: "blog-cms-laravel",
    type: "CMS",
  },
  {
    date: "Des 2025",
    title: "Cafe – Pemenang Karir",
    slug: "cafe",
    type: "Website",
  },
  {
    date: "Des 2025",
    title: "Desaian Tamana Punti Kayu – Pemenang Karir",
    slug: "taman-punti-kayu",
    type: "Design",
  },
  {
    date: "Jan 2025",
    title: "Cafe Direktori",
    slug: "cafe",
  },
  {
    date: "Nov 2024",
    title: "Design figma Taman punti kayu",
    slug: "taman-punti-kayu",
  },
];

export const WebsiteProjects = () => {
  return (
    <section className="w-full py-16">
      {/* Label Kecil ala Web App Modern */}
      <div className="flex items-center gap-3 mb-6">
        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-slate-400 uppercase">
          Project Archives
        </span>
      </div>

      <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white tracking-tighter">
        Website & <span className="text-blue-600">Digital Solutions.</span>
      </h2>

      <div className="grid grid-cols-1 gap-px bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {webProjects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${project.slug}`}
            className="
              group
              relative
              flex flex-col sm:flex-row
              sm:items-center
              justify-between
              gap-4
              p-6 sm:p-8
              bg-white dark:bg-[#0a0a0a]
              transition-all duration-500
              hover:bg-slate-50 dark:hover:bg-blue-900/10
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 z-10">
              {/* Date dengan Font Mono */}
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tracking-tighter w-24">
                [{project.date}]
              </span>

              <div className="space-y-1">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                {/* Badge Tipe Project */}
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-500 uppercase tracking-widest">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Icon Panah Muncul saat Hover */}
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-transparent group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
              <ArrowRight className="text-blue-600" size={20} />
            </div>

            {/* Background Decor saat Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};
