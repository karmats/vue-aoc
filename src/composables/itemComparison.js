import { ref } from "vue";

const products = ref([]);
const productsToCompare = ref([null, null]);

export const useItemComparison = () => ({
  products,
  productsToCompare,
});
