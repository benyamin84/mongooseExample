const Mongoose =  require('mongoose');
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/personDB');
module.exports ={
    Mongoose
};
