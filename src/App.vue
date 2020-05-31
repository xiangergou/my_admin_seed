<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
  },
  created: [
    function (params) {
      // console.log(1)
    }
  ],
  mounted () {
    console.log(this.$set)
  }
}
</script>

<style>
@import './styles/index.scss';
@import './styles/transition.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F6F6F6;
  overflow: auto;
}
</style>
