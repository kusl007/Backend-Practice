const express=require("express")
const app = express();
const socketIO=require("socket.io")
const http=require("http")

const server=http.createServer(app)
const io=socketIO(server)

app.set("view engine","ejs");

io.on("connection",function(socket){
    console.log(socket.id)

// socket.on("abcd",function(data){
//     // console.log(`hey ${data}`)
//     // io.emit  //sabai lai event pathaune
//     // socket.emit //akolai matra pathaune


//     // io.emit("defg")
//     socket.emit("defg")
// })

//     socket.on("disconnect",function(){
//         console.log("disconnected")
//     })

    socket.on("typing",function(){
        socket.broadcast.emit("type")
        // socket.broadcast.emit("type")
    })


    //making rooms 
    socket.join("room1");
})
app.get("/" ,(req,res)=>{
    res.render("index")
})

server.listen(3000)