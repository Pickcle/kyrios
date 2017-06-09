<template lang="jade">
  div
    button(@click="onStartClick") start

</template>

<script>
  import axios from 'axios'

  export default {
    methods: {
      onStartClick () {
        axios.get('http://data.bilibili.com/v/web/web_live_room_2?mid=51038685&fts=1495637157&url=http%253A%252F%252Flive.bilibili.com%252F545342&proid=4&ptype=1&optype=1&clickid=29&showid=&is_guess=&is_notice=&clickurl=&_=' + Date.now()).then(result => {
          console.log('xhjLog: result', result)
        }, error => {
          console.log('xhjLog: error', error)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
