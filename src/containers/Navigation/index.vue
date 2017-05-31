<template lang="jade">
  div.world-navigation
    nav-drop(:nav-list="navList", :onTabClick="onTabClick")
</template>

<script>
  import NavDrop from 'src/components/NavDrop'
  import navConfig from 'src/config/navConfig'

  export default {
    methods: {
      onTabClick (itemData) {
        console.log('xhjLog: tab click', itemData)
        if (itemData.route) {
          // 如果是子目录中的跳转
          this.$router.push({name: itemData.route, params: {id: this.uid}})
        } else if (itemData.config && itemData.config.route) {
          // 如果是导航栏中的跳转
          this.$router.push({name: itemData.config.route, params: {id: this.uid}})
        }
      }
    },

    components: {
      NavDrop
    },

    computed: {
      navList () {
        const status = true ? 'master' : 'visitor'
        const configs = navConfig[status]

        // 将isSelected注入
        return configs.map(value => {
          return {
            config: value,
            isSelected: false
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .world-navigation
    margin: 24px auto 16px
    width: 1160px
    height: 48px
    background-color: #fff
    border: 1px solid #e3e8ec
    box-shadow: 0 2px 15px 0 rgba(35,173,229,0.13)
    border-radius: 12px
</style>
