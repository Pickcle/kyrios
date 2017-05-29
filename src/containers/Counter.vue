<template lang="jade">
  div
    h1 {{count}}
    button(@click="onIncreaseClick") increase
    button(@click="onDecreaseClick") decrease

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

      ...mapActions({
        increase: CounterTypes.INCREASE,
        decrease: CounterTypes.DECREASE,
        reset: CounterTypes.RESET
      })
    },

    computed: {
      ...mapState({
        count: state => state.counter.count
      })
    },

    beforeMount () {
      console.count('xhjLog: beforeMount')
    },

    beforeDestroy () {
      this.reset()
      console.count('xhjLog: beforeDestroy')
    }
  }
</script>

<style lang="stylus">

</style>
