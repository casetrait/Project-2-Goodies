const Reward = require('../models/reward');

module.exports = {
    index,
    // create,
}

function index(req, res) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'title';
        Reward.find(modelQuery).sort(sortKey).exec(function(err, rewards) {
        if (err) return next(err);
        res.render('rewards/index', { title: 'All Rewards', rewards });
        console.log(rewards)
    })
  }