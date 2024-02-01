const mongoose = require('mongoose');

//stuff that will be inside the table 
let schema = new mongoose.Schema({ // schema dont touch
    title: { type: String, required: true },
    time: { type: Number, required: true }
});

const Task = mongoose.model('this', schema); // class maybe

model.exports = Task;