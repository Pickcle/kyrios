export default {
  install (Vue, options) {
    Vue.log = (text) => {
      console.log('log-plugin: ', text)
    }

    Vue.mixin({
      created () {
        console.log('log-plugin: created')
      }
    })
  }
}
