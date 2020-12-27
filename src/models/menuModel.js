const mongoose = require('mongoose');

  var menuSchema = new mongoose.Schema({
    prop1: {type: String, required: true},
    prop2: {type: Number, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
  });

  module.exports = mongoose.model('menus', menuSchema);