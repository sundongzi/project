<template>
  <div>
     <button @click="add"></button>
     <span>{{newNum}}</span>
     <ul>
       <li v-for="(key, value, index) in listObj" :key="index">
         {{key}}{{value}}{{index}}
       </li>
     </ul>
     <template v-if="shows">
       <p>1111</p>
       <p>2222</p>
       <p>3333</p>
     </template>

     <input v-model.number="age">
  </div>
</template>
<script>
import Immutable from 'seamless-immutable'
export default {
  name: 'arr',
  data () {
    return {
      age: 1,
      num: 1,
      isShow: true,
      listObj: {
        'name': 'sd',
        'age': 23
      }
    }
  },
  computed: {
    newNum: function () {
      return this.num
    },
    shows: {
      get: function () {
        return this.isShow
      }
    }
  },
  methods: {
    add () {
      // this.listObj['age'] = '男'
      this.$set(this.listObj, 'sex', '男')
      this.isShow = !this.isShow
      this.num = this.num + 1
    },
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
    },
    classText () {
      class Point {
        constructor (x, y) { // 构造对象
          this.x = x
          this.y = y
        }
        static hello () {
          console.log('hello world')
        }
      }
      class ColorPoint extends Point {
        constructor (x, y, color) {
          // this.color = color  基于父类创建的子类实例，只有super可以调用父类实例
          super(x, y)
          this.color = color
        }
        static mm () {
          console.log('mmmm')
          // super()  作为函数调用时只能用于子类的构造函数
        }
      }
      ColorPoint.mm()
      console.log(Object.getPrototypeOf(ColorPoint) === Point)
    }
  },
  created () {
    // this.classText()
    // this.example()
    // this.obj()
  }
}
</script>
<style scoped>
</style>
