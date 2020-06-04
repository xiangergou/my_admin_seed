// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
// import './icons'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'https://pic.cnblogs.com/face/1446455/20190911163633.png' // 加载中图片，一定要有，不然会一直重复加载占位图
  // error: require('img/error.png') // 加载失败图片
})

require('./mock')
require('./utils/permission.js')
const AV = require('leancloud-storage')

AV.init({
  appId: 'AlWeYVtSToe0WIC9iWiVHLsQ-MdYXbMMI',
  appKey: 'gC4mPTDAI5e5GriuORDNgED4'
})

Vue.use(ElementUI)
Vue.config.productionTip = false

// Vue.config.performance = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
