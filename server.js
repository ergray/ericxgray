var express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send("hello world")
})

app.get('/webhook', function(req, res){
    console.log("got webhook")
    // res.sendStatus(200)
    res.send('ok')
})

app.post('/webhook', function(req, res){
    console.log("post webhook")
    // res.sendStatus(200)
    res.send('ok')
})


app.listen(3000)

