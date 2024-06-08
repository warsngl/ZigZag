<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>

<template lang='pug'>
TheNavbar.mb-8
.flex.flex-col.items-center
  router-view.w-full
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #072227;
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: #d3dedc;
}
</style>
