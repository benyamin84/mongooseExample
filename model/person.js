const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');
let Person = mongoose.model('Person', {
    firstName:{
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        minlength: 1,
    }
});
module.exports ={
    Person
};