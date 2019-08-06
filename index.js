"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jdenticon = _interopRequireDefault(require("jdenticon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Jdenticon = function Jdenticon(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'test' : _ref$value,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '100%' : _ref$size;
  var icon = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    _jdenticon["default"].update(icon.current, value);
  }, [value]);
  return _react["default"].createElement("div", null, _react["default"].createElement("svg", {
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
var _default = Jdenticon;
exports["default"] = _default;
