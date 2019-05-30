webpackHotUpdate("static\\development\\pages\\alerts.js",{

/***/ "./pages/alerts.js":
/*!*************************!*\
  !*** ./pages/alerts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResponsiveDrawer */ "./components/ResponsiveDrawer.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_NPS_Query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NPS_Query */ "./components/NPS_Query.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");











var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    grid: {// [theme.breakpoints.up('sm')]: {
      //     paddingLeft: theme.spacing(0),
      // },
      // [theme.breakpoints.up('lg')]: {
      //     paddingLeft: theme.spacing(30),
      // },
    }
  };
});

function CenteredGrid(_ref) {
  var alerts = _ref.alerts;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.toolbar
  }), ">", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, alerts.map(function (alertObj) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: true
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.paper
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "textPrimary",
      variant: "h3"
    }, alertObj.title)));
  })));
}

var Alerts = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: props.parks.data[0].fullName + " Alerts",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CenteredGrid, {
    alerts: props.alerts.data
  }));
});

Alerts.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var objectId, res, parks, res2, alerts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            objectId = context.query.objectId;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(Object(_components_NPS_Query__WEBPACK_IMPORTED_MODULE_8__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(Object(_components_NPS_Query__WEBPACK_IMPORTED_MODULE_8__["default"])("alerts", objectId));

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            alerts = _context.sent;
            console.log("Fetched ".concat(parks.data[0].fullName));
            return _context.abrupt("return", {
              parks: parks,
              alerts: alerts
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ })

})
//# sourceMappingURL=alerts.js.24f2c2ec820e569fa9e4.hot-update.js.map