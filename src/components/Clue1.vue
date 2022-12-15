<template>
  <Clue to="/10/clue-2">
    <template #title>Cross country skiing</template>
    <template #description>I really like it ;)</template>
    <template #image><CrossCountry class="my-8" /></template>
  </Clue>
</template>
<script setup>
import CrossCountry from "@/assets/cross-country.svg?component";
import Clue from "@/views/Clue.vue";
</script>
