const mongoose = require('mongoose');


const favoriteSchema = mongoose.Schema({
    thumbanilSrc:{
        type: String
    },
    name : {
        type: String,
        unique:true
    },
    rating:{
        type: Number
    }
 })


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }