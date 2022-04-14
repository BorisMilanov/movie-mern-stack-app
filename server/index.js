const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const PORT= 5000;
app.use('/api/favorite', require('./routes/favorite'));
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT , PATCH,DELETE')
    next();
})
const { initDatabase } = require('./config/database-config')

initDatabase().then(()=>{app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}/`)
});}).catch((err)=>{console.log(err);})