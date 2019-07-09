<template>
  <div class="proxy">

  </div>
</template>
<script>
export default {
  name: 'proxy',
  data () {
    return {

    }
  },
  methods: {
    init () {
      let proxy = new Proxy({}, {
        get: function (tar, property) {
          return 45
        }
      })
      console.log('proxy', proxy.name)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
