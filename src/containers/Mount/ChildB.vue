<template lang="jade">
  div#ChildB B
</template>

<script>
  export default {
    beforeMount () {
      console.log('xhjLog: B beforeMount')
    },

    mounted () {
      document.getElementById('ChildA').style.color = '#0f0'
      document.getElementById('ChildB').style.color = '#0f0'
      document.getElementById('ChildC').style.color = '#0f0'
      document.getElementById('parent').style.color = '#0f0'
    }
  }
</script>

<style lang="stylus" scoped>
</style>
