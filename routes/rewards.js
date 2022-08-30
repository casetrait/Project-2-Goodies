var express = require('express');
var router = express.Router();
var rewardsCtrl = require ('../controllers/rewards')

router.get('/', rewardsCtrl.index)
router.post('/', rewardsCtrl.create)

module.exports = router;