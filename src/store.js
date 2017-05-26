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

// const store = new Vuex.Store({
//   modules: {
//     state: JSON.parse(sessionStorage.getItem('user')) || {},
//     mutations: {
//         [USER_SIGNIN](state, user) {
//             sessionStorage.setItem('user', JSON.stringify(user))
//             Object.assign(state, user)
//         },
//         [USER_SIGNOUT](state) {
//             sessionStorage.removeItem('user')
//             Object.keys(state).forEach(k => Vue.delete(state, k))
//         }
//     },
//     actions: {
//         [USER_SIGNIN]({commit}, user) {
//             commit(USER_SIGNIN, user)
//         },
//         [USER_SIGNOUT]({commit}) {
//             commit(USER_SIGNOUT)
//         }
//     }
//   }
// })
