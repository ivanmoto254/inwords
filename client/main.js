import Vue from 'vue'
import VueRouter from 'vue-router'
// import Vuex from 'vuex'
import App from './App'
Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes: [
    { path: '/', component: () => import('layouts/mainLayout') },
    { path: '/login', component: () => import('layouts/loginLayout') }
  ]
})

Vue.use(VueRouter)
new Vue({
  el: '#inapp',
  router,
  render: h => h(App)
})
