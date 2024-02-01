const Task = require('../models/task');


//normal find
const get = (req, res) => {
    //.find({}) /({}) means find every thing
    Task.find({}).then((tasks) => {
        response = {
            all_tasks: tasks
        }
        res.status(200).json(response)

    }).catch((error) => {
        res.json(error).status(404)
    })
}

// creating the table
const post = (req, res) => {
    let newTask = {
        title: req.body.title,
        time: req.body.time
    };
    const { time, date } = req.body;

    let Ftask = new Task(newTask);

    Ftask.save().then(() => {
        res.json({ 'task': Ftask });

    }).catch(err => {
        res.status(500).json(err);
    })
};

//by id 
getById = (req, res) => {

    Task.findById(req.params.id).then((task) => {
        if (!task) res.status(404).json({ "message": "not found" })

        res.status(200).json(task)

    }).catch((error) => {
        res.json(error).status(404)
    })
};

//just delete 
const deleteby = (req, res) => {

    Task.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({ "message": "deleted" })

    }).catch((err) => {
        res.status(403).json({ "message": err })
    })
};


//updating the table
put=(req, res) => {

    box = { "title": req.body.title };
    //                      (where to edit, the edit that should be)
    Task.findByIdAndUpdate(req.params.id, box).then(() => {
        res.json({ "message": "done" })

    }).catch(err => {
        res.status(403).json({ "message": err })
    })
};


model.exports = { get, post, deleteby, put, getById};

