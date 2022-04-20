const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes');
const PORT = 5000;

app.use(cors())
app.use(express.json())

const { initDatabase } = require('./config/database-config')

app.use(routes)

initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`The app is running on http://localhost:${PORT}/`)
    });
}).catch((err) => { console.log(err); })