"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cryptr = _interopRequireDefault(require("cryptr"));

var _config = _interopRequireDefault(require("./config"));

var _path = _interopRequireDefault(require("path"));

var _passport2 = _interopRequireDefault(require("./config/passport"));

var _userCtrl = _interopRequireDefault(require("./controllers/userCtrl"));

var _menuCtrl = _interopRequireDefault(require("./controllers/menuCtrl"));

var _eventCtrl = _interopRequireDefault(require("./controllers/eventCtrl"));

var _promotionCtrl = _interopRequireDefault(require("./controllers/promotionCtrl"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cryptr = new _cryptr["default"](_config["default"].key);
var PORT = process.env.PORT || 3003;
(0, _passport2["default"])(_passport["default"]);
var app = (0, _express["default"])();
app.use((0, _expressSession["default"])({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    mainBundle = "",
    cmslistBundle = "",
    cmscontentBundle = "";

_fs["default"].readFile('./dist/js/main.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  mainBundle = data || "";
});

_fs["default"].readFile('./dist/js/cmslist.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  cmslistBundle = data || "";
});

_fs["default"].readFile('./dist/js/cmscontent.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  cmscontentBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, mainBundle, _roots.MainRoot, "main"));
});
app.get('/cmslist', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cmslistBundle, _roots.CmslistRoot, "cmslist"));
});
app.get('/cmscontent', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cmscontentBundle, _roots.CmscontentRoot, "cmscontent"));
});
;
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/auth', _passport["default"].authenticate('local-signup'), _userCtrl["default"].login);
app.get('/getMe', _userCtrl["default"].getMe);
app.get('/logout', _userCtrl["default"].logout);
app.get('/users', _userCtrl["default"].read);
app.put('/users/:id', _userCtrl["default"].update);
app.get('/menus', _menuCtrl["default"].read);
app.get('/menus/:id', _menuCtrl["default"].readOne);
app.post('/menus', _menuCtrl["default"].create);
app.put('/menus/:id', _menuCtrl["default"].update);
app["delete"]('/menus/:id', _menuCtrl["default"].destroy);
app.get('/events', _eventCtrl["default"].read);
app.get('/events/:id', _eventCtrl["default"].readOne);
app.post('/events', _eventCtrl["default"].create);
app.put('/events/:id', _eventCtrl["default"].update);
app["delete"]('/events/:id', _eventCtrl["default"].destroy);
app.get('/promotions', _promotionCtrl["default"].read);
app.get('/promotions/:id', _promotionCtrl["default"].readOne);
app.post('/promotions', _promotionCtrl["default"].create);
app.put('/promotions/:id', _promotionCtrl["default"].update);
app["delete"]('/promotions/:id', _promotionCtrl["default"].destroy);
app.get('/health', function (req, res) {
  return res.send('OK');
}); //var mongoUri = 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@hopkinsbrewery.bjixf.mongodb.net/hopkinsbrewery?retryWrites=true&w=majority';
//mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connection.on('error', console.error.bind(console, 'connection error'));
//mongoose.connection.once('open', function(){
//  console.log("Connected to mongoDB");
//});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link href=\"https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap\" rel=\"stylesheet\">\n                <style>\n\n                  body { margin: 0; font-family: 'Antic Slab', serif; letter-spacing: 1.2; }\n                  a, button { text-decoration: none; color: #000; font-family: 'Antic Slab', serif; letter-spacing: 1.2; }\n                </style>\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}