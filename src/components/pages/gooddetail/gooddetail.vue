
<template>
    <div  class="gooddetailbox">
      <App-list-top></App-list-top>

        <div ref = "el" class="gooddetail swiper-container">
          <div class="swiper-wrapper">
            <div
                v-for = " (img, i) in banners "
                :key = " i "
                class="swiper-slide">
                <img v-bind:src="getImg(img)" alt="">
            </div>
          </div>
            <div class="swiper-pagination"></div>
        </div>

      <div class="detail-title-wrap">
        <div class="detail_l"><p>{{info.goodsName}}</p></div>
        <div class="detail_r">
            <span class="fa fa-gratipay" aria-hidden="true"></span>
            <span>分享</span>
        </div>
      </div>

      <div class="white-bg">
        <ul>
            <li><span>￥{{info.shopPrice}}</span></li>
            <li><span>快递费10元</span></li>
            <li><span>{{info.salesNum}}</span>人已买</li>
        </ul>
      </div>

      <div class="goods-guarantee">
        <ul>
           <li v-for="(item,idx) in info.promiseTag" :key="idx">
             <span class="fa fa-check" aria-hidden="true"></span>
             <span>{{item}}</span>
             </li> 
        </ul>
      </div>

      <div class="Color_Select">
        <h4>颜色选择</h4>
          <ul>
            <li v-for="(item,id) in models" :key='id'  :class="modelsidx==id?'modelscolor':''" @click="modelsidx=id">{{item.color}}</li>

          </ul>
      </div>

      <div class="production">
        <span>填写度数</span>
        <span class="fa fa-chevron-right" aria-hidden="true"></span>
      </div>

      <div v-for="(item,id) in unioned" :key="id" class="detail-unioned">
        <div v-for="(_item,i) in item.goods" :key="i" >
          <img v-bind:src="getImg(_item.goodsThumbMin)" alt="">
          <i v-if="i+1!=item.goods.length" class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <div>
            <p>{{item.tname}}</p>
            <span class="price">￥{{item.price}}</span>
            <span>￥{{getPrice(item.goods)}}</span>
        </div>
        <div><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
      </div>


      <div class="product-description" >
          <ul>
            <li :class="tabIndex==0?'active':''" @click = 'changetab(0)'>商品详情</li>
            <li :class="tabIndex==1?'active':''" @click = 'changetab(1)'>商品评价</li>
            <li :class="tabIndex==2?'active':''" @click = 'changetab(2)'>商品参数</li>
            
            <!-- <li v-for="(item,idx) in tabs" :key='idx' :class="tabIndex==idx?'active':''" @click = 'changetab(idx)'>{{item}}</li> -->
          </ul>
      </div>
      <!-- 商品详情内容 -->
      <div class="tab-content-transclude" v-html="str" v-if= "tabIndex==0"></div>
      <!-- 商品评价内容 -->
      <div class="evaluate" v-show = "tabIndex==1">
        <app-detail-appraise v-if ="appraisal.length>0" :pingjia='appraisal'></app-detail-appraise>
      </div>
      <!-- 商品参数内容 -->
      <div class="argument" v-if = "tabIndex==2">
        <app-detail-switch :argument="params"></app-detail-switch>
      </div>

      <div class="footer-nav">
        <ul>
            <li><i class="fa fa-comments-o" aria-hidden="true"></i><span>客服</span></li>
            <li><i class="fa fa-star-o" aria-hidden="true"></i><span>收藏</span></li>
            <li @click="btn">加入购物车</li>
        </ul>
      </div>
  </div>
</template>

<script>
import AppListTop from "../List/ListTop";
import  AppDetailSwitch from "./DetailSwitch";
import  AppDetailAppraise from "./DetailAppraise";
import Swiper from "swiper";
import Vue from "vue";
export default {
  name: "gooddetail",
  data() {
    return {
      banners: [],
      id: "",
      info: {},
      models: [],
      modelsidx: 0,
      unioned: [],
      shopPrice: 0,
      str: "",
      tabs: ["商品详情", "商品评价", "商品参数"],
      tabIndex: 0,
      params:[],
      appraisal:[]
    };
  },
  created() {
    console.log(this.$route.query.id)
    this.id = this.$route.query.id;
    this.getBanners();
  },
  mounted() {
    console.log(document.querySelector(".imageW"));
  },
  //方法
  methods: {
    getImg(src) {
      return "/mh" + src;
    },
    getPrice(arr) {
      let price = 0;
      arr.map(item => {
        price += Number(item.shopPrice);
      });
      return price;
    },
    getBanners() {
      this.$http.get(`/lh/goods/${this.id}`).then(res => {
         console.log(res.data);
        this.banners = res.data.result.info.pics;
        this.info = res.data.result.info;
        this.models = res.data.result.models;
        this.unioned = res.data.result.unioned;

        this.params = res.data.result.arguments;
        console.log( res.data.result.arguments)


        let _str = res.data.result.txtcontent;
        var newContent = _str.replace(
          /<img [^>]*\-src=['"]([^'"]+)[^>]*>/gi,
          function(match, capture) {
            //capture,返回每个匹配的字符串
            var newStr =
              '<img src="http://image.loho88.com/' +
              capture +
              '" alt="" class="imageW" width="100%"/>';
            return newStr;
          }
        );

        this.str = newContent;

        Vue.nextTick(() => {
          new Swiper(this.$refs.el, {
            pagination: {
              el: ".swiper-pagination"
            }
          });
        });
      });
    },
    //请求商品评价后端数据
    changetab(idx) {
      this.tabIndex = idx;
      if(idx == 1){
        this.$http.get(`/dt/comment/getGoodsComments.do?barcode=${this.info.goodsSn}&catId=25&curPage=1&jsoncallback=jsonpCb&pageSize=10`).then(res =>{
          console.log(JSON.parse(res.data.slice(8,-1)).result)
          this.appraisal = JSON.parse(res.data.slice(8,-1)).result
        })
      }
    },

    btn(){
      this.$router.push({
             path:'/choose',
             query:{
                id:this.id
             }
         })
        
    }
  },

  components: {
    AppListTop,
    AppDetailSwitch,
    AppDetailAppraise,
  }
};
</script>


<style scoped lang="scss">
.gooddetailbox {
  padding-bottom: 0.5rem;
}
.gooddetail {
  .swiper-wrapper {
    width: 100%;
    height: 2.9rem;
  }
  .swiper-slide {
    background: #fff;
     height: 2.68rem;
    position: relative;
    img {
      width: 100%;
      line-height:2.68rem;
      position: absolute;
      top:50%;
      left:0;
      transform: translateY(-50%)
    }
   
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0;
  }
  .swiper-pagination {
    background: -webkit-linear-gradient(
      bottom,
      #c8c8c8,
      rgba(255, 255, 255, 0)
    );
    height: 0.5rem;
    padding-top: 0.3rem;
    .swiper-pagination-active {
      background: #fff;
    }
  }
}
.detail-title-wrap {
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0.06rem;
  background: #fff;
  align-items: center;
  .detail_l {
    width: 2.8rem;
    height: 0.24rem;
  }
}
.detail_r {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.white-bg {
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 0 0.1rem;
  background: #fff;
  ul {
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.44rem;
    li:nth-child(1) span {
      color: red;
      font-size: 0.16rem;
      font-weight: bold;
    }
    li {
      height: 0.22rem;
      font-size: 0.12rem;
      color: #444;
    }
  }
}

.goods-guarantee {
  padding: 0 0.1rem;
  border-bottom: 1px solid #e1e1e1;
  ul {
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.3rem;
  }
}

.Color_Select {
  height: 0.7rem;
  padding: 0 0.1rem;
  background: #fff;
  color: #444;
  h4 {
    height: 0.3rem;
    font-size: 0.12rem;
  }
  ul {
    display: flex;
    li {
      line-height: 0.3rem;
      background: #e1e1e1;
      margin-right: 0.06rem;
      text-align: center;
      padding:0 0.1rem;
    }
  }
  .modelscolor {
    background: orange;
    color: #fff;
  }
}

.production {
  height: 0.46rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.46rem;
  background: #fff;
  margin: 0.1rem 0;
  padding: 0 0.1rem;

  span:nth-child(2) {
    line-height: 0.46rem;
  }
}

.detail-unioned {
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 0.1rem;
  padding: 0 0.1rem;
  div img {
    width: 0.86rem;
    height: 0.6rem;
    border: 1px solid #e1e1e1;
  }
  div:nth-child(1) {
    width: 0.8rem;
    display: flex;
    i {
      padding-left: 0.1rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
    }
  }
}

.product-description {
  background: #fff;
  padding: 0 0.1rem;
  ul {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    line-height: 0.5rem;
    li {
      width: 1.28rem;
      text-align: center;
    }
  }
}

.footer-nav {
  padding-left: 0.3rem;
  background: #fff;
  margin-top: 0.1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    li {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }

    li:nth-child(3) {
      line-height: 0.5rem;
      width: 1.86rem;
      background: orange;
      text-align: center;
    }
  }
}
.active {
  color: red;
}
</style>
