// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import app1 from './components/app1.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import VueRouter from 'vue-router'
import $ from "jquery"
import store from 'store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(preview)
Vue.use(VueLazyload, {
  loading: require('../src/photo/200.png'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('../src/photo/200.png')  //加载失败图片
})
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>',
})
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin == true){
    next();
  }
  next();
})