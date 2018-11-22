const mongoose = require("mongoose");
// const DB_URL = "mongodb://127.0.0.1:27017/test";
mongoose.Promise = global.Promise;
//mongod --version >=3.1.0使用该方式连接，27017是mongodb默认的端口号，若不使用此个可能会存在着一些安全隐患
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
});
mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
});
var blogSchema = new mongoose.Schema({
    title: String
})
blogSchema.add({author: String});  //三部曲 Schema创建数据模型， Model绑定数据库表单对象， Entity是操作数据库表中数据（实例化、增删查改）
var blogModel = mongoose.model('Blog', blogSchema);
//添加加数据（方法一）
var blogEntity = new blogModel({
    title: 'ES6 新特性',
    author: 'jiang'
})
blogEntity.save(function (err, docs){
    if(err){
        console.log(err);
    }else {
        console.log('save success', docs)
    }
});
//添加数据（方法二）
// var blog1 = {
//     title: 'vue 新特性',
//     author: 'jiang'}
// blogModel.create(blog1,function(err, docs){
//     if(err){
//         console.log(err);
//     }else {
//         console.log('success ', docs);
//     }
// });
//查询
blogModel.find({title: 'vue 新特性'},{title: 1, author: -1},function(err,docs){
    if(err){
        console.log(err);
    }else {
        console.log('查询结果：',docs)
    }
});
//修改 格式：  查询字段, 更该字段, 可选择项, 回调函数
blogModel.update({title: 'vue 新特性'},{author: 'qing'}, {multi: true}, function(err, docs){
    if(err){
        console.log(err);
    }else {
        console.log('update success:', docs);
    }
});
//删除  根据条件删除
blogModel.remove({title: 'ES6 新特性'}, function(err, docs) {
    if(err){
        console.log(err);
    }else {
        console.log('删除title为"ES6 新特性"的成功', docs);
    }
})
module.exports = mongoose;