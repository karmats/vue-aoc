<template>
  <div>
    <ChristmasTree
      v-if="size > 1"
      :size="size - 1"
      :show-lights="showLights"
      :show-ornaments="showOrnaments"
    >
      <template #lights>
        <!-- Put two lights on each section of the tree -->
        <ChristmasLights v-for="_ in 2" />
      </template>

      <template #ornaments>
        <ChristmasOrnament />
      </template>
      <!-- <template #even>
        <ChristmasOrnament color="green" />
      </template>
      <template #odd>
        <ChristmasOrnament color="red" />
      </template> -->
    </ChristmasTree>

    <div class="flex flex-row justify-center">
      <div
        v-for="_ in size"
        class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center"
      >
        <slot v-if="showLights" name="lights"></slot>
        <slot v-if="showOrnaments" name="ornaments"></slot>
        <slot v-if="showOrnaments" name="even"></slot>
        <slot v-if="showOrnaments" name="odd"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChristmasLights from "./ChristmasLights.vue";
import ChristmasOrnament from "./ChristmasOrnament.vue";
withDefaults(
  defineProps<{
    size: number;
    showLights?: boolean;
    showOrnaments?: boolean;
  }>(),
  {
    size: 1,
  }
);
</script>
