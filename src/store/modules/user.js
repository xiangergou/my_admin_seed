/*
 * @Author: liuxia
 * @Date: 2019-01-12 19:09:26
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-13 22:26:15
 */

import { loginApi } from '@/api/user'
import { getSessionId, setSessionId } from '@/utils/auth'

const user = {
  state: {
    sessionId: getSessionId()
  },
  mutations: {
    SET_SESSIONID: (state, sessionId) => {
      state.sessionId = sessionId
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      const mobile = userInfo.mobile.trim()
      return new Promise((resolve, reject) => {
        loginApi.login({
          mobile,
          password: userInfo.password
        }).then(response => {
          const data = response.data.data
          setSessionId(data.sessionId)
          commit('SET_SESSIONID', data.sessionId)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
