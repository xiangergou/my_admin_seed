<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-02 18:12:31
 * @LastEditTime: 2020-06-03 17:23:17
-->
<template>
  <div>
    <el-dialog title="新录资源" :visible="dialogFormVisible"  @close="OnClose()">
      <el-form :model="form">
        <el-form-item label="试卷名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth">
          <el-select
            v-model="value"
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="资源上传" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :before-upload="beforeUpload"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>

          <!-- <input type="file" placeholder="请输入内容" multiple @change="uploadImg($event)"> -->
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
const AV = require('leancloud-storage')
export default {
  name: 'create',
  props: {
    dialogFormVisible: true
  },
  data () {
    return {
      input: null,
      form: {},
      formLabelWidth: '120px',
      options: [{
        value: '政治',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value: []
      // accept: 'application/pdf, application/wps-writer'
      // dialogFormVisible: true
    }
  },
  methods: {
    OnClose () {
      this.$emit('update:dialogFormVisible', false)
    },
    beforeUpload (e) {
      console.log(e, 'e')
    },
    async uploadImg (e) {
      const localFile = e.target.files
      console.log(localFile, 'localFile')
      // console.log(localFile, localFile.name, 'e')
      // const fileName = localFile.name.substring(0, localFile.name.lastIndexOf('.'))
      // // const file = new AV.File(localFile.name, localFile)
      // console.log(fileName, 'file')
    }
  }
}
</script>

<style>

</style>
