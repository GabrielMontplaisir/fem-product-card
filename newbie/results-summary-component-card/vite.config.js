import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-mentor/newbie/results-summary-component-card/",
  plugins: [vue()],
  root: "src",
  build: {
    outDir: "../",
    assetsDir: "./dist",
  },
});
