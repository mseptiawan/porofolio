import React, { Suspense, lazy, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectModules = import.meta.glob("../content/projects/*.mdx");

export const ProjectDetail = () => {
  const { projectId } = useParams();
  console.log("AVAILABLE MDX:", Object.keys(projectModules));
  console.log("REQUESTED:", `../content/projects/${projectId}.mdx`);
  const Content = useMemo(() => {
    const path = `../content/projects/${projectId}.mdx`;
    const importer = projectModules[path];

    if (!importer) {
      return null;
    }

    return lazy(importer);
  }, [projectId]);

  if (!Content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Project tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-500 mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Kembali
        </Link>

        <article className="prose dark:prose-invert prose-indigo max-w-none">
          <Suspense
            fallback={<div className="text-slate-500">Memuat detail...</div>}
          >
            <Content />
          </Suspense>
        </article>
      </div>
    </div>
  );
};
