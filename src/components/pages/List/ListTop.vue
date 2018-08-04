//这是底部的

<template>
<div class="appHeaderTop">
  <div class="app-home-nav content-padded docs-icons">
    <!-- <router-link exact :to="{name :nav.name}">
    </router-link> -->
    <span><i></i></span>
    <span>{{$route.query.name}}</span>
    <span><i>{{cartNun}}</i><i></i></span>
  </div>    
</div>

</template>

<script>
import './list.scss'
export default {
  name: "app--nav",
  data() {
    return {
        cartNun:'',
    };
  },

created(){
    this.$http.get(`/lh/cart/listCartNum/`).then(res => {
    //   console.log(res.data.cartNum)
      this.cartNun = res.data.cartNum
    });
}

};

</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">

</style>