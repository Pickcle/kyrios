<template lang="jade">
  div
    p {{total}}
    event-child(@action="action", event-name="increase")
    event-child(@action="action", event-name="decrease")
</template>

<script>
  import EventChild from './EventChild.vue'

  export default {
    data () {
      return {
        total: 0
      }
    },

    components: {
      EventChild
    },

    methods: {
      action (param) {
        if (param === 'increase') {
          this.total += 1
        } else if (param === 'decrease') {
          this.total -= 1
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
