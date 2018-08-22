<template>
    <div class="app-marker-main ">
       <div class="gross"><p>广州共 <span>{{markers.length}}</span> 家体验店</p><span> 广州 </span></div>
       <ul class="marker-main">
           <li v-for="marker in markers" :key="marker.catId">
               <h2>{{marker.chineseName}} <i class="fa fa-chevron-up fr"></i></h2>
               <span><i class="fa fa-map-marker"></i> <i>X:{{marker.bmapPositionX}}</i> <i>Y:{{marker.bmapPositionY}}</i></span>
               <div class="marker-img"><img :src="'http://image.loho88.com/'+marker.store_image" alt=""></div>
               
               <p>地址：{{marker.chineseAddress}}</p>
               <div class="experience"><router-link tag="a" class="free" :to="{name:'MarkerFree',query:{id:marker.storeId}}">免费预约直营店验光</router-link><span class="phon"><i class="fa fa-volume-control-phone"></i></span></div>
           </li>
       </ul>
    </div>
  
</template>


<script>

export default {
  name: 'app-marker-main',
     data() {
    return {
      markers: []
    };
  },
  methods: {
    getmarker() {
      this.$http.get(this.server_config.lh+"/store/102").then(res => {
        this.markers = res.data.result.stores;
        console.log(this.markers)

      });
    }
  },
  created() {
    this.getmarker();
  }

}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">

    .app-marker-main{

        .gross{
            display: flex;
            background: #fff;
            justify-content: space-between;
            width: 100%;
            height: 0.38rem;
            padding: 7px 9px;
            margin: 0.1rem 0 0.12rem 0;
            line-height: 0.28rem;
            text-align: center;

            span{
                color:red;
            }
        }
        .marker-main{
            li{
                border:1px solid #ccc;
                background: #fff;
                margin-bottom: 0.1rem;

                h2{
                    padding:0 9px;
                    height: 0.41rem;
                    line-height: 0.41rem;
                    font-weight: 600;
                    font-size: 0.14rem;

                    i{
                       padding:0 9px;
                        height: 0.41rem;
                        line-height: 0.41rem;
                       
                        font-size: 0.14rem;  
                    }
                }
                span{
                    padding: 0 0.1rem;
                    margin-bottom: 0.1rem;
                    height: 0.18rem;
                    line-height: 0.18rem;
                }
               .marker-img{
                   height: 1.67rem;
                   margin: 0.1rem;

                   img{
                       width: 100%;
                       height: 100%;
                        border-radius: 0.08rem;
                   }
                }
                p{
                    padding: 0.1rem;
                    font-size: 0.12rem;
                    height: 0.38rem;
                }

                .experience{
                    display: flex;
                    background: #fff;
                    justify-content: space-between;
                    height: 0.63rem;
                    padding: 0.05rem;
                    line-height: 0.63rem;

                    .free{
                        background: red;
                        height: 0.4rem;
                        color: #fff;
                        width:45%;
                        border-radius: 0.06rem;
                        text-align: center;
                        line-height: 0.4rem;
                        margin-top:0.12rem;
                        font-size: 0.14rem;
                    }
                    .phon{
                        
                        height: 0.4rem;
                        color: red;
                        width:45%;
                        border-radius: 0.06rem;
                        text-align: center;
                        line-height: 0.4rem;
                        margin-top:0.12rem;
                        font-size: 0.28rem;
                    }
                }
            }
        }
    }
</style>