// const express = require('express');
// const router = express.Router();

// const { Favorite } = require("../models/Favorite");


// router.post("/addToFavorite", (req, res) => {

//     console.log(req.body)

//     const favorite = new Favorite(req.body);

//     favorite.save((err, doc) => {
//         if (err) return res.json({ success: false, err })
//         return res.status(200).json({ success: true })
//     })

// });

// module.exports = router;