<template>
  <div class="overview-contianer">
     <bar-chart :data="chartData"></bar-chart> 
  </div>
</template>
<script>
// import mixin from '@/mixins/mixin'
import overviewAPI from './overview'
import BusFactory, { EVENTNAME } from '../../bus/bus'
let Bus
export default {
  mixins: [overviewAPI],
  data () {
    return {
      data: null,
      chartData: {
        title: '柱图',
        legend: [],
        xAxis: [],
        yAxis: [],
        series: []
      }
    }
  },
  methods: {
  },
  created () {
    Bus = BusFactory(this)
    Bus.$emit(EVENTNAME.EVENT_CHANGE, ['toolbarEdit', 'toolbarClose'])
    Bus.$on(EVENTNAME.EVENT_EDIT, () => {
      Bus.$emit(EVENTNAME.EVENT_CHANGE, ['toolbarEdit', 'toolbarAdd', 'toolbarClose'])
    })
    Bus.$on(EVENTNAME.EVENT_HIDE, () => {
      Bus.$emit(EVENTNAME.EVENT_CHANGE, [{ 'name': 'toolbarEdit', 'flag': false }, { name: 'toolbarAdd', 'flag': false }, { 'name': 'toolbarClose', 'flag': false }])
    })
    this.getChartData()
  }
}
</script>
<style scoped>
.overview-contianer{
  width:400px;
  height:400px;
}
</style>


