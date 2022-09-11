"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _databases = require("./databases.js");

(0, _databases.connecToDB)();

_app["default"].listen(process.env.PORT || 3000);

console.log('serve on port', 3000);