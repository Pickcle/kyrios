export default {
  install: function (Vue, options) {
    Vue.log = function (text) {
      console.log('log-plugin: ', text)
    }

    Vue.mixin({
      created: function () {
        console.log('log-plugin: created')
      }
    })
  }
}
