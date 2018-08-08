<template>
    <div class="app-marker-list-map content">
        <div class="buttons-tab">
            <a @click="handleClick" class="tab-link button active">列表</a>
            <a @click="handleClick" class="tab-link button active">地图</a>
        </div>
    </div>
  
</template>


<script>

export default {
  name: 'app-marker-list-map',

   methods: {
               handleClick () {
                  
                       this.className="active"
                //   console.log(777)
               }
           },
    created() {
    this.handleClick ();
  }

}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
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
        }
        .active{
            border-bottom: 2px solid rgb(185, 8, 8);
        }
    }
</style>