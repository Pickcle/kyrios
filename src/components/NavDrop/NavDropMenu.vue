<template lang="jade">
  div.t-center
    span {{config.name}}
</template>

<script>
  import NavDropMenuItem from './NavDropMenuItem.vue'

  export default {
    props: {
      config: {
        type: Object
      }
    },
    
    components: {
      NavDropMenuItem
    }
  }
</script>

<style lang="stylus">
</style>
