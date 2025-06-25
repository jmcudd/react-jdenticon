"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jdenticon = _interopRequireDefault(require("jdenticon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var Jdenticon = function Jdenticon(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 'test' : _ref$value,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '100%' : _ref$size;
  var icon = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    _jdenticon["default"].update(icon.current, value);
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("svg", {
    "data-jdenticon-value": value,
    height: size,
    ref: icon,
    width: size
  }));
};
Jdenticon.propTypes = {
  size: _propTypes["default"].string,
  value: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = Jdenticon;
