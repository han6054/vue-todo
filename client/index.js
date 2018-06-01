import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'

import CreateRouter from './config/router'
import CreateStore from './store/store'

Vue.use(vueRouter)
Vue.use(Vuex)

const router = CreateRouter()
const store = CreateStore()

router.beforeEach((to, from, next) => {
  // console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  // console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  // console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
