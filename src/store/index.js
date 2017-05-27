import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from 'src/constants/Types.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state: 1,
    mutations: {
      [Types.INCREASE](state) {
        state += 1
      },
      [Types.DECREASE](state) {
        state -= 1
      }
    },
    actions: {
      [Types.INCREASE]({commit}) {
        commit(Types.INCREASE)
      },
      [Types.DECREASE]({commit}) {
        commit(Types.DECREASE)
      }
    }
  }
})
