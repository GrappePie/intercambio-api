"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateParticipanteById = exports.getParticipantes = exports.getParticipanteById = exports.deleteParticipanteById = exports.createParticipante = void 0;

var _Participante = _interopRequireDefault(require("../models/Participante"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createParticipante = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, intercambio, nombre, email, estatus, amigoSecreto, newParticipante, participante, participanteSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, intercambio = _req$body.intercambio, nombre = _req$body.nombre, email = _req$body.email, estatus = _req$body.estatus, amigoSecreto = _req$body.amigoSecreto;
            newParticipante = new _Participante["default"]({
              intercambio: intercambio,
              nombre: nombre,
              email: email,
              estatus: estatus,
              amigoSecreto: amigoSecreto
            });
            _context.next = 4;
            return _Participante["default"].findOne({
              amigoSecreto: ''
            });

          case 4:
            participante = _context.sent;
            _context.next = 7;
            return newParticipante.save();

          case 7:
            participanteSaved = _context.sent;
            if (participante) participante.amigoSecreto = participanteSaved._id;
            res.status(201).json(participanteSaved);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createParticipante(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createParticipante = createParticipante;

var getParticipantes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var participantes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.params);
            _context2.next = 3;
            return _Participante["default"].find({
              intercambio: req.params.intercambioId
            });

          case 3:
            participantes = _context2.sent;
            res.json(participantes);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getParticipantes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getParticipantes = getParticipantes;

var getParticipanteById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var participante;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Participante["default"].findById(req.params.participanteId);

          case 2:
            participante = _context3.sent;
            res.status(200).json(participante);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getParticipanteById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getParticipanteById = getParticipanteById;

var updateParticipanteById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedParticipante;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Participante["default"].findByIdAndUpdate(req.params.participanteId, req.body, {
              "new": true
            });

          case 2:
            updatedParticipante = _context4.sent;
            res.status(200).json(updatedParticipante);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateParticipanteById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateParticipanteById = updateParticipanteById;

var deleteParticipanteById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Participante["default"].findByIdAndDelete(req.params.participanteId);

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteParticipanteById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteParticipanteById = deleteParticipanteById;