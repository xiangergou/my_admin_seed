/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:02:52
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-12 19:12:53
 */

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
