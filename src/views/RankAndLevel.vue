<template>
  <div
    class="flex z-10 flex-col items-center px-5 py-2.5 mb-0 w-full rounded-xl bg-neutral-900"
  >
    <div class="mt-7 text-3xl font-bold text-center text-white">
      Your rank and level
    </div>
    <div class="mt-7 text-lg leading-5 text-center text-white">
      Level up and get prizes
    </div>
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d307622223dac21d73d13b71e7c857450d1b0032f7fdda2f40fc3c05551036?apiKey=488b3769a36349598ebb90c1530b604a&"
      class="mt-6 w-full aspect-square max-w-[300px]"
    />
    <div class="flex gap-1.5 mt-4 text-2xl">
      <div class="font-bold text-white uppercase">Star Recruit</div>
      <div class="font-medium lowercase text-white text-opacity-50">LVL 1</div>
    </div>
    <ProgressBar message="Levels left 1/8" progress=70></ProgressBar>
    <div
      class="flex gap-5 justify-center self-stretch p-2.5 mt-6 w-full text-white rounded-xl bg-slate-300 bg-opacity-10"
    >
      <div class="flex gap-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee642ecbad04736ea2137f7a394035902e08607a761399ae6655f6f591af61de?apiKey=488b3769a36349598ebb90c1530b604a&"
          class="shrink-0 aspect-square w-[46px]"
        />
        <div class="flex flex-col justify-center my-auto">
          <div class="text-lg leading-5">Free coins</div>
          <div class="flex gap-1.5 mt-1 text-sm text-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ce43a9febb33092f810b14df6fe2a04ff02478ce2486cfc1e9098b37f5ad61?apiKey=488b3769a36349598ebb90c1530b604a&"
              class="shrink-0 aspect-square w-[17px]"
            />
            <div>+10 000</div>
          </div>
        </div>
      </div>
      <BlueButton message="Collect"></BlueButton>
    </div>
    <div
      class="flex gap-5 justify-center self-stretch p-2.5 mt-1.5 w-full text-white rounded-xl bg-slate-300 bg-opacity-10"
    >
      <div class="flex gap-3">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93a11425826b03d85783905834467a7e23becbb9bcad179ba9f8664a80154765?apiKey=488b3769a36349598ebb90c1530b604a&"
          class="shrink-0 aspect-square w-[46px]"
        />
        <div class="flex flex-col justify-center self-start">
          <div class="text-lg leading-5">Full energy</div>
          <div class="mt-1 text-sm text-center">4/4 available</div>
        </div>
      </div>
      <BlueButton message="Collect"></BlueButton>
    </div>
  </div>
</template>

<script>
import BlueButton from "@/BlueButton.vue";
import ProgressBar from "@/ProgressBar.vue";
export default {
  data: () => ({}),
  components: { ProgressBar, BlueButton },
};
</script>