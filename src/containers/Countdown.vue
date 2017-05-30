<template lang="jade">
  div
    h2 {{count}}
    button(@click="onResetClick") reset
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import * as CountdownTypes from 'src/constants/CountdownTypes.js'

  export default {
    computed: {
      ...mapState({
        count: state => state.countdown.count
      })
    },

    methods: {
      onResetClick () {
        this.reset()
      },

      ...mapActions({
        reset: CountdownTypes.RESET,
        countdown: CountdownTypes.COUNTDOWN
      })
    },

    created () {
      console.count('xhjLog: countdown created')
      this.timer = setInterval(() => {
        this.countdown()
      }, 1000)
    },

    beforeDestory () {
      console.count('xhjLog: countdown beforeDestory')
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style lang="stylus">
</style>
