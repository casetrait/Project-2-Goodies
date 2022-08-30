var express = require('express');
var router = express.Router();
var tasksCtrl = require ('../controllers/tasks')

router.get('/', tasksCtrl.index)

module.exports = router;