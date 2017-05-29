import Vue from 'vue'
import { mapActions } from 'vuex'

import router from './router.js'
import store from './store'

/* eslint no-new: 0 */
new Vue({ store, router }).$mount('#app')
