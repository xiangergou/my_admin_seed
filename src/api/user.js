/*
 * @Author: liuxia
 * @Date: 2019-01-12 19:05:35
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-13 22:00:42
 */

import fetch from '@/utils/fetch'

export const loginApi = {
  /* 登录获取sessionId */
  login (params = {}) {
    return fetch({
      url: '/user/login',
      method: 'post',
      params
    })
  }

}
