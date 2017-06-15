<template lang="jade">
  div
    button(@click="changeView") changeView
    transition(appear=true, name="fade",
      @before-enter="beforeEnter",
      @enter="enter",
      @after-enter="afterEnter",
      @enter-cancelled="enterCancelled",
      @before-leave="beforeLeave",
      @leave="leave",
      @after-leave="afterLeave",
      @leave-cancelled="leaveCancelled")
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
      },

      beforeEnter (el) {

      },

      enter (el, done) {
        done()
      },

      afterEnter (el) {

      },

      enterCancelled (el) {

      },

      beforeLeave (el) {

      },

      leave (el, done) {
        done()
      },

      afterLeave (el) {

      },

      leaveCancelled (el) {
        
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
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-leave-active
    position: absolute

  .fade-enter, .fade-leave-active
    opacity: 0

  /*.fade-enter-active, .fade-leave
    opacity: 1*/
</style>
