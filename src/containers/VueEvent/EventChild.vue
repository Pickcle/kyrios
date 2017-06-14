<template lang="jade">
  button(@click="onClick") {{ counter }}
</template>

<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },

    props: {
      eventName: {
        type: String,
        required: true
      }
    },

    methods: {
      onClick () {
        this.counter += 1
        this.$emit('action', this.eventName)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
