<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-04 18:03:39
 * @LastEditTime: 2020-06-04 18:05:55
-->
<template>
  <div>
    <el-dialog title="编辑资源" :visible="editDialogVisible"  @close="OnClose">
      <el-form :model="form" label-width="80px" label-position="left">
        <el-form-item label="文件名" prop="pass">
          <el-input v-model="form.fileName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学科" prop="checkPass">
          <el-input v-model="form.discipline" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年份" prop="age">
          <el-input v-model.number="form.date"></el-input>
        </el-form-item>
           <el-form-item label="格式">
          <el-input v-model.number="form.format" disabled></el-input>
        </el-form-item>
        <el-form-item label="贡献者">
          <el-input v-model.number="form.author" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="OnClose">取 消</el-button>
        <el-button type="primary" @click="handleToConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const AV = require('leancloud-storage')

export default {
  name: 'edit',
  props: {
    editDialogVisible: false,
    form: {}
  },
  data () {
    return {
    }
  },
  methods: {
    OnClose () {
      this.$emit('update:editDialogVisible', false)
    },
    handleToConfirm () {
      console.log(this.form.id)
      const todo = AV.Object.createWithoutData('_File', '5ed8cb546f65cd000876365f')
      todo.set('name', 'fuck')
      todo.save()
    }
  }
}
</script>

<style>

</style>
