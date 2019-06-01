webpackHotUpdate("static\\development\\pages\\details.js",{

/***/ "./pages/details.js":
/*!**************************!*\
  !*** ./pages/details.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResponsiveDrawer */ "./components/ResponsiveDrawer.js");
/* harmony import */ var _components_NPS_Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NPS_Query */ "./components/NPS_Query.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);









var GOOGLE_API_KEY = "AIzaSyBQa3TN8TY501aB2H3Tr_m2ptPVNF-EqOM";
var drawerWidth = 240;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  var _grid;

  return {
    root: {
      flexGrow: 1,
      width: "100%"
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
    leftcolumn: {
      flexBasis: "40%",
      position: "relative"
    },
    rightcolumn: {
      flexBasis: "57.5%"
    },
    grid: (_grid = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('xs'), {
      paddingLeft: theme.spacing(0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(30)
    }), _grid),
    chip: {
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1),
      float: 'left'
    },
    image: {
      width: "100%",
      position: "relative",
      objectFit: 'cover'
    },
    p: {
      width: "100%"
    }
  };
});

function CenteredGrid(_ref) {
  var park = _ref.park;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    color: "textPrimary",
    variant: "h2",
    style: {
      fontWeight: 'bold'
    }
  }, "Welcome to " + park.fullName + ", " + park.states + " ", park.designation.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Chip"], {
    label: park.designation,
    className: classes.chip,
    color: "primary"
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.leftcolumn
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      flexBasis: "2.5%"
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.rightcolumn
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: classes.image,
    src: "https://maps.googleapis.com/maps/api/staticmap?center=".concat(park.latLong.length > 0 ? park.latLong.replace(/[^\d.,-]/g, '') : park.fullName.replace(/\s/g, '', "") + "," + park.fullName.replace(/\s/g, '', "") + "," + park.states, "&zoom=12&size=1300x550&scale=2&maptype=terrain&key=").concat(GOOGLE_API_KEY)
  }))));
}

var Details = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: props.parks.data[0].fullName + " Details",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenteredGrid, {
    park: props.parks.data[0]
  }));
});

Details.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var objectId, res, parks;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            objectId = context.query.objectId;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(Object(_components_NPS_Query__WEBPACK_IMPORTED_MODULE_6__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            console.log("Fetched ".concat(parks.data[0].fullName));
            return _context.abrupt("return", {
              parks: parks
            });

          case 9:
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

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=details.js.497570bbfa4d79188042.hot-update.js.map