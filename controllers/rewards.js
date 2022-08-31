const Reward = require('../models/reward');
const Kid = require('../models/kid');

module.exports = {
    index,
    create,
    updateReward,
}

function index(req, res) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'points';
        Reward.find(modelQuery).sort(sortKey).exec(function(err, rewards) {
        if (err) return next(err);
        res.render('rewards/index', { title: 'All Rewards', rewards });
    })
}

function create(req, res) {
    Reward.create(req.body, function(reward) {
        res.redirect('/rewards')
    })
}

function updateReward(req, res) {
    Kid.findById(req.params.kidId, function (err, kid) {
      kid.rewards = []
      kid.rewards.push(req.body.rewardId)
      kid.save(function(err) {
        res.redirect(`/kids/${req.params.kidId}`)
      })
    })
}
