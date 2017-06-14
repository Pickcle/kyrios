<template lang="jade">
  div
    button(@click="onAddClick") array-add
    button(@click="onDeleteClick") array-delete
    button(@click="onObjAddClick") obj-add
    button(@click="onObjDeleteClick") obj-delete
    button(@click="objChange") obj-change
    p(v-for="(item, index) in dataList") {{item.label}}
    p(v-for="(item, index) in getObjDataList()") {{item}}
</template>

<script>
  export default {
    data () {
      return {
        dataList: [
          {
            label: 'initial array content'
          }
        ],
        obj: {
          0: {
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
        this.obj[0].label = this.obj[0].label + '0'
        // const randomKey = this.genRandomText()
        // const cloneObj = {...this.obj}
        // cloneObj[Object.keys(this.obj)[0]][randomKey] = randomKey
        // this.obj = Object.assign({}, this.obj, cloneObj)
        // console.log('xhjLog: objChange', this.obj)
      },

      getObjDataList () {
        return Object.values(this.obj)
      },

      genRandomText () {
        return '' + Math.ceil(Math.random() * 100000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
