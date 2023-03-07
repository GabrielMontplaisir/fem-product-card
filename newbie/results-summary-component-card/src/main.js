import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

// Import { createApp } from Vue to build and mount the app to the div in index.html.
// We also import ./style.css, but this will be added to the new index.html when you build. I believe this is solely for development.
// Import App.vue to mount.
