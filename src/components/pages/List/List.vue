
<template>
    <div id="Goodlist">
        <app-list-top :title="name"></app-list-top> 
        <div class="filterbox">
            <ul class="filter">
                <li @click="filter_f(0)">综合</li>
                <li @click="filter_f(1)">销量</li>
                <li @click="filter_f(2)">价格</li>
                <li @click="filter_f(3)">筛选</li>
            </ul>
        </div>
        <div class="product-main">
          <ul class="produc-main-ul">
            <li v-for="(item,idx) in arr" :key = "idx" class="produc-main-li" @click="dlist(item)">
              <img v-bind:src="getImg(item.img)" alt="" class="">
              <p>{{item.title}}</p>
              <p class="produc-main-p"><span class="produc-main-span_l">￥{{item.price}}</span><span classs="produc-main-span_r">{{item.salesNum}}人已买</span></p>
            </li>
          </ul>
        </div>
        <div v-if="isloadmove" class="loading">加载更多...</div>
        <div v-if="!isNomore" class="loading">喂！已经到底了哟</div>
    </div>
</template>

<script>
import AppListMain from "./ListMain";
import AppListTop from "./ListTop";
// import './list.scss'
export default {
  name: "AppListMain",
  data() {
    return {
      id: "",
      type: "",
      name: "",
      arr: [],
      isloadmove:false,
      page:1,
      isNomore:true,
      filter:''
    };
  },
  components: {},
  created() {
    console.log(this.$route.query);
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
    // 发起请求获取后端数据
    this.getgoodlist()
    this.$http.get(`/lh/classify/${this.type}`).then(res => {
      // console.log(res);
    });
    // window.addEventListener('scoll')window.innerHeight + $(document).scrollTop() == document.body.scrollHeight
  },
  mounted() {
    window.addEventListener("scroll",this.handleScroll);
  },
  //方法
  methods: {
    getImg(src) {
      return "http://image.loho88.com/" + src;
    },
    //获取商品列表
    getgoodlist() { 
      this.$http.get(`/lh/search/?e=${this.type}&page=${this.page}${this.filter!=""?'&sort='+this.filter:''}`).then(res => {
        this.arr = this.arr.concat(res.data.result.data)
        console.log(res.data.result);
        this.page++
        this.isloadmove = false
        if(this.arr.length == res.data.result.count){
            this.isNomore =false
        }
        console.log(res);
      });
    },
    //监听滚动
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (window.innerHeight + scrollTop >= document.body.scrollHeight&&!this.isloadmove&&this.isNomore) {
        this.isloadmove=true

        this.getgoodlist()
      }
    },
    //筛选
    filter_f(aa){
        console.log(aa)
        if(aa==0){
            this.filter = '';
        }else if(aa == 1){
            this.filter = 'o1'
        }else if(aa == 2){
            this.filter = 'o5'
        }
        this.arr = [];
        this.page = 1;
        this.getgoodlist();
    },

    //跳转到详情页
    dlist(data){
         this.$router.push({
             path:'/gooddetail',
             query:{
                 id:data.goodsId,
             }
         })
         console.log(data)
    }
  },
  components: {
    AppListMain,
    AppListTop
  }
};
</script>


<style scoped lang="scss">
  //main列表
.Goodlist {
    overflow-x: hidden;
    // margin-top: 58px;
  }
  .product-main {
    .produc-main-ul {
      display: flex;
      flex-wrap: wrap;
      background: #ccc;
      li {
        height: 2.24rem;
        flex-wrap: wrap;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 50%;
        background: #fff;
        font-size: 0.12rem;
        border: 3px solid #f2f2f2;
        img {
          width: 100%;
        }
        .produc-main-p {
          display: flex;
          width: 100%;
          justify-content: space-between;
          padding: 0 12px;
        }
        span:nth-child(1) {
          color: red;
          font-size: 0.16rem;
          font-weight: bold;
        }
        span:nth-child(2) {
          color: #c1c1c1;
        }
      }
    }
  }

  //filter筛选
  .filter{
      display:flex;
      justify-content:space-between;
      height:0.47rem;
      background: #fff;
      border-top:1PX solid #ccc;
      li{
          width:25%;
          line-height:0.47rem;
        text-align:center;
      }
  }
  .loading{
    text-align:center;
  }
</style>
