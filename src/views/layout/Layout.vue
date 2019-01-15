/*
 * @Author: ergou_xiang
 * @Date: 2019-01-07 13:19:00
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-15 18:51:31
 */
<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
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
    sidebar () {
      return this.$store.state.app.sidebar
    }
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
  position: relative;
  &.hideSidebar {
    .sidebar-wrapper {
      transform: translate(-140px, 0);
      overflow-x: hidden;
      .sidebar_logo,
      .sidebar-container {
        transform: translate(140px, 0);
      }
      &:hover {
        transform: translate(0, 0);
        .sidebar_logo,
        .sidebar-container {
          transform: translate(0, 0);
        }
      }
    }
    .main-wrapper {
      margin-left: 60px;
    }
  }
  .sidebar-wrapper{
    width: 200px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgb(66, 60, 110);
    box-sizing: border-box;
    transition: all .28s ease-out;
    box-shadow: 2px 0 6px rgba(0, 0, 0, .35);
  }
  .sidebar-container {
    transition: all .28s ease-out;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .main-wrapper{
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 200px;
  }
  .sidebar_logo {
    width: 200px;
    height: 60px;
    background: rgb(66, 60, 110);
    display: flex;
    align-items: center;
    padding-left: 18px;
    box-sizing: border-box;
    font-size: 20px;
    color: #f8f8f8;
    img {
      height: 32px;
      margin-right: 20px;
    }
  }
}
</style>
