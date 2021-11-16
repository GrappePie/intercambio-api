"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIntercambioById = exports.getIntercambios = exports.getIntercambioById = exports.deleteIntercambiosById = exports.createIntercambio = void 0;

var _Intercambio = _interopRequireDefault(require("../models/Intercambio"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createIntercambio = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, estatus, clave, montoMaximo, fechaMax, fechaIntercambio, tema, newIntercambio, user, intercambioSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, estatus = _req$body.estatus, clave = _req$body.clave, montoMaximo = _req$body.montoMaximo, fechaMax = _req$body.fechaMax, fechaIntercambio = _req$body.fechaIntercambio, tema = _req$body.tema;
            newIntercambio = new _Intercambio["default"]({
              nombre: nombre,
              estatus: estatus,
              clave: clave,
              montoMaximo: montoMaximo,
              fechaMax: fechaMax,
              fechaIntercambio: fechaIntercambio,
              tema: tema
            });
            _context.next = 4;
            return _User["default"].findById(req.userId);

          case 4:
            user = _context.sent;
            newIntercambio.user = user._id;
            _context.next = 8;
            return newIntercambio.save();

          case 8:
            intercambioSaved = _context.sent;
            user.intercambios.push(intercambioSaved._id);
            _context.next = 12;
            return user.save();

          case 12:
            res.status(201).json(intercambioSaved);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createIntercambio(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createIntercambio = createIntercambio;

var getIntercambios = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, intercambios;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findById(req.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Intercambio["default"].find({
              user: {
                $in: user._id
              }
            });

          case 5:
            intercambios = _context2.sent;
            res.json(intercambios);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getIntercambios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getIntercambios = getIntercambios;

var getIntercambioById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var intercambio;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Intercambio["default"].findById(req.params.intercambioId);

          case 2:
            intercambio = _context3.sent;
            res.status(200).json(intercambio);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getIntercambioById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getIntercambioById = getIntercambioById;

var updateIntercambioById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedIntercambio;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Intercambio["default"].findByIdAndUpdate(req.params.intercambioId, req.body, {
              "new": true
            });

          case 2:
            updatedIntercambio = _context4.sent;
            res.status(200).json(updatedIntercambio);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateIntercambioById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateIntercambioById = updateIntercambioById;

var deleteIntercambiosById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Intercambio["default"].findByIdAndDelete(req.params.intercambioId);

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteIntercambiosById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteIntercambiosById = deleteIntercambiosById;