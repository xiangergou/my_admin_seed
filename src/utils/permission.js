/*
 * @Author: liuxia
 * @Date: 2019-01-13 22:22:04
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-16 10:37:21
 */
// import Vue from 'vue'
import router from '../router'
import store from '../store'

// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getSessionId } from '@/utils/auth'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getSessionId()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('getUserInfo').then(res => {
          const rolesMap = {
            '1': 'admin',
            '99': 'service',
            '0': 'global'
          }
          const roles = [(rolesMap[res.data.data.isAdmin.toString()] || 'global')]
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({ ...to })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
