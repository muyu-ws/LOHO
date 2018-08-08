<template>
  <div class="app-home">
     <app-home-header></app-home-header>
      <app-home-banner-y></app-home-banner-y>
      <app-home-nav-list></app-home-nav-list>
      <app-home-logo></app-home-logo>
      <app-home-popular></app-home-popular>
      <app-home-special></app-home-special>
      <app-home-foter></app-home-foter>

      <app-home-nav></app-home-nav>


  </div>
</template>

<script>
import AppHomeBannerY from './HomeBanner'

import AppHomeNavList from './HomeNavList'
import AppHomeNav from './HomeNav'
import AppHomeLogo from './HomeLogo'
import AppHomeSpecial from './HomeSpecial'
import AppHomePopular from './HomePopular'
import AppHomeHeader from './HomeHeader'
import AppHomeFoter from './HomeFoter'

export default {
  name: 'AppHome',
  components:{
      AppHomeBannerY,
      AppHomeNavList,
      AppHomeNav,
      AppHomeLogo,
      AppHomePopular,
      AppHomeSpecial,
      AppHomeHeader,
      AppHomeFoter
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
  .app-home{
    overflow-x: auto;
    margin-bottom:0.55rem; 
    margin-top:0.56rem;

  }
</style>