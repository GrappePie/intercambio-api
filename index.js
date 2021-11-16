"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(3000);

console.log('Servidor en puerto', 3000);