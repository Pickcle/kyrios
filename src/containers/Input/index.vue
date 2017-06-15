<template lang="jade">
  div
    div.barrage-panel
      input(:placeholder="defaultText", :disabled="isVisitor", maxlength="20", :class="{ red: isMax }", v-model.trim.number="message", @focus="onFocus", @blur="onBlur")
      counter-button.btn(v-if="!isVisitor", :on-click="onSendClick") 发送
      span.visitor.c-default(v-if="isVisitor") 游客不能发送弹幕，请先
        a(href="https://passport.bilibili.com/login", target="_blank") 登录
        | 或
        a(href="https://passport.bilibili.com/register/phone", target="_blank") 注册
      span.limit(v-show="isMax") {{limitText}}

    input(type="color")
    input#checkbox(type="checkbox", :style="{ 'display': 'inline-block' }", v-model="checked")
    label(for="checkbox") {{checked}}

</template>

<script>
  import CounterButton from 'src/components/CounterButton.vue'

  export default {
    data () {
      return {
        message: '',
        isFocus: false,
        checked: false
      }
    },

    computed: {
      defaultText () {
        if (this.isVisitor) {
          return ''
        }
        return this.isFocus ? '' : '您可以在这里输入弹幕吐槽哦~'
      },

      isMax () {
        return this.message.length >= 20
      },

      isVisitor () {
        return ~~this.$route.params.isVisitor !== 0
      },

      limitText () {
        return this.message.length + '/20'
      }
    },

    methods: {
      onFocus () {
        this.isFocus = true
      },

      onBlur () {
        this.isFocus = false
      },

      onSendClick () {

      }
    },

    components: {
      CounterButton
    }
  }
</script>

<style lang="stylus" scoped>
  input
    display: block
    width: 300px
    height: 30px
    margin: 20px
    line-height: 30px
    border: 1px solid black
    border-radius: 4px
    background-color: #fff
    color: #666


  .barrage-panel
    position: relative
    width: 100%
    height: 64px
    box-sizing: border-box
    border: 1px solid #e9eaec
    border-radius: 0 0 12px 12px
    background-color: #fff
    font-size: 12px

    input
      width: 500px
      height: 32px
      margin: 16px
      border: 1px solid #e9eaec
      border-radius: 4px
      font-size: 12px
      color: #b4b4b4
      background-color: #fff

      &:focus
        border-color: #23ade5
        color: #333

      &.red
        color: #ff6464!important
        border-color: #ff6464!important

    .btn
      position: absolute
      top: 0
      right: 50px

    .visitor
      position: absolute
      top: 25px
      left: 23px
      border-color: #23ade5
      color: #666

      a
        color: #23ade5

    .limit
      position: absolute
      top: 25px
      right: 145px
      color: #ff6464

</style>
