"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gatebox = exports.Gate = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ffffff;\n  color: #000;\n  padding: 16px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #8d8d8d;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100vw - 32px);\n  height: calc(100vh - 32px);\n  background-color: #ffffff;\n  color: #000;\n  padding: 16px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #8d8d8d;\n  z-index: 50;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Gate = _styledComponents["default"].div(_templateObject());

exports.Gate = Gate;

var Gatebox = _styledComponents["default"].div(_templateObject2());

exports.Gatebox = Gatebox;