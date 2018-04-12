// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...
var userArr = []
var waitList = []

app.get('/', function (req, res) {
  res.redirect('./views/index.html')
})

app.get('/reserve', function (req, res) {
    res.redirect('./views/reservations.html')
})

app.get('/tables', function (req, res) {
    res.redirect('./views/index.html')
})

app.post('/api/tables', function (req, res) {  
  if(userArr.length < 2){
    userArr.push(req.body);
    //res.json(userArr);
    res.send(true);
  }else{
    waitList.push(req.body);
    res.send(false);
  }  
})

app.post('/api/clear', function(req, res){
  userArr = []
  waitList = []
  // res.json(userArr);
  // res.json(waitList);
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