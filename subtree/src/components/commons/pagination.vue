<template>
  <div>
    <el-pagination v-show="tableData.total" small layout="sizes, total, prev, pager, next" @size-change="tableSizeChange" @current-change="tablePageChange" :current-page.sync="tableData.pageNum" :page-sizes="[20, 50, 100, 200]" :page-size="tableData.pageSize" :total="tableData.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'yzf-pagination',
  props: ['tableData'],
  methods: {
    tableSizeChange (size) {
      this.$emit('sizeChange', { pageSize: size || 20, type: 'pageSize' })
    },
    tablePageChange (currentPage) {
      this.$emit('pageChange', { pageNumber: currentPage || 1, type: 'pageChange' })
    }
  }
}
</script>
<style scoped>

</style>


