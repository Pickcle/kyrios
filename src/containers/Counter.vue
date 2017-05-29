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
        decrease: CounterTypes.DECREASE
      })
    },

    computed: {
      ...mapState({
        count: state => state.counter.count
      })
    }
  }
</script>

<style lang="stylus">

</style>
