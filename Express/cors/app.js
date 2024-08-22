const express = require('express')
const app = express()
const cors = require('cors')
var cookieParser = require('cookie-parser')
app.use(cookieParser())

// app.use(cors()) //it share all data

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/shareable',cors(), function (req, res) { // this shares limited data from that path only
  res.send('shareable data')
})

app.get('/banned', function (req, res,next) {
    res.cookie('banned',"true")
    res.cookie('name',"kushal")
    res.send("banned")
  })
app.get('/check', function (req, res,next) {
   console.log(req.cookies.banned)
   console.log(req.cookies.name)
   res.send("checking")
  })

  //dynamic routing

  app.get("/profile/:name",
    function (req, res,next) {
   
      res.send("hello " + req.params.name)
     }
  )

  app.get("/profile/:name/:age",
    function (req, res,next) {
   
      res.send("hello " + req.params.name+" your age is "+req.params.age)
     }
  )
app.listen(3000)