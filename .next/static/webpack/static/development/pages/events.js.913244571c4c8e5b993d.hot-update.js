webpackHotUpdate("static\\development\\pages\\events.js",{

/***/ "./components/ContactDialog.js":
/*!*************************************!*\
  !*** ./components/ContactDialog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Launch */ "./node_modules/@material-ui/icons/Launch.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FlipToFront */ "./node_modules/@material-ui/icons/FlipToFront.js");
/* harmony import */ var _material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FlipToBack */ "./node_modules/@material-ui/icons/FlipToBack.js");
/* harmony import */ var _material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_6__);







var drawerWidth = 240;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
    column: {
      flexBasis: "50%"
    },
    grid: (_grid = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_grid, theme.breakpoints.up('xs'), {
      paddingLeft: theme.spacing(0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_grid, theme.breakpoints.up('sm'), {
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
      position: "relative"
    },
    p: {
      width: "100%"
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  };
});

function ContactDialog(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("body"),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      scroll = _React$useState4[0],
      setScroll = _React$useState4[1];

  var handleClick = function handleClick(scrollType) {
    return function () {
      setOpen(true);
      setScroll(scrollType);
    };
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  if ((props.name + props.phone + props.email).length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: handleClick('body'),
      variant: "outlined",
      className: classes.button,
      color: "inherit"
    }, "Contact Information", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.rightIcon
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
      open: open,
      onClose: handleClose,
      scroll: scroll
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], null, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
      dividers: false
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], null, props.name != null && props.name.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h4"
    }, props.name) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), props.name != null && props.name.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), props.phone != null && props.phone.length > 0 ? "Phone Number: " + props.phone : "", props.phone != null && props.phone.length > 0 && props.email != null && props.email.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), props.email != null && props.email.length > 0 ? "Email: " + props.email : "")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], null, props.phone != null && props.phone.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      href: "tel:" + props.phone.replace(/-/g, ""),
      className: classes.button
    }, "Call") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), props.email != null && props.email.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      href: "mailto:" + props.email,
      className: classes.button
    }, "Email") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: handleClose,
      color: "primary",
      className: classes.button
    }, "Close", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.rightIcon
    })))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ContactDialog);

/***/ }),

/***/ "./node_modules/@material-ui/icons/FlipToBack.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/FlipToBack.js ***!
  \*******************************************************/
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

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"
})), 'FlipToBack');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FlipToFront.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/FlipToFront.js ***!
  \********************************************************/
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

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"
})), 'FlipToFront');

exports.default = _default;

/***/ }),

/***/ "./pages/events.js":
/*!*************************!*\
  !*** ./pages/events.js ***!
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
/* harmony import */ var _components_ContactDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContactDialog */ "./components/ContactDialog.js");
/* harmony import */ var _components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/api/NPS_Query */ "./components/api/NPS_Query.js");
/* harmony import */ var _components_utils_getTimeRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/getTimeRange */ "./components/utils/getTimeRange.js");
/* harmony import */ var _components_utils_getDateRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils/getDateRange */ "./components/utils/getDateRange.js");
/* harmony import */ var _components_utils_getTimeZone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils/getTimeZone */ "./components/utils/getTimeZone.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_14__);















var drawerWidth = 240;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
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
    singlecolumn: {
      flexBasis: "100%",
      position: "relative"
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
  var state = _ref.state,
      events = _ref.events;
  var classes = useStyles();

  function sanitized(string) {
    return string.replace(/(&nbsp;|<([^>]+)>)/ig, "");
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, events.map(function (eventObj) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
      item: true,
      xs: 12,
      md: 6,
      lg: 6
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Paper"], {
      className: classes.p
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ExpansionPanel"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ExpansionPanelSummary"], {
      expandIcon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, null),
      "aria-controls": "panel1c-content",
      id: "panel1c-header"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      color: "textPrimary",
      variant: "h3",
      style: {
        fontWeight: 'bold'
      }
    }, eventObj.title + " ", eventObj.category.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
      label: eventObj.category,
      className: classes.chip,
      style: {
        backgroundColor: "#29c609"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), eventObj.types.map(function (type) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
        label: type,
        className: classes.chip,
        style: {
          backgroundColor: "#29c609"
        }
      });
    }), eventObj.organizationname.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
      label: eventObj.organizationname,
      className: classes.chip,
      style: {
        backgroundColor: "#86fdff"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), eventObj.isfree.length > 0 && !eventObj.isfree.toLowerCase().includes("false") ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
      label: "Free",
      className: classes.chip,
      style: {
        backgroundColor: "#29c609"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), eventObj.isregresrequired.length > 0 && !eventObj.isregresrequired.toLowerCase().includes("false") ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
      label: "Registration Required",
      className: classes.chip,
      style: {
        backgroundColor: "#29c609"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), eventObj.isrecurring.length > 0 && !eventObj.isrecurring.toLowerCase().includes("false") ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
      label: "Recurring",
      className: classes.chip,
      style: {
        backgroundColor: "#ffc570"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), eventObj.tags.map(function (tag) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Chip"], {
        label: tag,
        className: classes.chip,
        style: {
          backgroundColor: "#ffc570"
        }
      });
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ExpansionPanelDetails"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        width: "100%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "events-left"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h3",
      color: "textPrimary",
      style: {
        fontWeight: 'bold'
      }
    }, "When"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      color: "textSecondary",
      style: {
        fontWeight: 'bold'
      }
    }, eventObj.date.length > 0 ? Object(_components_utils_getDateRange__WEBPACK_IMPORTED_MODULE_9__["default"])(eventObj.date, eventObj.dateend) : ""), eventObj.times.map(function (timeRange) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
        variant: "h5",
        color: "textSecondary",
        style: {
          fontWeight: 'bold'
        }
      }, timeRange.timestart.length > 0 || timeRange.timeend.length > 0 ? Object(_components_utils_getTimeRange__WEBPACK_IMPORTED_MODULE_8__["default"])(timeRange.timestart, timeRange.timeend) + " " + Object(_components_utils_getTimeZone__WEBPACK_IMPORTED_MODULE_10__["default"])(state) : "");
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "events-right"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h3",
      color: "textPrimary",
      style: {
        fontWeight: 'bold'
      }
    }, "Where"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      variant: "h5",
      color: "textSecondary",
      style: {
        fontWeight: 'bold'
      }
    }, eventObj.location)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      smUp: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.singlecolumn
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      paragraph: true
    }, sanitized(eventObj.description))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      xsDown: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.singlecolumn
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
      paragraph: true
    }, sanitized(eventObj.description)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ContactDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: eventObj.contactname,
      phone: eventObj.contacttelephonenumber,
      email: eventObj.contactemailaddress
    })))));
  })));
}

var Events = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: props.parks.data[0].fullName + " Events",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenteredGrid, {
    events: props.events.data,
    state: props.parks.data[0].states
  }));
});

Events.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var objectId, res, parks, res2, events;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            objectId = context.query.objectId;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_7__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_7__["default"])("events", objectId));

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            events = _context.sent;
            console.log("Fetched ".concat(parks.data[0].fullName));
            return _context.abrupt("return", {
              parks: parks,
              events: events
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

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=events.js.913244571c4c8e5b993d.hot-update.js.map