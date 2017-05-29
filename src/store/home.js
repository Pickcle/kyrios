import * as Types from 'src/constants/Types.js'

export default {
  state: {
    count: 1
  },

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
