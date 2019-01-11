import Vue from 'vue'
import '../icons'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }, {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    icon: 'home',
    noDropdown: true,
    children: [{
      name: '首页',
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

export default new Router({
  /* mode: 'history', //需要服务器配置路由 */
  scrollBehavior: () => ({
    y: 0
  }), // 后退后页面位置
  routes: constantRouterMap
})
