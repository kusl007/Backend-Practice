const express=require("express")
const app = express();
const socketIO=require("socket.io")
const http=require("http")

const server=http.createServer(app)
const io=socketIO(server)

app.set("view engine","ejs");

io.on("connection",function(socket){
    console.log(socket.id);
    socket.on("disconnect",function(){
        console.log("disconnected")
    })
})
app.get("/" ,(req,res)=>{
    res.render("index")
})

server.listen(3000)