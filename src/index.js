import Vue from 'vue'
import router from './router.js'
import store from './store'
import logPlugin from './log-plugin.js'

import SideBar from './components/SideBar'

import './style/index.styl'

Vue.use(logPlugin)

Vue.component('my-render', {
  render (createElement) {
    // if you want to use second param, you must write like this
    const subElements = Array.apply(null, { length: this.number }).map((v, idx) => {
      return createElement('p', {domProps: {innerHTML: this.$slots.default[0].text + idx}}, this.$slots.default)
    })
    return createElement('div', {
      style: {
        color: '#f00'
      }
    }, subElements)

    // if you need not use second param, you can write like this
    // return createElement('div',
    //   Array.apply(null, { length: this.number }).map((v, idx) => {
    //     return createElement('p', {domProps: {innerHTML: this.$slots.default[0].text + idx}}, this.$slots.default)
    //   })
    // )
  },

  props: {
    level: {
      type: Number,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  }
})

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  components: {
    SideBar
  },
  store,
  router
})
