webpackHotUpdate("static\\development\\pages\\details.js",{

/***/ "./components/ListItemLink.js":
/*!************************************!*\
  !*** ./components/ListItemLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function ListItemLink(props) {
  var newPage = props.href.toLowerCase().replace(" ", "-");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/".concat(props.park, "/").concat(newPage),
    href: "/".concat(newPage, "?objectId=").concat(props.park)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ListItemLink);

/***/ }),

/***/ "./pages/details.js":
/*!**************************!*\
  !*** ./pages/details.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _components_ListItemLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ListItemLink */ "./components/ListItemLink.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _components_SafetyCautionAlertsBlack30__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/SafetyCautionAlertsBlack30 */ "./components/SafetyCautionAlertsBlack30.js");
/* harmony import */ var _components_CalendarEventsBlack30__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/CalendarEventsBlack30 */ "./components/CalendarEventsBlack30.js");
/* harmony import */ var _components_InterpretiveExhibitBlack30__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/InterpretiveExhibitBlack30 */ "./components/InterpretiveExhibitBlack30.js");
/* harmony import */ var _components_MapsBlack30__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/MapsBlack30 */ "./components/MapsBlack30.js");
/* harmony import */ var _components_NewspaperBlack30__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/NewspaperBlack30 */ "./components/NewspaperBlack30.js");
/* harmony import */ var _components_StatueBlack30__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/StatueBlack30 */ "./components/StatueBlack30.js");
/* harmony import */ var _components_VisitorCenterBlack30__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/VisitorCenterBlack30 */ "./components/VisitorCenterBlack30.js");
/* harmony import */ var _components_CampgroundBlack30__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/CampgroundBlack30 */ "./components/CampgroundBlack30.js");
/* harmony import */ var _components_PostOfficeBlack30__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/PostOfficeBlack30 */ "./components/PostOfficeBlack30.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_30__);































var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_29__["makeStyles"])(function (theme) {
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
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  };
});

function ResponsiveDrawer(props) {
  var container = props.container;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_29__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  var drawer = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], null, ['Alerts', 'Articles', 'Events', 'News Releases'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListItemLink__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
      button: true,
      key: text
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_26__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SafetyCautionAlertsBlack30__WEBPACK_IMPORTED_MODULE_17__["default"], null) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewspaperBlack30__WEBPACK_IMPORTED_MODULE_21__["default"], null) : index === 2 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CalendarEventsBlack30__WEBPACK_IMPORTED_MODULE_18__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostOfficeBlack30__WEBPACK_IMPORTED_MODULE_25__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      primary: text
    })));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], null, ['Campgrounds', 'Visitor Centers'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
      button: true,
      key: text
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_26__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CampgroundBlack30__WEBPACK_IMPORTED_MODULE_24__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_VisitorCenterBlack30__WEBPACK_IMPORTED_MODULE_23__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      primary: text
    }));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], null, ['Lesson Plans', 'People', 'Places'].map(function (text, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
      button: true,
      key: text
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_26__["default"], null, index === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_InterpretiveExhibitBlack30__WEBPACK_IMPORTED_MODULE_19__["default"], null) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_StatueBlack30__WEBPACK_IMPORTED_MODULE_22__["default"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MapsBlack30__WEBPACK_IMPORTED_MODULE_20__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      primary: text
    }));
  })));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "fixed",
    className: classes.appBar,
    style: {
      backgroundColor: "#0096db"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "inherit",
    "aria-label": "Open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27___default.a, null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    noWrap: true
  }, props.name))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: classes.drawer
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_14__["default"], {
    smUp: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, drawer)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xsDown: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawer))));
}

var Details = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResponsiveDrawer, {
    name: "placeholder text",
    park: props.router.query.objectId
  });
}); // Details.getInitialProps = async function() {
//     const res = await fetch()
// };

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=details.js.f319e718cfdb963ed0f8.hot-update.js.map