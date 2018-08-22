<template>
    <div class="app-marker-list-map content">
        <div class="buttons-tab">
            <a active-class="active" class="tab-link button" v-for="nav in navs" :key="nav.id">{{nav.title}}</a>
        </div>
    </div>
  
</template>


<script>

export default {
  name: 'app-marker-list-map',

   data(){
      return {
          navs:[
              {id:1,title:'列表'},
              {id:2,title:'地图'}
            
          ]
      }
  },

}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
@import '../../../stylesheets/_base.scss';
    .buttons-tab{
        height: 0.55rem;
        width: 100%;
        background: #fff;
        a{
            width: 50%;
            float: left;
            display: inline-block;
            height: 100%;
            line-height: 0.55rem;
            text-align: center;
            border: 1px solid #ccc;
            
           &.active {
                color: $base-color;
            } 
        }
       
    }
</style>