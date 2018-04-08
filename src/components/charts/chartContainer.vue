<template>
    <div class="chart__container">
        <div class="chart__container--title"></div>
        <div class="chart__container--noData" v-show="noData">暂无数据</div>
        <div class="chart__container--data" v-show="!noData" ref="chartBox-ref"></div>
    </div>
</template>
<script>
import Ehcarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import ElementResizeDetectorMaker from 'element-resize-detector'
const BASE = {
  FONTFAMILY: 'Microsoft YaHei',
  TXT_COLOR: '#333',
  FONT_SIZE: '16px',
  LINEHEIGHT: '36px',
  AXIS_LINE_COLOR: '#DBDBDB',
  SHADOW_COLOR: 'rgba(0, 0, 0, 0.5)',
  TOPN_SHADOW_COLOR: 'rgba(255, 255, 255, 0.6)',
  LINE_AREA_COLOR: 'rgba(72,177,255,0.3)',
  COLOR: ['#48B1FF', '#5BDC3A', '#FFC439', '#FF4758', '#E872FD'],
  TOPN_COLOR: ['#48B1FF', '#FFC439', '#ff5e00', '#ff0000', '#E872FD']
}
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: null,
          series: [],
          legendData: [],
          xAxisData: [],
          yAxisData: []
        }
      }
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function () {
        // this.getChartInit()
        this.initChartData()
        this.myChart.clear()
        this.myChart.setOption(this.getChartOption(), true)
      }
    }
  },
  data () {
    return {
      BASE
    }
  },
  computed: {
    noData () {
      return this.data.series && this.data.series.length
    }
  },
  methods: {

  },
  create () {
    // this.getChartInit()
    this.initChartData()
  },
  mounted () {
    const chartRef = this.$refs['chartBox-ref']
    this.myChart = Ehcarts.init(chartRef)
    this.myChart.on('click', (...params) => {
      this.$emit('clickItem', ...params)
    })
    let elementResizeDetector = ElementResizeDetectorMaker({
      stratety: 'scroll',
      callOnAdd: false
    })
    elementResizeDetector.listenTo(chartRef, () => {
      this.myChart.resize(chartRef.clientWidth, chartRef.clientHeight)
    })
  }
}
</script>
<style>
@component chart {
    @e container {
      width:100%;
      height:100%;
        @m title {}
        @m noData {}
        @m data {
          width:100%;
          height:100%;
        }
    }
}
</style>


