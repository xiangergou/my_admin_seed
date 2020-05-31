/*
 * @Author: liuxia
 * @Date: 2019-01-12 18:28:52
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-07-14 13:38:45
 */

<template>
  <div class="layout-container">
    <p style="margin-top: 0;margin-bottom: 15px;">【超级管理员】 liuxia</p>
    <!-- <div class="img-banner"/> -->
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData" @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
    </span>
</el-dialog>
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
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
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
    handleSelectionChange (val) {
      console.log(val, 'val')
    }
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
