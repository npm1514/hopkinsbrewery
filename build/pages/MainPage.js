"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _main = require("../styled-components/pages/main");

var _global = require("../styled-components/global");

var _menu = _interopRequireDefault(require("../data/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectYes", function () {
      document.cookie = "21gate=true";
      document.body.style.position = "initial";
      document.body.style.overflow = "initial";

      _this.setState({
        show21Gate: false
      });
    });

    _this.state = {
      show21Gate: false
    };
    return _this;
  }

  _createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.cookie.indexOf("21gate=true") == -1) {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        this.setState({
          show21Gate: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), this.state.show21Gate && /*#__PURE__*/_react["default"].createElement(_components.Gate, {
        selectYes: this.selectYes
      }), /*#__PURE__*/_react["default"].createElement(_main.MainContent, {
        bg: "/images/brick-2-1.jpg"
      }, /*#__PURE__*/_react["default"].createElement(_main.CenterBox, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Beer Menu"), /*#__PURE__*/_react["default"].createElement("hr", null), _menu["default"].beerMenu.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("h3", {
          key: i
        }, a.name);
      }))), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement("iframe", {
        className: "mobileMap",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.680271409915!2d-111.86313898413829!3d40.72505447933057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528bb7389501c3%3A0x2ed7798a32a58a0b!2sHopkins+Brewing+Company!5e0!3m2!1sen!2sus!4v1546385279227",
        width: "320",
        height: "200",
        frameBorder: "0",
        allowFullScreen: ""
      }), /*#__PURE__*/_react["default"].createElement("iframe", {
        className: "desktopMap",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.680271409915!2d-111.86313898413829!3d40.72505447933057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528bb7389501c3%3A0x2ed7798a32a58a0b!2sHopkins+Brewing+Company!5e0!3m2!1sen!2sus!4v1546385279227",
        width: "600",
        height: "450",
        frameBorder: "0",
        allowFullScreen: ""
      })), /*#__PURE__*/_react["default"].createElement(_main.MainContent, {
        bg: "/images/hopkins_sugarhouse.jpeg"
      }, /*#__PURE__*/_react["default"].createElement(_main.CenterBox, null, /*#__PURE__*/_react["default"].createElement("p", null, "Sunday - Wednesday: 11am - 11pm"), /*#__PURE__*/_react["default"].createElement("p", null, "Thursday - Saturday: 11am - 12am"), /*#__PURE__*/_react["default"].createElement("p", null, "Phone: 385-528-3275"), /*#__PURE__*/_react["default"].createElement("p", null, "1048 E 2100 S"), /*#__PURE__*/_react["default"].createElement("p", null, "Salt Lake City, UT 84106"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.facebook.com/Hopkins-Brewing-Co-647095499010479",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/iconfinder_facebook_373409.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.instagram.com/hopkinsbrewingco",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/iconfinder_instagram_373426.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://twitter.com/BrewingHopkins",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/iconfinder_twitter_373400.png"
      }))))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Main;
}(_react.Component);

var _default = Main;
exports["default"] = _default;