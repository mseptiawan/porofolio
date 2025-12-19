import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup"; // Tambahkan ini

export default defineConfig({
  plugins: [
    mdx(), // Letakkan mdx() SEBELUM react()
    react(),
    tailwindcss(),
  ],
});
