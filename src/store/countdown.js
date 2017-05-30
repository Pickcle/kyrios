import * as CountdownTypes from 'src/constants/CountdownTypes.js'

export default {
  state: {
    count: 10
  },

  actions: {
    [CountdownTypes.RESET] ({ commit }) {
      commit(CountdownTypes.RESET)
    },

    [CountdownTypes.COUNTDOWN] ({ commit }) {
      commit(CountdownTypes.COUNTDOWN)
    }
  },

  mutations: {
    [CountdownTypes.RESET] (state) {
      state.count = 10
    },

    [CountdownTypes.COUNTDOWN] (state) {
      state.count--
    }
  }
}
