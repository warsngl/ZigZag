<template>
  <div
    class="flex flex-col justify-center p-2.5 mx-4 mt-1.5 rounded-xl bg-slate-300 bg-opacity-10"
  >
    <div class="flex gap-5 justify-between pr-2.5 w-full">
      <div class="flex gap-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e89645dd94c835ada16eb21c226ec5cd2c97a0f353eb300bfe1adde6756ac13?apiKey=488b3769a36349598ebb90c1530b604a&"
          class="shrink-0 aspect-square fill-sky-500 w-[46px]"
        />
        <div class="flex flex-col justify-center self-start">
          <div class="flex gap-1">
            <div class="text-lg leading-5 text-white">{{ data.c }}</div>
            <div class="text-base leading-6 text-white text-opacity-50">
              lvl {{ data.l }}
            </div>
          </div>
          <div class="flex gap-1.5 py-px mt-1 text-sm text-center text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bdd8ca39ae13df32a1f7f3fd46a68344f861026c2d74b0777068d6db5b5ac7d?apiKey=488b3769a36349598ebb90c1530b604a&"
              class="shrink-0 aspect-square w-[17px]"
            />
            <div>+{{ data.income }}/h</div>
          </div>
        </div>
      </div>
      <div
        class="flex gap-1.5 my-auto text-base font-medium text-right text-white whitespace-nowrap"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/33403cead2a07b1b98a0508f5fb1622a1daf511104bf8e56960efe5b8e3013f4?apiKey=488b3769a36349598ebb90c1530b604a&"
          class="shrink-0 self-start aspect-square w-[17px]"
        />
        <div>{{ data.cost }}k</div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center mt-2 text-xs text-center text-white whitespace-nowrap rounded"
    >
      <ProgressBar :progress="data.progress" :transparent="true"></ProgressBar>
    </div>
  </div>
</template>



<script>
import ProgressBar from "@/ProgressBar.vue";
export default {
    props: { data: Object },
    components: { ProgressBar }
};
</script>