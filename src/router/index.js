import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/pages/Home/Home"
import  List from '../components/pages/List/List'
import  GoodDetail from '../components/pages/gooddetail/gooddetail'
import Marker from "../components/pages/Marker/Marker"
import Login from "../components/pages/Login/Login"
import City from "../components/pages/City/City"

import store from "../store";
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
        },
        {
            path: '/marker',
            name: 'marker',
            component: Marker,
           
        },
        {
            path: '/city',
            name: 'city',
            component: City,

        },
        {
            path: '/login',
            name: 'login',
            component:Login
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

//全局路由守卫
//那个需要登录才能查看的页面在这添加
let need_user_state = ['']

router.beforeEach((to,from,next)=>{
    let need_us = need_user_state.some(name=>to.name===name)

    if(need_us && !store.state.commons.user_state ){
        next('./login');
        return false;
    }
    next()
})

export default router