<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sortedPresents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
    </div>
  </div>
  <button
    class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center mx-auto mt-8"
    @click="toggleSort"
  >
    Toggle sort
  </button>
</template>

<script setup>
import presents from "@/assets/presents.json";
import { computed, ref } from "vue";

const showSorted = ref(false);

const toggleSort = () => {
  showSorted.value = !showSorted.value;
};
const sortedPresents = computed(() =>
  showSorted.value
    ? presents
        .slice()
        .sort(
          (a, b) =>
            a.dimensions.width * a.dimensions.height -
            b.dimensions.width * b.dimensions.height
        )
    : presents
);
</script>
