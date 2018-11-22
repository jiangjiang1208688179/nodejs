var mongoose = require('mongoose');
var Schema = mongoose.Schema.module('Category', {
    title: String
});
module.exports = Schema;