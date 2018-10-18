<template>
  <div>
    <el-button @clicK="add">
      添加
    </el-button>
  </div>
</template>
<script>
import Immutable from 'immutable'
export default {
  name: 'obj',
  data () {
    return {

    }
  },
  methods: {
    example () {
      const map1 = Immutable.Map({a: 1, b: 2, c: 3})
      const map2 = map1.set('a', 6)
      const obj = Immutable.fromJS({a: '123', b: '345'})
      console.log('obj', obj)
      console.log('obj11', obj.toJS())
      console.log('map1', map1)
      console.log('map2', map2)
      console.log('对比', Immutable.is(map1, map2))
      console.log('falsefalse', Immutable.fromJS([1, 2, 3, {a: 4, b: 5}]).has('0'))

      // const arrs = Immutable.fromJS({a: 1, b: 2, c: {d: 3, e: 4}}).first()
      const lastArr = Immutable.fromJS({a: 1, b: 2, c: {d: 3, e: 4}}).last()
      console.log('first', lastArr)

      const original = { x: 123, y: 456 }
      Immutable.mergeWith(
        (oldVal, newVal) => oldVal + newVal,
        original,
        { y: 789, z: 'abc' }
      ) // { x: 123, y: 1245, z: 'abc' }
      console.log('12323123', original) // { x: 123, y: 456 }
    },
    add () {

    }
  },
  created () {
    this.example()
  }
}
</script>
<style scoped>
</style>
