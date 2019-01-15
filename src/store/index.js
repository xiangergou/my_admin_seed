/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:02:52
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-15 17:48:54
 */

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission,
    tagsView,
    app
  },
  getters
})

export default store
