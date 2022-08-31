var express = require('express');
var router = express.Router();
var rewardsCtrl = require ('../controllers/rewards')

router.get('/', rewardsCtrl.index)
router.post('/', rewardsCtrl.create)
router.put('/kids/:kidId/rewards', rewardsCtrl.updateReward)

module.exports = router;