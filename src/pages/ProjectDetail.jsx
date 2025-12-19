import React, { Suspense, lazy, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ProjectDetail = () => {
  const { projectId } = useParams();

  // useMemo memastikan kita tidak mencoba mengimpor ulang kecuali ID berubah
  const Content = useMemo(() => {
    return lazy(() => import(`../content/${projectId}.mdx`));
  }, [projectId]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-500 mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Kembali
        </Link>

        {/* Tambahkan class 'prose' agar markdown punya style (font size, list, dll) */}
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
