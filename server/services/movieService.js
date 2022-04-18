const { Favorite } = require("../models/Favorite");
const create = (thumbanilSrc,name,image) => {
    let movie = new Favorite({
        thumbanilSrc,
        name,
        image,
        });
     
    return movie.save();
};
const getAll = () => Favorite.find().lean();
const deletes = (movieID) => Favorite.findByIdAndDelete(movieID).exec();
const movieService = {
   
    create,
    getAll,
    deletes
};

module.exports = movieService