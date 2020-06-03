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
        <el-form-item label="分类">
          <el-cascader :options="options" clearable :props="{ expandTrigger: 'hover' }"></el-cascader>
        </el-form-item>
        <el-form-item label="格式">
          <el-select
            :clearable="true"
            v-model="formOptions.region"
            placeholder="活动区域">
            <el-option
              label="试题"
              value="上海"/>
            <el-option
              label="电子书"
              value="北京"/>
          </el-select>
        </el-form-item>
          <el-form-item label="日期">
          <el-date-picker
          v-model="value3"
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
      </GridUnit>
    </div>
    <!-- create -->
    <create :dialogFormVisible.sync="dialogFormVisible" />
  </div>
</template>
<script>
import GridUnit from '@/components/GridUnit/grid'
import create from './components/create'
import { getResourcesList } from '@/api'

export default {
  name: 'ExampleGrid',
  components: {
    GridUnit,
    create
  },
  filters: {

  },
  data () {
    return {
      dialogFormVisible: true,
      value3: '',
      options: [{
        value: 'zhinan',
        label: '考研资料',
        children: [{
          value: 'shejiyuanze',
          label: '政治'
        }, {
          value: 'shejiyuanze',
          label: '设计原则'
        }, {
          value: 'shejiyuanze',
          label: '设计原则'
        }, {
          value: 'shejiyuanze',
          label: '设计原则'
        }]
      }],
      layer_show: false,
      tableHeight: 300,
      formOptions: {
        user: '',
        region: ''
      },
      colModels: [
        {prop: 'title', label: '书名'},
        {prop: 'title', label: '分类名'},
        {prop: 'author', label: '作者'},
        {prop: 'desc', label: '格式'},
        {prop: 'desc', label: '简介'},
        {prop: 'cover', label: 'cover', width: 60, type: 'img'},
        // {prop: 'effectiveTime', label: '上线时间', width: 180, filter: 'parseTime', sortable: true},
        {prop: 'introduction', label: '地址'},
        {label: '操作', slotName: 'handle', width: 160}
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
      getResourcesList().then(res => {
        console.log(JSON.parse(JSON.stringify(res)), 'res')
        const data = JSON.parse(JSON.stringify(res))
        console.log(data, 'data')
        this.list.push(...data)
        // this.booksList.push(...data)
      })
    },
    showDialog () {
      this.dialogFormVisible = true
    },
    handleView (index) {
      this.$message.success('柏林爸爸' + index)
      this.layer_show = true
    },
    handleSearch () {
      this.$nextTick(() => {
        this.$refs.refGridUnit.searchHandler()
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
