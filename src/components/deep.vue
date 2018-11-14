<template>
  <div class="deep-container">
    <button @click="add">点击</button>
    <ul>
      <li>{{newObj.value}}</li>
    </ul>

    <div class="parent">
      <div class="child">11111</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Deep',
  data () {
    return {
      newObj: {},
      list: [],
      objs: {
        a: {
          b: {
            c: 1111
          }
        }
      }
    }
  },
  methods: {
    /**
     * 练习Object.defineProperty()属性描述符
     */
    defineObj () {
      let obj = Object.defineProperty({}, 'key', {
        value: '1',
        configurable: true
      })
      delete obj.key
      console.log('obj1111', obj)
    },
    /**
     * $set问题处理
     */
    add () {
      this.cloneTest()
    },
    clone (obj) {
      this.newObj = Object.assign(this.newObj, {value: '3333'})
      // this.$set(this.newObj, 'value', '33')
      if (!this.isObject(obj)) return obj
      var newObj = {}
      for (let i in obj) {
        newObj[i] = this.clone(obj[i])
      }
      return newObj
    },
    isObject (param) {
      return Object.prototype.toString.call(param) === '[object Object]'
    },
    /**
      最简单的深拷贝
     */
    easyClone (obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    /**
     * 使用循环的方式进行深拷贝
     */
    cloneLoop (obj) {
      const root = {}
      // 栈
      const loopList = [
        {
          parent: root,
          key: undefined,
          data: obj
        }
      ]
      while (loopList.length) {
        debugger
        console.log('roroo', root)
        // 深度优先
        const node = loopList.pop()
        const parent = node.parent
        const key = node.key
        const data = node.data

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent
        if (typeof key !== 'undefined') {
          res = parent[key] = {}
        }

        for (let k in data) {
          if (data.hasOwnProperty(k)) {
            if (typeof data[k] === 'object') { // 如果是对象就放到栈里面
              // 下一次循环
              loopList.push({
                parent: res,
                key: k,
                data: data[k]
              })
            } else {
              res[k] = data[k] // 直接拷贝
            }
          }
        }
      }

      return root
    },
    /**
     * 尾递归
     */
    endRecursion (num, total) {
      if (num === 1) return total
      return this.endRecursion(num - 1, num * total)
    },
    /**
     * 用于clone测试
     */
    cloneTest () {
      this.list = [1, 2, 3, 4]
      this.list.push(5)
      let newObj = this.objs
      let newObj1 = this.objs
      let cloneObj = this.clone(this.objs)
      console.log('循环拷贝', this.cloneLoop(this.objs))
      newObj.a.b.c = 4
      console.log('obk2', newObj1) // {a:b{c:4}}
      console.log('objbj', cloneObj) // {a:b{c:1}}

      let newObj3 = {a: NaN, b: 2, c: undefined, d: function () {}}
      console.log('最简单的深拷贝', this.easyClone(newObj3))
    },
    /**
     * promise && XHR
     */
    xhr (url) {
      return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest()
        req.open('GET', url, true) // 第三个参数表示是否异步执行
        req.onload = function () {
          if (req.status === 200) {
            resolve(req.responseText)
          } else {
            reject(new Error(req.statusText))
          }
          req.onerror = function () {
            reject(new Error(req.statusText))
          }
          req.send()
        }
      })
    }
  },
  created () {
    // this.defineObj()
    // this.cloneTest()
    console.log(this.endRecursion(5, 1))
  }
}
</script>
<style scoped>
.parent{
  width:200px;
  height: 200px;
  background: blue;
  position: relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
</style>
