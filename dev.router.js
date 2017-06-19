'use strict'

class DirectProxy {
  constructor (url = '') {
    this.target = url
    this.changeOrigin = true
  }
}

const config = {}

// 自定义匹配.
const customProxy = [
  {
    target: 'http://api.live.bilibili.com',
    paths: [
      '/sign/**',
      '/feed/**',
      '/User/**',
      '/user/**',
      '/user_ex/**',
      '/feed_svr/**'
    ]
  },
  {
    target: 'http://api.vc.bilibili.com',
    paths: [
      '/record/**',
      '/danmu/**'
    ]
  }
]

customProxy.forEach(proxy => {
  proxy.paths.forEach(path => {
    config[path] = new DirectProxy(proxy.target)
  })
})

module.exports = config
