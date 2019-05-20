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
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_7__);









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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        id: "hitbox",
        href: "/details",
        onClick: console.log('hi')
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: props.hit.image,
        align: "left",
        alt: props.hit.name
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hit-name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        className: "ais-Highlight-header",
        attribute: "fullName",
        hit: props.hit
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        className: "ais-Highlight-state",
        attribute: "states",
        hit: props.hit
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hit-description"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__["Highlight"], {
        attribute: "description",
        hit: props.hit
      })));
    }
  }]);

  return Hit;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hit);

/***/ })

})
//# sourceMappingURL=index.js.4c17cb67f2cacc4224cf.hot-update.js.map