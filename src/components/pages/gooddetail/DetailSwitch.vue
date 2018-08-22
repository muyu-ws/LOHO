<template>
    <div>
        <div v-for="(item,idx) in argument" :key='idx' class="parameters">
            <span>{{item.tname}}</span>
            <span>{{item.val}}</span>
        </div>
    </div>
</template>

<script>

export default {
  name: "DetailSwitch",
  data() {
    return {

    };

  },
  props:['argument'],

  created() {
    'http://user.loho88.com/comment/getGoodsComments.do?barcode=1063031000091&catId=25&curPage=1&jsoncallback=jsonpCb&pageSize=10'
  }
};
</script>

<style lang="scss" scoped>

  //商品参数
  .parameters{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:0.6rem;
    padding:0 0.2rem;
    background: #fff;
    border-bottom:0.01rem solid #e4e4e4;
    span:nth-child(1){
      color:#ccc;
    }
  }
</style>