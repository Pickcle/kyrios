<template lang="jade">
  div.nav-drop-item.t-center
    p.title(:class="{ 'has-arrow': hasMenu }") {{config.name}}
    template(v-if="hasMenu")
      div.drop-menu()
        p(
          v-for="(item, index) in config.subTabs",
          :key="index"
        ) {{ item.name }}
</template>

<script>
  export default {
    props: {
      config: {
        type: Object
      }
    },

    computed: {
      hasMenu () {
        return this.config.subTabs && this.config.subTabs.length > 0
      }
    }
  }
</script>

<style lang="stylus">
  .nav-drop-item
    display: inline-block
    width: 20%
    cursor: pointer

    .title
      position: relative
      height: 50px
      line-height: 50px

      &.has-arrow
        &:after
          position: absolute
          content: ""
          display: inline-block
          top: 22px
          right: 6px
          width: 15px
          height: 8px
          background-image: url("../../assets/images/icon.png")
          background-repeat: no-repeat
          background-position: -10px -66px

    .drop-menu
      border: 1px solid black
</style>
