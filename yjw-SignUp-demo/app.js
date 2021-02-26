var express = require('express')
var router = require("./router")
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(4000, function () {
    console.log('running 4000...')
})
// module.exports = app