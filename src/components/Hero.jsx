import { useState, useEffect } from "react";
import { Linkedin, Moon, Sun, Mail, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
const Hero = () => {
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
    <section className="relative  p-8  transition-colors duration-300 bg-white dark:bg-slate-900 overflow-x-hidden">
      {/* Toggle Theme */}
      <button
        onClick={() => setDarkMode(!darkMode)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Hello, I'm Septiawan.
            </h2>

            <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  student
                </span>{" "}
                at Universitas Multi Data Palembang and the founder of Pemenang
                Karir, an agency that creates solutions to help businesses
                transition from manual processes to digital systems.
              </p>
              <p className="mt-4">
                I believe I can help your business grow, both in terms of{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  operational processes and profit
                </span>
                . Together with Pemenang Karir,{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  let's grow and succeed together
                </span>
                .
              </p>
            </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mseptiawan/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005c8d] transition-colors shadow-sm"
  >
    <Linkedin size={18} />
    <span className="font-medium">LinkedIn</span>
  </a>

  {/* TikTok */}
  <a
    href="#"
    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-110 transition-all shadow-sm"
    aria-label="TikTok"
  >
    <SiTiktok size={18} />
  </a>

  {/* YouTube */}
  <a
    href="#"
    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-110 transition-all shadow-sm"
    aria-label="YouTube"
  >
    <Youtube size={18} />
  </a>

  {/* Email */}
  <a
    href="mailto:mseptiawan017@gmail.com"
    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-110 transition-all shadow-sm"
    aria-label="Email"
  >
    <Mail size={18} />
  </a>
</div>


          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/profil.png"
              alt="Profile Illustration"
              className="w-full max-w-sm h-auto object-contain dark:brightness-90 transition-all drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
