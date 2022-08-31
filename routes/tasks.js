var express = require('express');
var router = express.Router();
var tasksCtrl = require ('../controllers/tasks')

router.get('/', tasksCtrl.index)
router.post('/', tasksCtrl.create)

router.post('/kids/:kidId/tasks', tasksCtrl.addToTasks)

module.exports = router;