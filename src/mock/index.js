/*
 * @Author: liuxia
 * @Date: 2019-01-12 17:33:05
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-12 17:36:56
 */

import Mock from 'mockjs'
import userApi from './user'

const regLogin = /\/user\/login/

Mock.mock(regLogin, 'post', userApi.login)

export default Mock
