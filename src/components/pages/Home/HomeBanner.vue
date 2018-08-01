<template>
    <div ref = "el" class="app-home-banner-y swiper-container" >
    <div class="swiper-wrapper">
        <div
            v-for = " (banner, i) in banners "
            :key = " i "
        class="swiper-slide">
            <img :src="banner.image_url" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Vue from "vue";
import Swiper from "swiper";
export default {
  name: "AppHomeBannerY",
  data() {
    return {
      banners: []
    };
  },
  methods: {
      
    getBanners() {
      this.$http.get('/lh/index', {

      }).then( res => {
       this.banners=res.data.result.focus
       Vue.nextTick(() => {
                     new Swiper(this.$refs.el, {
                         pagination: {
                            el: '.swiper-pagination'                        
                         }
                     })
                })
      });
    }
  },
  created(){
      this.getBanners()
  }
};
</script>