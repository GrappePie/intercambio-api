"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var participanteSchema = new _mongoose.Schema({
  intercambio: String,
  nombre: String,
  email: String,
  estatus: Boolean,
  amigoSecreto: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Participante', participanteSchema);

exports["default"] = _default;