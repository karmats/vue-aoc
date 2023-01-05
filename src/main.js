import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./base.css";
import de from "./locales/de.json";
import en from "./locales/en.json";
import jaJp from "./locales/ja-JP.json";
import sv from "./locales/sv.json";
import router from "./router";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en,
    de,
    sv,
    "ja-JP": jaJp,
  },
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    "ja-JP": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    de: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    sv: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
  },
});

createApp(App)
  .directive("christmas", (el, { value, arg }) => {
    el.classList.add("christmas-text");
    el.classList.add(arg ?? "red-green");
    if (value) {
      el.style.animationDuration = `${value}s`;
    }
  })
  .use(router)
  .use(i18n)
  .use(autoAnimatePlugin)
  .use(createPinia())
  .mount("#app");
