"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var intercambioSchema = new _mongoose.Schema({
  user: String,
  nombre: String,
  estatus: Number,
  montoMaximo: Number,
  fechaMax: String,
  fechaIntercambio: String,
  tema: Number
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Intercambio', intercambioSchema);

exports["default"] = _default;