<template>
  <div class="flex gap-1 mx-4 mt-4 text-xs text-white whitespace-nowrap">
    <BlackButton
      v-for="activity in activities"
      :key="activity.name"
      :activity="activity"
    ></BlackButton>
  </div>
</template>

<script>
import BlackButton from "@/BlackButton.vue";
export default {
  data: () => ({
    activities: [
      {
        name: "Mining",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/c695d3a3050f70fc640c87311931e8cdb0aa14c2cf2d8b845e35bed5fef97d84?apiKey=488b3769a36349598ebb90c1530b604a&",
      },
      {
        name: "Friends",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3cd82039913e0406d16cfc4a1269a009e94a5acb8e4bea56c7a398cead7582?apiKey=488b3769a36349598ebb90c1530b604a&",
      },
      {
        name: "Store",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/164dea5f163026d099f5bd546d3af413451ada18ab83803e2b5aa518633822af?apiKey=488b3769a36349598ebb90c1530b604a&",
      },
      {
        name: "Rating",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/96b7b99efae7cc9a3b8f86bf1b88f6fdd17e504c916e28523ffa68d30c8738fe?apiKey=488b3769a36349598ebb90c1530b604a&",
      },
      {
        name: "Tasks",
        img: "https://cdn.builder.io/api/v1/image/assets/TEMP/d26acf8a5402bdcb85cfda933af11bafd05c70e5a671e37128a32c42a8b67384?apiKey=488b3769a36349598ebb90c1530b604a&",
      },
    ],
  }),
  components: { BlackButton },
};
</script>
