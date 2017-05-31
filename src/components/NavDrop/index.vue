<template lang="jade">
  div
    nav-drop-item(
      v-for="(item, index) in navList",
      :config="item",
      :key="index"
    )
</template>

<script>
  import NavDropItem from './NavDropItem.vue'

  export default {
    props: {
      navList: {
        type: Array
      }
    },

    components: {
      NavDropItem
    }
  }
</script>

<style lang="stylus">
</style>
