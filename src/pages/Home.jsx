import { useState, useEffect } from "react";
import { Calendar, Linkedin, Moon, Sun } from "lucide-react";
import { AnalystProject } from "../components/AnalystProject";
import { WebsiteProjects } from "../components/WebsiteProjects";

// PERBAIKAN: Tambahkan tanda => setelah kurung ()
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Sinkronisasi tema dengan class HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // Tambahkan overflow-x-hidden untuk mencegah scroll horizontal yang tidak diinginkan
    <div className="min-h-screen p-8 md:p-24 transition-colors duration-300 bg-white dark:bg-slate-900 overflow-x-hidden">
      {/* Tombol Toggle Tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        // Gunakan z-index agar tombol tidak tertutup konten lain
        className="fixed top-8 right-8 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-lg hover:scale-110 transition-all cursor-pointer z-50"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Portfolio
          </h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Hello, I'm Jason Chin.
            </h2>

            <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  certified expert
                </span>{" "}
                in Notion, helping busy people like you be more organized and
                productive.
              </p>
              <p className="mt-4">
                I design and optimize Notion templates to be clutter-free, so
                you can{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  focus on what's important
                </span>{" "}
                and{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  get things done
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Tombol Book a Call */}
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm dark:text-white cursor-pointer">
                <Calendar size={18} />
                <span className="font-medium">Book a call</span>
              </button>

              {/* Tombol LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mseptiawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005c8d] transition-colors shadow-sm"
              >
                <Linkedin size={18} fill="currentColor" />
                <span className="font-medium">Connect</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/profil.png"
              alt="Profile Illustration"
              // Tambahkan drop-shadow agar gambar tanpa background terlihat lebih nyata
              className="w-full max-w-sm h-auto object-contain dark:brightness-90 transition-all drop-shadow-2xl"
            />
          </div>
        </main>

        {/* Konten Tambahan */}
        <div className="mt-20 space-y-20">
          <AnalystProject />
          <WebsiteProjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
