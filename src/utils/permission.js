/*
 * @Author: liuxia
 * @Date: 2019-01-13 22:22:04
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-13 22:29:39
 */
import Vue from 'vue'
import router from '../router'
import store from '../store'

import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
