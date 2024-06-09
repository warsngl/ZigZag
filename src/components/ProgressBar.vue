<template>
  <div
    class="flex gap-5 self-stretch text-sm text-center text-white rounded"
    :class="{
      'bg-slate-300': !transparent,
      '': transparent,
    }"
  >
    <div
      class="shrink-0 h-6 bg-purple-800 rounded"
      :style="{ width: progress + '%' }"
    ></div>
    <div class="flex-auto my-auto">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
    transparent: {
      type: Boolean,
    },
    progress: {
      type: Number,
      validate: (x) => +x,
      default: () => 10,
    },
  },
};
</script>