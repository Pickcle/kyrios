import Vue from 'vue'
import VueRouter from 'vue-router'

import sidebarConfig from './config/sidebarConfig.js'
import Home from 'src/containers/Home'

Vue.use(VueRouter)

const vueRouter = new VueRouter()

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: Home
  }
]

// 将首字母大写，route转换成compnentName
const getComponentName = name => name.replace(/\b\w/g, word => word.toUpperCase()).split('-').join('')

let componentName

sidebarConfig.forEach(value => {
  componentName = getComponentName(value.route)
  const pathParams = value.pathParams || ''
  const route = {
    path: `/${value.route}${pathParams}`,
    component: require(`src/containers/${componentName}/index.vue`)
  }
  routes.push(route)
})

vueRouter.addRoutes(routes)

export default vueRouter
