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

//头部样式
.appHeaderTop{
    height: 0.55rem;
}
.app-home-nav {
 position: fixed;
 top: 0;
 width: 100%;
 height: 0.55rem;
 background: #fff;
 border-top: 1px #ccc solid;
 display: flex;

 a {
   flex-grow: 1;
   height: 100%;
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: space-around;

   i {
     font-size: 0.26rem;
   }
 }
}

</style>