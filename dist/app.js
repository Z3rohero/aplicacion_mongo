"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = require("express-handlebars");

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])(); // pa configura  el motor de la plantilla

app.set("views", _path["default"].join(__dirname, "views")); //Motor de plantillla engine

var exphbs = (0, _expressHandlebars.create)({
  extname: '.hbs',
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: 'main',
  //Opcional si no le voy cambiar el nombre partials
  partialDir: _path["default"].join(app.get("views"), "partials")
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs"); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extend: false
})); // Routes

app.use(_routes["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;