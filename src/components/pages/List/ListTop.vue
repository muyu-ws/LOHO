<template>
<div class="appHeaderTop">
  <div class="app-list-nav content-padded docs-icons">
    <!-- <router-link exact :to="{name :nav.name}">
    </router-link> -->
    <span><i class="fa fa-chevron-left" aria-hidden="true" @click="fanhui"></i></span>
    <span>{{title}}</span>
    <span class="appHeader_s">
      <i class="fa fa-shopping-cart" aria-hidden="true"><span>{{cartNun}}</span></i>
      <i class="fa fa-bars" aria-hidden="true"></i>
      </span>
  </div>   
</div>

</template>

<script>
export default {
  name: "AppListNav",
  data() {
    return {
      cartNun: ""
    };
  },
  props: ["title"],
  created() {
    this.$http.get(this.server_config.lh+`/cart/listCartNum/`).then(res => {
      //   console.log(res.data.cartNum)
      this.cartNun = res.data.cartNum;
    });
  },
  methods: {
    fanhui(){
      // console.log(123)
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang = "scss">
/* 头部样式 */
.appHeaderTop {
  height: 0.55rem;

  .app-list-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.55rem;
    background: #fff;
    border-top: 1px #ccc solid;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    line-height: 0.55rem;
    padding: 0 0.16rem;
    z-index: 1000;

    span {
      width: 0.8rem;
      font-size: 0.18rem;
    }
    span:nth-child(3) {
      font-size: 0.2rem;
      position: relative;
      i {
        width: 0.3rem;
        text-align: center;
      }
    }
    .appHeader_s .fa-shopping-cart span {
      display: inline-block;
      background-color: red;
      width: 0.16rem;
      height: 0.16rem;
      color: #fff;
      border-radius: 60%;
      font-size: 0.12rem;
      position: absolute;
      bottom: 24px;
      left: 20px;
      text-align: center;
      line-height: 0.16rem;
    }
  }
}
</style>