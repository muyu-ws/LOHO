<template>
    <div class="app-home-special">
            <app-home-special-box
            v-for = " (special, i) in specials "
            :key = "i"
            :data = "special"
            >
            </app-home-special-box>
    </div>
</template>

<script>

import AppHomeSpecialBox from './Special/SpecialBox'
export default {
    name:'app-home-special',
    data(){
        return {
            specials:[]
        }
    },
    methods:{
        getSpecials(){
            this.$http.get("/lh/index").then(res => {
            this.specials = res.data.result.classify;
            console.log(this.specials);
      });
        }
    },
    created() {
    this.getSpecials();
  },
    components:{
        AppHomeSpecialBox
    }
}
</script>

<style lang="scss" scoped>
    .app-home-special{

    }
</style>


