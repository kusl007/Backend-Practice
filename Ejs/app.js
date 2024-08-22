const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function (req, res) {
  res.render('index')
})
app.get('/profile', function (req, res) {
  res.render('profile')
})

app.get('/form', function (req, res) {
  res.render('form')
})

app.get('/check', function (req, res) {
    console.log(req.query)
  res.send('working ')
})

app.get('/formPost', function (req, res) {
    res.render('postForm')
})

app.post('/checkPost', function (req, res) {
    console.log(req.body)      
    console.log("working")
    res.send('working')
})
app.listen(3000)