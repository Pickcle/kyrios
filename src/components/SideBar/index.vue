<template lang="jade">
  div.side-bar
    side-bar-item(
      v-for="(item, index) in sidebarConfig",
      :data="item",
      :key="index"
    )
</template>

<script>
  import sidebarConfig from 'src/config/sidebarConfig.js'
  import SideBarItem from './SideBarItem.vue'

  export default {
    data () {
      return {
        sidebarConfig
      }
    },

    components: {
      SideBarItem
    }
  }
</script>

<style lang="stylus">
  .side-bar
    height: 800px
    background-color: #f1f1f1
</style>
