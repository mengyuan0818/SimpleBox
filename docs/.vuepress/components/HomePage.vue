<template>
  <div class="home-page" ref="homePage">
    <img :src="$withBase('/bg.svg')" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.home-page {
  height: 100%;
  width: 100% !important;
  overflow: hidden;
  img {
    background-repeat: no-repeat;
  }
}
</style>