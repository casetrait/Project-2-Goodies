const Kid = require('../models/kid')

module.exports = {
    index,
}

function index(req, res) {
    Kid.find({}, function(err, kids) {
      res.render('kids/index', { title: 'All Kids', kids });
    })
  }