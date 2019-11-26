<template>
  <div class="form-container">
    <span v-for="(item, index) in arr" :key="index">
      {{obj[index]['current'][2]}}
      {{current[index]}}
      <el-button @click="link(index)">跳转</el-button>
    </span>
    <!-- <el-steps :active="status" finish-status="success" simple style="marginBottom: 20px;">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
      <el-step title="步骤 4"></el-step>
    </el-steps> -->
    <!-- 返回上一步 -->
    <!-- <el-button v-if="canGoBack" @click="goBack">返回上一步</el-button> -->
    <!-- 动态渲染当前状态组件 -->
    <component :is="statusCom" @onChangeStatus="changeStatus" />
    <!-- <el-button @click="update">更新</el-button> -->

    <span>{{cb}}</span>
    c5b04ca1643300b1479b64f363b1b8245e62b180
    c5b04ca1643300b1479b64f363b1b8245e62b180
  </div>
</template>
<script>
import step1 from './status-components/step1'
import step2 from './status-components/step2'
import step3 from './status-components/step3'
import step4 from './status-components/step4'
// @Component({

// })
const DEFAULT_STATUS = 1
export default {
  name: 'status-form',
  components: {
    step1,
    step2,
    step3,
    step4
  },
  computed: {
    statusCom: function () {
      const statusMap = {
        1: step1,
        2: step2,
        3: step3,
        4: step4
      }
      return statusMap[this.status]
    },
    canGoBack: function () {
      return this.cache.length > 0
    }
  },
  data () {
    return {
      obj: {},
      arr: [1, 2, 3, 4],
      current: [],
      value: '',
      text: '',
      options: {
        'dengyu': '等于',
        'add': '加号'
      },
      status: DEFAULT_STATUS
    }
  },
  methods: {
    aa (a) {
      console.log('aaa', a)
      return a
    },
    update () {
      this.observe(this.options)
      console.log('trtrtr', this.options.add)
    },
    observe (obj) {
      if (typeof obj !== 'object') {
        return
      }
      Object.keys(obj).forEach(item => {
        // this.defineReactive(obj, item, obj[item])
      })
    },
    // defineReactive (obj, key, value) {
    //   this.observe(value)
    //   let dp = new Dep()
    //   Object.defineProperty(obj, key, {
    //     enumerable: true,
    //     configurable: true,
    //     get: function getVal () {
    //       if(Dep.target){
    //        dp.addSub(Dep.target)
    //       }
    //       return value
    //       console.log('value', value)
    //     },
    //     set: function setVal (newVal) {
    //       this.observe(newVal)
    //       if (newVal !== value) {
    //         console.log('render', value)
    //         this.render()
    //         value = newVal
    //         dp.notify()
    //       }
    //     }
    //   })
    // },
    render () {
      console.log('视图渲染了')
    },
    link (index) {
      this.obj[index]['color'] = '11111'
      this.$set(this.current, index, '0000')
      console.log('fsdfdsf', this.current[index])

      // window.history.pushState(null, null, {path: 'http://localhost:8080/config/database-tactics?_r=1563350400888'})
      // window.location.hash = 'http://localhost:8080/config/database-tactics?_r=1563350400888'
    },
    proxyTest () {
      let proxyTarget = {
        get (targetVal, key) {
          if (typeof targetVal[key] === 'object') {
            return new Proxy(targetVal[key], proxyTarget)
          }
          return Reflect.get(targetVal, key)
        }
      }
    },
    changeStatus (val) {
      this.cache.push(val)
      this.status = val
    },
    goBack () {
      // 弹出当前状态
      this.cache.pop()
      // 改变状态为上一个状态
      this.status = this.cache[this.cache.length - 1] || DEFAULT_STATUS
    }
  },
  created () {
    this.arr.forEach((item, index) => {
      this.obj[index] = {
        current: [1, 2, 3],
        color: ''
      }
      this.current.push('12345')
    })
  }
  // created () {
  //   class Dep {
  //     constructor (sub) {
  //       this.subs = []
  //     }
  //     addSub (sub) {
  //       this.subs.push(sub)
  //     }
  //     notify () {
  //       this.subs.forEach(item => {
  //         item.update()
  //       })
  //     }
  //   }
  //   class Watcher {
  //     constructor (obj, key, cb) {
  //       Dep.target = this
  //       this.cb = cb
  //       this.obj = obj
  //       this.key = key
  //       this.value = obj[key]
  //       Dep.target = null
  //     }
  //     update () {
  //       this.value = this.obj[this.key]
  //       this.cb(this.value)
  //     }
  //   }
  //   class Vue {
  //     constructor (options) {
  //       this._data = options.data
  //       this.observe(this._data)
  //       new Watcher()
  //     }
  //   }
  //   // let name = new Project('sundong')
  //   // console.log(name.sayName())
  //   // console.log(name instanceof Project)

  //   // function Parent (name, age) {
  //   //   this.name = name
  //   //   this.age = age
  //   // }
  //   // Parent.prototype.sayName = function () {
  //   //   console.log('dayin', this.name)
  //   // }
  //   // function Child (name, age) {
  //   //   Parent.call(this, name, age)
  //   // }
  //   // Child.prototype = Object.create(Parent.prototype, {
  //   //   constructor: {
  //   //     value: Child,
  //   //     enumerable: true,
  //   //     writable: true,
  //   //     configurable: true
  //   //   }
  //   // })
  //   // let child = new Child('sundong', 24)
  //   // console.log(child.sayName())
  // }
}
</script>
