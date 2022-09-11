"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

//realizacion de modelo en nosql 
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
}); // para eliminar la versionkey se coloca  
// en la configuracion en timestamps y despues
//versionKey 

var _default = (0, _mongoose.model)('Task', taskSchema);

exports["default"] = _default;