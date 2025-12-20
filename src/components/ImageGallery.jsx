import { useState } from "react";

export default function ImageGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className="group focus:outline-none"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="rounded-xl border border-slate-200 dark:border-slate-700
                         shadow-sm group-hover:shadow-lg transition"
            />
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white text-sm opacity-80 hover:opacity-100"
            >
              ✕ Tutup
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full rounded-xl"
            />

            {activeImage.alt && (
              <p className="text-slate-300 text-sm mt-3 text-center">
                {activeImage.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
