import Vue from 'vue'
import { mapActions } from 'vuex'

import router from './router.js'
import store from './store.js'
import Types from './Types.js'

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  store,
  router,
  methods: {
    ...mapActions: {
      increase: Types.INCREASE,
      decrease: Types.DECREASE
    }
  }
})
