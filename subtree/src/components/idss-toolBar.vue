<template>
    <div class="toolbar">
        <div class="toolbar__container">
            <span class="toolbar__left" v-for="(item, index) in toolbarMenu" :key="index">{{item.name || item}}</span>
            <div class="toolbar__right">
                <span class="toolbar__right--edit" v-show="toolbar.toolbarEdit" @click="edit">编辑</span>
                <span class="toolbar__right--add" v-show="toolbar.toolbarAdd" @click="add">添加</span>
                <span class="toolbar__right--close" v-show="toolbar.toolbarClose" @click="close">隐藏</span>
            </div>
        </div>

    </div>
</template>
<script>
import BusFactory, { EVENTNAME } from '../bus/bus.js'
let Bus
export default {
  data () {
    return {
      toolbar: {
        'toolbarEdit': false,
        'toolbarClose': false,
        'toolbarAdd': false
      }
    }
  },
  computed: {
    toolbarMenu () {
      if (this.$route.matched.length === 0) return false
      let routeLength = this.$route.fullPath.match(/\//g).length
      switch (routeLength) {
        case 1:
          return []
        case 2:
        case 3:
          return [{
            name: this.$route.meta.name,
            active: true
          }]
      }
    }
  },
  methods: {
    edit () {
      Bus.$emit(EVENTNAME.EVENT_EDIT)
    },
    add () {
    },
    resetStatus () {
      this.toolbar = {
        'toolbar-edit': false,
        'toolbar-add': false
      }
    },
    close () {
      Bus.$emit(EVENTNAME.EVENT_HIDE)
    }
  },
  beforeCreate () {
    Bus = BusFactory(this)
    // 默认隐藏所有的按钮
    Bus.$on(EVENTNAME.EVENT_HIDE, () => {
      for (let type in this.toolbar) {
        this.toolbar[type] = false
      }
    })
    Bus.$on(EVENTNAME.EVENT_CHANGE, (status = []) => {
      this.resetStatus()
      status.forEach(val => {
        this.toolbar[val.name || val] = val.name ? val.flag : true
      })
    })
  }
}
</script>
<style>
@component toolbar {
    width: 100%;
    height: 40px;
    background: rgb(243, 243, 243);
    box-sizing: border-box;
    display: flex;
    @e container {
        display: flex;
        flex: 1;
        padding: 0 20px;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }
    @e left {}
    @e right {
        @m edit {}
        @m add {}
    }
}
</style>


