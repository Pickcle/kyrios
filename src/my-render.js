import Vue from 'vue'

export default function () {
  Vue.component('my-render', {
    functional: true,

    render (createElement, context) {
      // if you want to use second param, you must write like this
      const subElements = Array.apply(null, { length: context.props.number }).map((v, idx) => {
        return createElement('h' + context.props.level, context.children)
      })
      return createElement('div', {
        style: {
          color: '#f00'
        }
      }, subElements)

      // if you need not use second param, you can write like this
      // return createElement('div',
      //   Array.apply(null, { length: context.props.number }).map((v, idx) => {
      //     return createElement('h' + context.props.level, {domProps: {innerHTML: context.slots().header[0].data.slot + idx}}, context.children)
      //     // return createElement('h' + context.props.level, context.children)
      //   })
      // )
    },

    props: {
      level: {
        type: Number,
        required: true
      },
      number: {
        type: Number,
        required: true
      }
    }
  })
}
