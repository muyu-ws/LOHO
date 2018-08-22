<template>
    <div ref = "el" class="app-home-banner-y swiper-container" >
    <div class="swiper-wrapper">
        <div
            v-for = " (banner, i) in banners "
            :key = " i "
            class="swiper-slide">
            <img :src="banner.pic" alt="">
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
      this.$http.get(this.server_config.lh +"/index").then(res => {
        //    console.log(res.data.result.focus);
        this.banners = res.data.result.focus;
        Vue.nextTick(() => {
          new Swiper(this.$refs.el, {
            pagination: {
              el: ".swiper-pagination"
            }
          });
        });
      });
    }
  },
  created() {
    this.getBanners();
  }
};
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss" >
.app-home-banner-y {
  .swiper-wrapper {
    width: 100%;
    height: 1.875rem;
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-pagination {
    .swiper-pagination {
      width: 5px;
      height: 5px;
    }
    .swiper-pagination-active {
      background: #fff;
    }
  }
}
</style>