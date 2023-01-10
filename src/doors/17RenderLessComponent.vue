<script setup>
import NorthPoleDistance from "@/components/NorthPoleDistance.vue";
</script>

<template>
  <div class="container mx-auto px-4">
    <h2>Example 1</h2>
    <NorthPoleDistance v-slot="{ distance, toggleUnit, unit }">
      <p>
        You are currently: {{ isNaN(distance) ? "??" : distance }} {{ unit }}s
        away from the North Pole.
      </p>
      <button
        @click="toggleUnit"
        class="bg-green text-white px-4 py-2 rounded"
        text-white
      >
        Toggle Unit
      </button>
    </NorthPoleDistance>
    <h2 class="mt-16">Example 2</h2>
    <NorthPoleDistance v-slot="{ distance, toggleUnit, unit }">
      <div class="text-center w-full border-2 rounded-lg p-8">
        <p class="text-sm">Current distance from the North Pole</p>
        <p class="text-2xl mt-4">
          {{ isNaN(distance) ? "??" : distance }} {{ unit }}s
        </p>
        <button
          @click="toggleUnit"
          class="bg-red-400 text-white px-4 py-2 rounded mt-8"
          text-white
        >
          Switch to {{ unit === "km" ? "miles" : "km" }}
        </button>
      </div>
    </NorthPoleDistance>
  </div>
</template>
