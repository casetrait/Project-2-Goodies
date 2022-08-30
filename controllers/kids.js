const Kid = require('../models/kid')

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
    Kid.findById(req.params.id, function(err, kid) {
        res.render('kids/show', { title: kid.childName+"'s Page", kid})
        console.log(kid.rewards.title)
    })
}

function create(req, res) {
    Kid.create(req.body, function(kid) {
        console.log(kid)
        res.redirect('/kids')
    })
}
