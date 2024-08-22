const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(Hello) 
})
app.get ("/hello",function(req,res){
    res.send("hello")
})
app.use((err,req,res,next)=>{
    res.status(500).send("Internal Server Error")
})
app.listen(3000)
