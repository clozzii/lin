<template>
  <div id="main">
    <main-header/>
    <main-bg
      class="main-bg w"
    />
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from 'components/content/main/MainHeader.vue'
  import MainBg from 'components/content/main/MainBg.vue'

  export default {
    components: {
      MainHeader,
      MainBg
    }
  }
</script>

<style lang="less" scoped>
  .main-bg {
    position: absolute;
    z-index: -555;
  }
</style>