"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = exports.Header = exports.HeaderWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 87px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 55px;\n  width: calc(100vw - 32px);\n  background-color: #666;\n  color: #fff;\n  padding: 16px;\n  text-align: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 10;\n  img {\n    width: 55px;\n  }\n  a {\n    z-index: 10;\n  }\n  h1 {\n    font-size: 46px;\n    line-height: 87px;\n    position: absolute;\n    display: none;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: 0;\n  }\n  @media(min-width: 700px){\n    h1 {\n      display: block;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 87px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrap = _styledComponents["default"].div(_templateObject());

exports.HeaderWrap = HeaderWrap;

var Header = _styledComponents["default"].header(_templateObject2());

exports.Header = Header;

var Spacer = _styledComponents["default"].div(_templateObject3());

exports.Spacer = Spacer;