"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePicker = exports.TimePicker = exports.DatePicker = void 0;

var _react = require("react");

var _reactFunctionalForms = require("react-functional-forms");

var pickers = _interopRequireWildcard(require("@material-ui/pickers"));

var _dayjs = _interopRequireDefault(require("@date-io/dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var wrapPicker = function wrapPicker(component) {
  return (0, _reactFunctionalForms.wrapInput)(function (props) {
    return (0, _react.createElement)(pickers.MuiPickersUtilsProvider, {
      utils: _dayjs["default"],
      children: (0, _react.createElement)(component, props)
    });
  }, {
    valueFromEvent: function valueFromEvent(value) {
      return value;
    },
    defaultValue: new Date()
  });
};

var DatePicker = wrapPicker(pickers.DatePicker);
exports.DatePicker = DatePicker;
var TimePicker = wrapPicker(pickers.TimePicker);
exports.TimePicker = TimePicker;
var DateTimePicker = wrapPicker(pickers.DateTimePicker);
exports.DateTimePicker = DateTimePicker;
