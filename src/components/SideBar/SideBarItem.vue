<template lang="jade">
  div.side-bar-item(@click="onSelfClick")
    span {{data.route}}
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: {}
      }
    },

    methods: {
      onSelfClick () {
        // this.$router.push({ path: this.data.route })
        window.location.href = `#/${this.data.route}`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .side-bar-item
    width: 100%
    height: 50px
    line-height: 50px
    text-align: center
    border-bottom: 1px solid black
    font-weight: bold
    cursor: pointer
</style>
