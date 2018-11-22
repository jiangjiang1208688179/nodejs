var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test_API", { useNewUrlParser: true });
mongoose.connection.on("connected",()=>{
 console.log('success')
})
mongoose.connection.on("error",()=>{
    console.log('faild')
   })
app.get('/',function(require,response){
    response.send("这里是mongoose nodejs编写API")
})
var port = '9999'
app.listen(port);
console.log('Magic happens at http://localhost:' + port);