<template>
  <div
    class="flex flex-col flex-1 justify-center px-5 py-3 rounded-lg bg-slate-300 bg-opacity-10"
  >
    <img
      loading="lazy"
      :src="activity.img"
      class="self-center aspect-[1.45] w-[35px]"
    />
    <div class="mt-1 text-center">{{ activity.name }}</div>
  </div>
</template>

<script>
export default {
  props: { activity: Object },
};
</script>