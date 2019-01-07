/*
 * @Author: ergou_xiang
 * @Date: 2019-01-07 13:19:00
 * @Last Modified by: ergou_xiang
 * @Last Modified time: 2019-01-07 16:32:45
 */
<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <div class="sidebar_logo">
        <img src="../../assets/logo.png">
        XT Admin
      </div>
      <sidebar class="sidebar-container"/>
    </div>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    // sidebar () {
    //   return this.$store.state.app.sidebar
    // }
  }
}
</script>

<style lang="scss">
@import "src/styles/index.scss";
</style>
<style lang="scss" scoped>
.app-wrapper{
  width: 100%;
  display: flex;
  .sidebar-wrapper{
    width: 200px;
    border: 1px solid #ccc;
  }
  .main-container{
    flex: 1;
    border: 1px solid red;
  }
}
</style>
