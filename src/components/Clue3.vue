<template>
  <Clue to="/10/answer" to-text="Reveal">
    <template #title>I do frontend programming</template>
    <template #image><Programmer class="mb-8" /></template>
  </Clue>
</template>
<script setup>
import Programmer from "@/assets/programmer.svg?component";
import Clue from "@/views/Clue.vue";
</script>
