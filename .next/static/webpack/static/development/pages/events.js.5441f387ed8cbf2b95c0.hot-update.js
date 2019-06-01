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
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Call */ "./node_modules/@material-ui/icons/Call.js");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FlipToFront */ "./node_modules/@material-ui/icons/FlipToFront.js");
/* harmony import */ var _material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FlipToBack */ "./node_modules/@material-ui/icons/FlipToBack.js");
/* harmony import */ var _material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_7__);








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
    }, "Contact Information", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FlipToFront__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }, "Call", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.rightIcon
    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), props.email != null && props.email.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      href: "mailto:" + props.email,
      className: classes.button
    }, "Email", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.rightIcon
    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: handleClose,
      color: "primary",
      className: classes.button
    }, "Close", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FlipToBack__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.rightIcon
    })))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ContactDialog);

/***/ }),

/***/ "./node_modules/@material-ui/icons/Create.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Create.js ***!
  \***************************************************/
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Create');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=events.js.5441f387ed8cbf2b95c0.hot-update.js.map