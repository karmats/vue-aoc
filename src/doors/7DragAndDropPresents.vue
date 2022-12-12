<template>
  <div class="flex flex-col items-center">
    <h1 class="mt-4 text-xl font-bold">Drag the presents under the tree!</h1>
    <ChristmasTree
      :presents="underTheTree"
      class="mt-16"
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
    />
    <div class="pt-16 mt-16 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <ChristmasPresent
          v-for="(p, index) in presents"
          :key="p"
          :name="p"
          :draggable="true"
          @dragstart="startDrag(index)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ChristmasPresent from "@/components/ChristmasPresent.vue";
import ChristmasTree from "@/components/ChristmasTreePresents.vue";
import { ref } from "vue";

const presents = ref(["small-red-gift", "blue-gift", "tall-red-gift"]);
const underTheTree = ref([]);
let draggedIndex = "";

const startDrag = (index) => {
  draggedIndex = index;
};

const onDrop = () => {
  const present = presents.value.splice(draggedIndex, 1);
  underTheTree.value.push(present.pop());
};
</script>
