/*
 * @Author: liuxia
 * @Date: 2019-01-12 17:33:05
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-14 21:20:12
 */

import Mock from 'mockjs'
import userApi from './user'

const regLogin = /\/user\/login/
const regUserInfo = /\/user\/getInfo/
const regLogout = /\/user\/logout/

Mock.mock(regLogin, 'post', userApi.login)
Mock.mock(regUserInfo, 'post', userApi.getUserInfo)
Mock.mock(regLogout, 'post', userApi.logout)

export default Mock
