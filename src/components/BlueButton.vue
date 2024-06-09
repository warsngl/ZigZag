<template>
  <div
    class="justify-center items-center self-center px-16 py-5 mt-8 w-full text-lg font-medium leading-5 text-center text-white bg-purple-800 rounded-xl max-w-[338px]"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: { message: String },
};
</script>
