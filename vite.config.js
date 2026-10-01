import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "html-minifier-terser";
import { defineConfig } from "vite";

const raizProjeto = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: "minificar-html-de-producao",
      apply: "build",
      transformIndexHtml: {
        order: "post",
        async handler(html) {
          return minify(html, {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
          });
        },
      },
    },
  ],
  root: resolve(raizProjeto, "html"),
  base: "./",
  publicDir: resolve(raizProjeto, "imagens"),
  server: {
    fs: {
      allow: [raizProjeto],
    },
  },
  build: {
    outDir: resolve(raizProjeto, "dist"),
    emptyOutDir: true,
  },
});
