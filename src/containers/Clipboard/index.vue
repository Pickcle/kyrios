<template lang="jade">
  div
    input
    p#baidu {{ baidu }}
    p#google {{ google }}
    a.d-block.c-pointer(ref="copyBaidu", data-clipboard-text="baidu") copyBaiduToClipboard
    a.d-block.c-pointer(ref="copyGoogle", data-clipboard-text="google") copyGoogleToClipboard
    p {{ selectedUrl }}
</template>

<script>
  import Clipboard from 'clipboard/dist/clipboard.min.js'

  export default {
    data () {
      return {
        baidu: 'www.baidu.com',
        google: 'www.google.com',
        selectedUrl: ''
      }
    },

    methods: {
      copyBaidu () {
        this.selectedUrl = this.baidu
      },

      copyGoogle () {
        this.selectedUrl = this.google
      }
    },

    mounted () {
      const clipboard1 = new Clipboard(this.$refs.copyBaidu)
      const clipboard2 = new Clipboard(this.$refs.copyGoogle)

      clipboard1.on('success', e => {
        console.log('xhjLog: success', e)
        this.selectedUrl = e.text
      })

      clipboard2.on('success', e => {
        console.log('xhjLog: success2', e)
        this.selectedUrl = e.text
      })
    }
  }
</script>

<style lang="stylus" scoped>
  input
    width: 300px
    height: 30px

  a
    margin: 10px 0
    width: 200px
    border: 1px solid black
</style>
