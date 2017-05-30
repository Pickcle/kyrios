<template lang="jade">
  div
    h2 {{count}}
    button(@click="onResetClick") reset
    button(@click="onStateClick") state
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import * as CountdownTypes from 'src/constants/CountdownTypes.js'

  export default {
    computed: {
      ...mapState({
        count: state => state.countdown.count,
        state: state => state
      })
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

<style lang="stylus">
</style>
