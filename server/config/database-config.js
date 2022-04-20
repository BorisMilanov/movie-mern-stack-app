const mongoose = require('mongoose');


exports.initDatabase = function () {
    return mongoose.connect('mongodb+srv://borisMilnov:ecmascript96@cluster0.mong8.mongodb.net/test');
}