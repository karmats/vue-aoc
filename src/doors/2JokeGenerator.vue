<template>
  <div class="max-w-xs w-full flex flex-col">
    <div class="w-3/4 p-4 rounded-2xl bg-teal-800 text-white self-start">
      {{ joke.setup }}
    </div>
    <div
      v-if="showDelivery"
      class="w-3/4 mt-2 p-4 rounded-2xl bg-red-800 text-white self-end"
    >
      {{ joke.delivery }}
    </div>
    <button
      class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
      @click="handleJokeClick"
    >
      {{ showDelivery ? "Another" : "Tell Me!" }}
    </button>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

const showDelivery = ref(false);
const joke = reactive({
  setup: "",
  delivery: "",
});

const handleJokeClick = async () => {
  if (showDelivery.value) {
    fetchJoke();
    showDelivery.value = false;
  } else {
    showDelivery.value = true;
  }
};

const fetchJoke = async () => {
  const jokeResponse = await fetch(
    "https://v2.jokeapi.dev/joke/christmas"
  ).then((r) => r.json());
  joke.setup = jokeResponse.setup;
  joke.delivery = jokeResponse.delivery;
};
onMounted(fetchJoke);
</script>
