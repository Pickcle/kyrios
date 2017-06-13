<template lang="jade">
  div
    p string----{{string}}
    p(v-for="value in array") {{value}}
    p(v-for="value in Object.keys(obj)") {{value}}
</template>

<script>
  export default {
    props: {
      string: {
        type: String
      },

      array: {
        type: Array
      },

      obj: {
        type: Object
      }
    },

    propsData: {
      string: 'default string',
      array: ['0', '1', '2'],
      // obj: {{label: 'obj0'}, {label: 'obj1'}, {label: 'obj2'}}
      obj: {label: '1', label1: '1', label2: '1'}
    }
  }
</script>

<style lang="stylus" scoped>
</style>
