<template>
    <div>
        <keep-alive max="10">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import ROUTER_CACHE from '@/config/index.js'
export default {
  data () {
    return {
      ifCache: ROUTER_CACHE
    }
  }
}
</script>
<style scoped>

</style>

