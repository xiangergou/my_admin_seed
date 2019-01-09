/*
 * @Author: ergou_xiang
 * @Date: 2019-01-07 13:19:00
 * @Last Modified by: ergou_xiang
 * @Last Modified time: 2019-01-09 17:24:47
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
    <div class="main-wrapper">
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
  overflow: auto;
  display: flex;
  .sidebar-wrapper{
    width: 200px;
    height: 100vh;
    // position: fixed;
    // top: 0;
    // bottom: 0;
    // left: 0;
    z-index: 1001;
    overflow-x: hidden;
    overflow-y: auto;
    background: #409EFF;
    transition: all .28s ease-out;
    box-shadow: 2px 0 6px rgba(0, 0, 0, .35);
  }
  .main-wrapper{
    flex: 1;
    min-height: 100%;
    width: 100%;
    transition: all .28s ease-out;
  }
  .sidebar_logo {
    width: 100%;
    height: 60px;
    background: rgb(66, 60, 110);
    display: flex;
    align-items: center;
    padding-left: 18px;
    box-sizing: border-box;
    font-size: 20px;
    color: #fff;
    img {
      height: 32px;
      margin-right: 20px;
    }
  }
}
</style>
