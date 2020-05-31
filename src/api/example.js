/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-09-14 10:29:35
 * @Last Modified by: liuxia
 * @Last Modified time: 2020-05-31 13:46:30
 */

import { fetch } from '@/utils/fetch'

export const exampleApi = {
  requestPath: 'example',
  queryMethod: 'list',
  isMock: true,
  list (params = {}) {
    return fetch(this.requestPath, {
      method: this.queryMethod,
      params
    }, {
      isMock: this.isMock
    })
  }
}
