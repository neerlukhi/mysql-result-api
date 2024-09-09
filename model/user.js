
var mongoose  = require('mongoose')

var resultschema = new mongoose.Schema({
    name: {
        type: "string"
    },
    sub1: {
        type: Number
    },
    sub2: {
        type: Number
    },
    sub3: {
        type: Number
    },
    sub4: {
        type: Number
    },
    sub5: {
        type: Number
    },
    total : {
        type : "string"
    },
    avg : {
        type : "string"
    },
    min : {
        type : "string"
    },
    max : {
        type : "string"
    },
    result : {
        type : "string"
    },
    per :
    {
        type : Number
    }
})

module.exports = mongoose.model('result', resultschema)