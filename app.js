var express = require('express')
var app = express()

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().post

    console.log("Application Run At http://%s:%s", host, port )
})