/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:02:52
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-14 18:08:16
 */

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters
})

export default store
