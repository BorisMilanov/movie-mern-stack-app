const mongoose = require('mongoose');


const favoriteSchema = mongoose.Schema({
    thumbanilSrc:{
        type: String
    },
    name : {
        type: String
    },
   
 

}, { timestamps: true })


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }