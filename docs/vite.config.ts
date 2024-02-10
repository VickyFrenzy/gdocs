import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  optimizeDeps: {
    force: true,
  },
  build: {
    // commonjsOptions: {
    //   include: [],
    // },
    rollupOptions: {
      // treeshake: {
      //   moduleSideEffects: false,
      // },
    },
  },
});
