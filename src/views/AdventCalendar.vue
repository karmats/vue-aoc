<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="door in 24"
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
