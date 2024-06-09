<template>
  <div class="flex z-10 flex-col py-2.5 mb-0 w-full rounded-xl bg-neutral-900">
    <div
      class="flex gap-5 justify-between items-start self-center px-5 mt-5 text-base leading-5 text-white text-opacity-50"
    >
      <div
        class="self-stretch pb-4 text-lg font-bold leading-5 text-violet-800 whitespace-nowrap"
      >
        Mining
      </div>
      <div class="text-center">Farm Rent</div>
      <div class="text-center">NFT Boost (Soon)</div>
    </div>
    <MiningCard v-for="mining in minings" :data="mining" :key="mining.c"></MiningCard>
  </div>
</template>

<script>
import MiningCard from "@/MiningCard.vue";
export default {
  data: () => ({
    minings:[
      {c:"Bitcoin",l:14,income:12000,cost:125,progress:10},
      {c:"Toncoin",l:444,income:12000,cost:325,progress:40},
      {c:"Ethereum",l:22,income:23000,cost:12,progress:20},
      {c:"BNB",l:14,income:84000,cost:1000,progress:60},
      {c:"Tether",l:1,income:3000,cost:325,progress:70},
    ]
  }),
  components: { MiningCard },
};
</script>