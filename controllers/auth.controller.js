"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrar = exports.ingresar = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Intercambio = _interopRequireDefault(require("../models/Intercambio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registrar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, alias, nombre, estatus, intercambio, newUser, intercambioEncontrado, userGuardado, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            _req$body = req.body, email = _req$body.email, password = _req$body.password, alias = _req$body.alias, nombre = _req$body.nombre, estatus = _req$body.estatus, intercambio = _req$body.intercambio;
            _context.t0 = _User["default"];
            _context.t1 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(password);

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = alias;
            _context.t4 = nombre;
            _context.t5 = estatus;
            _context.t6 = {
              email: _context.t1,
              password: _context.t2,
              alias: _context.t3,
              nombre: _context.t4,
              estatus: _context.t5
            };
            newUser = new _context.t0(_context.t6);

            if (!intercambio) {
              _context.next = 16;
              break;
            }

            _context.next = 15;
            return _Intercambio["default"].find({
              user: {
                $in: intercambio
              }
            });

          case 15:
            intercambioEncontrado = _context.sent;

          case 16:
            _context.next = 18;
            return newUser.save();

          case 18:
            userGuardado = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: userGuardado._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24h

            });
            res.status(200).json({
              token: token
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registrar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registrar = registrar;

var ingresar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userEncontrado, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.body);
            _context2.next = 3;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 3:
            userEncontrado = _context2.sent;

            if (userEncontrado) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              token: null,
              message: "Usuario no existe"
            }));

          case 6:
            _context2.next = 8;
            return _User["default"].comparePassword(req.body.password, userEncontrado.password);

          case 8:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "password invalido"
            }));

          case 11:
            token = _jsonwebtoken["default"].sign({
              id: userEncontrado._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24h

            });
            res.json({
              token: token
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function ingresar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.ingresar = ingresar;