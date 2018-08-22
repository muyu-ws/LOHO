<template>
    <div class="app-city-list">
        <ul v-for="(num,i) in citynum" :key="i">
            <li >
                <h2>{{num}}</h2>
            </li>
            <li v-for="(city,i) in citys" :key="i"></li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:"app-city-list",
    data(){
        return {
            citys:[],
            citynum:[]
        }
    },
    methods: {
        getCity() {
        this.$http.get(this.server_config.lh+"/store/clist").then(res => {
            this.citys = res.data.result.list;
            console.log(this.citys)
        });
        },
        getNum() {
        this.$http.get(this.server_config.lh+"/store/clist").then(res => {
            this.citynum = res.data.result.letters;
        });
        }
    },
    created() {
        this.getCity();
        this.getNum()
    }

}
</script>
<style lang="scss" scoped>
    .app-city-list{
        h2{
            display: inline-block;
            width: 100%;
            height: 0.48rem;
            border: 1px solid #bbb;
            line-height: 0.48rem;
            margin-top: 10px;
            padding-left: 10px;
            background: #fff;
        }
    }
</style>

