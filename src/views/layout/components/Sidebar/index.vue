<template>
  <div class="layout-side">
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      background-color="#423C6E"
      text-color="#fff"
      active-text-color="#fff">
      <sidebar-item :routes="routes"/>
    </el-menu>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  data () {
    return {
      routes: []
    }
  },
  computed: {
    // ...mapGetters([
    //   'permission_routers'
    // ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  border-right: 0;
}
</style>
