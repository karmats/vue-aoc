<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect @select="selectFirstProduct" />
      <ItemSelect @select="selectSecondProduct" />
    </div>
    <ComparisonSummary />
  </div>
</template>
<script setup>
import ItemSelect from "@/components/ItemSelect.vue";
import ComparisonSummary from "@/components/ComparisonSummary.vue";
import { useItemComparison } from "@/composables/itemComparison";
import { onMounted } from "vue";

const { products, productsToCompare } = useItemComparison();

const selectFirstProduct = (product) => {
  productsToCompare.value[0] = product;
};
const selectSecondProduct = (product) => {
  productsToCompare.value[1] = product;
};
onMounted(async () => {
  const response = await fetch("https://dummyjson.com/products").then((r) =>
    r.json()
  );
  products.value = response.products;
});
</script>
