var express = require('express');
var router = express.Router();
var kidsCtrl = require ('../controllers/kids')

router.get('/', kidsCtrl.index)
router.get('/:id', kidsCtrl.show)
router.post('/' , kidsCtrl.create)

module.exports = router;
