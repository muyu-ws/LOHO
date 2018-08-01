<template>
  <div id="app-home">
      <app-home-banner-y></app-home-banner-y>
      <app-home-nav-list></app-home-nav-list>
  </div>
</template>

<script>
import AppHomeBannerY from './HomeBanner'
import AppHomeNavList from './HomeNavList'
export default {
  name: 'AppHome',
  components:{
      AppHomeBannerY,
      AppHomeNavList
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">

</style>