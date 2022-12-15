<template>
  <Clue v-if="isCorrect" to="/10" to-text="Again!">
    <template #title>Correct it's me :D</template>
    <template #description>Mr. Matz</template>
  </Clue>
  <div v-else class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="guess">
      Take a guess!
    </label>
    <input
      v-model="guess"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="guess"
      type="text"
      placeholder="Take a guess!"
    />
  </div>
</template>
<script setup>
import Clue from "@/views/Clue.vue";
import CalendarButton from "./CalendarButton.vue";
import { ref, computed } from "vue";

const guess = ref("");
const isCorrect = computed(() => guess.value.toLowerCase() === "mats");
</script>
