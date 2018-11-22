'use strict'
function hello(str){
    console.log('hello ',str);
}
function world(str){
    console.log(str)
}
var ll = 'ewe';
module.exports = 
{
    hello:hello,
    world:world
}
exports.ll = ll;