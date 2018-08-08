
<template>
    <div class="app-city">
        <app-city-header></app-city-header>
         <div class="hot-city">
             <h2 class="hot">热门城市</h2>
             <ul class="city-list">
                 <li v-for="city in citys" :key="city.cityId">{{city.cityName}}</li>
             </ul>
             <h2 class="hot">全部城市</h2>
             <ul class="city-list-num">
                 <li class="list-item" v-for="num in citynum" :key="num">{{num}}</li>
             </ul>
         </div>
        <app-city-list></app-city-list>
    </div>
</template>


<script>
import AppCityHeader from "./CityHeader";
import AppCityList from "./CityList";


export default {
  name: "AppCity",
  components: {
    AppCityHeader,
   AppCityList,
  },
  data() {
    return {
      citys: [],
      citynum: [],
    }
  },
  methods: {
    getCity() {
      this.$http.get("/lh/store/clist").then(res => {
        this.citys = res.data.result.hot;
      });
    },
    getNum() {
      this.$http.get("/lh/store/clist").then(res => {
        this.citynum = res.data.result.letters;
      });
    },
    
  },
  created() {
    this.getCity();
    this.getNum();
  }
};
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
.app-city {
  margin-top: 0.55rem;

  .hot-city {
    h2 {
      display: inline-block;
      width: 100%;
      height: 0.48rem;
      border: 1px solid #bbb;
      line-height: 0.48rem;
      margin-top: 10px;
      padding-left: 10px;
      background: #fff;
    }

    .city-list {
      padding: 0;
      width: 100%;
      height: 0.48rem;
      min-height: 0.48rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #fff;

      li {
        width: 100%;
        height: 0.48rem;
        text-align: center;
        line-height: 0.48rem;
      }
    }
    .city-list-num {
      padding: 0;
      width: 100%;
     
      min-height: 0.6rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
      background: #fff;

      .list-item {
        width: 33.3%;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        border: 1px solid #bbb;
        background: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>