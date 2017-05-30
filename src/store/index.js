import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter.js'
import countdown from './countdown.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    countdown
  }
})
