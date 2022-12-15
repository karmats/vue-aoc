<template>
  <h1 class="font-bold text-lg"><slot name="title"></slot></h1>
  <p class="mb-8"><slot name="description"></slot></p>
  <slot name="image"></slot>
  <CalendarButton :to="props.to">{{ props.toText || "Next" }}</CalendarButton>
</template>
<script setup>
import CalendarButton from "../components/CalendarButton.vue";

const props = defineProps({
  to: String,
  toText: String,
});
</script>
