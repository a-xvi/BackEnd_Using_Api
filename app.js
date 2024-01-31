const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//stuff that will be inside the table 
let schema = new mongoose.Schema({ // schema dont touch
    title: { type: String, required: true },
    time: { type: Number, required: true }
});

const Task = mongoose.model('this', schema); // class maybe


app.get('/task', (req, res) => {
    //.find({}) /({}) means find every thing
    Task.find({}).then((tasks) => {
        response = {
            all_tasks: tasks
        }
        res.status(200).json(response)

    }).catch((error) => {
        res.json(error).status(404)
    })

});
// creating the table
app.post('/task', (req, res) => {
    let newTask = {
        title: req.body.title,
        time: req.body.time
    };
    const {time,date} = req.body;

    let Ftask = new Task(newTask);

    Ftask.save().then(() => {
        res.json({ 'task': Ftask });

    }).catch(err => {
        res.status(500).json(err);
    })
});

// app.get('/task/:id', (req, res) => {
//     Task.find({ _id: req.params.id }).then((task) => {

//         res.status(200).json(task[0].title)
//     }).catch((error) => {
//         res.json(error).status(404)
//     })
// });

app.get('/task/:id', (req, res) => {

    Task.findById(req.params.id).then((task) => {
        if (!task) res.status(404).json({ "message": "not found" })

        res.status(200).json(task)

    }).catch((error) => {
        res.json(error).status(404)
    })
});


app.delete('/task/:id', (req, res) => {

    Task.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({ "message": "deleted" })

    }).catch((err) => {
        res.status(403).json({ "message": err })
    })
})

//updating the table
app.put('/task/:id', (req, res) => {

    box = { "title": req.body.title };
    //                      (where to edit, the edit that should be)
    Task.findByIdAndUpdate(req.params.id, box).then(() => {
        res.json({ "message": "done" })

    }).catch(err => {
        res.status(403).json({ "message": err })
    })
})






app.listen(3000);