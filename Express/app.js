const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
  res.send('something sending in about page')
})
app.get('/', function (req, res) {
  res.send('something went wrong in this  page')
})

app.listen(3000)