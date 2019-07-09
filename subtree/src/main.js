// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from './components/charts'
import router from './app.router'
import axios from 'axios'
import store from '@/store'
import http from '@/plug/http'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css'
import '@/'
Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true  // 默认复制当前元素
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(Chart)
Vue.use(ElementUI)
Vue.use(http)
Vue.use(VueClipboard)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
