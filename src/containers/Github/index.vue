<template lang="jade">
  div.github
    div.btn-container
      button(v-for="(config, idx) in apiConfigs", :key="idx", @click="onApiClick(config)") {{getName(config)}}
    div.message {{response}}
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        apiConfigs: [
          'https://api.github.com/zen',
          'https://api.github.com/users/Pickcle'
        ],
        response: ''
      }
    },

    methods: {
      getName (url) {
        return url.replace('https://api.github.com/', '')
      },

      onApiClick (url) {
        axios.get(url).then(result => {
          this.response = result.data
        }, error => {
          this.response = 'something error:' + JSON.stringify(error)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  button
    width: 100%
    height: 30px
    margin: 15px 0
    border: 1px solid black
    border-radius: 4px
    background-color: #fff
    color: #666

  .github
    height: 100%

    .btn-container
      margin: 0 15px
      float: left
      width: 200px
      height: 100%

    .message
      float: left
      width: 400px
      height: 100%
      padding: 15px
      background-color: #fff
      word-wrap: break-word
</style>
