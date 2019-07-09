<template>
  <div ref="rightMenuRef" @contextmenu.prevent="openMenu($event)" class="menu" v-clickoutside="closeMenu">
    <ul :style="{left: left + 'px', top: top + 'px', zIndex: 11}" class="sub-menu" v-show="visible">
      <li>菜单1</li>
      <li>菜单1</li>
      <li>菜单1</li>
    </ul>
  </div>
</template>
<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  name: 'RightMenu',
  directives: {Clickoutside},
  data () {
    return {
      visible: false,
      left: 0,
      top: 0
    }
  },
  methods: {
    openMenu (e) {
      let {clientX, clientY} = e
      let {x, y} = this.$refs['rightMenuRef'].getBoundingClientRect()
      this.left = clientX - x
      this.top = clientY - y
      this.visible = true
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.menu{
  width:800px;
  height:300px;
  border:1px solid red;
  position: relative;
}
.sub-menu{
  width:50px;
  height:80px;
  border:1px solid green;
  position: absolute;
}
</style>
