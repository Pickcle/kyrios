<template lang="jade">
  div.script
    div.btn-container
      button(@click="onGetClick") get
      button(@click="onPostClick") post
      button(@click="onStartClick") start
    div.message {{response}}

</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        response: ''
      }
    },

    methods: {
      onStartClick () {
        axios.get('http://localhost:6060/start').then(result => {
          console.log('xhjLog: result', result)
          this.response = result
        }, error => {
          console.log('xhjLog: error', error)
          this.response = error
        })
      },

      onGetClick () {
        axios.get('http://data.bilibili.com/v/web/web_live_room_2?mid=51038685&fts=1495637157&url=http%253A%252F%252Flive.bilibili.com%252F545342&proid=4&ptype=1&optype=1&clickid=29&showid=&is_guess=&is_notice=&clickurl=&_=' + Date.now()).then(result => {
          console.log('xhjLog: result', result)
        }, error => {
          console.log('xhjLog: error', error)
        })
      },

      onPostClick () {
        axios.post('http://live.bilibili.com/msg/send' + Date.now()).then(result => {
          console.log('xhjLog: result', result)
        }, error => {
          console.log('xhjLog: error', error)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .script
    height: 100%

    .btn-container
      margin: 0 15px
      float: left
      width: 200px
      height: 100%

      button
        width: 100%
        height: 30px
        margin: 15px 0
        border: 1px solid black
        border-radius: 4px
        background-color: #fff
        color: #666

    .message
      float: left
      width: 400px
      height: 100%
      padding: 15px
      background-color: #fff
      word-wrap: break-word
</style>
