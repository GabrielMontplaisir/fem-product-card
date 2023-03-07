import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // Set base: to the current directory.
  base: "/frontend-mentor/newbie/results-summary-component-card/",
  plugins: [vue()],

  // Move the index.html to the src folder, and assets to their own folder in the PWD.
  root: "src",

  //Adjust build to create a new index.html in the PWD folder, and add newly created assets to dist.
  build: {
    outDir: "../",
    assetsDir: "./dist",
  },
});
