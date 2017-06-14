<template lang="jade">
  div
    button(@click="changeView") changeView
    keep-alive
      component(:is="currentView")
</template>

<script>
  import VueData from '../VueData'
  import VueDirective from '../VueDirective'
  import VueEvent from '../VueEvent'

  export default {
    data () {
      return {
        views: [VueData, VueDirective, VueEvent],
        index: 0
      }
    },

    computed: {
      currentView () {
        return this.views[this.index]
      }
    },

    methods: {
      changeView () {
        this.index = (this.index + 1) % 3
      }
    },

    components: {
      VueData,
      VueDirective,
      VueEvent
    }
  }
</script>

<style lang="stylus" scoped>
</style>
