/*
 * @Author: liuxia
 * @Date: 2019-01-12 18:28:52
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-12 18:28:52
 */

<template>
  <div class="layout-container">
    <p style="margin-top: 0;margin-bottom: 15px;">【超级管理员】 liuxia</p>
    <div class="img-banner"/>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import bannerPic from '@/assets/banner1.jpg'
export default {
  name: 'Dashboard',
  filters: {
    rolesFilter (value) {
      const valueMap = {
        'admin': '【超级管理员】',
        'global': '【普通用户】',
        'service': '【服务用户】'
      }
      return valueMap[value] || '【普通用户】'
    }
  },
  data () {
    return {
      bannerPic: bannerPic
    }
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'roles'
    // ])
  },
  methods: {

  }
}

</script>

<style lang="scss" scoped>
.img-banner {
  height: 50vh;
  border-radius: 10px;
  background-color: #2d3a4b;
  background-image: url(../../assets/banner.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
