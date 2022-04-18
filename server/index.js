const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const PORT = 5000;

app.use(cors())
app.use(express.json())
// app.use('/api/favorite', require('./routes/favorite'));
// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
//     res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
//     res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT , PATCH,DELETE')
//     next();
// })
const { initDatabase } = require('./config/database-config')
const movieService = require('./services/movieService')
app.get('/test', (req, res) => {
    res.json({ text: 'HI' })
})
app.post('/hometest', async (req, res) => {
    let { thumbanilSrc, name, image } = req.body
    console.log(req.body);

    // console.log(name);
    // const favorite = new Favorite({name});
    // await favorite.save()
    await movieService.create(thumbanilSrc, name, image)
    // res.json()
    // console.log(res.json(movieService.create));
})
app.get('/movieall', async (req, res) => {
    // res.setHeader('Content-Type','application/json')
    try {
        let movies = await movieService.getAll()
        res.status(200).json(movies)
    } catch {
        res.status(404).json({ message: error.message });
    }

    // console.log(res.json(movies));
})
app.delete('/deleteMovie/:id', async (req, res) => {
    try {
        const id = req.params.id
        await movieService.deletes(id)
        console.log(req.params.id);
    } catch (error) {

    }
})
initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`The app is running on http://localhost:${PORT}/`)
    });
}).catch((err) => { console.log(err); })