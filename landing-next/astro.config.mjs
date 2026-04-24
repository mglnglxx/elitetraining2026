import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  site: "https://landing.hidrocarburos.com.co",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory"
  },
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib")
      },
      noExternal: ["@lucide/svelte", "bits-ui", "runed", "svelte-toolbelt"]
    },
    optimizeDeps: {
      include: [
        "bits-ui",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
        "motion",
        "motion-sv",
        "runed"
      ]
    }
  }
});
