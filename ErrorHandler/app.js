const express = require('express')
const app = express()

app.get('/', function (req, res) {
  try{
    res.send(Hello) 
  }
  catch(err){
    next(err)
  }
})
app.get ("/hello",function(req,res){
    res.send("hello")
})
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
app.listen(3000)
