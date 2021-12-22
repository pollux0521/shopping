const express   = require('express');

const app       = express();
const Port      = 3000;

const main      = require('./route/main.js');
app.use('/', main);


app.listen(Port, ()=>{
    console.log(__dirname);
    console.log("start server");
});