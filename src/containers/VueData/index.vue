<template lang="jade">
  div
    button(@click="onAddClick") array-add
    button(@click="onDeleteClick") array-delete
    button(@click="randomSort") array-random-sort
    button(@click="onObjAddClick") obj-add
    button(@click="onObjDeleteClick") obj-delete
    button(@click="objChange") obj-change
    //- p(v-for="item in name") {{item}}
    //- p(v-for="item in age") {{item}}
    transition-group(name="flip-list", tag="p", mode="out-in")
      p(v-for="(item, index) in dataList", :key="item") {{item.label}}
    p(v-for="(value, key, index) in obj") {{value}}{{',key:' + key}}{{',index:' + index}}
</template>

<script>
  export default {
    data () {
      return {
        name: 'Pickcle',
        age: 3,
        dataList: [
          {
            label: 'initial array content'
          }
        ],
        obj: {
          10000: {
            label: 'initial obj content'
          }
        }
      }
    },

    watch: {
      obj: {
        handler () {
          console.count('xhjLog: watch obj')
        },
        deep: true
      }
    },

    activated () {
      console.count('xhjLog: activated')
    },

    deactivated () {
      console.count('xhjLog: deactivated')
    },

    destroyed () {
      console.count('xhjLog: destroyed')
    },

    methods: {
      onAddClick () {
        this.dataList.push({
          label: this.genRandomText()
        })
      },

      onDeleteClick () {
        this.dataList.pop()
      },

      randomSort () {
        this.dataList.sort((a, b) => Math.random() > 0.5)
      },

      onObjAddClick () {
        const randomKey = this.genRandomText()
        // component will update by this way
        this.$set(this.obj, randomKey, { label: randomKey })

        // also you can write this to update
        // const newRandomObj = {}
        // newRandomObj[randomKey] = { label: randomKey }
        // this.obj = Object.assign({}, this.obj, newRandomObj)

        // component will not update by this way
        // this.obj[randomKey] = {
        //   label: randomKey
        // }
      },

      onObjDeleteClick () {
        const deleteKey = Object.keys(this.obj)[Object.keys(this.obj).length - 1]
        // component will update
        this.$delete(this.obj, deleteKey)

        // component will update too
        // const cloneObj = {...this.obj}
        // delete cloneObj[deleteKey]
        // this.obj = cloneObj

        // component will not update
        // delete this.obj[deleteKey]
      },

      objChange () {
        // component will update, watch is fired if deep is true
        // this.obj[0].label = this.obj[0].label + '0'

        // component will update
        // const randomKey = this.genRandomText()
        // const cloneObj = {...this.obj}
        // cloneObj[Object.keys(this.obj)[0]][randomKey] = randomKey
        // this.obj = Object.assign({}, this.obj, cloneObj)
        // console.log('xhjLog: objChange', this.obj)

        // component will not update unless use $forceUpdate
        this.obj[1] = {label: '1'}
        this.$forceUpdate()
      },

      genRandomText () {
        return '' + Math.ceil(Math.random() * 100000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .flip-list-enter-active, .flip-list-leave-active
    transition: all 1.5s

  .flip-list-enter, .flip-list-leave-active
    opacity: 0

  .flip-list-leave-active
    position: absolute

  .flip-list-move
    transition: transform 1.5s
</style>
