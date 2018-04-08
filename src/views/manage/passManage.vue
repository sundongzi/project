<template>
    <div class="manage__container">
        <div class="manage__content">
             password
        </div>
        <el-button @click="back">返回</el-button>
    </div>
</template>
<script>
import mixin from '@/mixins/mixin'
export default {
  mixins: [mixin],
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$route.meta.nextCache = true
      this.$router.back()
    }
  }
}
</script>                          
<style>
@component manage {
    @e container {
        
    }
}
</style>

