<template>
  <div class="app-home">
      <app-home-banner-y></app-home-banner-y>
      <app-home-nav-list></app-home-nav-list>
      <app-home-nav></app-home-nav>
      
      <app-home-logo></app-home-logo>
      <app-home-popular></app-home-popular>
  </div>
</template>

<script>
import AppHomeBannerY from './HomeBanner'
import AppHomeNavList from './HomeNavList'
import AppHomeNav from './HomeNav'
import AppHomeLogo from './HomeLogo'
import AppHomePopular from './HomePopular'
export default {
  name: 'AppHome',
  components:{
      AppHomeBannerY,
      AppHomeNavList,
      AppHomeNav,
      AppHomeLogo,
      AppHomePopular
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
  .app-home{
    overflow-x: hidden;
  }
</style>