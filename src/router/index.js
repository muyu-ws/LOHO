import Vue from 'vue'
import VueRouter from 'vue-router'
import  GoodList from '../components/pages/Goodlist/GoodList'
Vue.use(VueRouter)
console.log(1233)
export default new VueRouter({
    routers: [
        {
            path: '/goodlist',
            name: 'list',
            component: GoodList
        },
    ]
})