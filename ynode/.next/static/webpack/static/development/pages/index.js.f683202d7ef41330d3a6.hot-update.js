webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/content/index.jsx":
/*!**************************************!*\
  !*** ./components/content/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_js_timeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/js/timeFilter */ "./common/js/timeFilter.js");
/* harmony import */ var _content_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.sass */ "./components/content/content.sass");
/* harmony import */ var _content_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_sass__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/kite/sub/react/ynode/components/content/index.jsx";






var Content = function Content(_ref) {
  var topic = _ref.topic;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      routeName = _useState2[0],
      setRouteName = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(topic);
    setRouteName(next_router__WEBPACK_IMPORTED_MODULE_3___default.a.router.query.name);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.navList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: routeName ? '' : _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.highLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u5168\u90E8"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/',
      query: {
        name: 'ask'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: routeName === 'ask' ? _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.highLight : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u95EE\u7B54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/',
      query: {
        name: 'share'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: routeName === 'share' ? _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.highLight : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u5206\u4EAB"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/',
      query: {
        name: 'job'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: routeName === 'job' ? _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.highLight : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u62DB\u8058"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/',
      query: {
        name: 'good'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: routeName === 'good' ? _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.highLight : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u7CBE\u534E"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.listContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, topic.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.id,
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.author.avatar_url,
      alt: item.author.loginname,
      width: "30",
      height: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.reading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "190/56870"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, item.good || item.top ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.top,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, item.top ? '置顶' : '精华') : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.share,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, item.tab === 'ask' ? '问答' : '分享'), item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _content_sass__WEBPACK_IMPORTED_MODULE_5___default.a.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, Object(_common_js_timeFilter__WEBPACK_IMPORTED_MODULE_4__["normalizationTime"])(item.last_reply_at)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ })

})
//# sourceMappingURL=index.js.f683202d7ef41330d3a6.hot-update.js.map