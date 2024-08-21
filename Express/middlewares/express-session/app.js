const express = require('express')
const app = express()
const expressSession = require('express-session')
var flash = require('connect-flash');


app.use(expressSession({
    secret:"random stuff",
    resave:false,
    saveUninitialized:false    
}));
app.use(flash());

// app.get("/create",function(req,res,next){
//     req.session.polo=true;
//     res.send("done,session created")
// })
// app.get("/check",function(req,res,next){
//     console.log(req.session.polo)
//     res.send("check created session ")
// })
app.get('/', function (req, res) {
    req.flash("err","invalid credentials")
  res.redirect("/error")
})

app.get('/error', function (req, res) {
    let message=req.flash("err")
  res.send(message)
})

// app.get('/about', function (req, res) {
//   res.send('something sending in about page')
// })
// app.get('/', function (req, res) {
//   res.send('something went wrong in this  page')
// })

app.listen(3000)