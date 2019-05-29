webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CustomButton.js":
/*!************************************!*\
  !*** ./components/CustomButton.js ***!
  \************************************/
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_icons_LocationSearchingOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LocationSearchingOutlined */ "./node_modules/@material-ui/icons/LocationSearchingOutlined.js");
/* harmony import */ var _material_ui_icons_LocationSearchingOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationSearchingOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SearchClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SearchClient */ "./components/SearchClient.js");













var index = _components_SearchClient__WEBPACK_IMPORTED_MODULE_12__["default"].initIndex("Parks");

var ButtonComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ButtonComponent, _React$Component);

  function ButtonComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ButtonComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: false,
      userlat: null,
      userlong: null,
      parkData: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showPosition", function (position) {
      _this.setState(function (state) {
        return {
          userlat: position.coords.latitude,
          userlong: position.coords.longitude
        };
      });

      _this.handleSubmit();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showError", function (err) {
      console.warn('error');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getLocation", function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_this.showPosition);
      } else {
        alert("Geolocation isn't supported by device hardware.");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "indexData", function () {
      var browser = index.browseAll("", {
        attributesToRetrieve: ['latLong', 'parkCode']
      });
      var hits = [];
      browser.on('result', function (content) {
        hits = hits.concat(content.hits);
        _this.state.parkData = hits;

        _this.handleSubmit();
      });
      browser.on('end', function () {
        console.log("".concat(hits.length, " total responses."));
      });
      browser.on('error', function (err) {
        throw err;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculateDistance", function (coords) {
      return coords.length > 1 ? Math.sqrt(Math.pow(coords[1] - _this.state.userlong, 2) + Math.pow(coords[0] - _this.state.userlat, 2)) : 360;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      _this.setState(function (state) {
        return {
          loading: true
        };
      });

      if (_this.state.userlat == null || _this.state.userlong == null) {
        _this.getLocation();

        return false;
      }

      console.log(_this.state.userlat);
      console.log(_this.state.userlong);

      if (_this.state.parkData == null) {
        _this.indexData();

        return false;
      }

      console.log(_this.state.parkData);
      var nearestPOI = {
        parkCode: null,
        lat: 180.0,
        long: 360.0,
        distance: 360.0
      };

      for (var i = 0; i < _this.state.parkData.length; i++) {
        var parkCoords = _this.state.parkData[i].latLong.replace(/[^\d.,-]/g, '').split(",").map(Number);

        var parkDistance = _this.calculateDistance(parkCoords);

        if (parkDistance < nearestPOI.distance) {
          nearestPOI.parkCode = _this.state.parkData[i].parkCode;
          nearestPOI.lat = parkCoords[0];
          nearestPOI.long = parkCoords[1];
          nearestPOI.distance = parkDistance;
        }
      }

      console.log(nearestPOI.parkCode);
      window.location.href = "/details?objectId=" + nearestPOI.parkCode;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonComponent, [{
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "secondary",
        variant: "contained",
        size: "large",
        onClick: this.handleSubmit,
        style: {
          width: "100%",
          fontSize: 30,
          color: "#FFFFFF"
        }
      }, "Find the nearest point of interest", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_LocationSearchingOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          paddingLeft: '10px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__["default"], {
        in: loading
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
    }
  }]);

  return ButtonComponent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ButtonComponent);

/***/ })

})
//# sourceMappingURL=index.js.ceef946381d38384922c.hot-update.js.map