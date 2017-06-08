<template lang="jade">
  button.counter-button.c-pointer(@click="onCounterBtnClick", :class="{ cooldown: isCooldowning }", v-text="cooldownText") button
</template>

<script>
  export default {
    props: {
      onClick: {
        type: Function,
        required: true
      }
    },

    computed: {
      cooldownText () {
        if (this.isCooldowning) {
          return this.second + '秒'
        } else {
          return '发送'
        }
      }
    },

    data () {
      return {
        second: 5,
        isCooldowning: false
      }
    },

    methods: {
      onCounterBtnClick () {
        if (this.isCooldowning) {
          return
        }
        this.onClick && this.onClick(this.startCooldown)
      },

      startCooldown () {
        this.stopCooldown()
        this.isCooldowning = true
        this.cooldownTimer = setInterval(() => {
          this.cooldownTick()
        }, 1000)
      },

      stopCooldown () {
        if (this.cooldownTimer) {
          clearInterval(this.cooldownTimer)
          this.second = 5
          this.isCooldowning = false
        }
      },

      cooldownTick () {
        this.second--
        if (this.second <= 0) {
          this.stopCooldown()
        }
      }
    },

    beforeDestroy () {
      this.stopCooldown()
    }
  }
</script>

<style lang="stylus" scoped>
  .counter-button
    width: 104px
    height: 32px
    margin: 16px 0
    background-color: #23ade5
    border: none
    border-radius: 4px
    color: #fff

    &.cooldown
      background-color: #e9eaec
      color: #b4b4b4
</style>
