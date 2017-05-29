import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from 'src/constants/Types.js'
// import home from './home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   home
  // },
  //
  state: {
    count: 1
  },

  mutations: {
    [Types.INCREASE] (state) {
      state.count++
    },
    [Types.DECREASE] (state) {
      state.count--
    }
  },

  actions: {
    [Types.INCREASE] ({ commit }) {
      commit(Types.INCREASE)
    },
    [Types.DECREASE] ({ commit }) {
      commit(Types.DECREASE)
    }
  }
})
