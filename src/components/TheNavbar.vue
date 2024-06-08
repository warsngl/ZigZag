<template lang='pug'>
ul.navbar
  li
    router-link(to='/') Home
  li
    router-link(to='/Clans') Clans
  li
    router-link(to='/mining') Mining
  //- li
  //-   router-link(to='/tonmining') TonMining
  //- li
  //-   router-link(to='/buyfromstore') buyfromstore
  li
    router-link(to='/RankAndLevel') RankAndLevel
  //- li
  //-   router-link(to='/FarmRent') FarmRent
</template>

<script>
export default {

}
</script>

<style>
.navbar{
  @apply flex justify-around
}
.router-link-exact-active{
  text-decoration: underline;
}
</style>