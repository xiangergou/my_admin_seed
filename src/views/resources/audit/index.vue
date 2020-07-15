<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-27 14:15:22
 * @LastEditTime: 2020-06-27 14:43:33
-->
<template>
  <div>
    <header>
      <el-button type="primary" size="mini" @click="showDialog">新建数据</el-button>
    </header>
    <div class="layout_pageHeader">
      <el-form
        :inline="true"
        :model="formOptions"
        size="small">
        <el-form-item label="学科分类">
          <el-select v-model="formOptions.disciplineId" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.key"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="格式">
          <el-select
            :clearable="true"
            v-model="formOptions.format"
            placeholder="请选择格式">
            <el-option
              label=".pdf"
              value=".pdf"/>
            <el-option
              label=".doc"
              value=".doc"/>
          </el-select>
        </el-form-item>
        <el-form-item label="年份">
          <el-date-picker
          v-model="formOptions.date"
          type="year"
          placeholder="选择年">
         </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleSearch">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="getMultipleSelectionAll">获取已选数据</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="layout-container">
      <GridUnit
        type="local"
        :data="list"
        ref="refGridUnit"
        :columns="colModels"
        :is-mock="false"
        :form-options="formOptions"
        :show-expand="false"
        :show-selection="true"
        :selection-key="`exampleId`">
        <template slot="handle" slot-scope="scope">
          <el-button type="primary" size="small">
            <a :href="scope.row.url" download target="_blank">
            下载
            </a>
          </el-button>
          <el-button type="danger" size="small"
            @click="handleView(scope.$index)">
            删除
          </el-button>
        </template>
      </GridUnit>
    </div>
    <!-- create -->
    <!-- <create :createDialogVisible.sync="createDialogVisible" />
    <edit :editDialogVisible.sync="editDialogVisible" :form="detailData"/> -->
  </div>
</template>

<script>
import GridUnit from '@/components/GridUnit/grid'
// import create from './components/create'
// import edit from './components/edit'
import { getResourcesList } from '@/api'
// import { options } from './config'
import AV from 'leancloud-storage'
export default {
  name: 'audit',
  components: {
    GridUnit
    // create,
    // edit
  },
  data () {
    return {
      value: '',
      options: [],
      detailData: {},
      createDialogVisible: false,
      editDialogVisible: false,
      value3: '',
      layer_show: false,
      tableHeight: 300,
      formOptions: {
        disciplineId: '',
        format: '',
        date: ''
      },
      colModels: [
        {prop: 'title', label: '书名', width: 300},
        {prop: 'desc', label: '学科'},
        {prop: 'date', label: '年份'},
        {prop: 'format', label: '格式'},
        {prop: 'author', label: '贡献者'},
        {prop: 'author', label: '状态'},
        {label: '操作', slotName: 'handle', width: 260}
      ],
      list: []
    }
  },
  computed: {

  },
  created () {
    this.getList()
  },
  mounted () {
    /* 表格高度控制 */
    this.$nextTick(() => {
      const offsetTop = this.$refs.refGridUnit.$el.offsetTop || 140
      const pagenationH = 55
      const containerPadding = 20
      let tempHeight = document.body.clientHeight - offsetTop - pagenationH - containerPadding
      this.tableHeight = tempHeight > 300 ? tempHeight : 300
      window.onresize = () => {
        return (() => {
          tempHeight = document.body.clientHeight - offsetTop - pagenationH - containerPadding
          this.tableHeight = this.tableHeight = tempHeight > 300 ? tempHeight : 300
        })()
      }
    })
  },
  methods: {
    getList () {
      getResourcesList({hasAudit: false}).then(res => {
        console.log(JSON.parse(JSON.stringify(res)), 'res')
        const data = JSON.parse(JSON.stringify(res))
        this.list.push(...data)
      })
    },
    showDialog () {
      this.createDialogVisible = true
    },
    handleView (index) {
      this.detailData = this.list[index]
      this.editDialogVisible = true
    },
    handleSearch () {
      const query = new AV.Query('_File')
      for (let key in this.formOptions) {
        if (this.formOptions[key]) {
          query.equalTo(`metaData.${key}`, this.formOptions[key])
        }
      }
      query.find().then(res => {
        const data = JSON.parse(JSON.stringify(res)).map(item => {
          return {
            ...item.metaData,
            url: item.url,
            id: item.objectId
          }
        })
        console.log(data, 'data')
        this.list = []
        console.log(this.list)
      })
    },
    getMultipleSelectionAll () {
      const multipleSelectionAll = this.$refs.refGridUnit.multipleSelectionAll
      this.$message({
        showClose: true,
        message: `已选择${multipleSelectionAll.length}条数据`
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
