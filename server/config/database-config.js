const mongoose = require('mongoose');


exports.initDatabase = function () {
    return mongoose.connect('mongodb://localhost:27017/real-estate');
}