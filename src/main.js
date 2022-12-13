import { createApp } from "vue";
import App from "./App.vue";
import "./base.css";
import router from "./router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";
import jaJp from "./locales/ja-JP.json";
import sv from "./locales/sv.json";

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

createApp(App).use(router).use(i18n).use(autoAnimatePlugin).mount("#app");
