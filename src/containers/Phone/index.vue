<template lang="jade">
  div
    p api地址：{{ requestUrl }}
    input(placeholder="输入手机号", type="number", v-model="value")
    button(@click="onGetClick") 检验所属地
    p {{data_get}}
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        value: '',
        data_get: 'Nothing',
        requestUrl: 'https://api.github.com/users/mzabriskie'
      }
    },
    methods: {
      onGetClick () {
        axios.get(this.requestUrl)
        // axios.get('http://apis.juhe.cn/idcard/index', {
        //   phone: 13916411918,
        //   key: '99fa90c07d2f19dfc285813ac6114e3d'
        // }).then(result => {
        //   console.log('xhjLog: getsigninfo result', result)
        // }, error => {
        //   console.log('xhjLog: getsigninfo Error', error)
        // })
      }
    },

    watch: {
      value: {
        handler: function (newVal, val) {
          console.log('xhjLog: watch input newVal', newVal)
          console.log('xhjLog: watch input oldVal', val)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  input
    margin: 20px
    display: block
    width: 400px
    height: 40px
    line-height: 40px
    color: #666
    background-color: #fff
    border: 1px solid black
    border-radius: 4px

  button
    width: 100px
    height: 30px
    line-height: 30px
    border: 1px solid #000
    color: #000
    background-color: #fff
</style>
