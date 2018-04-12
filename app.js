// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...
//var userArr = []

// app.get('/getContact', function (req, res) {
//   res.json(userArr)
// })

app.get('/', function (req, res) {
  res.redirect('index.html')
})

app.get('/reservations', function (req, res) {
    res.redirect('reservations.html')
})

app.get('/tables', function (req, res) {
    res.redirect('tables.html')
})

// app.post('/postContact', function (req, res) {
//   userArr.push(req.body)
//   res.json(userArr)
//   // res.send(true)
// })

// app.get('/retrieveUsers', function (req, res) {
//   res.json(userArr)
// })

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("Server is listening")
})