import Vue from 'vue'
import router from './router.js'
import store from './store'

import logPlugin from './log-plugin.js'
import myRender from './my-render.js'

import SideBar from './components/SideBar'

import './style/index.styl'

Vue.use(logPlugin)
myRender()

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  components: {
    SideBar
  },
  store,
  router
})
abdsfs
