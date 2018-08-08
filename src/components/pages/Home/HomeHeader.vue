<template>
  <div class="app-home-header content-padded docs-icons">
      <ul class="ul-list">
           <router-link tag="li" exact :to="{name :'city'}">广州 <i class="fa  fa-angle-down"></i></router-link>
          <li><img src="../../../assets/loho.png" alt=""></li>
          <router-link tag="li" exact :to="{name :''}"><i class="fa fa-shopping-cart"></i></router-link>
          <router-link tag="li" exact :to="{name :'login'}"><i class="fa fa-user-o"></i></router-link>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'app-home-header',
 
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .app-home-header{
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