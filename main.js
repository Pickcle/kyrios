import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
