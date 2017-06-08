var hotMiddlewareClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotMiddlewareClient.subscribe((e) => {
  if (e.type === 'jade') {
    console.log(e)
    window.location.reload()
  }
})
