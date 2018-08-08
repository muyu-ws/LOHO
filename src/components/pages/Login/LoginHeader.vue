<template>
  <div class="app-login-header content-padded docs-icons content-block">
      <ul class="ul-list">
          <li><i class="fa fa-chevron-left" @click="$router.go(-1)"></i></li>
          <li>登录</li>
          <li><i class="fa "></i></li>
           <router-link tag="li" exact :to="{name :'login'}"><i class="fa fa-user-o"></i></router-link>
      </ul>
    
  </div>
  
</template>

<script>

export default {
  name: 'app-login-header',
 
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .app-login-header{
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100%;
        height: 0.55rem;
        background: #fff;
        border-top:1px #ccc solid;
        display:flex;

    .ul-list{
        width: 100%;
        height: 0.55rem;
        border-bottom: 1px solid #ccc;
        /* overflow: hidden; */
       li{
            height: 100%;
            text-align: center;
            line-height: 0.55rem;
            
            i{
                font-size: 0.26rem;
            }
        }
        li:nth-child(1){
            width: 25%;
            float: left;
            text-align: left;
            padding-left: 0.13rem;
        }
        li:nth-child(2){
            width: 50%;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
        li:nth-child(3){
            width: 12%;
            float: left;
        }
        li:nth-child(4){
            width: 12%;
            float: left;
        }
    }
       
    }
</style>