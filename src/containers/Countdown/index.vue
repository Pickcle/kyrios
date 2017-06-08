<template lang="jade">
  div
    h2 {{count}}
    button(@click="onResetClick") reset
    button(@click="onStateClick") state
    button.counter-button(@click="onCounterBtnClick", :class="{ cooldown: isCooldowning }", v-text="cooldownText") button
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import * as CountdownTypes from 'src/constants/CountdownTypes.js'

  export default {
    computed: {
      cooldownText () {
        if (this.isCooldowning) {
          return this.second + '秒'
        } else {
          return '发送'
        }
      },

      ...mapState({
        count: state => state.countdown.count,
        state: state => state
      })
    },

    data () {
      return {
        second: 5,
        isCooldowning: false
      }
    },

    methods: {
      startTimer () {
        this.stopTimer()
        this.timer = setInterval(() => {
          this.timerTick()
        }, 1000)
      },

      timerTick () {
        if (this.count > 0) {
          this.countdown()
        } else {
          this.stopTimer()
        }
      },

      stopTimer () {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
      },

      onCounterBtnClick () {
        if (this.isCooldowning) {
          return
        }
        this.startCooldown()
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
      },

      onResetClick () {
        this.reset()
        this.startTimer()
      },

      onStateClick () {
        console.log('xhjLog: countdown state', this.state)
      },

      ...mapActions({
        reset: CountdownTypes.RESET,
        countdown: CountdownTypes.COUNTDOWN
      })
    },

    created () {
      this.startTimer()
    },

    beforeDestroy () {
      this.stopTimer()
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
