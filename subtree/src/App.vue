<template>
  <div class="idss">
    <div class="idss__header">
      <idss-hearder></idss-hearder>
    </div>
    <div class="idss__container">
      <div class="idss__content">
        <div class="view">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idssHearder from './components/idss-header'
import '@/style/app.css'
export default {
  name: 'app',
  components: { idssHearder }
}
</script>

<style>
@b idss {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @e header {
    width: 100%;
  }
  @e container {
    flex: 1;
  }
}
</style>
