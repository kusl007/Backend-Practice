// const http = require('node:http');
const http = require('http');

var server = http.createServer(function(req,res){
    res.end("started ... ")
})

server.listen(3000);

