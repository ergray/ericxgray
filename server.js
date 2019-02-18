var express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send("hello world")
})

app.get('/webhook', function(req, res){
    console.log("got webhook")
    console.log(req.body)
    // res.sendStatus(200)
    res.send(req.body)
})

app.post('/webhook', function(req, res){
    console.log("post webhook")
    console.log(req.body)
    res.sendStatus(200)
    // res.send('ok')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})

