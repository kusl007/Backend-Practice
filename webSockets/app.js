const express=require("express")
const app = express();
const socketIO=require("socket.io")
const http=require("http")

const server=http.createServer(app)
const io=socketIO(server)
io.on("connection",function(){
    console.log("connected")
})

app.listen(3000)