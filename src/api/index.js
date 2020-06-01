/*
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-01 18:08:04
 * @LastEditTime: 2020-06-01 18:09:07
 */

'use strict'

import AV from 'leancloud-storage'
// import store from '../store'

// let user = store.state.user ? store.state.user[0] : '0'
// console.log(user)

export function getResourcesList (id) {
  const grapes = new AV.Query('Books')
  grapes.descending('createdAt').toJSON()
  return grapes.find()
}
