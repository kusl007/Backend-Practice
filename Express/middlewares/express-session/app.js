const express = require('express')
const app = express()
const expressSession = require('express-session')

app.use(expressSession({
    secret:"random stuff",
    resave:false,
    saveUninitialized:false    
}));

app.get("/create",function(req,res,next){
    req.session.polo=true;
    res.send("done,session created")
})
app.get("/check",function(req,res,next){
    console.log(req.session.polo)
    res.send("check created session ")
})
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