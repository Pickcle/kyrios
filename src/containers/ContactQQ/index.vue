<template lang="jade">
  div
    p 联系作者
      a(href="http://wpa.qq.com/msgrd?v=3&uin=348707253&site=qq&menu=yes", target="_blank")
        img.qq-img(src="../../assets/images/qq.png")
    p(:style="{ 'vertical-align': 'middle' }") 客服：800189233
      img#BizQQWPA.qq-img(src="../../assets/images/qq.png")
</template>

<script>
  export default {
    mounted () {
      window.BizQQWPA.addCustom({
        aty: '0',
        a: '0',
        nameAccount: 800189233,
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
