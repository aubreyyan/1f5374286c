webpackHotUpdate("static\\development\\pages\\alerts.js",{

/***/ "./components/ResponsiveDrawer.js":
/*!****************************************!*\
  !*** ./components/ResponsiveDrawer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_SafetyCautionAlertsBlack30__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SafetyCautionAlertsBlack30 */ "./components/SafetyCautionAlertsBlack30.js");
/* harmony import */ var _components_CalendarEventsBlack30__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CalendarEventsBlack30 */ "./components/CalendarEventsBlack30.js");
/* harmony import */ var _components_InterpretiveExhibitBlack30__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InterpretiveExhibitBlack30 */ "./components/InterpretiveExhibitBlack30.js");
/* harmony import */ var _components_MapsBlack30__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MapsBlack30 */ "./components/MapsBlack30.js");
/* harmony import */ var _components_NewspaperBlack30__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NewspaperBlack30 */ "./components/NewspaperBlack30.js");
/* harmony import */ var _components_StatueBlack30__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/StatueBlack30 */ "./components/StatueBlack30.js");
/* harmony import */ var _components_VisitorCenterBlack30__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/VisitorCenterBlack30 */ "./components/VisitorCenterBlack30.js");
/* harmony import */ var _components_CampgroundBlack30__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CampgroundBlack30 */ "./components/CampgroundBlack30.js");
/* harmony import */ var _components_PostOfficeBlack30__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PostOfficeBlack30 */ "./components/PostOfficeBlack30.js");
/* harmony import */ var _components_DirectionsBlack30__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/DirectionsBlack30 */ "./components/DirectionsBlack30.js");
/* harmony import */ var _components_BrochureBlack30__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/BrochureBlack30 */ "./components/BrochureBlack30.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_19__);




















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginLeft: drawerWidth
    }, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)")
    }),
    menuButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    }
  };
});

function ResponsiveDrawer(props) {
  var container = props.container;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleSubmit() {
    setLoading(true);
  }

  var drawer = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "hitbox",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    button: true,
    onClick: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DirectionsBlack30__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primary: "Search Home"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "hitbox",
    href: "details?objectId=".concat(props.park)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    button: true,
    onClick: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BrochureBlack30__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primary: "Details"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, ['Alerts', 'Articles', 'Events', 'News Releases'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      as: "/".concat(props.park, "/").concat(text.toLowerCase().replace(" ", "-")),
      href: "/".concat(text.toLowerCase().replace(" ", ""), "?objectId=").concat(props.park)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      button: true,
      key: text,
      onClick: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SafetyCautionAlertsBlack30__WEBPACK_IMPORTED_MODULE_4__["default"], null) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewspaperBlack30__WEBPACK_IMPORTED_MODULE_8__["default"], null) : index === 2 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CalendarEventsBlack30__WEBPACK_IMPORTED_MODULE_5__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostOfficeBlack30__WEBPACK_IMPORTED_MODULE_12__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      primary: text
    })));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, ['Campgrounds', 'Visitor Centers'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      as: "/".concat(props.park, "/").concat(text.toLowerCase().replace(" ", "-")),
      href: "/".concat(text.toLowerCase().replace(" ", ""), "?objectId=").concat(props.park)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      button: true,
      key: text,
      onClick: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CampgroundBlack30__WEBPACK_IMPORTED_MODULE_11__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_VisitorCenterBlack30__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      primary: text
    })));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], null, ['Lesson Plans', 'People', 'Places'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
      as: "/".concat(props.park, "/").concat(text.toLowerCase().replace(" ", "-")),
      href: "/".concat(text.toLowerCase().replace(" ", ""), "?objectId=").concat(props.park)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      button: true,
      key: text,
      onClick: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_InterpretiveExhibitBlack30__WEBPACK_IMPORTED_MODULE_6__["default"], null) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_StatueBlack30__WEBPACK_IMPORTED_MODULE_9__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MapsBlack30__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      primary: text
    })));
  })));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
    position: "fixed",
    className: classes.appBar,
    style: {
      backgroundColor: "#0096db"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    color: "inherit",
    "aria-label": "Open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default.a, null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    noWrap: true
  }, props.name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Fade"], {
    in: loading
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["LinearProgress"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: classes.drawer
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smUp: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    container: container,
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true
    }
  }, drawer)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    xsDown: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawer))));
}

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveDrawer);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResponsiveDrawer */ "./components/ResponsiveDrawer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_NPS_Query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NPS_Query */ "./components/NPS_Query.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");










var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  var _grid;

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
    grid: (_grid = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('xs'), {
      paddingLeft: theme.spacing(0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(30)
    }), _grid),
    chip: {
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    }
  };
});

function CenteredGrid(_ref) {
  var alerts = _ref.alerts;
  var classes = useStyles(); // var states = [];
  // for(var i = 0; i < alerts.length; i++){
  //     const [open, setOpen] = React.useState(false);
  //     states.push([open, setOpen]);
  // }
  // const [scroll, setScroll] = React.useState('body');
  //
  // const handleClick = (scrollType, index) => () => {
  //     states[index][1](true);
  //     setScroll(scrollType);
  // };
  //
  // const handleClose = (index) => () => {
  //     states[index][1](false);
  // };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.toolbar
  }), ">", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, alerts.map(function (alertObj, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
      className: classes.paper
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Chip"], {
      label: alertObj.category,
      className: classes.chip,
      color: "secondary"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      color: "textPrimary",
      variant: "h4"
    }, alertObj.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      paragraph: true
    }, alertObj.description), alertObj.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      href: alertObj.url,
      color: "primary"
    }, "More Information") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null)));
  }), alerts.length === 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Chip"], {
    label: "No Alerts Reported",
    className: classes.chip,
    style: {
      backgroundColor: "#29c609"
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    color: "textPrimary",
    variant: "h4"
  }, "No Alerts Reported"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null)));
}

var Alerts = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: props.parks.data[0].fullName + " Alerts",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenteredGrid, {
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(Object(_components_NPS_Query__WEBPACK_IMPORTED_MODULE_7__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(Object(_components_NPS_Query__WEBPACK_IMPORTED_MODULE_7__["default"])("alerts", objectId));

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
//# sourceMappingURL=alerts.js.be8283fb46456d368eb7.hot-update.js.map