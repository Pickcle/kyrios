<template lang="jade">
  div.nav-drop
    nav-drop-item(
      v-for="(item, index) in navList",
      ref="dropItem",
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
    },

    mounted () {
      console.log('xhjLog: mounted refs: ', this.$refs.dropItem)
    }
  }
</script>

<style lang="stylus" scoped>
  .nav-drop
    display: flex
    justify-content: center
    width: 100%
    height: 100%
</style>
