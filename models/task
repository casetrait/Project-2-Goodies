const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    points: {type: Number, required: true}
  });

  module.exports = mongoose.model('Task', taskSchema);
