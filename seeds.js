require('./config/database');// connect this script to the database
const Kid = require('./models/kid');
const Reward = require('./models/reward');
const Task = require('./models/task');
const data = require('./data');

const p1 = Kid.deleteMany({})
const p2 = Reward.deleteMany({})
const p3 = Task.deleteMany({})

Promise.all([p1,p2,p3])
.then (function(results){
    console.log(results)
    return Kid.create(data.kids)
})
.then (function(kids){
    console.log(kids)
    return Reward.create(data.rewards)
})
.then (function(rewards){
    console.log(rewards)
    return Task.create(data.tasks)
})
.then (function(tasks){
    console.log(tasks)
})
.then (function() {
    process.exit()
})
