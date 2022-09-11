"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var _taskcont = require("../controlle/taskcont");

var router = (0, _express.Router)();
router.get("/", _taskcont.renderTask);
router.post('/tasks/add', _taskcont.createTask);
router.get("/task/:id/edit", _taskcont.taskEdit);
router.post('/task/:id/edit', _taskcont.updateTask);
router.get('/delete/:id', _taskcont.dele);
router.get('/done/:id', _taskcont.don);
var _default = router;
exports["default"] = _default;