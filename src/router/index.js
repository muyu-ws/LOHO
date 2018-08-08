import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/pages/Home/Home"
import  List from '../components/pages/List/List'
import  GoodDetail from '../components/pages/gooddetail/gooddetail'
import Marker from "../components/pages/Marker/Marker";
import  Choose from '../components/pages/Choose/Choose';
import  Cart from '../components/pages/Cart/Cart';
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
            path: '/choose',
            name: 'Choose',
            component: Choose
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/marker',
            name: 'marker',
            component: Marker
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router