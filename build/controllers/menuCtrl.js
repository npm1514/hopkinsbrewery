"use strict";

var MenuModel = require('./../models/menuModel');

module.exports = {
  create: function create(req, res) {
    var menu = new MenuModel(req.body);
    menu.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function read(req, res) {
    MenuModel.find(req.query).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    MenuModel.findById(req.params.id).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    MenuModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    MenuModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};