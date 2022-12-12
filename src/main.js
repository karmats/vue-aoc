import { createApp } from "vue";
import App from "./App.vue";
import "./base.css";
import router from "./router";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(router).use(autoAnimatePlugin).mount("#app");
