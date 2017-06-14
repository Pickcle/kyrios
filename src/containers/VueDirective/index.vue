<template lang="jade">
  div
    input(v-focus="")
    p(v-focus="genRandomNum()")
</template>

<script>
  export default {
    methods: {
      genRandomNum () {
        return Math.random()
      }
    },

    directives: {
      focus: {
        bind () {
          console.count('xhjLog: bind')
        },

        inserted (el, binding, vnode, oldVnode) {
          console.count('xhjLog: inserted')
          if (binding.value) {
            el.textContent = binding.value
          } else {
            el.focus()
          }
        },

        update () {
          console.count('xhjLog: update')
        },

        componentUpdated () {
          console.count('xhjLog: updated')
        },

        unbind () {
          console.count('xhjLog: unbind')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  input
    width: 300px
    height: 30px
    border: 1px solid #000
</style>
