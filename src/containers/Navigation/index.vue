<template lang="jade">
  div
    nav-drop(:navList="navList")
</template>

<script>
  import NavDrop from 'src/components/NavDrop'

  export default {
    data () {
      return {
        navList: [
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
      NavDrop
    }
  }
</script>

<style lang="stylus">
</style>
