const Task = require('../models/task');
const Kid = require('../models/kid');

module.exports = {
    index,
    create,
    addToTasks,
}

function index(req, res) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'title';
    Task.find(modelQuery).sort(sortKey).exec(function(err, tasks) {
        if (err) return next(err);
        res.render('tasks/index', { title: 'All Tasks', tasks });
    })
}

function create(req, res) {
    Task.create(req.body, function(task) {
        res.redirect('/tasks')
    })
}

function addToTasks(req, res) {
    Kid.findById(req.params.kidId, function (err, kid) {
      kid.tasks.push(req.body.taskId)
      kid.save(function(err) {
        res.redirect(`/kids/${req.params.kidId}`)
      })
    })
  }