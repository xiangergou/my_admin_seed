/*
 * @Author: liuxia
 * @Date: 2019-01-11 10:28:24
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-11 10:28:24
 */

import Vue from 'vue'
import SvgIcon from '@/components/Icon-svg'

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
