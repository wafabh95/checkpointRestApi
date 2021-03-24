const mongoose = require('mongoose');
let user = new mongoose.Schema({
    name: {
      type: String,
    },
    age: {
      type:Number,
      min: 2,
    },
  })
  module.exports = mongoose.model('user', user)