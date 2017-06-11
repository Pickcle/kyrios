var express = require('express')

var server = express()

server.get('/start', function(req, res) {
  res.send("start")
})

module.exports = server.listen(6060)
