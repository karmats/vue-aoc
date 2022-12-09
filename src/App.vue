<script setup>
import { ref, watch } from "vue";

const searchTerm = ref("");
const products = ref([]);
const loading = ref(false);

let timer;
const findProducts = async (term) => {
  if (!term) {
    products.value = [];
    return;
  }
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(async () => {
    try {
      loading.value = true;
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${term}`
      );
      const result = await response.json();
      products.value = result.products;
    } catch {
      alert("Failed to fetch products :(");
    } finally {
      loading.value = false;
    }
  }, 300);
};

watch(searchTerm, (newTerm) => {
  findProducts(newTerm);
});
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <router-view />
  </div>
</template>
