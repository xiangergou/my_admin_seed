/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:04:03
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-14 18:32:10
 */

const getters = {
  sidebar: state => state.app.sidebar,
  sessionId: state => state.user.sessionId,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedViews: state => state.tagsView.visitedViews
}
export default getters
