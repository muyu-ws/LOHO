<template>
    <div id="Goodlist">
      
        <div class="product-main">
          <ul class="produc-main-ul">
            <li v-for="(item,idx) in arr" :key = "idx" class="produc-main-li">
              <img v-bind:src="getImg(item.img)" alt="" class="">
              <p>{{item.title}}</p>
              <p class="produc-main-p"><span class="produc-main-span_l">￥{{item.price}}</span><span classs="produc-main-span_r">{{item.salesNum}}人已买</span></p>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "AppListMain",
  data() {
    return {
      id: "",
      type: "",
      name: "",
      arr: []
    };
  },
  components: {},
  created() {
    console.log(this.$route.query);
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
    // 发起请求获取后端数据
    this.$http.get(`/lh/search/?e=${this.id}&page=1`).then(res => {
      this.arr = res.data.result.data;
      console.log(res);
    });
    this.$http.get(`/lh/classify/${this.type}`).then(res => {
      console.log(res);
    });
  },
  methods: {
    getImg(src) {
      return "http://image.loho88.com/" + src;
    }
  }
};
</script>


<style scoped lang="scss">
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
        justify-content:space-between;
        padding:0 12px;
      }
      span:nth-child(1){
        color: red;
        font-size:0.16rem;
        font-weight:bold;
      }
      span:nth-child(2){
        color:#c1c1c1;
      }
    }
  }
}
</style>
