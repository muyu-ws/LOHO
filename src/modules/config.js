import Vue from 'vue'
//swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheets/main.scss'

//rem
import computed_rem from './rem'
//计算rem
computed_rem()

import VueCookies from "vue-cookies";
Vue.use(VueCookies)

// axios

import axios from 'axios'
Vue.prototype.$http = axios

//全局组件
import './ui-components'

Vue.config.productionTip = false