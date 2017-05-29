<template lang="jade">
  div
    h1 {{count}}
    button(@click="onIncreaseClick") increase
    button(@click="onDecreaseClick") decrease

</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import * as Types from 'src/constants/Types'

  export default {
    methods: {
      onIncreaseClick () {
        this.increase()
      },

      onDecreaseClick () {
        this.decrease()
      },

      ...mapActions({
        increase: Types.INCREASE,
        decrease: Types.DECREASE
      })
    },

    computed: {
      ...mapState({
        count: state => state.count
      })
    }
  }
</script>

<style lang="stylus">

</style>
