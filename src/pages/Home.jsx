import { useState, useEffect } from "react";
import { Calendar, Linkedin, Moon, Sun } from "lucide-react";
import { AnalystProject } from "../components/AnalystProject";
import { WebsiteProjects } from "../components/WebsiteProjects";
import { Award } from "../components/Award";

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
            Portofolio
          </h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Hello, I'm Septiawan.
            </h2>

            <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  Full-stack Web Developer
                </span>{" "}
                at Universitas Multi Data Palembang. I specialize in building
                robust digital solutions using{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  Laravel, ReactJS, and Tailwind CSS
                </span>
                .
              </p>
              <p className="mt-4">
                I am passionate about helping businesses{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  transition from manual processes to scalable digital systems
                </span>
                . With a focus on clean code and efficient API integration,
                <span className="font-bold text-slate-900 dark:text-white">
                  {" "}
                  let's build innovative solutions together
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
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
              src="/images/profile.jfif"
              alt="Profile Illustration"
              // Tambahkan drop-shadow agar gambar tanpa background terlihat lebih nyata
              className="w-full max-w-sm h-auto object-contain dark:brightness-90 transition-all drop-shadow-2xl"
            />
          </div>
        </main>

        {/* Konten Tambahan */}
        <div className="mt-20 space-y-20">
          <WebsiteProjects />
          <Award />
        </div>
      </div>
    </div>
  );
};

export default Home;
