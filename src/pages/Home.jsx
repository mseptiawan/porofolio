import Hero from "../components/Hero";
import { AnalystProject } from "../components/AnalystProject";
import { WebsiteProjects } from "../components/WebsiteProjects";
import { Award } from "../components/Award";
import Footer from "../components/Footer";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Header Section dengan Efek Glassmorphism */}
        <header className="mb-20 pt-10 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white">
            PORTO<span className="text-blue-600">.</span>FOLIO
          </h1>
          <p className="text-slate-500 mt-2 font-mono tracking-widest uppercase text-sm">
            Edition 2026-2030
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Bento Card Info (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
                Hello, I'm Septiawan.
              </h2>

              <div className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                <p>
                  I'm a{" "}
                  <span className="text-slate-900 dark:text-white font-semibold underline decoration-blue-500/30">
                    Full-stack Web Developer
                  </span>{" "}
                  at Universitas Multi Data Palembang.
                </p>
                <p>
                  Specializing in{" "}
                  <span className="italic text-blue-600">
                    Laravel, ReactJS, and Tailwind CSS
                  </span>{" "}
                  to bridge the gap between complex manual processes and
                  scalable digital ecosystems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://www.linkedin.com/in/mseptiawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={20} />
                  <span className="font-bold text-sm">CONNECT</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>

                <a
                  href="https://github.com/mseptiawan"
                  target="_blank"
                  className="p-3 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github
                    size={24}
                    className="text-slate-700 dark:text-slate-300"
                  />
                </a>
              </div>
            </div>

            {/* Stats Card / Mini Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/10">
                <p className="text-blue-600 dark:text-blue-400 font-mono text-sm uppercase">
                  Status
                </p>
                <p className="text-2xl font-bold dark:text-white mt-1">
                  Available for Projects
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 font-mono text-sm uppercase">
                  Focus
                </p>
                <p className="text-2xl font-bold dark:text-white mt-1">
                  Web Automation
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: 3D-feel Profile Card (Span 5) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-black rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10">
              <img
                src="/images/profile.jfif"
                alt="Septiawan"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em]">
                  Based in
                </p>
                <p className="text-white text-xl font-bold">Palembang, ID</p>
              </div>
            </div>
          </div>
        </main>

        {/* Section Proyek dengan Layout Grid Modern */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold dark:text-white whitespace-nowrap text-slate-400 uppercase tracking-widest text-sm">
              Featured Work
            </h3>
            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="space-y-32">
            <WebsiteProjects />
            <Award />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
