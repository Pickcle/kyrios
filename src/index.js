import Vue from 'vue'
import { mapActions } from 'vuex'

import router from './router.js'
import store from './store'
import * as Types from './constants/Types.js'

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  store,
  router
})
