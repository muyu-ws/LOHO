import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/pages/Home/Home";
const routes =  [
        {
            path: '/',
            name: 'home',
            component:Home
        }
    ]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router