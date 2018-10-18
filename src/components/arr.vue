<template>
  <div>

  </div>
</template>
<script>
import Immutable from 'seamless-immutable'
export default {
  name: 'arr',
  data () {
    return {

    }
  },
  methods: {
    example () {
      var array = []
      var array1 = Immutable.from(['toto', 'immuttable', {hammer: '11111'}])
      array1[1] = 'subn' // 不可更改
      console.log('array1', array1)
      console.log('array', array1[1])
      var obj = {}
      console.log('123456', Immutable.setIn(obj, ['key'], 'data'))

      var flatMap = Immutable.flatMap(array, function (str) {
        return [str, str, str]
      })
      console.log('flatMap', flatMap)

      var array2 = ['a', 'b', 'c', 'd']
      let asObject = Immutable.asObject(array2, function (str) {
        return [str, str.toUpperCase()]
      })
      console.log('asObject', asObject)

      // 返回数组的可变副本
      let asMutableArr = Immutable(['hello', 'world', {a: 1}])
      let asMutableArr1 = Immutable.asMutable(asMutableArr)
      asMutableArr1.push('11111')
      // asMutableObj.a
      console.log('asMutableArr', asMutableArr)
      console.log('asMutableArr1', asMutableArr1) // 互不影响

      // let asMutableObj = Immutable({a: '1', b: '2'})
      // let asMutableObj1 = Immutable.asMutable(asMutableObj)
    },
    obj () {
      var obj = Immutable({when: 'the', levee: 'breaks', a: {g: 111, f: 222}})
      var mutableObject = Immutable.asMutable(obj)
      // mutableObject.a.g = 3333
      console.log('mutableObject', mutableObject)
      console.log('oobobob', obj)
    }
  },
  created () {
    this.example()
    // this.obj()
  }
}
</script>
<style scoped>
</style>
