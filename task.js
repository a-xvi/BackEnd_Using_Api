const express = require("express");
const app = express();

const mongoose = require("mongoose");
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/todo').then(()=>{
    app.listen(PORT, console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err));

app.use(express.json());

const User_router = require('./router/task.js');//runs the program

app.use('/users',User_router);