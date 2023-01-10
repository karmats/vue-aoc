<template>
  <!-- this should only render a slot -->
  <slot v-bind="{ unit, distance, toggleUnit }"></slot>
</template>

<script setup lang="ts">
import { getDistanceKm, getDistanceMiles } from "@/helpers/distance";
import { useGeolocation } from "@vueuse/core";
import { ref, computed } from "vue";
// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation();
const unit = ref<"km" | "mile">("mile");

const distance = computed(() =>
  unit.value === "km"
    ? getDistanceKm(coords.value.latitude, coords.value.longitude)
    : getDistanceMiles(coords.value.latitude, coords.value.longitude)
);
const toggleUnit = () => {
  if (unit.value === "km") {
    unit.value = "mile";
  } else {
    unit.value = "km";
  }
};
</script>
