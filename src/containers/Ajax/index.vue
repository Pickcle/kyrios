<template lang="jade">
  div.ajax
    button(@click="onGetClick") get
    button(@click="onPostClick") post
    p {{data_get}}
    p {{data_post}}
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        data_get: 'Nothing',
        data_post: 'Nothing'
      }
    },
    methods: {
      onGetClick () {
      },

      onPostClick() {
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
