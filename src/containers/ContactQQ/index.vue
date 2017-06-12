<template lang="jade">
  p(:style="{ 'vertical-align': 'middle' }") 联系作者：348707253
    img#BizQQWPA.qq-img(src="../../assets/images/qq.png")
</template>

<script>
  export default {
    mounted () {
      window.BizQQWPA.addCustom({
        aty: '0',
        a: '0',
        nameAccount: 348707253,
        selector: 'BizQQWPA'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .qq-img
    position: relative
    top: 5px
    cursor: pointer
</style>
