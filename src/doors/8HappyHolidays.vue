<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        🎄{{ t("happyHolidays") }}🗺️
        <span class="i-twemoji-world-map"></span>
      </div>
      <!-- Dates - Check out locales/en.json for the key -->
      <div class="text-xl">
        {{
          t("christmasIsComing", {
            date: d(christmasDate),
            time: t("day", daysToChristmas),
          })
        }}
      </div>
      <!-- Controls - I give you an .icon-button class if you want to use it -->
      <button class="icon-button" @click="changeLocale">🌎</button>
      <!-- Flags - the current locale -->
      <span>{{ t("language") }}</span>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t, d, locale, availableLocales } = useI18n();

locale.value = "en";
console.log(availableLocales);
const changeLocale = () => {
  const currLocaleIdx = availableLocales.findIndex((l) => l === locale.value);
  console.log(locale.value, currLocaleIdx)
  locale.value = availableLocales.at(currLocaleIdx - 1);
};

const christmasDate = new Date("2022/12/25");
const daysToChristmas = computed(
  () =>
    Math.floor(christmasDate.getTime() / (3600 * 1000 * 24)) -
    Math.floor(Date.now() / (3600 * 1000 * 24))
);
</script>

<style scoped>
.icon-button {
  @apply text-xl
      w-16
      h-16
      rounded-full
      border
      border-transparent
      bg-transparent
      cursor-pointer
      duration-300
      hover:ring-2
      hover:border-green
      hover:ring-green
      hover:ring-opacity-40
      hover:text-green;
}
</style>
