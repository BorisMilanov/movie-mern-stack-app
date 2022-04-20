const express = require('express');
const router = express.Router();
const movieService = require('./services/movieService');

router.post('/addToFavorite', async (req, res) => {
    try {
        let { thumbanilSrc, name, rating} = req.body;
        await movieService.create(thumbanilSrc, name, rating);
    } catch (error) {
        res.status(401).json(error);
    }
})

router.get('/showAllMovies', async (req, res) => {
    try {
        let movies = await movieService.getAll()
        res.status(200).json(movies)
    } catch {
        res.status(404).json({ message: error.message });
    }
})

router.delete('/deleteMovie/:id', async (req, res) => {
    try {
        const id = req.params.id
        await movieService.deletes(id)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router;