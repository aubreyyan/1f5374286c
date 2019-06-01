webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Hit.js":
/*!***************************!*\
  !*** ./components/Hit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_FlightTakeoff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FlightTakeoff */ "./node_modules/@material-ui/icons/FlightTakeoff.js");
/* harmony import */ var _material_ui_icons_FlightTakeoff__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlightTakeoff__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_11__);












var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      background: 'linear-gradient(45deg, #4496DB 30%, #5df78e 90%)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      width: "100%",
      padding: '0 30px'
    },
    card: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(2)
    },
    pos: {
      marginBottom: 12
    }
  };
});

function NewButton(_ref) {
  var name = _ref.name,
      parkCode = _ref.parkCode;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    as: "/".concat(parkCode, "/details"),
    href: "/details?objectId=".concat(parkCode)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    id: "hitbox",
    href: "/details/".concat(parkCode)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "primary",
    className: classes.button,
    variant: "contained"
  }, "Learn more about ".concat(name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_FlightTakeoff__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.rightIcon
  }))));
}

var Hit =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hit, _React$Component);

  function Hit() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hit);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hit).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hit, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var hit = this.props.hit;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
        id: "paper",
        square: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        color: "textPrimary",
        variant: "h3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        className: "ais-Highlight-header",
        attribute: "fullName",
        hit: props.hit
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        className: "ais-Highlight-state",
        attribute: "states",
        hit: props.hit
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
        id: "paper",
        square: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        color: "textSecondary"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        className: "ais-Highlight-details",
        attribute: "description",
        hit: props.hit
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NewButton, {
        name: hit.fullName,
        parkCode: hit.parkCode
      })));
    }
  }]);

  return Hit;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hit);

/***/ }),

/***/ "./node_modules/@material-ui/icons/FlightTakeoff.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/FlightTakeoff.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("defs", null, _react.default.createElement("path", {
  id: "a",
  d: "M0 0h24v24H0V0z"
})), _react.default.createElement("path", {
  d: "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'FlightTakeoff');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Launch.js":
false

})
//# sourceMappingURL=index.js.e7edce481d80f3e778b0.hot-update.js.map