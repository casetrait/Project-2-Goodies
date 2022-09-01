const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kidSchema = new Schema({
    childName: {type: String, required: true},
    rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  });

  module.exports = mongoose.model('Kid', kidSchema);