const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes');
const PORT = 5000;

app.use(cors())
app.use(express.json())
// app.use('/api/favorite', require('./routes/favorite'));

const { initDatabase } = require('./config/database-config')
const movieService = require('./services/movieService')

app.use(routes)

initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`The app is running on http://localhost:${PORT}/`)
    });
}).catch((err) => { console.log(err); })