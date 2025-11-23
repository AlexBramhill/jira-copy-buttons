import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  build: {
    outDir: "dist/content",
    emptyOutDir: mode !== "development",
    lib: {
      entry: resolve(__dirname, "src/content/index.ts"),
      name: "contentScript",
      formats: ["iife"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  publicDir: false,
}));
