<template lang="jade">
  div.nav-drop
    nav-drop-item(
      v-for="(item, index) in navList",
      :item-data="item",
      :onTabClick="onTabClick",
      :key="index"
    )
</template>

<script>
  import NavDropItem from './NavDropItem.vue'

  export default {
    props: {
      navList: {
        type: Array,
        default: []
      },

      onTabClick: {
        type: Function
      }
    },

    components: {
      NavDropItem
    }
  }
</script>

<style lang="stylus">
  .nav-drop
    display: flex
    justify-content: center
    width: 100%
    height: 100%
</style>
