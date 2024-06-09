<template>
  <div
    class="flex z-10 flex-col px-5 py-2.5 mb-0 w-full rounded-xl bg-neutral-900"
  >
    <div class="self-center mt-8 text-3xl font-bold text-center text-white">
      Join to ZigZag Clans
    </div>
    <div class="self-center mt-5 text-lg leading-5 text-center text-white">
      Join clans or create your own
    </div>
    <BlueButton message="Create Clan"></BlueButton>
    <div
      class="flex gap-5 justify-between mt-8 w-full text-lg leading-5 text-center whitespace-nowrap"
    >
      <div class="flex gap-1.5 self-start">
        <div class="font-bold text-white">Clans</div>
        <div class="text-white text-opacity-50">372</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5530a97f439cc57e3b34438e599c58580cd61c53b1e8c2a694edfb2ee51d4e5d?apiKey=488b3769a36349598ebb90c1530b604a&"
        class="shrink-0 w-6 aspect-square"
      />
    </div>
    <ClanCard v-for="clan in clans" :key="clan"></ClanCard>
  </div>
</template>

<script>
import ClanCard from "@/ClanCard.vue";
import BlueButton from "@/BlueButton.vue";
export default {
  data: () => ({
    clans: [0, 1, 2, 3, 4, 5, 6, 7],
  }),
  components: { ClanCard, BlueButton },
};
</script>