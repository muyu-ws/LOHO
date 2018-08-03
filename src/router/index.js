import Vue from 'vue'
import VueRouter from 'vue-router'
import  GoodList from '../components/pages/Goodlist/GoodList'
Vue.use(VueRouter)
import Home from "../components/pages/Home/Home";
import Marker from "../components/pages/Marker/Marker";
const routes =  [
        {
            path: '/',
            name: 'home',
            component:Home
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