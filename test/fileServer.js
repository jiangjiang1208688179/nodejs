'use strict'
var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
var root = path.resolve(process.argv[2] || '');   //process.argv[0]:node运行环境， process.argv[1]:当前文件位置
// var root1 = path.resolve(process.argv[1]);
console.log('Static root dir: ', root);
var server = http.createServer(function(request,response){
    var pathName = url.parse(request.url).pathname; //获取根路径后边那一部分
    var q = url.parse(request.url, true).query; //该处获取request的参数
    console.log("query: ", q.year, q.month);  //参数一个为year 一个为month
    var filepath = path.join(root,pathName);  //path.join()会将所有的路径用'/'拼接
    fs.stat(filepath, function(err, stats){  //此处filepath就是接口访问过来的路径，可以分开实现多个接口
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else {
            console.log('404' + request.url);
            response.writeHead(404);
            response.end("404 Not Found")
        }
    })
})
server.listen(8888)
