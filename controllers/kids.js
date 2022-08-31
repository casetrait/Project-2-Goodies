const Kid = require('../models/kid')
const Reward = require('../models/reward')
const Task = require('../models/task')

module.exports = {
    index,
    show,
    create,
}

function index(req, res) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'childName';
    Kid.find(modelQuery).sort(sortKey).exec(function(err, kids) {
        if (err) return next(err);
        res.render('kids/index', { title: 'All Kids', kids });
    })
  }

function show(req, res) {
    Kid.findById(req.params.id).populate('tasks').exec(function(err, kid) {
        Task.find({},function(err, tasks) {
            Reward.find({},function(err, rewards) {
                res.render('kids/show', { title: kid.childName+"'s Page", kid, rewards, tasks})
            })
        })
    })
}

function create(req, res) {
    Kid.create(req.body, function(kid) {
        res.redirect('/kids')
    })
}
