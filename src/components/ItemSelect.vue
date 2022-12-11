<template>
  <select
    v-model="selected"
    class="p-2 border-2 border-gray-dark"
    @change="handleChange"
  >
    <option disabled value="">Select an item</option>
    <option v-for="product in products" :value="product.id">
      {{ product.title }} - ${{ product.price }}
    </option>
  </select>
</template>

<script setup>
import { ref } from "vue";
import { useItemComparison } from "@/composables/itemComparison";

const { products } = useItemComparison();

const emits = defineEmits(["select"]);

const selected = ref();
const handleChange = () => {
  emits(
    "select",
    products.value.find((p) => p.id === selected.value)
  );
};
</script>
