<template lang="jade">

</template>

<script>
  import NavDropMenu from './NavDropMenu.vue'
  import NavDropItem from './NavDropItem.vue'

  export default {
    props: {
      navList: {
        type: Array
      }
    },

    components: {
      NavDropItem,
      NavDropMenu
    }
  }
</script>

<style lang="stylus">
</style>
