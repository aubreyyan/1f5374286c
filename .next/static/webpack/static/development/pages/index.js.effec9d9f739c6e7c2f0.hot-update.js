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
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! algoliasearch */ "./node_modules/algoliasearch/src/browser/builds/algoliasearch.js");
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(algoliasearch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Hit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hit */ "./components/Hit.js");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppBar */ "./components/AppBar.js");
/* harmony import */ var _components_AppSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AppSearch */ "./components/AppSearch.js");














var searchClient = algoliasearch__WEBPACK_IMPORTED_MODULE_10___default()('CNVK9PPZLI', '1e7524644d5732b65372e85998c98132');
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

    return searchClient.search(requests);
  }
};

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ais-InstantSearch"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__["InstantSearch"], {
        indexName: "Parks",
        searchClient: proxyClient
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "right-panel"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__["InfiniteHits"], {
        hitComponent: _components_Hit__WEBPACK_IMPORTED_MODULE_11__["default"]
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

_components_Hit__WEBPACK_IMPORTED_MODULE_11__["default"].propTypes = {
  hit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.effec9d9f739c6e7c2f0.hot-update.js.map