<template>
    <div class="header-container">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-show="!hide">
            <el-submenu :index="`${index}`" v-for="(menuList, index) in menuArr" :key="index">
                <template slot="title">{{menuList.name}}</template>
                <el-menu-item :index="`${index}-${subIndex}`" v-for="(sub, subIndex) in menuList.children" :key="subIndex" @click="routeChange(menuList.normal.routerPath, index)">{{sub.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <tool-bar v-show="!hide"></tool-bar>
        <el-button @click="loginOut">点击退出 </el-button>
    </div>
</template>
<script>
import menu from '../components/menu/menu'
import toolBar from '../components/idss-toolBar'
import '@/style/menu.css'
export default {
  data () {
    return {
      activeIndex: '1',
      hide: false,
      menuArr: menu.data
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    // console.log(key, keyPath)
    },
    routeChange (to, index) {
      this.$router.push(to)
    },
    loginOut () {
      this.$router.push('/login')
    }
  },
  created () {
    // Bus.$on('toolbar-menu-hide', flag => (this.hide = flag))
  },
  components: {toolBar}
}
</script>


