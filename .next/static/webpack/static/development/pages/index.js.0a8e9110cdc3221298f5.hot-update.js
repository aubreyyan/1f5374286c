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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_9__);











var Hit =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hit, _React$Component);

  function Hit() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      latlong: "",
      code: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (ll, c) {
      _this.setState({
        latlong: ll,
        code: c
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hit, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        id: "hitbox",
        href: "/details",
        onClick: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: props.hit.image,
        align: "left",
        alt: props.hit.name
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hit-name"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__["Highlight"], {
        className: "ais-Highlight-header",
        attribute: "fullName",
        hit: props.hit
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__["Highlight"], {
        className: "ais-Highlight-state",
        attribute: "states",
        hit: props.hit
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hit-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__["Highlight"], {
        attribute: "description",
        hit: props.hit
      })));
    }
  }]);

  return Hit;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hit);

/***/ })

})
//# sourceMappingURL=index.js.0a8e9110cdc3221298f5.hot-update.js.map