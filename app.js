const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const schema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', schema);

//insert
const firsttask = new Task({ title: 'writing insert function' });
firsttask.save().then(() => console.log('new record inserted'));