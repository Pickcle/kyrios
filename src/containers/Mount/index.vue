<template lang="jade">
  div#parent
    child-a
    child-b
    child-c
</template>

<script>
  import ChildA from './ChildA.vue'
  import ChildB from './ChildB.vue'
  import ChildC from './ChildC.vue'

  export default {
    components: {
      ChildA,
      ChildB,
      ChildC
    },

    brforeMount () {
      console.log('xhjLog: parent before mount')
    },

    mounted () {
      document.getElementById('ChildA').style.color = '#ff0'
      document.getElementById('ChildB').style.color = '#ff0'
      document.getElementById('ChildC').style.color = '#ff0'
      document.getElementById('parent').style.color = '#ff0'
    }
  }
</script>

<style lang="stylus" scoped>
</style>
