<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="door in doors"
      class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600 text-white"
    >
      <router-link :to="'/' + door">
        <div class="p-8">
          <div class="font-bold text-xl text-center">{{ door }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
const doors = Array.from(new Array(24)).map((_, idx) => idx + 1);
</script>
