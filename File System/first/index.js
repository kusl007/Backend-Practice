const fs = require('node:fs');



//write files
// fs.writeFile("abcd.txt","hey hello",function(err){
    
//     if (err) console.log(err);
//         else console.log("file created sucessfully")
// } )

// //read files

// fs.writeFile("abcd.txt","hey hello",function(err){
    
//     if (err) console.log(err);
//         else console.log("file created sucessfully")
// } )

// //update file

// fs.readFile("abcd.txt","utf8", function(err,data){
    
//     if (err) console.log(err);
//         else console.log("file read sucessfully",data)
// })

// //append file

// fs.appendFile("abcd.txt"," appended file", function(err){
    
//     if (err) console.log(err);
//     else console.log("file appended sucessfully")
// })

// //rename file
// fs.rename("abcd.txt","abc.txt",  function(err){
    
//     if (err) console.log(err);
//     else console.log("file renamed sucessfully")
// })

// //delete file
// fs.unlink("abc.txt",function(err){
//     if (err) console.log(err)
//         else console.log("file deleted sucessfully")
// })

//folder creation

// fs.mkdir ("folder",function(err){
//     if (err) console.log(err)
//         else console.log("folder created")
// })

// //reading folder
// fs.readdir("folder",{withFileTypes:true}, function(err,files){
//     if (err) console.log(err)
//         else console.log("folder read sucessfully",files)} )

// //deleting folder
// fs.rm("folder",{recursive:true},function(err){
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("folder deleted sucessfully")
//     }
// })

//synchronous api

//they are blocking nature  means jaba samma yo complete hudaina taba samma aru functions chaldaina 
fs.writeFileSync("h.txt","whatever");
console.log("created")

let data=fs.readFileSync("h.txt","utf8");
console.log(data)

