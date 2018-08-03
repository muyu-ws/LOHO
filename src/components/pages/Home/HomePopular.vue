<template>
  <div class="app-home-popular">
    <div class="popular" >
        <div class="title">
            <h2>人气推荐</h2>
            <a href="http://www.loho88.com/m/activ.php?id=250">更多></a>
        </div>
        <img src="http://img.loho88.com/images/2018/zssxydd.jpg">
        <ul class="popular-list">
            <li v-for="popular in populars" :key="popular.gid">
                <span>{{popular.tag}}</span>
                <p>{{popular.tag_en}}</p>
                <img :src="popular.pic" alt="">
            </li>
        </ul>
        </div>
  </div>
</template>
<script>
export default {
  name: "app-home-popular",
  data() {
    return {
      populars: []
    };
  },
  methods: {
    getPopular() {
      this.$http.get("/lh/index").then(res => {
        this.populars = res.data.result.popular.show;
        //  console.log(this.populars);
      });
    }
  },
  created() {
    this.getPopular();
  }
};
</script>
<style scoped lang = "scss" >

 .popular{
     height: 6.30rem;
     margin-top:0.1rem;

     .title{
         display: flex;
         width:100%;
         flex-direction: row;
         height:0.42rem;
         justify-content:space-between;
         background-color: #fff;
         text-align: center;

         h2{
             font-size: 0.16rem;
             font-weight: 700;
             line-height: 0.22rem;
             padding: 0.1rem;
         }
         a{
             line-height: 0.22rem;
             padding: 0.1rem;
             color:rgb(236, 13, 13);
         }
     }
     img{
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        height: 1rem;
     }

     .popular-list{
         display: flex;
         flex-wrap: wrap;

         li{
            height: 1.56rem;
            flex-wrap: wrap;
            flex-flow: column;
            align-items: center;
            justify-content: space-between;
             display: flex;
             z-index: -10;
             border-bottom:1px solid #CCC;
             border-right:1px solid #CCC;
             width: 50%;
             padding: 0.12rem;
             background: #fff;

             span{
                    height: 40px;
                    line-height: 20px;
                    width: 110%;
                    text-align: center;

             }
             p{
                line-height: 0.12rem;
                font-size: 0.14rem;
                height: 0.52rem;
                width: 100%;
                text-align: center;
                padding: 0 0.15rem;
                color: #ccc;
             }

             img{
                height: 0.65rem;
                 width: 100%;
             }
         }
     }
 }
</style>