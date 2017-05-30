import Vue from 'vue'
import { mapActions } from 'vuex'

import router from './router.js'
import store from './store'

import SideBar from './components/SideBar'

import './style/index.styl'

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  components: {
    SideBar
  },
  store,
  router
})
