<template lang="jade">
  div#ChildC C
</template>

<script>
  export default {
    beforeMount () {
      console.log('xhjLog: C beforeMount')
    },

    mounted () {
      document.getElementById('ChildA').style.color = '#00f'
      document.getElementById('ChildB').style.color = '#00f'
      document.getElementById('ChildC').style.color = '#00f'
      document.getElementById('parent').style.color = '#00f'
    }
  }
</script>

<style lang="stylus" scoped>
</style>
