const Task = require('../models/task');

module.exports = {
    index,
    // create,
}

function index(req, res) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'title';
    Task.find(modelQuery).sort(sortKey).exec(function(err, tasks) {
        if (err) return next(err);
        res.render('tasks/index', { title: 'All Tasks', tasks });
    })
  }