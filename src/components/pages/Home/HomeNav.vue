//这是底部的

<template>
  <div class="app-home-nav content-padded docs-icons">
    <router-link exact :to="{name :nav.name}" v-for="nav in navs" :key="nav.id">
         <i :class="'fa fa-'+nav.icon"></i>
         <span>{{nav.title}}</span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'app-home-nav',
  data(){
      return {
          navs:[
              {id:1,title:'首页',icon:'home',name:'home'},
              {id:2,title:'团购',icon:'calendar',name:''},
              {id:3,title:'客服',icon:'podcast',name:''},
              {id:4,title:'附近体验店',icon:'map-marker',name:'marker'},
              {id:5,title:'我的',icon:'user-o',name:''}
          ]
      }
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .app-home-nav{
        z-index: 10;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.55rem;
        background: #fff;
        border-top:1px #ccc solid;
        display:flex;

        a{
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: space-around;
            
            i{
                font-size: 0.26rem;
            }
        }
    }
</style>