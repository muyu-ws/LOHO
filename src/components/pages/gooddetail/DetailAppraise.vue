<template>
    <div>
         <div v-for="(item,i) in pingjia" :key='i' class="appraise">
            <div>{{item.comment.content}}</div>
            <div><span>{{item.comment.customerId}}</span><span>2018-7-18 10:26:06</span></div>
            <div>店铺：{{item.location}}</div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "DetailAppraise",
  data() {
    return{  
    }
  },
  props: ["pingjia"],
  created() {},
  components: {},
  methods: {},
  mounted() {
      console.log(this.carData)
    // console.log(this.argument)
    // console.log(this.pingjia)
  },
  beforeCreate() {},
  created() {}
};
</script>

<style lang="scss" scoped>
//商品评价
.appraise {
    height:1.4rem;
    padding: 0 0.1rem;
    background: #fff;
    border-bottom:1px solid #ccc;

    div:nth-child(1){
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.12rem;
    }
    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        height:0.3rem;
        font-size:0.12rem;
        color: #ccc;
    }
    div:nth-child(3){
        height:0.4rem;
        line-height:0.4rem;
        font-size:0.12rem;
        color: #ccc;
    }
}
</style>