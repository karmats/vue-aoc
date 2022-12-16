<template>
  <div class="w-full">
    <div class="flex gap-4 mb-8">
      <button
        class="bg-green hover:opacity-90 text-white font-bold py-2 px-4 rounded disabled:opacity-20"
        :disabled="gifts.length === 1"
        @click="step"
      >
        Step
      </button>
      <button
        class="bg-green hover:opacity-90 text-white font-bold py-2 px-4 rounded"
        @click="toggleShowDirect"
      >
        {{ gifts.length > 1 ? "Show direct" : "Again!" }}
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="num in numGifts"
        class="bg-red-700 text-white rounded p-4"
        :class="{ 'opacity-20': isTaken(num) }"
      >
        {{ num }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onUpdated } from "vue";

const props = defineProps({
  numGifts: Number,
});
let giftAmount = props.numGifts;

let currGift = 0;
const gifts = ref([]);

const isTaken = (num) => !gifts.value.includes(num);

const reset = () => {
  currGift = 0;
  giftAmount = props.numGifts;
  gifts.value = Array.from(new Array(giftAmount)).map((_, idx) => idx + 1);
};
const step = () => {
  currGift = (currGift + 1) % gifts.value.length;
  gifts.value.splice(currGift, 1);
};
const toggleShowDirect = () => {
  if (gifts.value.length === 1) {
    reset();
  } else {
    while (gifts.value.length > 1) {
      step();
    }
  }
};
// Props updated
onUpdated(() => {
  if (props.numGifts !== giftAmount) {
    reset();
  }
});

reset();
</script>
