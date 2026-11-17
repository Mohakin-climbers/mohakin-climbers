// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: {
    environments: {
      client: { build: { outDir: "dist" } },
      ssr: { build: { outDir: ".tanstack/server" } },
    },
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // The prerender build uses this entry.
    server: { entry: "server" },
  },
});
