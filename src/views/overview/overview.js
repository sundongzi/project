
export default {
  methods: {
    // 获取状态列表数据
    async getChartData () {
      let param = {
        url: '/api/overview/overview',
        tag: '',
        method: 'post'
      }
      const resultData = await this.http(param)
      this.chartData = Object.assign({}, this.chartData, resultData)
    }
  }
}
