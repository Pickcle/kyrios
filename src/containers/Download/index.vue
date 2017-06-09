<template lang="jade">
  div
    div
      a(@click="onDownloadClick") download
</template>

<script>
  export default {
    methods: {
      onDownloadClick () {
        console.log('xhjLog: onDownloadClick')
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
