"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb+srv://Diego:qweasdzxc@clusterpie.8adfj.mongodb.net/intercambios?retryWrites=true&w=majority").then(function (db) {
  return console.log('Conectado a la base de datos');
})["catch"](function (err) {
  return console.log(err);
});