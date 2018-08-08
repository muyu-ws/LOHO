<template>
    <div class="bottombox">
      <App-list-top title="选择"></App-list-top>

      <div class="bundle-scope">
        <div><h4>颜色</h4></div>

        <div>
          <ul>
            <li><span></span></li>
           </ul>
        </div>
        
      </div>

      <div class="bundle-degree">
        <div>
          <h4><span>左眼度数</span><span>如何看懂验光单?</span></h4>
        </div>
          
          <div> 
            <ul>
              <li v-for="(item,id) in arr" :key="id" :class="(tabzuo==id?'choice':'')" @click="tabzuo=id">{{item}}</li>
            </ul>
          </div>
         
          <div class="bundle-footer">
            <span>购买数量</span>
            <p>
              <span>-</span>
              <input type="text">
              <span>+</span>
            </p>
          </div>
      </div>


      <div class="bundle-degree">
        <div>
          <h4><span>右眼度数</span></h4>
        </div>
          
          <div> 
            <ul>
              <li v-for="(item,i) in arr" :key="i" :class="(tabyou==i?'choice':'')" @click="tabyou=i">{{item}}</li>
            </ul>
          </div>
         
          <div class="bundle-footer">
            <span>购买数量</span>
            <p>
              <span>-</span>
              <input type="text">
              <span>+</span>
            </p>
          </div>
      </div>

      <div class="Add-Cart" @click="Carts">加入购物车</div>
    </div>
</template>

<script>
import AppListTop from "../List/ListTop";
export default {
  name: "Choose",
  data() {
    return {
      arr: [
        "0",
        "100",
        "125",
        "150",
        "175",
        "200",
        "225",
        "250",
        "275",
        "300",
        "325",
        "350",
        "375",
        "400",
        "425",
        "450",
        "475",
        "500",
        "525",
        "550",
        "575",
        "600",
        "650",
        "700",
        "750",
        "800"
      ],
      tabzuo:0,
      tabyou:0,
    };
  },
  created() {
    console.log(2345);
    this.id = this.$route.query.id;
    ("http://m.loho88.com/goods/degree/6384");
    this.$http.patch(`/lh/goods/degree/${6384}`).then(res => {
      console.log(res);
    });
  },
  components: {
    AppListTop
  },
  methods: {
    Carts() {
      console.log(123);
      this.id = this.$route.query.id;
      this.$http
        .post(`/lh/cart/contactLens/${this.$route.query.id}/1,1`, {
          color: "%E7%83%9F%E7%81%B0",
          optList: {
            lCyl: "",
            rCyl: "",
            lAxis: "",
            rAxis: "",
            lSph: "100",
            rSph: "100",
            type: "30000",
            pd: "60.5",
            add: "0.00",
          }
        })
        .then(res => {
          console.log(res);
          console.log(123);
        });
      this.$router.push("/Cart");
    }
  },
  mounted() {},
  beforeCreate() {}
};
</script>

<style lang="scss" scoped>
.bottombox{
  padding-bottom:0.38rem;
}
.bundle-scope {
  div:nth-child(1) {
    padding: 0 0.1rem;
    background: #fff;
    margin-top: 0.1rem;
    border-bottom: 1px solid #e1e1e1;
    border-top: 1px solid #e1e1e1;
    h4 {
      height: 0.3rem;
      line-height: 0.3rem;
    }
  }
  div:nth-child(2) {
    margin-bottom: 0.1rem;
    background: #fff;
    ul {
      height: 1rem;
    }
  }
}

.bundle-degree {
  div:nth-child(1) {
    padding: 0 0.1rem;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    h4 {
      height: 0.3rem;
      line-height: 0.3rem;
      display: flex;
      justify-content: space-between;

      span:nth-child(2) {
        color: #0078a0;
      }
    }
  }
  div:nth-child(2) {
    height: 3.46rem;
    padding: 0.14rem 0.04rem;
    background: #fff;
    ul {
      height: 3.17rem;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 0.86rem;
        height: 0.3rem;
        background: #e1e1e1;
        margin-right: 0.05rem;
        text-align: center;
        line-height: 0.3rem;
        border-radius: 6%;
      }
    }
  }
}
.bundle-footer {
  height: 0.4rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  align-items: center;
  margin-bottom: 0.1rem;
  p {
    span {
      display: inline-block;
      width: 0.26rem;
      height: 0.26rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.28rem;
      background: #e1e1e1;
    }
    input {
      width: 0.3rem;
      height: 0.3rem;
      border: 1px solid #ccc;
      background: #e1e1e1;
    }
  }
}

.Add-Cart {
  height: 0.38rem;
  line-height: 0.38rem;
  text-align: center;
  background: red;
  font-size: 0.16rem;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.choice {
  border: 1px solid red;
  color: red;
}
</style>