<template lang="jade">
  div
    h1 {{count}}
    button(@click="onIncreaseClick") increase
    button(@click="onDecreaseClick") decrease
    button(@click="onResetClick") reset
    button(@click="onStateClick") state

</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import * as CounterTypes from 'src/constants/CounterTypes'

  export default {
    methods: {
      onIncreaseClick () {
        this.increase()
      },

      onDecreaseClick () {
        this.decrease()
      },

      onResetClick () {
        this.reset()
      },

      onStateClick () {
        console.log('xhjLog: state', this.state)
      },

      ...mapActions({
        increase: CounterTypes.INCREASE,
        decrease: CounterTypes.DECREASE,
        reset: CounterTypes.RESET
      })
    },

    computed: {
      ...mapState({
        state: state => state,
        count: state => state.counter.count
      })
    },

    mounted () {
      console.count('xhjLog: Counter mounted')
    },

    beforeDestroy () {
      this.reset()
      console.count('xhjLog: Counter beforeDestroy')
    }
  }
</script>

<style lang="stylus" scoped>
</style>
