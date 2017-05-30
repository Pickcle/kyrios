<template lang="jade">

</template>

<script>
  import NavDropMenu from './NavDropMenu.vue'
  import NavDropItem from './NavDropItem.vue'

  export default {
    props: {
      navList: {
        type: Array,
        default: [
          {
            name: 'home',
            route: 'home'
          },
          {
            name: 'counter',
            route: 'counter'
          },
          {
            name: 'others',
            subTabs: [
              {
                name: 'countdown',
                route: 'countdown'
              },
              {
                name: 'navdrop',
                route: 'navdrop'
              }
            ]
          }
        ]
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
