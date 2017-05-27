<template lang="jade">
  h1 {{count}}
</template>

<script>
  import * as Types from 'src/constants/Types'

  export default {
    data () {
      return {
        count: 1
      }
    },
    methods: {
      [Types.INCREASE]({commit}) {
        commit(Types.INCREASE)
      },
      [Types.DECREASE]({commit}) {
        commit(Types.DECREASE)
      }
    }
  }
</script>

<style lang="stylus">

</style>
