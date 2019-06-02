webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppBar */ "./components/AppBar.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _components_InfiniteHits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/InfiniteHits */ "./components/InfiniteHits.js");
/* harmony import */ var _components_Hit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Hit */ "./components/Hit.js");
/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CustomButton */ "./components/CustomButton.js");
/* harmony import */ var _components_api_SearchClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/api/SearchClient */ "./components/api/SearchClient.js");















var proxyClient = {
  search: function search(requests) {
    if (requests.every(function (_ref) {
      var params = _ref.params;
      return !params.query;
    })) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve({
        results: requests.map(function () {
          return {
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0
          };
        })
      });
    }

    return _components_api_SearchClient__WEBPACK_IMPORTED_MODULE_14__["default"].search(requests);
  }
};
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#0096db"
    },
    secondary: {
      main: "#29c609"
    }
  },
  typography: {
    fontFamily: ['Avenir', 'Arial'].join(',')
  }
});

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_10__["InstantSearch"], {
        indexName: "Parks",
        searchClient: proxyClient
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_InfiniteHits__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hitComponent: _components_Hit__WEBPACK_IMPORTED_MODULE_12__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_CustomButton__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f9b5787c38e58b2bd2b7.hot-update.js.map