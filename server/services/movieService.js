const { Favorite } = require("../models/Favorite");

const create = (thumbanilSrc,name,rating) => {
    let movie = new Favorite({
        thumbanilSrc,
        name,
        rating
        });
     
    return movie.save();
};
const getAll = () => Favorite.find().lean();

const deletes = (movieID) => Favorite.findByIdAndDelete(movieID).exec();

const movieService = {   
    create,
    getAll,
    deletes};

module.exports = movieService