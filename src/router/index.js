import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/pages/Home/Home"
import  List from '../components/pages/List/List'
import  GoodDetail from '../components/pages/gooddetail/gooddetail'
Vue.use(VueRouter)
<<<<<<< HEAD

=======
import Home from "../components/pages/Home/Home";
import Marker from "../components/pages/Marker/Marker";
>>>>>>> d94d8ad90992bfd0d2b16f6d522ae5cc2917c1ec
const routes =  [
        {
            path: '/',
            name: 'home',
            component:Home
        },
        {
<<<<<<< HEAD
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/gooddetail',
            name: 'GoodDetail',
            component: GoodDetail
=======
            path: '/marker',
            name: 'marker',
            component: Marker
>>>>>>> d94d8ad90992bfd0d2b16f6d522ae5cc2917c1ec
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router