<script>
import 'echarts/lib/chart/bar'
import Container from './chartContainer'
export default {
  name: 'bar-chart',
  extends: Container,
  methods: {
    initChartData () {
      // 初始化 chart 的 series
      // this.data = this.data.data.content
      this.series = this.data.series.map(item => Object.assign({}, {
        type: 'bar',
        barGap: '0', // 柱间距离
        barCategoryGap: '0' // 类目间柱形距离
      }, item))
      // 初始化 legend
      this.legendData = this.data.legend
      // 初始化 x 轴坐标信息
      this.xAxisData = this.data.xAxis
    },
    getChartOption () {
      return {
        color: this.BASE.COLOR,
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          // 刻度线
          axisTick: {
            alignWithLabel: true,
            show: true,
            lineStyle: {
              color: this.BASE.AXIS_LINE_COLOR
            }
          },
          // 坐标名称
          nameTextStyle: {
            color: this.BASE.TXT_COLOR,
            fontFamily: this.BASE.FONTFAMILY,
            fontSize: this.BASE.FONT_SIZE,
            lineHeight: this.BASE.LINEHEIGHT
          },
          // 轴线
          axisLine: {
            show: true,
            lineStyle: {
              color: this.BASE.AXIS_LINE_COLOR
            }
          },
          // 刻度标签
          axisLabel: {
            color: this.BASE.TXT_COLOR,
            opacity: 1,
            fontFamily: this.BASE.FONTFAMILY
          }
        },
        yAxis: {
          type: 'value',
          // 轴线
          axisLine: {
            show: true,
            lineStyle: {
              color: this.BASE.AXIS_LINE_COLOR
            }
          },
          // 刻度线
          axisTick: {
            show: false,
            lineStyle: {
              color: this.BASE.AXIS_LINE_COLOR
            }
          },
          // 刻度标签
          axisLabel: {
            color: this.BASE.TXT_COLOR,
            opacity: 1,
            fontFamily: this.BASE.FONTFAMILY
          },
          // 分隔线
          splitLine: {
            show: true,
            lineStyle: {
              color: this.BASE.AXIS_LINE_COLOR, // y轴的分割线
              opacity: 0.3
            }
          }
        },
        series: this.series
      }
    }
  }
}
</script>
