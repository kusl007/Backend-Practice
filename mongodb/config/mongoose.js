const mongoose = require('mongoose');
const debuglog=require('debug')('development:mongooseconfig')

mongoose.connect('mongodb://127.0.0.1/testingdb');


const db=mongoose.connection;
db.on("error",function(err){
    debiglog(err)
})