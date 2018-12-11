let mixin = {
  data () {
    return {}
  },
  methods: {
    async initData () {
      let param = {
        url: '/api/overview/overview',
        tag: '',
        method: 'post'
      }
      this.data = await this.http(param)
    }
  },
  activated () {
    if (!this.$route.meta || !this.$route.meta.cache) {
      typeof this.initData === 'function' && this.initData()
    }
    this.$route.meta.cache = false
  },
  tableChange (params = {}, objData, initMethod) {
    let { type, pageNumber, pageSize, order, prop, defaultSort } = params
    objData.pageNumber = objData.pageNumber || this.$set(objData, pageNumber, 1)
    switch (type) {
      case 'pageChange':
        objData.pageNumber = pageNumber
        initMethod()
        break
      case 'pageSize':
        this.$set(objData, pageSize, 1)
      case 'submit':
        if (objData.pageNumber === 1) {
          initMethod()
        } else {
          objData.pageNumber = 1
        }
        break
      case 'init':
        if (!defaultSort) {
          initMethod()
        }
        break
      default:
        objData.sorts = order && (order === 'ascending' ? [prop] : [`-${prop}`])
        if (objData.pageNumber === 1) {
          initMethod()
        } else {
          objData.pageNumber = 1
        }
        break
    }
  }
}
export default mixin
