<template>
  <div id="app-home-nav-list">
    <ul class="nav-list">
      <router-link 
        exact :to="{name:'List',query:{id:nav.cid,type:nav.tid ,name:nav.tag}}"
        v-for = "nav in navs" 
        :key = "nav.tid" 
        class="nav-item">
                <img :src="nav.pic">
                <span>{{nav.tag}}</span>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "app-home-nav-list",
  data() {
    return {
      navs: []
    };
  },

  created() {
    this.getNav();
  },
  methods: {
    getNav() {
      this.$http.get(this.server_config.lh+"/index").then(res => {
        this.navs = res.data.result.cates;
        // console.log(this.navs)
      });
    },
    chuangcan() {
      this.$router.push({
        path: "/List/",
        query: {
          id: cid,
          name: tag,
          type: tid
        }
      });
    }
  }
};
</script>

<style lang = "scss" scoped>
.nav-list {
  background: #fff;
  border-bottom: 1px solid #e1e1e1;
  margin: 0 auto 0.08rem;
  padding: 0 0 0.3rem;
  min-height: 1.65rem;
  display: flex;
  flex-wrap: wrap;
  .nav-item {
    padding: 0;
    width: 25%;
    height: 1.09rem;
    min-height: 0.9rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 54%;
      padding-top: 0.18rem;
    }
    span {
      font-size: 0.14rem;
      line-height: 0.22rem;
      text-align: center;
      color: #333;
      display: block;
    }
  }
}
</style>