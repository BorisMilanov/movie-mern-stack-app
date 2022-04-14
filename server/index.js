const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const PORT= 5000;


const { initDatabase } = require('./config/database-config')

initDatabase().then(()=>{app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}/`)
});}).catch((err)=>{console.log(err);})