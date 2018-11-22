var fs = require('fs');
//异步读取文件
fs.readFile('./fs/hello.txt','utf-8', function (err, data){    //第一个参数：文件路径，是基于当前运行环境的路径，而非当前js文件所在的相对路径
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
//异步写文件,直接写入txt文件中,新增内容会覆盖原来的内容
var data = '今天是2018.11.21'
fs.writeFile('./fs/hello.txt', data, function(err, stat){ //stat返回文件或目录的详细信息（stat.isFile()  stat.isDirectory() stat.size  stat.birthtime stat.mtime）
    if(err){
        console.log(err);
    } else{
        console.log('write success! ');
        console.log(stat.birthtime);
    }
})