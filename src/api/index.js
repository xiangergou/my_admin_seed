/*
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-01 18:08:04
 * @LastEditTime: 2020-06-27 14:41:48
 */

'use strict'

import AV from 'leancloud-storage'
// import store from '../store'

// let user = store.state.user ? store.state.user[0] : '0'
// console.log(user)

export function getResourcesList (obj) {
  const query = new AV.Query('armory')
  console.log(obj.hasAudit)
  // obj && query.equalTo('hasAudit', Boolean(obj.hasAudit))
  query.descending('createdAt').toJSON()
  return query.find()
}
