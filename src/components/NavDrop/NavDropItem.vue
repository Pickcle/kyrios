<template lang="jade">
  div.nav-drop-item.t-center
    div.item-content(:class="{ line: !hasMenu }", @mouseenter.stop="onMouseEnter", @mouseleave.stop="onMouseLeave", @click="onTabClick(itemData)",)
      span.title(:class="{ 'is-selected': itemData.isSelected }") {{itemData.config.name}}
      template(v-if="hasMenu")
        i.down-arrow.ts-dot-4(:class="{ up: arrowUp }")
        ul.drop-menu(v-show="arrowUp")
          li(
            v-for="(item, index) in itemData.config.subTabs",
            @click="onTabClick(item)",
            :key="index"
          ) {{ item.name }}
</template>

<script>
  export default {
    data () {
      return {
        arrowUp: false
      }
    },

    props: {
      itemData: {
        type: Object,
        default: {}
      },

      onTabClick: {
        type: Function
      }
    },

    methods: {
      // onTitleClick () {
      //   if (this.itemData.config.route) {
      //     this.$router.push({name: this.itemData.config.route, params: {id: this.itemData.uid}})
      //   }
      // },

      onMouseEnter () {
        this.arrowUp = true
      },

      onMouseLeave () {
        this.arrowUp = false
      }
    },

    computed: {
      hasMenu () {
        return this.itemData.config && this.itemData.config.subTabs && this.itemData.config.subTabs.length > 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav-drop-item
    display: inline-block
    font-size: 14px
    padding: 0 45px
    z-index: 99

    .item-content
      position: relative
      width: 70px
      padding: 12px 0
      cursor: pointer

      &.line
        &:after
          display: block
          position: relative
          top: 15px
          margin: 0 auto
          content: ""
          width: 0px
          height: 2px
          /*bottom: 1px*/
          background-color: #23ADE5
          transition: width 0.2s

        &.is-selected
          color: #23aee6
          &:after
            width: 100%

        &:hover
          .title
            color: #23aee6

          &:after
            width: 100%

      .title
        display: inline-block
        color: #666

        &.is-selected
          color: #23aee6

      .down-arrow
        display: inline-block
        position: absolute
        width: 12px
        height: 8px
        top: 18px
        right: 5px
        background-image: url('../../assets/images/ic.arrow-down.svg')
        background-repeat: no-repeat
        transform: scale(.7)

        &.up
          transform: scale(.7) rotate(180deg)

      .drop-menu
        position: relative
        width: 104px
        top: 22px
        left: -17px
        border: 1px solid #e9eaec
        box-shadow: 0 6px 12px 0 rgba(106,115,133,0.22)
        border-radius: 12px
        background-color: #fff

        &:after
          display: block
          content: ''
          width: 4px
          height: 4px
          position: absolute
          border-top: 1px solid #e9eaec
          border-left: 1px solid #e9eaec
          background-color: #fff
          top: -4px
          left: 50%
          margin-left: -2px
          transform: rotate(45deg)

        li
          text-align: center
          margin: 12px 0
          color: #999
          font-size: 12px

          &:hover
            color: #23aee6
</style>
