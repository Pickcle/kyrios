import * as CounterTypes from 'src/constants/CounterTypes.js'

export default {
  state: {
    count: 1
  },

  mutations: {
    [CounterTypes.INCREASE] (state) {
      state.count++
    },
    [CounterTypes.DECREASE] (state) {
      state.count--
    },
    [CounterTypes.RESET] (state) {
      state.count = 1
    }
  },

  actions: {
    [CounterTypes.INCREASE] ({ commit }) {
      commit(CounterTypes.INCREASE)
    },
    [CounterTypes.DECREASE] ({ commit }) {
      commit(CounterTypes.DECREASE)
    },
    [CounterTypes.RESET] ({ commit }) {
      commit(CounterTypes.RESET)
    }
  }
}
