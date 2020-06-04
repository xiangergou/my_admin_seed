<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-02 18:12:31
 * @LastEditTime: 2020-06-04 16:54:10
-->
<template>
  <div>
    <el-dialog title="新录资源" :visible="dialogFormVisible"  @close="OnClose()">
      <el-form :model="form">
        <el-form-item label="资源上传" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :before-upload="beforeUpload"
            multiple
            :on-exceed="handleExceed"
            :on-change="handleSuccess"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              <p>请按照"年份-学科-试卷名"的格式命名</p>
              <p>如 ”2015-政治-全国研究生开始书数农试题“</p>
              </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="OnClose">取 消</el-button>
        <el-button type="primary" @click="OnClose">确 定</el-button>
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
      fileList: [],
      value3: '',
      input: null,
      form: {},
      formLabelWidth: '120px',
      options: [{
        value: '0001',
        label: '政治'
      }, {
        value: '0002',
        label: '历史'
      }, {
        value: '0003',
        label: '英语'
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
    beforeUpload (item) {
      const fileName = item.name.substring(0, item.name.lastIndexOf('.'))
      const format = item.name.substring(item.name.lastIndexOf('.'), item.name.length)
      const [date, discipline] = fileName.split('-')
      const file = new AV.File(fileName, item)
      file.metaData('fileName', fileName)
      file.metaData('author', '张三')
      file.metaData('date', date)
      file.metaData('discipline', discipline)
      file.metaData('format', format)
      file.save({
        onprogress: (progress) => {
          console.log(progress)
        }
      }).then((file) => {
        const fileName = file.get('name')
        this.fileList.push({name: fileName, url: file.get('url')})
      }, (error) => {
        console.log(error, '222')
      })
    },
    handleSuccess (res) {
      console.log(res, this.fileList, 'res')
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    }
  }
}
</script>

<style>

</style>
