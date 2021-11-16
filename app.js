"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _intercambios = _interopRequireDefault(require("./routes/intercambios.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var corsOptions = {// origin: "http://localhost:3000",
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.json({
    autor: 'GrappePie',
    descicion: '',
    version: '1.0.0'
  });
});
app.use('/api/intercambios', _intercambios["default"]);
app.use('/api/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;