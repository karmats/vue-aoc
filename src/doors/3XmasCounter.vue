<script setup>
import CountdownHeader from "@/components/CountdownHeader.vue";
import CountdownSegment from "@/components/CountdownSegment.vue";
import { useNow } from "@vueuse/core";
import { computed } from "vue";

const getDiffInMs = () => christmas.getTime() - now.value.getTime();
const days = computed(() => {
  return Math.floor(getDiffInMs() / (3600 * 1000 * 24));
});
const hours = computed(() => {
  const totHours = Math.floor(getDiffInMs() / (3600 * 1000));
  return totHours - days.value * 24;
});
const minutes = computed(() => {
  const totMinutes = Math.floor(getDiffInMs() / (60 * 1000));
  return totMinutes - days.value * 24 * 60 - hours.value * 60;
});
const seconds = computed(() => {
  const totSeconds = Math.floor(getDiffInMs() / 1000);
  return (
    totSeconds -
    days.value * 24 * 3600 -
    hours.value * 3600 -
    minutes.value * 60
  );
});

const now = useNow();
const christmas = new Date("2022-12-25 00:00:00");
</script>
<template>
  <div
    class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]"
  >
    <CountdownHeader />
    <main class="flex justify-center">
      <CountdownSegment label="days" :number="days" />
      <CountdownSegment label="hours" :number="hours" />
      <CountdownSegment label="minutes" :number="minutes" />
      <CountdownSegment label="seconds" :number="seconds" />
    </main>
  </div>
</template>

<style>
div {
  display: block;
}
</style>
