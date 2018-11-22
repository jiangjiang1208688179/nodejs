var http = require("http");
var server = http.createServer(function (request,response){
    var json = {name:'zhang', age: '18'};
    json = JSON.stringify(json);
    response.setHeader('Access-Control-Allow-Origin', '*'); //解决跨域问题，允许所有
    console.log(request.url,'  request.Method:', request.method);
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(json);
});
server.listen(8585); //监听的端口
console.log('Server running at http://127.0.0.1:8585/');
var hello = require('./hello'); //模块引入
hello.hello('jime');
hello.world('world');