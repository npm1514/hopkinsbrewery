"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 12px;\n  margin: 8px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 16px;\n  height: 200px;\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  iframe {\n    border: 0;\n    pointer-events: none;\n    margin: auto;\n    width: 100%;\n  }\n  .mobileMap {\n    display: block;\n  }\n  .desktopMap {\n    display: none;\n  }\n  @media (min-width: 700px){\n    .mobileMap {\n      display: none;\n    }\n    .desktopMap {\n      display: block;\n    }\n    height: 450px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject());

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2());

exports.ContentWrapper = ContentWrapper;

var Button = _styledComponents["default"].button(_templateObject3());

exports.Button = Button;