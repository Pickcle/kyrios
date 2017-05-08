import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const store = new Vuex.Store({
  modules: {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
  }
})

const router = new VueRouter({
  [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/home', //个人主页
          component: resolve => require(['../pages/home/'], resolve)
        }
      ]
    }
  ]
})

new Vue({ store, router }).$mount('#app')
