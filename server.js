var path = require('path')
var express = require('express')

var app = express()

app.use(express.static('static'))

var port = 8080

module.exports = app.listen(port)
