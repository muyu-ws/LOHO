// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './modules/config'

import store from './store'
import router from './router/index'
/* eslint-disable no-new */
console.log(router)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
