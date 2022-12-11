<template>
  <p v-if="sortedProducts.length < 2"></p>
  <p v-else-if="cheap.price !== expensive.price" class="mx-5 text-center">
    You can get <strong>{{ times }}</strong> <em>{{ cheap.title }}</em> for
    about the same price as a single <em>{{ expensive.title }}</em>
  </p>
  <p v-else class="mx-5 text-center">These are the same items</p>
</template>
<script setup>
import { computed } from "vue";
import { useItemComparison } from "@/composables/itemComparison";

const { productsToCompare } = useItemComparison();

const sortedProducts = computed(() => {
  if (productsToCompare.value[0] && productsToCompare.value[1]) {
    return productsToCompare.value.slice().sort((a, b) => a.price - b.price);
  }
  return [];
});
const cheap = computed(() => sortedProducts.value.at(0));
const expensive = computed(() => sortedProducts.value.at(1));

const times = computed(() =>
  Math.floor(expensive.value.price / cheap.value.price)
);
</script>
