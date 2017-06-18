<template lang="jade">
  div.nav-drop-item.t-center
    div.item-content(:class="{ line: !hasMenu }", @mouseenter.stop="onMouseEnter", @mouseleave.stop="onMouseLeave", @click="onTabClick(itemData)",)
      span.title(:class="{ 'is-selected': itemData.isSelected }") {{itemData.config.name}}
      template(v-if="hasMenu")
        i.down-arrow.ts-dot-4(:class="{ up: arrowUp }")
        transition-group.drop-menu(
          v-if="arrowUp",
          :style="{ height: contentHeight }",
          name="menu-item",
          tag="ul",
          appear=true,
          @before-enter="beforeEnter",
          @enter="enter"
        )
          //- ul.drop-menu(v-show="arrowUp")
          li(
            v-for="(item, index) in itemData.config.subTabs",
            @click="onTabClick(item)",
            :data-index="index",
            :key="index"
          ) {{ item.name }}
</template>

<script>
  const delayPeriod = 300
  export default {
    data () {
      return {
        arrowUp: false
      }
    },

    computed: {
      contentHeight () {
        return this.hasMenu ? this.itemData.config.subTabs.length * 38 + 'px' : 0
      },

      hasMenu () {
        return this.itemData.config && this.itemData.config.subTabs && this.itemData.config.subTabs.length > 0
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
      onMouseEnter () {
        this.arrowUp = true
      },

      onMouseLeave () {
        this.arrowUp = false
      },

      // it need a throttler to avoid setTimeout side-effect
      beforeEnter (el) {
        el.style.opacity = 0
        el.style.transform = 'translate(100px, 0)'
      },

      enter (el, done) {
        const index = el.dataset.index

        const delay = index * delayPeriod
        setTimeout(() => {
          el.style.opacity = 1
          el.style.transform = 'translate(0, 0)'

          setTimeout(() => {
            done()
          }, delayPeriod)
          // done()
        }, delay)
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
          padding: 10px 0
          color: #999
          font-size: 12px
          transition: all 0.8s
          height: 18px

          &:hover
            color: #23aee6

  /*.menu-item-enter-active, .menu-item-leave-active
    transition: all 1s*/

  /*.menu-item-enter, .menu-item-leave-active
    opacity: 0*/

</style>
