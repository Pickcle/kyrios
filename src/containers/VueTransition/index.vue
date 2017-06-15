<template lang="jade">
  div
    button(@click="show") show
    button(@click="hide") hide
    transition-group(name="fade", tag="ul", @before-enter="beforeEnter", @enter="enter", @leave="leave", appear=true)
      li(v-for="(item, index) in computedList",
        :key="item.msg",
        :data-index="index"
      ) {{ item.msg }}

</template>

<script>
  export default {
    data () {
      return {
        isShow: true,
        list: [
          { msg: 'AA' },
          { msg: 'BB' },
          { msg: 'CC' },
          { msg: 'DD' },
          { msg: 'EE' },
          { msg: 'FF' }
        ]
      }
    },

    computed: {
      computedList () {
        return this.isShow ? this.list : []
      }
    },

    methods: {
      show () {
        this.isShow = true
      },

      hide () {
        this.isShow = false
      },

      beforeEnter (el) {
        el.style.opacity = 0
        el.style.height = 0
      },

      enter (el, done) {
        const delay = el.dataset.index * 1000
        setTimeout(() => {
          el.style.opacity = 1
          el.style.height = '1.6em'
          setTimeout(() => {
            done()
          }, 1000)
          // done()
        }, delay)
      },

      leave (el, done) {
        const delay = el.dataset.index * 1000
        setTimeout(() => {
          el.style.opacity = 0
          el.style.height = '0'
          setTimeout(() => {
            done()
          }, 1000)
          // done()
        }, delay)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  li
    transition: all 1.5s

  .fade-enter-active, .fade-leave-active
    transition: all 1.5s

  .fade-enter, .fade-leave-active
    opacity: 0
</style>
