<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-04 18:03:39
 * @LastEditTime: 2020-06-04 18:05:55
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
export default {
  name: 'edit'
}
</script>

<style>

</style>
