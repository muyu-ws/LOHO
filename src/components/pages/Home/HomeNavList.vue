<template>
  <div id="app-home-nav-list">
    <ul class="nav-list">
      <li class="nav-item">
        <img src="" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "app-home-nav-list",
  data(){
    return {
      navs:[]
    }
  },
  methods:{
    getNav(){
       this.$http.get('/lh/index').then( res => {
        console.log(res.data)
       
                     
      })
    }
  }
}
</script>

<style scoped lang = "scss" scoped>

</style>