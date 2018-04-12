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
var userArr = []
var waitList = []

// app.get('/getContact', function (req, res) {
//   res.json(userArr)
// })

app.get('/', function (req, res) {
  res.redirect('index.html')
})

app.get('/reserve', function (req, res) {
    res.redirect('reservations.html')
})

app.get('/tables', function (req, res) {
    res.redirect('tables.html')
})

app.post('/api/tables', function (req, res) {
  
  if(userArr.length < 6){
    userArr.push(req.body);
    res.json(userArr);
    res.send(true);
  }else{
    waitList.push(req.body);
    res.send(false);
  }
  
  // res.send(true)
})

app.post('/api/clear', function(req, res){
  userArr = []
  res.json(userArr);
})

app.get('/api/waitlist', function (req, res) {  
  res.json(waitList);
})

app.get('/api/tables', function(req, res){
  res.json(userArr);
})



var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("Server is listening")
})