"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterBox = exports.MainContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 900px;\n  color: #fff;\n  img {\n    width: 50px;\n    margin: 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  text-align: center;\n  background-image: url(\"", "\");\n  background-size: cover;\n  background-position: center;\n  min-height: 600px;\n  display: flex;\n  flex-direction:column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.bg;
});

exports.MainContent = MainContent;

var CenterBox = _styledComponents["default"].div(_templateObject2());

exports.CenterBox = CenterBox;