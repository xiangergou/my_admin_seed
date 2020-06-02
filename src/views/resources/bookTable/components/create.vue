<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-02 18:12:31
 * @LastEditTime: 2020-06-02 18:28:45
-->
<template>
  <div>
    <el-dialog title="收货地址" :visible="dialogFormVisible"  @close="OnClose()">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="OnClose">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'create',
  props: {
    dialogFormVisible: false
  },
  data () {
    return {
      form: {},
      formLabelWidth: '120px'
      // dialogFormVisible: true
    }
  },
  methods: {
    OnClose () {
      this.$emit('update:dialogFormVisible', false)
    }
  }
}
</script>

<style>

</style>
