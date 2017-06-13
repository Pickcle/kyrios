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
          console.log('xhjLog: args', ...arguments)
        },

        inserted (el, binding, vnode, oldVnode) {
          console.count('xhjLog: inserted')
          console.log('xhjLog: args', ...arguments)
          if (binding.value) {
            el.textContent = binding.value
          } else {
            el.focus()
          }
        },

        update () {
          console.count('xhjLog: update')
          console.log('xhjLog: args', ...arguments)
        },

        componentUpdated () {
          console.count('xhjLog: updated')
          console.log('xhjLog: args', ...arguments)
        },

        unbind () {
          console.count('xhjLog: unbind')
          console.log('xhjLog: args', ...arguments)
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
