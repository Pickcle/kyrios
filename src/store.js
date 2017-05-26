import Vuex from 'vuex'

export default new Vuex.Store({
  modules: {
    state: 1,
    mutations: {
      [INCREASE](state) {
        state += 1
      },
      [DECREASE](state) {
        state -= 1
      }
    },
    actions: {
      [INCREASE]({commit}) {
        commit(INCREASE)
      },
      [DECREASE]({commit}) {
        commit(DECREASE)
      }
    }
  }
})
