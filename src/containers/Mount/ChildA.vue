<template lang="jade">
  div#ChildA A
</template>

<script>
  export default {
    beforeMount () {
      console.log('xhjLog: A beforeMount')
    },

    mounted () {
      document.getElementById('ChildA').style.color = '#f00'
      document.getElementById('ChildB').style.color = '#f00'
      document.getElementById('ChildC').style.color = '#f00'
      document.getElementById('parent').style.color = '#f00'
    }
  }
</script>

<style lang="stylus" scoped>
</style>
