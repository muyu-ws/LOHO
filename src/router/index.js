import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/pages/Home/Home"
import  List from '../components/pages/List/List'
import  GoodDetail from '../components/pages/gooddetail/gooddetail'
Vue.use(VueRouter)

const routes =  [
        {
            path: '/',
            name: 'home',
            component:Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/gooddetail',
            name: 'GoodDetail',
            component: GoodDetail
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router