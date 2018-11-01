<template>
  <div class="hello">
    <canvas ref="canvas" width="1200" height="500"></canvas>
    <!-- <span>
      <img :src="authCodeSrc" @click="getAuthCode" alt="authCode">
    </span> -->
    <!-- <div class="padding-box">
      <el-input ref="ipt"></el-input>
    </div>
    <div id="box"></div>
    <div class="box"></div>
    <div class="box1-1"></div>
    <div class="box2"></div>
    <ul>
      <li>
        <a href="#t1">html5</a>
        <a href="#t2">html5444</a>
        <a href="#t3">图片</a>
      </li>
    </ul>
    <div id="t1">1111111</div>
    <div id="t2">1111111</div>
    <div id="t3">1111111</div>
    <div>
      <h3>3333333</h3>
      <p>1111111111</p>
      <h2>222222222</h2>
      <p>1111111111</p>
      <h2>222222222</h2>
      <p>1111111111</p>
      <h2>222222222</h2>
    </div> -->
    <!-- <form>
      <input type="radio" name="radio" value="male"/>男
      <input type="radio" name="radio" value="female"/>女
    </form> -->
    <div>
      <table>
          <tr>
            <td>11111</td>
          </tr>
      </table>
      <span>2222222222222</span>
    </div>

  </div>
</template>

<script>
import {text} from './hello.js'
import Immutable from 'immutable'
import echarts from 'echarts'
export default {
  name: 'HelloWorld',
  data () {
    return {
      authCodeSrc: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    immediateFn: text(),
    // 验证码生成
    getAuthCode () {
      this.$request({
        method: 'get',
        url: '/api/authcode',
        responseType: 'blob'
      }).then((response) => {
        this.authCodeSrc = URL.createObjectURL(new Blob([response.data]))
      })
    },
    init () {
      echarts.init(this.$refs['canvas'])
      // let val = this.throttle(this.ajaxFn, 500)
      // let ipt = this.$refs.ipt.$el
      // ipt.addEventListener('keyup', (e) => {
      //   val(e.target.value)
      // })
    },
    ajaxFn (param) {
      console.log('ppp', param)
    },
    debounce (fn, delay) {
      return function (args) {
        let that = this
        let args_ = args
        clearTimeout(fn.id)
        fn.id = setTimeout(function () {
          fn.call(that, args_)
        }, delay)
      }
    },
    throttle (fn, delay) {
      let last, deferTimer
      return function (args) {
        let that = this
        let args_ = args
        let now = +new Date()
        if (last && now < last + delay) {
          clearTimeout(deferTimer)
          deferTimer = setTimeout(function () {
            last = now
            fn.call(that, args_)
          }, delay)
        } else {
          last = now
          fn.call(that, args_)
        }
      }
    },
    objImmutable () {
      // Immutable.mergeDeep(original, {x: { z: 456 }})
      const original = Immutable.Map({ x: 123, y: 456, c: {d: [1, 2, 3]} })
      let aa = original.mergeDeep(original, { y: 789, z: 'abc' }) // { x: 123, y: 789, z: 'abc' }
      console.log(aa.toObject()) // { x: 123, y: 456 }
      // Immutable.mergeDeep(original, {x: { rr: 456 }}) // { x: { y: 123, z: 456, rr  }}
    },
    opeImmutable () {
      const map10 = Immutable.Map({a: 1, b: 2})
      const copyMap10 = map10.set('c', 23)
      console.log('copyMap10', copyMap10)
      console.log('map10', map10.toObject())
      const map1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 })
      map1.map((v, k) => {
        console.log('vvvv', v)
        console.log('kkkk', k)
      })
      const map2 = Immutable.Map({ c: 10, a: 20, t: 30 })
      const obj = { d: 100, o: 200, g: 300 }
      const map3 = map1.merge(map2, obj)
      console.log('map3', map3)

      const list1 = Immutable.List([ 1, 2, 3 ])
      const list2 = Immutable.List([ 4, 5, 6 ])
      const array = [ 7, 8, 9 ]
      const list3 = list1.concat(list2, array)
      console.log('list3', list3.toArray())

      const myObject = { a: 1, b: 2, c: 3 }
      Immutable.Seq(myObject).map((x) => {
        console.log('xxxxxxx', x)
      }).toObject()
      // console.log('123123423', Immutable.Seq(myObject).map(x => x * x).toObject())

      const deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List([ 3, 4, 5 ]) })
      console.log('toobject', deep.toObject()) // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
      console.log('toarray', deep.toArray()) // [ 1, 2, List [ 3, 4, 5 ] ]
      console.log('tojs', deep.toJS()) // { a: 1, b: 2, c: [ 3, 4, 5 ] }
      console.log('tyytytt', Object.prototype.toString(deep.toJS()['c']))

      const obj4 = {a: 1, b: 2, c: 3}
      const obj5 = {a: 1, b: 2, c: 3}
      console.log('obj45', obj4 === obj5)

      const obj6 = Immutable.Map({a: 1, b: 2, c: 3})
      const obj7 = Immutable.Map({a: 1, b: 2, c: 3})
      console.log('obj67', obj6 === obj7) // 需要引用相同
      console.log('equal', obj6.equals(obj7)) // 值相同就可以
      console.log('is', Immutable.is(obj6, obj7)) // 值相同就可以

      const originalMap = Immutable.Map({ a: 1, b: 2, c: 3 })
      const updatedMap = originalMap.set('b', 2)
      console.log(updatedMap === originalMap) // No-op .set() returned the original reference.
      // console.log('object', myObject.map(x => x * x))
      // let map1 = Immutable.Map({a: 1, b: 2, c: 3})
      // let map2 = map1
      // console.log('map2', map2)
      // let map2 = Immutable.Map({a: 1, b: 2, c: 3})
      // console.log('11111', Immutable.is(map1, map2))
      // console.log('223232', map1.equals(map2))
      // var map1 =  Immutable.Map<string, number>
      // map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
      // var map2 = map1.set('b', 50);
      // map1.get('b'); // 2
      // map2.get('b'); // 50
      // const list1 = Immutable.List([ 1, 2 ])
      // const list2 = list1.push(3, 4, 5)
      // const list3 = list2.unshift(0)
      // const list4 = list1.concat(list2, list3)
      // console.log('list2', list2.get(0))
      // assert.equal(list1.size, 2)
      // assert.equal(list2.size, 5)
      // assert.equal(list3.size, 6)
      // assert.equal(list4.size, 13)
      // assert.equal(list4.get(0), 1)
      // let map1 = Immutable.Map({a: 1, b: 2, c: 3})
      // let map2 = map1
      // console.log('11111', map1 === map2)
      // console.log('233333', ...map2)
      // map1.set('d', 4)
      // console.log('2222222', map1 === map2)
      // map2.set('d', 5)
      // console.log('333333', map1 === map2)
      // map1.set('a', 5)
      // console.log('4444444', map1 === map2)
      // map2.set('a', 10)
      // console.log('5555555', map1 === map2)
      // map1.set('a', 1)
      // console.log('4444444', map1 === map2)
      // map2.set('a', 1)
      // console.log('5555555', map1 === map2)
    }
  },
  mounted () {
    this.objImmutable()
    // this.opeImmutable()
    // this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="radio"]:indeterminate{
  outline: solid 5px blue;
}
:target{
  background:black
}
div[id^=b] {
  width:100px;
  height:100px;
  background:red
}
[class*=box]{
  width:100px;
  height:100px;
  margin-top:10px;
  background:blue;
}
[class$='-1']{
  background:yellow;
}
.padding-box{
  font-size: 16px;
  padding:1em;
}
span{
  color:red
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a[href$=\/]:after,a[href$=htm]:after{
  content:'这是网页呀';
  color:red
}
a[href$=jpg]:after{
  content:'这是图片呀';
  color:blue
}
li{
  width:100px;
  height:20px;
}
li:before{
  color:black;
  content: '·'

}
li:after{
  content: '~';
}
:root{
  background:green;
}
body{
  background:pink;
}
p:nth-child(odd){
  background:black;
}
p:nth-of-type(odd){
  background:black;
}
table{
  display: inline-table;
  border:1px solid red;
}
</style>
